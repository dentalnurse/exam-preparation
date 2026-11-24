(function () {
  var scenarios = window.DNT_SCENARIOS || [];
  var STORE = "dnt-pd-progress";

  function load(key, fallback) {
    try { var v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; } catch (e) { return fallback; }
  }
  function save(key, val) {
    try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) { /* storage unavailable */ }
  }
  function $(id) { return document.getElementById(id); }
  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  var progress = load(STORE, {});
  // Timings are fixed: 10 minutes reading (to match NEBDN), 10 minutes to answer each scenario.
  var prefs = { read: 10, answer: 10 };

  // ---------- list ----------
  var groups = ["All"].concat(scenarios.map(function (s) { return s.group; })
    .filter(function (g, i, a) { return a.indexOf(g) === i; }));
  var activeGroup = "All";

  function renderFilters() {
    var f = $("filters"); f.innerHTML = "";
    groups.forEach(function (g) {
      var b = el("button", null, g);
      b.type = "button";
      b.setAttribute("aria-pressed", String(g === activeGroup));
      b.onclick = function () { activeGroup = g; renderFilters(); renderCards(); };
      f.appendChild(b);
    });
  }

  function renderProgress() {
    var done = scenarios.filter(function (s) { return progress[s.id]; }).length;
    $("progress").textContent = "You have practised " + done + " of " + scenarios.length + " scenarios on this device.";
  }

  function renderCards() {
    var c = $("cards"); c.innerHTML = "";
    scenarios.filter(function (s) { return activeGroup === "All" || s.group === activeGroup; })
      .forEach(function (s) {
        var card = el("article", "card scenario" + (s.group.indexOf("Unit 7") === 0 ? " group-u7" : ""));
        var tags = el("div", "tags");
        s.acs.forEach(function (a) { tags.appendChild(el("span", "tag", a)); });
        var p = progress[s.id];
        if (p) tags.appendChild(el("span", "tag done", "Best " + p.best + "/" + p.total));
        card.appendChild(tags);
        card.appendChild(el("h3", null, s.title));
        card.appendChild(el("p", null, s.group));
        var b = el("button", "btn small", p ? "Practise again" : "Start");
        b.type = "button";
        b.onclick = function () { start(s); };
        card.appendChild(b);
        c.appendChild(card);
      });
    renderProgress();
  }

  // ---------- runner ----------
  var current = null, phase = null, remaining = 0, ticker = null, paused = false;

  function fmt(sec) {
    var neg = sec < 0; sec = Math.abs(sec);
    var m = Math.floor(sec / 60), s = sec % 60;
    return (neg ? "+" : "") + m + ":" + (s < 10 ? "0" : "") + s;
  }
  function tick() {
    if (paused) return;
    remaining -= 1;
    $("r-timer").textContent = fmt(Math.max(remaining, 0));
    $("r-timer").classList.toggle("low", remaining <= 60);
    if (remaining <= 0) {
      if (phase === "read") beginAnswer();
      else if (phase === "answer") { stopTimer(); $("r-phase").textContent = "Time is up"; }
    }
  }
  function stopTimer() { if (ticker) clearInterval(ticker); ticker = null; }
  function runTimer(mins) {
    stopTimer(); paused = false; $("r-pause").textContent = "Pause";
    remaining = Math.round(mins * 60);
    $("r-timer").textContent = fmt(remaining);
    $("r-timer").classList.remove("low");
    ticker = setInterval(tick, 1000);
  }

  function show(id, on) { $(id).hidden = !on; }

  function start(s) {
    current = s;
    $("list").hidden = true;
    show("runner", true);
    $("r-title").textContent = s.title;
    var t = $("r-tags"); t.innerHTML = "";
    s.acs.forEach(function (a) { t.appendChild(el("span", "tag", a)); });
    $("r-prompt").textContent = s.prompt;
    show("phase-timer", true); show("phase-followups", false); show("phase-check", false);
    if (prefs.read > 0) {
      phase = "read";
      $("r-phase").textContent = "Reading time";
      $("r-hint").textContent = "Read the scenario and make notes. Press Start answering when you are ready.";
      $("r-next").textContent = "Start answering";
      runTimer(prefs.read);
    } else {
      beginAnswer();
    }
    window.scrollTo(0, 0);
  }

  function beginAnswer() {
    phase = "answer";
    $("r-phase").textContent = "Answer time";
    $("r-hint").textContent = "Answer out loud: what do you notice, what would you do, who would you involve, and why?";
    $("r-next").textContent = "Show follow-up questions";
    runTimer(prefs.answer);
  }

  $("r-next").onclick = function () {
    if (phase === "read") return beginAnswer();
    show("phase-followups", true);
    var ol = $("r-followups"); ol.innerHTML = "";
    current.followups.forEach(function (q) { ol.appendChild(el("li", null, q)); });
    $("r-next").hidden = true;
    $("phase-followups").scrollIntoView({ behavior: "smooth" });
  };

  $("r-pause").onclick = function () {
    if (!ticker) return;
    paused = !paused;
    this.textContent = paused ? "Resume" : "Pause";
  };

  $("r-tocheck").onclick = function () {
    stopTimer();
    show("phase-timer", false); show("phase-followups", false); show("phase-check", true);
    var box = $("r-checklist"); box.innerHTML = "";
    current.checklist.forEach(function (item, i) {
      var lab = el("label");
      var cb = el("input"); cb.type = "checkbox"; cb.id = "c" + i;
      cb.onchange = updateResult;
      lab.appendChild(cb);
      lab.appendChild(el("span", null, item));
      box.appendChild(lab);
    });
    updateResult();
    $("r-save").disabled = false; $("r-save").textContent = "Save my score";
  };

  function score() {
    return Array.prototype.filter.call($("r-checklist").querySelectorAll("input"), function (c) { return c.checked; }).length;
  }
  function updateResult() {
    var n = score(), total = current.checklist.length, pct = n / total;
    var msg = n + " of " + total + " points covered. ";
    if (pct >= 0.85) msg += "Brilliant, you are well prepared for this one.";
    else if (pct >= 0.6) msg += "Good effort. Go back over the points you missed and try again.";
    else msg += "Keep going. Revise the points you missed, then run this scenario again.";
    $("r-result").textContent = msg;
    $("r-meter").style.width = Math.round(pct * 100) + "%";
  }

  $("r-save").onclick = function () {
    var n = score(), total = current.checklist.length;
    var prev = progress[current.id];
    progress[current.id] = { best: Math.max(n, prev ? prev.best : 0), total: total, last: n, date: new Date().toISOString().slice(0, 10) };
    save(STORE, progress);
    this.textContent = "Saved";
    this.disabled = true;
  };
  $("r-again").onclick = function () { start(current); };
  $("back").onclick = function () {
    stopTimer();
    show("runner", false);
    $("list").hidden = false;
    $("r-next").hidden = false;
    renderCards();
  };

  renderFilters();
  renderCards();
})();
