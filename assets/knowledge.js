(function () {
  var Q = (window.DNT_QUESTIONS || []).map(function (r, i) {
    return { id: i, unit: r[0], q: r[1], opts: r[2], ans: r[3], expl: r[4] };
  });
  var UNITS = window.DNT_UNITS || {};
  var STORE = "dnt-kt-progress";
  function $(id) { return document.getElementById(id); }
  function el(tag, cls, text) { var n = document.createElement(tag); if (cls) n.className = cls; if (text != null) n.textContent = text; return n; }
  function load() { try { return JSON.parse(localStorage.getItem(STORE)) || {}; } catch (e) { return {}; } }
  function save(v) { try { localStorage.setItem(STORE, JSON.stringify(v)); } catch (e) {} }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }

  var sel = $("kt-unit");
  sel.appendChild(new Option("All units (" + Q.length + " questions)", "all"));
  Object.keys(UNITS).forEach(function (u) {
    var n = Q.filter(function (q) { return String(q.unit) === u; }).length;
    if (n) sel.appendChild(new Option(UNITS[u] + " (" + n + ")", u));
  });
  $("kt-count").max = Q.length;
  if (Number($("kt-count").value) > Q.length) $("kt-count").value = Q.length;

  function showProgress() {
    var p = load();
    $("kt-progress").textContent = p.mockBest != null
      ? "Your best mock exam score on this device: " + p.mockBest + "%."
      : "Your scores are saved on this device only.";
  }

  var mode, items, pos, ticker, remaining;

  function begin(m, list) {
    mode = m;
    // shuffle option order so the right answer isn't always in the same place
    items = list.map(function (q) {
      var order = shuffle(q.opts.map(function (_, i) { return i; }));
      return { q: q, order: order, chosen: null };
    });
    pos = 0;
    $("kt-start").hidden = true; $("kt-results").hidden = true; $("kt-run").hidden = false;
    clearInterval(ticker);
    if (mode === "mock") {
      remaining = Math.max(1, Number($("kt-mins").value) || 90) * 60;
      $("kt-timer").hidden = false; tickShow();
      ticker = setInterval(function () { remaining--; tickShow(); if (remaining <= 0) finish(); }, 1000);
    } else {
      $("kt-timer").hidden = true;
    }
    render();
    window.scrollTo(0, 0);
  }
  function tickShow() {
    var m = Math.floor(Math.max(remaining, 0) / 60), s = Math.max(remaining, 0) % 60;
    $("kt-timer").textContent = m + ":" + (s < 10 ? "0" : "") + s;
    $("kt-timer").classList.toggle("low", remaining <= 300);
  }

  function render() {
    var it = items[pos], q = it.q;
    $("kt-count-label").textContent = "Question " + (pos + 1) + " of " + items.length;
    $("kt-unit-label").textContent = UNITS[q.unit] || ("Unit " + q.unit);
    $("kt-q").textContent = q.q;
    var box = $("kt-options"); box.innerHTML = "";
    var answered = it.chosen !== null;
    it.order.forEach(function (oi, k) {
      var b = el("button", null, String.fromCharCode(65 + k) + ".  " + q.opts[oi]);
      b.type = "button";
      if (mode === "practice" && answered) {
        if (oi === q.ans) b.classList.add("right");
        else if (oi === it.chosen) b.classList.add("wrong");
        b.disabled = true;
      } else if (oi === it.chosen) b.classList.add("chosen");
      b.onclick = function () { it.chosen = oi; render(); };
      box.appendChild(b);
    });
    var ex = $("kt-expl");
    if (mode === "practice" && answered) {
      ex.hidden = false;
      ex.textContent = (it.chosen === q.ans ? "Correct. " : "Not quite. ") + q.expl;
    } else ex.hidden = true;
    $("kt-prev").disabled = pos === 0;
    $("kt-next").textContent = pos === items.length - 1 ? "See results" : "Next";
  }

  $("kt-prev").onclick = function () { if (pos > 0) { pos--; render(); } };
  $("kt-next").onclick = function () {
    if (pos < items.length - 1) { pos++; render(); return; }
    var unanswered = items.filter(function (i) { return i.chosen === null; }).length;
    if (unanswered && mode === "mock") {
      $("kt-next").textContent = unanswered + " unanswered. Click again to finish";
      if (!this.dataset.confirm) { this.dataset.confirm = "1"; return; }
    }
    finish();
  };
  $("kt-quit").onclick = finish;

  function finish() {
    clearInterval(ticker);
    $("kt-next").dataset.confirm = "";
    var right = items.filter(function (i) { return i.chosen === i.q.ans; }).length;
    var pct = items.length ? Math.round(100 * right / items.length) : 0;
    $("kt-run").hidden = true; $("kt-results").hidden = false;
    $("kt-score").textContent = "You scored " + right + " out of " + items.length + " (" + pct + "%).";
    if (mode === "mock") { var p = load(); p.mockBest = Math.max(p.mockBest || 0, pct); save(p); }

    var by = {}; items.forEach(function (i) {
      var u = i.q.unit; by[u] = by[u] || [0, 0]; by[u][1]++; if (i.chosen === i.q.ans) by[u][0]++;
    });
    var bu = $("kt-byunit"); bu.innerHTML = "";
    var t = el("table", "simple");
    Object.keys(by).sort(function (a, b) { return a - b; }).forEach(function (u) {
      var tr = el("tr"); tr.appendChild(el("th", null, UNITS[u] || "Unit " + u));
      tr.appendChild(el("td", null, by[u][0] + " / " + by[u][1])); t.appendChild(tr);
    });
    bu.appendChild(t);

    var rv = $("kt-review"); rv.innerHTML = "";
    items.forEach(function (i, n) {
      var d = el("div", "review-item");
      d.appendChild(el("p", null, (n + 1) + ". " + i.q.q));
      var ok = i.chosen === i.q.ans;
      var line = el("p");
      line.appendChild(el("span", ok ? "ok" : "no", ok ? "Correct. " : (i.chosen === null ? "Not answered. " : "You chose: " + i.q.opts[i.chosen] + ". ")));
      if (!ok) line.appendChild(document.createTextNode("Answer: " + i.q.opts[i.q.ans] + ". "));
      line.appendChild(document.createTextNode(i.q.expl));
      d.appendChild(line);
      rv.appendChild(d);
    });
    showProgress();
    window.scrollTo(0, 0);
  }

  $("kt-practice").onclick = function () {
    var u = sel.value;
    begin("practice", shuffle(Q.filter(function (q) { return u === "all" || String(q.unit) === u; })));
  };
  $("kt-mock").onclick = function () {
    var n = Math.min(Q.length, Math.max(5, Number($("kt-count").value) || 65));
    begin("mock", shuffle(Q).slice(0, n));
  };
  $("kt-again").onclick = function () { $("kt-results").hidden = true; $("kt-start").hidden = false; showProgress(); };

  showProgress();
})();
