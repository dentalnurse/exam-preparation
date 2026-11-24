(function () {
  var Q = [];
  (window.DNT_QUESTIONS || []).forEach(function (r) {
    Q.push({ type: "mcq", unit: r[0], q: r[1], opts: r[2], ans: r[3], expl: r[4] });
  });
  (window.DNT_EMQS || []).forEach(function (set) {
    set.items.forEach(function (it) {
      Q.push({ type: "emq", unit: set.unit, theme: set.theme, lead: set.lead, q: it[0], opts: set.options, ans: it[1], expl: it[2] });
    });
  });
  var UNITS = window.DNT_UNITS || {};
  var TIPS = {
    1: "Revisit GDC Standards for the Dental Team, raising concerns, complaints handling and your safeguarding notes.",
    2: "Go over the GDC Scope of Practice and what a dental nurse can and can't do, with and without extra training.",
    3: "Review record keeping, confidentiality, UK GDPR and communication skills.",
    4: "Revise the Equality Act 2010, the protected characteristics and reasonable adjustments.",
    5: "This is a big unit. Work through decontamination (HTM 01-05), waste, materials, anatomy, oral disease and radiation protection one topic at a time.",
    6: "Revise diet and sugar advice, medical histories, medicines that affect dental care and when to refer.",
    7: "Re-read Delivering Better Oral Health and your notes on population health and sustainability.",
    8: "Review your Unit 8 notes on health and wellbeing at work.",
    9: "Revise enhanced CPD, PDPs and models of reflection.",
    10: "Practise each medical emergency with its signs, first actions and the correct drug and dose."
  };
  var MOCK_SIZE = 65, MOCK_MINS = 90;
  var STORE = "dnt-kt-progress";
  function $(id) { return document.getElementById(id); }
  function el(tag, cls, text) { var n = document.createElement(tag); if (cls) n.className = cls; if (text != null) n.textContent = text; return n; }
  function load() { try { return JSON.parse(localStorage.getItem(STORE)) || {}; } catch (e) { return {}; } }
  function save(v) { try { localStorage.setItem(STORE, JSON.stringify(v)); } catch (e) {} }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function unitName(u) { return UNITS[u] || ("Unit " + u); }

  var sel = $("kt-unit");
  sel.appendChild(new Option("All units (" + Q.length + " questions)", "all"));
  Object.keys(UNITS).forEach(function (u) {
    var n = Q.filter(function (q) { return String(q.unit) === u; }).length;
    if (n) sel.appendChild(new Option(UNITS[u] + " (" + n + ")", u));
  });

  function showProgress() {
    var p = load(), h = p.history || [];
    if (!h.length) { $("kt-progress").textContent = "Your scores are saved on this device only."; return; }
    var best = Math.max.apply(null, h.map(function (x) { return x.pct; }));
    $("kt-progress").textContent = "Mock exams taken on this device: " + h.length + ". Best score: " + best + "%. Last score: " + h[h.length - 1].pct + "%.";
  }

  var mode, items, pos, ticker, remaining;

  function begin(m, list) {
    mode = m;
    items = list.map(function (q) {
      // shuffle single-answer options; keep extended option lists in their set order (A, B, C...)
      var order = q.opts.map(function (_, i) { return i; });
      if (q.type === "mcq") order = shuffle(order);
      return { q: q, order: order, chosen: null };
    });
    pos = 0;
    $("kt-start").hidden = true; $("kt-results").hidden = true; $("kt-run").hidden = false;
    clearInterval(ticker);
    if (mode === "mock") {
      remaining = MOCK_MINS * 60;
      $("kt-timer").hidden = false; tickShow();
      ticker = setInterval(function () { remaining--; tickShow(); if (remaining <= 0) finish(); }, 1000);
    } else {
      $("kt-timer").hidden = true;
    }
    render();
    window.scrollTo(0, 0);
  }
  function tickShow() {
    var r = Math.max(remaining, 0), m = Math.floor(r / 60), s = r % 60;
    $("kt-timer").textContent = m + ":" + (s < 10 ? "0" : "") + s;
    $("kt-timer").classList.toggle("low", remaining <= 300);
  }

  function render() {
    var it = items[pos], q = it.q;
    $("kt-count-label").textContent = "Question " + (pos + 1) + " of " + items.length;
    $("kt-meter").style.width = Math.round(100 * (pos + 1) / items.length) + "%";
    $("kt-unit-label").textContent = unitName(q.unit) + (q.type === "emq" ? " · Extended" : "");
    $("kt-theme").hidden = q.type !== "emq";
    if (q.type === "emq") {
      $("kt-theme-title").textContent = "Theme: " + q.theme;
      $("kt-theme-lead").textContent = q.lead + " Each option may be used once, more than once, or not at all.";
    }
    $("kt-q").textContent = q.q;
    var box = $("kt-options"); box.innerHTML = "";
    box.className = "kt-options" + (q.type === "emq" ? " emq" : "");
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
      ex.textContent = (it.chosen === q.ans ? "Correct. " : "Not quite. The answer is " + q.opts[q.ans] + ". ") + q.expl;
    } else ex.hidden = true;
    $("kt-prev").disabled = pos === 0;
    $("kt-next").textContent = pos === items.length - 1 ? "See results" : "Next";
    $("kt-next").dataset.confirm = "";
  }

  $("kt-prev").onclick = function () { if (pos > 0) { pos--; render(); } };
  $("kt-next").onclick = function () {
    if (pos < items.length - 1) { pos++; render(); return; }
    var unanswered = items.filter(function (i) { return i.chosen === null; }).length;
    if (unanswered && mode === "mock" && !this.dataset.confirm) {
      this.dataset.confirm = "1";
      this.textContent = unanswered + " unanswered. Press again to finish";
      return;
    }
    finish();
  };
  $("kt-quit").onclick = finish;

  function band(pct) {
    if (pct < 60) return { label: "Focus here", cls: "no" };
    if (pct < 80) return { label: "Review", cls: "" };
    return { label: "Going well", cls: "ok" };
  }

  function finish() {
    clearInterval(ticker);
    var right = items.filter(function (i) { return i.chosen === i.q.ans; }).length;
    var pct = items.length ? Math.round(100 * right / items.length) : 0;
    $("kt-run").hidden = true; $("kt-results").hidden = false;
    $("kt-pct").textContent = pct + "%";
    $("kt-score").textContent = "You scored " + right + " out of " + items.length + ".";

    // by unit
    var by = {};
    items.forEach(function (i) {
      var u = i.q.unit; by[u] = by[u] || { right: 0, total: 0, missed: [] };
      by[u].total++;
      if (i.chosen === i.q.ans) by[u].right++; else by[u].missed.push(i);
    });
    var units = Object.keys(by).map(function (u) {
      var b = by[u]; b.unit = u; b.pct = Math.round(100 * b.right / b.total); return b;
    });

    // results table
    var bu = $("kt-byunit"); bu.innerHTML = "";
    var t = el("table", "simple");
    units.slice().sort(function (a, b) { return a.unit - b.unit; }).forEach(function (b) {
      var tr = el("tr"); tr.appendChild(el("th", null, unitName(b.unit)));
      var td = el("td"); td.appendChild(document.createTextNode(b.right + " / " + b.total + " (" + b.pct + "%)  "));
      var bd = band(b.pct); var sp = el("span", "tag" + (bd.cls === "ok" ? " done" : ""), bd.label); td.appendChild(sp);
      tr.appendChild(td); t.appendChild(tr);
    });
    bu.appendChild(t);

    // revision report (mock and practice)
    var rep = $("kt-report"); rep.innerHTML = "";
    var weak = units.filter(function (b) { return b.pct < 80; }).sort(function (a, b) { return a.pct - b.pct; });
    var p = load(), h = p.history || [];
    if (mode === "mock") {
      var prev = h.length ? h[h.length - 1].pct : null;
      h.push({ pct: pct, date: new Date().toISOString().slice(0, 10) });
      p.history = h.slice(-20); save(p);
      if (prev !== null) {
        var diff = pct - prev;
        rep.appendChild(el("p", null, diff > 0 ? "That's " + diff + "% higher than your last mock. Brilliant progress." :
          diff < 0 ? "That's " + (-diff) + "% lower than your last mock. Don't worry, use the plan below to target your revision." :
          "That's the same as your last mock. The plan below will help you move up."));
      }
    }
    if (!weak.length) {
      rep.appendChild(el("p", null, "Great work. You scored 80% or more in every unit. Keep your knowledge fresh with another mock in a week, and try the extended questions if you haven't already."));
    } else {
      rep.appendChild(el("p", null, "Start with the units at the top of this list. For each one, revise the points below, then try a practice round on that unit before your next mock."));
      weak.forEach(function (b, n) {
        var d = el("div", "review-item");
        var h3 = el("h3", null, (n + 1) + ". " + unitName(b.unit) + " (" + b.pct + "%)");
        h3.style.margin = "0 0 6px";
        d.appendChild(h3);
        d.appendChild(el("p", null, TIPS[b.unit] || ""));
        var ul = el("ul");
        b.missed.slice(0, 5).forEach(function (i) { ul.appendChild(el("li", null, i.q.expl)); });
        d.appendChild(ul);
        var btn = el("button", "btn small secondary", "Practise " + ("Unit " + b.unit));
        btn.type = "button";
        btn.onclick = function () {
          begin("practice", shuffle(Q.filter(function (q) { return String(q.unit) === String(b.unit); })));
        };
        d.appendChild(btn);
        rep.appendChild(d);
      });
    }

    // review list
    var rv = $("kt-review"); rv.innerHTML = "";
    items.forEach(function (i, n) {
      var d = el("div", "review-item");
      d.appendChild(el("p", null, (n + 1) + ". " + (i.q.type === "emq" ? "[" + i.q.theme + "] " : "") + i.q.q));
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
    var u = sel.value, ty = $("kt-type").value;
    var list = Q.filter(function (q) { return (u === "all" || String(q.unit) === u) && (ty === "all" || q.type === ty); });
    if (!list.length) { this.textContent = "No questions match, try another unit"; return; }
    this.textContent = "Start practice";
    begin("practice", shuffle(list));
  };
  $("kt-mock").onclick = function () { begin("mock", shuffle(Q).slice(0, Math.min(MOCK_SIZE, Q.length))); };
  $("kt-again").onclick = function () { $("kt-results").hidden = true; $("kt-start").hidden = false; showProgress(); window.scrollTo(0, 0); };

  showProgress();
})();
