/*
  DNT practice examiner (trial).
  No AI and no server: the browser turns speech into text, the page checks the text for the
  key points in examiner-data.js, and asks a follow-up question for a point that was missed.
  The browser reads the examiner's questions out loud. Nothing is marked and nothing is saved.
*/
(function () {
  var cfg = window.DNT_EXAMINER || { scenarios: [], maxFollowups: 5 };
  var all = window.DNT_SCENARIOS || [];
  var READ_SECS = 150; // 2.5 minutes per scenario (10 minutes reading shared across the scenarios)
  var TALK_SECS = 10 * 60;

  function $(id) { return document.getElementById(id); }
  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }
  function fmt(s) { s = Math.max(0, s); return Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0"); }

  // ---------- matching ----------
  function norm(t) {
    return " " + String(t).toLowerCase()
      .replace(/[‘’']/g, "")
      .replace(/[^a-z0-9]+/g, " ")
      .replace(/\s+/g, " ").trim() + " ";
  }
  function has(text, phrase) {
    // phrase must start at the beginning of a word ("neglect" matches "neglected")
    return text.indexOf(" " + norm(phrase).trim()) !== -1;
  }
  function covered(point, text) {
    return point.match.every(function (group) {
      return group.some(function (p) { return has(text, p); });
    });
  }

  // ---------- voice out ----------
  var synth = window.speechSynthesis;
  var voice = null;
  var VOICE_KEY = "dnt-examiner-voice";
  // British voices first. Higher score = better. Edge "Natural" voices sound the most human.
  var PREFERRED = [/natural/i, /google uk english/i, /^daniel/i, /^serena/i, /^kate/i, /^oliver/i,
                   /^martha/i, /^arthur/i, /libby|sonia|ryan|maisie|thomas/i, /hazel|george|susan/i];
  function score(v) {
    var s = /en-GB/i.test(v.lang) ? 100 : (/^en/i.test(v.lang) ? 10 : 0);
    for (var i = 0; i < PREFERRED.length; i++) {
      if (PREFERRED[i].test(v.name)) { s += (PREFERRED.length - i) * 2; break; }
    }
    if (/novelty|whisper|bad news|bells|bubbles|cellos|zarvox|trinoids|jester|organ|superstar|wobble|boing|albert/i.test(v.name)) s -= 200;
    return s;
  }
  function englishVoices() {
    return synth.getVoices().filter(function (v) { return /^en/i.test(v.lang) && score(v) > 0; })
      .sort(function (a, b) { return score(b) - score(a) || a.name.localeCompare(b.name); });
  }
  function savedVoice() { try { return localStorage.getItem(VOICE_KEY); } catch (e) { return null; } }
  function pickVoice() {
    if (!synth) return;
    var list = englishVoices();
    if (!list.length) return;
    var want = savedVoice();
    voice = list.filter(function (v) { return v.name === want; })[0] || list[0];
    var sel = $("voice-pick");
    sel.innerHTML = "";
    list.forEach(function (v) {
      var o = document.createElement("option");
      o.value = v.name;
      o.textContent = v.name.replace(/^Microsoft /, "").replace(/ - English.*$/, "") + (/en-GB/i.test(v.lang) ? " (British)" : " (" + v.lang + ")");
      if (v === voice) o.selected = true;
      sel.appendChild(o);
    });
    $("voice-choose").hidden = false;
  }
  if (synth) { pickVoice(); synth.onvoiceschanged = pickVoice; }

  function say(text, done) {
    if (!synth || !$("voice-on").checked) { if (done) done(); return; }
    synth.cancel();
    var u = new SpeechSynthesisUtterance(text);
    if (voice) u.voice = voice;
    u.lang = "en-GB"; u.rate = 0.95;
    var finished = false;
    function end() { if (!finished) { finished = true; if (done) done(); } }
    u.onend = end; u.onerror = end;
    synth.speak(u);
  }

  // ---------- voice in ----------
  var Rec = window.SpeechRecognition || window.webkitSpeechRecognition;
  var rec = null, listening = false, wantListen = false, useMic = false, baseText = "";

  function setMicButton() {
    var b = $("mic");
    b.textContent = listening ? "Stop speaking" : "Start speaking";
    b.classList.toggle("live", listening);
    $("mic-status").textContent = listening ? "Listening... speak your answer." : "";
  }
  function startListening() {
    if (!Rec || listening) return;
    rec = new Rec();
    rec.lang = "en-GB"; rec.continuous = true; rec.interimResults = true;
    baseText = $("answer").value ? $("answer").value.replace(/\s*$/, " ") : "";
    rec.onresult = function (e) {
      var finals = "", interim = "";
      for (var i = 0; i < e.results.length; i++) {
        if (e.results[i].isFinal) finals += e.results[i][0].transcript + " ";
        else interim += e.results[i][0].transcript;
      }
      $("answer").value = baseText + finals + interim;
    };
    rec.onerror = function (e) {
      if (e.error === "not-allowed" || e.error === "service-not-allowed") {
        wantListen = false; useMic = false;
        $("mic-status").textContent = "Microphone blocked. Allow the microphone in your browser, or type your answer.";
      }
    };
    rec.onend = function () {
      listening = false; setMicButton();
      if (wantListen) startListening(); // browsers stop after a pause, so carry on
    };
    try { rec.start(); listening = true; wantListen = true; } catch (err) { listening = false; }
    setMicButton();
  }
  function stopListening() {
    wantListen = false;
    if (rec && listening) { try { rec.stop(); } catch (err) { /* already stopped */ } }
    listening = false; setMicButton();
  }

  // ---------- session ----------
  var S = null, tick = null;

  function findSet(id) { return cfg.scenarios.filter(function (x) { return x.scenario === id; })[0]; }

  function renderChoices() {
    var c = $("choices"); c.innerHTML = "";
    cfg.scenarios.forEach(function (set) {
      var sc = all.filter(function (s) { return s.id === set.scenario; })[0];
      if (!sc) return;
      var card = el("article", "card scenario");
      var tags = el("div", "tags");
      sc.acs.forEach(function (a) { tags.appendChild(el("span", "tag", a)); });
      card.appendChild(tags);
      card.appendChild(el("h3", null, sc.title));
      card.appendChild(el("p", null, sc.group));
      var b = el("button", "btn small", "Start");
      b.type = "button";
      b.onclick = function () { start(sc, set); };
      card.appendChild(b);
      c.appendChild(card);
    });
  }

  function show(id) {
    ["phase-read", "phase-talk", "phase-end"].forEach(function (p) { $(p).hidden = p !== id; });
  }

  function start(sc, set) {
    S = { sc: sc, set: set, text: "", asked: [], followups: 0, phase: "read", left: READ_SECS, log: [], current: "" };
    $("setup").hidden = true; $("runner").hidden = false;
    $("r-title").textContent = sc.title;
    $("r-prompt").textContent = sc.prompt;
    $("log").innerHTML = ""; $("answer").value = "";
    show("phase-read");
    $("r-phase").textContent = "Reading time";
    runTimer();
    window.scrollTo(0, $("runner").offsetTop - 10);
  }

  function runTimer() {
    clearInterval(tick);
    $("r-timer").textContent = fmt(S.left);
    tick = setInterval(function () {
      S.left -= 1;
      $("r-timer").textContent = fmt(S.left);
      $("r-timer").classList.toggle("low", S.left <= 60);
      if (S.left <= 0) {
        clearInterval(tick);
        if (S.phase === "read") beginTalk();
        else { S.timeUp = true; $("r-phase").textContent = "Time is up. Finish your sentence, then press I've finished."; }
      }
    }, 1000);
  }

  function beginTalk() {
    S.phase = "talk"; S.left = TALK_SECS;
    $("r-phase").textContent = "Discussion time";
    show("phase-talk");
    runTimer();
    ask(S.set.opening);
  }

  function addLog(who, text) {
    var li = el("li", who === "Examiner" ? "ex" : "me");
    li.appendChild(el("strong", null, who + ": "));
    li.appendChild(document.createTextNode(text));
    $("log").appendChild(li);
    S.log.push({ who: who, text: text });
  }

  function ask(q) {
    stopListening();
    S.current = q;
    $("question").textContent = q;
    addLog("Examiner", q);
    $("answer").value = "";
    $("done").disabled = false;
    say(q, function () { if (useMic && S && S.phase === "talk") startListening(); });
    $("answer").focus({ preventScroll: true });
  }

  function nextMissed() {
    var t = norm(S.text);
    return S.set.points.filter(function (p) {
      return S.asked.indexOf(p) === -1 && !covered(p, t);
    })[0];
  }

  function finishAnswer(skipped) {
    stopListening();
    var a = $("answer").value.trim();
    addLog("You", skipped ? "(skipped)" : (a || "(no answer)"));
    if (!skipped) S.text += " " + a;
    var next = nextMissed();
    if (!next || S.followups >= cfg.maxFollowups || S.timeUp) return end();
    S.asked.push(next);
    S.followups += 1;
    ask(next.ask);
  }

  function end() {
    clearInterval(tick);
    stopListening();
    S.phase = "end";
    var closing = "Thank you, that is the end of the discussion.";
    addLog("Examiner", closing);
    say(closing);
    $("r-phase").textContent = "Finished";
    show("phase-end");
    var t = norm(S.text);
    var missed = S.set.points.filter(function (p) { return !covered(p, t); });
    $("end-summary").textContent = "The examiner asked you " + S.followups + " follow-up question" + (S.followups === 1 ? "" : "s") + ".";
    var ul = $("revise"); ul.innerHTML = "";
    missed.forEach(function (p) { ul.appendChild(el("li", null, p.label)); });
    $("revise-wrap").hidden = missed.length === 0;
    $("revise-none").hidden = missed.length !== 0;
  }

  function stopSession() {
    clearInterval(tick); stopListening(); if (synth) synth.cancel();
    S = null; $("runner").hidden = true; $("setup").hidden = false;
  }

  // ---------- wire up ----------
  if (!Rec) {
    $("mic").hidden = true;
    $("mic-note").textContent = "Speaking your answer isn't available in this browser (try Chrome, Edge or Safari). You can type your answers instead.";
  }
  if (!synth) {
    $("voice-on").checked = false; $("voice-on").disabled = true;
    $("voice-note").textContent = "This browser can't read the questions out loud, so they will appear on screen.";
  }
  $("mic").onclick = function () {
    if (listening) { stopListening(); } else { useMic = true; if (synth) synth.cancel(); startListening(); }
  };
  $("voice-pick").onchange = function () {
    var name = this.value;
    voice = englishVoices().filter(function (v) { return v.name === name; })[0] || voice;
    try { localStorage.setItem(VOICE_KEY, name); } catch (e) { /* storage unavailable */ }
  };
  $("voice-test").onclick = function () {
    var was = $("voice-on").checked; $("voice-on").checked = true;
    say("Hello. I'm your practice examiner. Talk me through what you would do.");
    $("voice-on").checked = was;
  };
  $("skip-read").onclick = beginTalk;
  $("repeat").onclick = function () { if (S) say(S.current); };
  $("done").onclick = function () { finishAnswer(false); };
  $("skip-q").onclick = function () { finishAnswer(true); };
  $("again").onclick = function () { var s = S; stopSession(); start(s.sc, s.set); };
  $("back").onclick = stopSession;
  $("back2").onclick = stopSession;
  $("print").onclick = function () { window.print(); };
  renderChoices();
})();
