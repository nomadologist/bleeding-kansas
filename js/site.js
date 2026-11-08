const SITE = {
  title: "Bleeding Kansas",
  tagline: "Mr. Booth | 11th Grade US History",
  years: "1854 – 1861",

  nav: [
    { href: "index.html",         label: "🏠 Home",               id: "home" },
    { href: "lawrence.html",      label: "🔥 Sack of Lawrence",   id: "lawrence" },
    { href: "pottawatomie.html",  label: "🎬 Pottawatomie Massacre", id: "pottawatomie" },
    { href: "constitutions.html", label: "⚖️ Three Constitutions", id: "constitutions" },
    { href: "about.html",         label: "📚 Bibliography & Credits", id: "about" },
  ],

  journey: [
    { href: "index.html",         label: "The Beginnings",      dates: "1854–1856", id: "home" },
    { href: "lawrence.html",      label: "Sack of Lawrence",    dates: "1856",      id: "lawrence" },
    { href: "pottawatomie.html",  label: "Pottawatomie Massacre", dates: "1856",   id: "pottawatomie" },
    { href: "constitutions.html", label: "Three Constitutions", dates: "1855–1861", id: "constitutions" },
  ],

  ticker: [
    "★ Welcome, historians! ★",
    "💬 Share your thoughts in the comments on each page",
    "📅 Due 12/02: Sack of Lawrence",
    "📅 Due 12/03: Pottawatomie Massacre",
    "📅 Due 12/04: Three Constitutions",
  ],

  musicAutoplay: true,

  music: {
    default:       "audio/john_brown_body.mp3",
    home:          "audio/john_brown_body.mp3",
    pottawatomie:  "audio/soldier_of_cross.mp3",
    lawrence:      "audio/kansas_emigrant_song.mp3",
    constitutions: "audio/kansas_emigrant_song.mp3",
  },

  musicVolume: {
    "audio/john_brown_body.mp3":       0.28,
    "audio/kansas_emigrant_song.mp3":  0.28,
    "audio/soldier_of_cross.mp3":      0.315,
  },

  commentsUrl: "https://script.google.com/macros/s/AKfycbypTWbelwiP1XjFCiQK79KqBI_MNC56x_6d6y6ACbdzO-8yXi2uxslRucf93sbGsn5DLA/exec",

  entryLayout: "tabs",

  didYouKnow: {
    home: {
      fact: "About 900 to 1,000 Sharps rifles were bought for the fight over Kansas. Some were shipped in crates labeled “Bibles,” so people nicknamed them “Beecher’s Bibles” after the minister Henry Ward Beecher.",
      source: 'Kansas Historical Society. “Beecher Bibles.” Kansapedia. Last modified January 2013. <a href="https://www.kansashistory.gov/kansapedia/beecher-bibles/11977">https://www.kansashistory.gov/kansapedia/beecher-bibles/11977</a>.',
    },
    lawrence: {
      fact: "Lawrence was attacked again on August 21, 1863. About 300 Confederate raiders led by William Quantrill destroyed more than 200 homes and businesses, and 150 men were dead or dying by noon.",
      source: 'Kansas Historical Society. “Quantrill’s Raids.” Kansapedia. Last modified July 2017. <a href="https://www.kansashistory.gov/kansapedia/quantrill-s-raids/18335">https://www.kansashistory.gov/kansapedia/quantrill-s-raids/18335</a>.',
    },
    pottawatomie: {
      fact: "Three months after Pottawatomie, John Brown’s son Frederick was killed in a battle at Osawatomie, Kansas. The fight earned Brown the nickname “Osawatomie Brown.”",
      source: 'Kansas Historical Society. “John Brown.” Kansapedia. Last modified November 2021. <a href="https://www.kansashistory.gov/kansapedia/john-brown/15474">https://www.kansashistory.gov/kansapedia/john-brown/15474</a>.',
    },
    constitutions: {
      fact: "Women weren’t allowed to speak at the Wyandotte convention. Clarina Nichols sat in on the debates, knitting, and lobbied delegates during breaks. She won women the right to own property and to vote in school elections.",
      source: 'Kansas Historical Society. “Willing to Die for Freedom: Constitutions.” <a href="https://www.kansashistory.gov/p/willing-to-die-for-freedom-constitutions/15396">https://www.kansashistory.gov/p/willing-to-die-for-freedom-constitutions/15396</a>.',
    },
    about: {
      fact: "In November 1859, Mahala Doyle wrote a letter to John Brown while he waited to be executed after the Harpers Ferry raid. The letter still exists today.",
      source: 'Doyle, Mahala. Letter to John Brown, November 20, 1859. GLC07590. Gilder Lehrman Institute of American History. <a href="https://artsandculture.google.com/asset/mahahla-doyle-to-john-brown-regarding-his-death-penalty-doyle-mahala/1wGYWMJqWqNKjg">https://artsandculture.google.com/asset/mahahla-doyle-to-john-brown-regarding-his-death-penalty-doyle-mahala/1wGYWMJqWqNKjg</a>.',
    },
  },

  periods: ["2", "3", "6", "7", "9"],
};

function store(key, val) {
  try {
    if (val === undefined) return localStorage.getItem(key);
    localStorage.setItem(key, val);
  } catch (e) { return null; }
}

function buildChrome() {
  const page = document.body.dataset.page;

  const header = document.getElementById("header-slot");
  if (header) {
    header.outerHTML = `
      <header class="site-header">
        <p class="site-title"><a href="index.html">${SITE.title}</a></p>
        <span class="site-years">${SITE.years}</span>
        <p class="site-tagline">${SITE.tagline}</p>
      </header>
      <div class="ticker" tabindex="0" aria-label="Announcements">
        <div class="ticker-track">
          <span class="ticker-inner">${SITE.ticker.join(" &nbsp;&nbsp;&nbsp; ")}</span>
          <span class="ticker-inner" aria-hidden="true">${SITE.ticker.join(" &nbsp;&nbsp;&nbsp; ")}</span>
        </div>
      </div>`;
  }

  const sidebar = document.getElementById("sidebar-slot");
  if (sidebar) {
    const links = SITE.nav.map(n =>
      `<li><a href="${n.href}"${n.id === page ? ' aria-current="page"' : ""}>${n.label}</a></li>`
    ).join("");
    sidebar.innerHTML = `<div class="sidebar-inner">
      <nav class="main-nav" aria-label="Main menu">
        <p class="nav-title">Explore</p>
        <ul>${links}</ul>
      </nav>
      <div class="side-box">
        <h2>Reading Tools</h2>
        <button type="button" class="tool-btn" id="toggle-text" aria-pressed="false">🔍 Bigger text</button>
        <button type="button" class="tool-btn" id="toggle-music" aria-pressed="false">🎵 Music: off</button>
        <label class="volume" hidden>🔉<input type="range" id="music-volume" min="0" max="100" aria-label="Music volume"></label>
      </div>
      ${SITE.didYouKnow[page] ? `<div class="side-box side-extra">
        <h2>Did You Know?</h2>
        <p>${SITE.didYouKnow[page].fact}</p>
        <p class="dyk-source">${SITE.didYouKnow[page].source}</p>
      </div>` : ""}
      </div>`;
  }

  const main = document.getElementById("main");
  if (main && SITE.didYouKnow[page]) {
    const box = document.createElement("aside");
    box.className = "side-box dyk-mobile";
    box.setAttribute("aria-label", "Did you know?");
    box.innerHTML = `<h2>Did You Know?</h2><p>${SITE.didYouKnow[page].fact}</p><p class="dyk-source">${SITE.didYouKnow[page].source}</p>`;
    main.append(box);
  }

  const footer = document.getElementById("footer-slot");
  if (footer) {
    footer.outerHTML = `
      <footer class="site-footer">
        <div class="badges">
          <span class="badge88 b1" aria-hidden="true">MADE WITH<br>HTML</span>
          <span class="badge88 b2" aria-hidden="true">FREE STATE<br>OF MIND</span>
          <span class="badge88 b3" aria-hidden="true">KANSAS<br>EST. 1861</span>
          <span class="badge88 b4">MADE WITH ASSISTANCE<br>FROM CLAUDE CODE</span>
        </div>
        <p>&copy; ${new Date().getFullYear()} Mr. Booth &middot; 11th Grade US History &middot;
          <a href="about.html">Bibliography &amp; Credits</a></p>
        <p>Best viewed with any browser, on any screen. 🌻</p>
      </footer>`;
  }
}

function buildJourney() {
  const page = document.body.dataset.page;
  const i = SITE.journey.findIndex(j => j.id === page);
  const main = document.getElementById("main");
  if (i < 0 || !main) return;

  const trail = document.createElement("nav");
  trail.className = "journey";
  trail.setAttribute("aria-label", "The story so far");
  trail.innerHTML = "<ol>" + SITE.journey.map((j, n) =>
    `<li class="${n < i ? "done" : n === i ? "here" : ""}">
       <a href="${j.href}"${n === i ? ' aria-current="step"' : ""}>
         <span class="j-num">${n + 1}</span>
         <span class="j-label">${j.label}</span>
         <span class="j-dates">${j.dates}</span>
       </a></li>`).join("") + "</ol>";
  main.prepend(trail);

  const prev = SITE.journey[i - 1], next = SITE.journey[i + 1];
  const nav = document.createElement("nav");
  nav.className = "journey-next";
  nav.setAttribute("aria-label", "Continue the story");
  nav.innerHTML =
    (prev ? `<a class="btn" href="${prev.href}">← ${prev.label}</a>` : "<span></span>") +
    (next ? `<a class="btn btn-next" href="${next.href}">Next stop: ${next.label} →</a>` : "");
  main.append(nav);
}

function currentLayout() {
  const local = ["localhost", "127.0.0.1", ""].includes(location.hostname);
  return (local && store("bk-layout-preview")) || SITE.entryLayout;
}

function setupEntries() {
  const layout = currentLayout();
  document.body.dataset.layout = layout;
  const pauseMedia = el => el.querySelectorAll("video").forEach(v => v.pause());

  document.querySelectorAll(".entries").forEach((group, g) => {
    const entries = [...group.children];
    if (layout === "accordion") {
      entries.forEach((entry, i) => {
        const heading = entry.querySelector("h2, h3");
        const details = document.createElement("details");
        details.className = "entry-acc";
        details.open = i === 0;
        const summary = document.createElement("summary");
        summary.append(heading);
        details.append(summary);
        entry.prepend(details);
        [...entry.childNodes].filter(n => n !== details).forEach(n => details.append(n));
        details.addEventListener("toggle", () => { if (!details.open) pauseMedia(details); });
      });
    } else if (layout === "tabs") {
      group.classList.add("tabbed");
      const list = document.createElement("div");
      list.className = "tab-list";
      list.setAttribute("role", "tablist");
      const tabs = entries.map((entry, i) => {
        const id = `tab-${g}-${i}`;
        entry.id ||= `panel-${g}-${i}`;
        entry.setAttribute("role", "tabpanel");
        entry.setAttribute("aria-labelledby", id);
        entry.tabIndex = 0;
        const tab = document.createElement("button");
        tab.type = "button";
        tab.id = id;
        tab.className = "tab";
        tab.setAttribute("role", "tab");
        tab.setAttribute("aria-controls", entry.id);
        tab.textContent = entry.dataset.tab || entry.querySelector("h2, h3").textContent;
        list.append(tab);
        if (i < entries.length - 1) {
          const next = document.createElement("button");
          next.type = "button";
          next.className = "btn tab-continue";
          next.textContent = `Continue: ${entries[i + 1].dataset.tab || "next"} →`;
          next.addEventListener("click", () => { select(i + 1); tabs[i + 1].focus(); });
          entry.append(next);
        }
        return tab;
      });
      const select = n => {
        tabs.forEach((t, i) => {
          t.setAttribute("aria-selected", i === n);
          t.tabIndex = i === n ? 0 : -1;
          entries[i].hidden = i !== n;
          if (i !== n) pauseMedia(entries[i]);
        });
      };
      tabs.forEach((t, i) => t.addEventListener("click", () => select(i)));
      list.addEventListener("keydown", e => {
        const i = tabs.indexOf(document.activeElement);
        if (i < 0) return;
        let n = null;
        if (e.key === "ArrowRight") n = (i + 1) % tabs.length;
        if (e.key === "ArrowLeft") n = (i - 1 + tabs.length) % tabs.length;
        if (e.key === "Home") n = 0;
        if (e.key === "End") n = tabs.length - 1;
        if (n !== null) { e.preventDefault(); select(n); tabs[n].focus(); }
      });
      group.prepend(list);
      const section = group.parentElement;
      const heading = section.querySelector(":scope > h2");
      if (heading && section.tagName === "SECTION") {
        const bar = document.createElement("div");
        bar.className = "group-title";
        bar.append(heading);
        section.querySelectorAll(":scope > .read-aloud").forEach(b => bar.append(b));
        group.prepend(bar);
      }
      const hashIndex = entries.findIndex(en => location.hash && en.id === location.hash.slice(1));
      select(hashIndex >= 0 ? hashIndex : 0);
    }
  });

  const local = ["localhost", "127.0.0.1", ""].includes(location.hostname);
  if (local && document.querySelector(".entries")) {
    const box = document.createElement("div");
    box.className = "layout-preview";
    box.innerHTML = `<strong>Layout preview</strong> <small>(only you see this)</small><br>` +
      ["tabs", "accordion", "scroll"].map(l =>
        `<button type="button" data-l="${l}" aria-pressed="${l === layout}">${l}</button>`).join("");
    box.addEventListener("click", e => {
      const l = e.target.dataset.l;
      if (!l) return;
      store("bk-layout-preview", l);
      location.reload();
    });
    document.body.append(box);
  }
}

const music = { pause() {}, resume() {} };

function setupTools() {
  const textBtn = document.getElementById("toggle-text");
  const applyText = on => {
    document.documentElement.classList.toggle("large-text", on);
    if (textBtn) textBtn.setAttribute("aria-pressed", on);
  };
  applyText(store("bk-large") === "1");
  if (textBtn) textBtn.addEventListener("click", () => {
    const on = !document.documentElement.classList.contains("large-text");
    applyText(on);
    store("bk-large", on ? "1" : "0");
  });

  const musicBtn = document.getElementById("toggle-music");
  if (musicBtn) {
    const page = document.body.dataset.page;
    const track = SITE.music[page] || SITE.music.default;
    const audio = new Audio(track);
    audio.loop = true;
    audio.volume = SITE.musicVolume[track] ?? 0.35;
    const saved = parseFloat(store("bk-volume"));
    if (saved >= 0 && saved <= 1) audio.volume = saved;
    const slider = document.getElementById("music-volume");
    if (slider) {
      slider.value = Math.round(audio.volume * 100);
      slider.addEventListener("input", () => {
        audio.volume = slider.value / 100;
        store("bk-volume", audio.volume);
      });
      const showSlider = () => { slider.parentElement.hidden = audio.paused; };
      audio.addEventListener("play", showSlider);
      audio.addEventListener("pause", showSlider);
    }
    const showOn = () => {
      musicBtn.textContent = "🎵 Music: on";
      musicBtn.setAttribute("aria-pressed", "true");
    };
    let pausedForSpeech = false;
    let cancelWaiting = null;
    const musicOff = remember => {
      pausedForSpeech = false;
      audio.pause();
      musicBtn.textContent = "🎵 Music: off";
      musicBtn.setAttribute("aria-pressed", "false");
      if (remember) store("bk-music", "off");
    };
    music.pause = () => {
      if (audio.paused) {
        if (cancelWaiting) {
          cancelWaiting();
          pausedForSpeech = true;
        }
        return;
      }
      pausedForSpeech = true;
      audio.pause();
      musicBtn.textContent = "🎵 Music: paused";
    };
    music.resume = () => {
      if (!pausedForSpeech) return;
      pausedForSpeech = false;
      if (store("bk-music") !== "off") audio.play().then(showOn).catch(() => {});
    };
    musicBtn.addEventListener("click", () => {
      pausedForSpeech = false;
      if (audio.paused) {
        store("bk-music", "on");
        audio.play().then(showOn).catch(() => {
          musicBtn.textContent = "🎵 No music file yet";
        });
      } else {
        musicOff(true);
      }
    });
    document.querySelectorAll("video").forEach(v => {
      v.addEventListener("play", () => music.pause());
      v.addEventListener("pause", () => music.resume());
      v.addEventListener("ended", () => music.resume());
    });

    if (SITE.musicAutoplay && store("bk-music") !== "off") {
      audio.play().then(showOn).catch(() => {
        const start = e => {
          if (e.target.closest && e.target.closest("#toggle-music, video")) return;
          if ([...document.querySelectorAll("video")].some(v => !v.paused)) return;
          cancelWaiting();
          if (audio.paused && store("bk-music") !== "off") audio.play().then(showOn).catch(() => {});
        };
        cancelWaiting = () => {
          ["pointerdown", "keydown"].forEach(t => document.removeEventListener(t, start, true));
          cancelWaiting = null;
        };
        ["pointerdown", "keydown"].forEach(t => document.addEventListener(t, start, true));
      });
    }
  }
}

function setupReadAloud() {
  const buttons = document.querySelectorAll(".read-aloud");
  if (!("speechSynthesis" in window)) {
    buttons.forEach(b => b.hidden = true);
    return;
  }
  speechSynthesis.getVoices();
  let current = null;
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const speaking = btn.getAttribute("aria-pressed") === "true";
      current = null;
      speechSynthesis.cancel();
      buttons.forEach(b => { b.setAttribute("aria-pressed", "false"); b.textContent = "🔊 Read aloud"; });
      if (speaking) { music.resume(); return; }
      const target = document.getElementById(btn.dataset.target);
      if (!target) return;
      if (!speechSynthesis.getVoices().length) {
        btn.textContent = "🔇 No voice found on this device";
        setTimeout(() => { btn.textContent = "🔊 Read aloud"; }, 3000);
        return;
      }
      const u = new SpeechSynthesisUtterance(target.innerText);
      u.rate = 0.95;
      u.onend = u.onerror = () => {
        if (current !== u) return;
        current = null;
        btn.setAttribute("aria-pressed", "false");
        btn.textContent = "🔊 Read aloud";
        music.resume();
      };
      current = u;
      music.pause();
      btn.setAttribute("aria-pressed", "true");
      btn.textContent = "⏹ Stop reading";
      speechSynthesis.speak(u);
    });
  });
}

function setupVocab() {
  const words = document.querySelectorAll(".vocab");
  if (!words.length) return;
  const tip = document.createElement("div");
  tip.className = "vocab-tip";
  tip.id = "vocab-tip";
  tip.setAttribute("role", "tooltip");
  tip.hidden = true;
  document.body.append(tip);
  let openFor = null, pinned = false;

  const show = (w, pin) => {
    openFor = w; pinned = pin;
    tip.textContent = "📖 " + w.dataset.def;
    tip.hidden = false;
    w.setAttribute("aria-describedby", "vocab-tip");
    w.setAttribute("aria-expanded", "true");
    const r = w.getBoundingClientRect();
    const t = tip.getBoundingClientRect();
    let top = r.bottom + 6;
    if (top + t.height > window.innerHeight - 8) top = r.top - t.height - 6;
    const left = Math.min(Math.max(8, r.left), window.innerWidth - t.width - 8);
    tip.style.top = top + "px";
    tip.style.left = left + "px";
  };
  const hide = () => {
    if (!openFor) return;
    openFor.removeAttribute("aria-describedby");
    openFor.setAttribute("aria-expanded", "false");
    openFor = null; pinned = false;
    tip.hidden = true;
  };

  words.forEach(w => {
    w.setAttribute("aria-expanded", "false");
    w.addEventListener("pointerenter", e => { if (e.pointerType === "mouse" && !pinned) show(w, false); });
    w.addEventListener("pointerleave", e => { if (e.pointerType === "mouse" && !pinned) hide(); });
    w.addEventListener("focus", () => { if (!pinned) show(w, false); });
    w.addEventListener("blur", () => { if (!pinned) hide(); });
    w.addEventListener("click", e => {
      e.stopPropagation();
      if (openFor === w && pinned) hide(); else show(w, true);
    });
  });
  document.addEventListener("click", hide);
  document.addEventListener("keydown", e => { if (e.key === "Escape") hide(); });
  window.addEventListener("scroll", () => { if (openFor) show(openFor, pinned); }, { passive: true, capture: true });
}

function setupOrganizer() {
  const table = document.querySelector(".organizer");
  const toggle = document.getElementById("organizer-mode");
  if (!table || !toggle) return;
  const cells = table.querySelectorAll(".reveal-cell");
  const flip = c => {
    const shown = c.classList.toggle("shown");
    c.setAttribute("aria-pressed", shown);
  };
  toggle.addEventListener("click", () => {
    const on = !table.classList.contains("quiz-mode");
    table.classList.toggle("quiz-mode", on);
    toggle.setAttribute("aria-pressed", on);
    toggle.textContent = on ? "👀 Show all answers" : "🙈 Quiz me (hide answers)";
    cells.forEach(c => {
      c.classList.remove("shown");
      if (on) {
        c.tabIndex = 0;
        c.setAttribute("role", "button");
        c.setAttribute("aria-pressed", "false");
      } else {
        c.removeAttribute("tabindex");
        c.removeAttribute("role");
        c.removeAttribute("aria-pressed");
      }
    });
  });
  cells.forEach(c => {
    c.addEventListener("click", () => { if (table.classList.contains("quiz-mode")) flip(c); });
    c.addEventListener("keydown", e => {
      if ((e.key === "Enter" || e.key === " ") && table.classList.contains("quiz-mode")) { e.preventDefault(); flip(c); }
    });
  });
}

function setupSort() {
  document.querySelectorAll(".sort-activity").forEach(act => {
    let selected = null;
    const pool = act.querySelector(".sort-pool");
    const status = act.querySelector(".sort-status");
    act.querySelectorAll(".sort-item").forEach(item => {
      item.addEventListener("click", e => {
        e.stopPropagation();
        if (selected) selected.classList.remove("selected");
        selected = item === selected ? null : item;
        if (selected) {
          selected.classList.add("selected");
          if (status) status.textContent = `Selected: "${item.textContent.trim()}". Now choose a box.`;
        }
      });
    });
    act.querySelectorAll(".sort-bin").forEach(bin => {
      const go = bin.querySelector(".bin-drop");
      go.addEventListener("click", () => {
        if (!selected) { if (status) status.textContent = "Pick a card first."; return; }
        selected.classList.remove("selected", "correct", "wrong");
        bin.appendChild(selected);
        if (status) status.textContent = `Moved to ${bin.dataset.bin}.`;
        selected = null;
      });
    });
    act.querySelector(".sort-check")?.addEventListener("click", () => {
      let right = 0, total = 0;
      act.querySelectorAll(".sort-item").forEach(item => {
        total++;
        const bin = item.closest(".sort-bin");
        item.classList.remove("correct", "wrong");
        if (!bin) return;
        const ok = bin.dataset.bin === item.dataset.answer;
        item.classList.add(ok ? "correct" : "wrong");
        if (ok) right++;
      });
      if (status) status.textContent = `${right} of ${total} sorted correctly. ${right === total ? "🎉 Huzzah!" : "Red cards need another look."}`;
    });
    act.querySelector(".sort-reset")?.addEventListener("click", () => {
      act.querySelectorAll(".sort-item").forEach(i => { i.classList.remove("correct", "wrong", "selected"); pool.appendChild(i); });
      selected = null;
      if (status) status.textContent = "";
    });
  });
}

function setupLoadedLanguage() {
  document.querySelectorAll(".loaded-language").forEach(act => {
    const passage = act.querySelector(".ll-passage");
    const results = act.querySelector(".ll-results");
    const score = act.querySelector(".ll-score");
    act.querySelectorAll(".ll-key").forEach((k, i) => { k.dataset.keyIndex = i; });

    const walker = document.createTreeWalker(passage, NodeFilter.SHOW_TEXT);
    const textNodes = [];
    while (walker.nextNode()) {
      if (!walker.currentNode.parentElement.closest(".omit, .vocab")) textNodes.push(walker.currentNode);
    }
    textNodes.forEach(node => {
      const frag = document.createDocumentFragment();
      node.textContent.split(/(\s+)/).forEach(tok => {
        if (!tok) return;
        if (/^\s+$/.test(tok)) { frag.append(tok); return; }
        const w = document.createElement("span");
        w.className = "ll-word";
        w.textContent = tok;
        w.setAttribute("role", "button");
        w.setAttribute("aria-pressed", "false");
        w.tabIndex = -1;
        const key = node.parentElement.closest(".ll-key");
        if (key) w.dataset.key = key.dataset.keyIndex;
        frag.append(w);
      });
      node.replaceWith(frag);
    });
    const words = [...passage.querySelectorAll(".ll-word")];
    if (!words.length) return;
    words[0].tabIndex = 0;

    let checked = false;
    const toggle = w => {
      if (checked) return;
      const on = w.getAttribute("aria-pressed") !== "true";
      w.setAttribute("aria-pressed", on);
      w.classList.toggle("picked", on);
    };
    const focusWord = i => {
      words.forEach(w => { w.tabIndex = -1; });
      words[i].tabIndex = 0;
      words[i].focus();
    };
    words.forEach((w, i) => {
      w.addEventListener("click", () => { focusWord(i); toggle(w); });
      w.addEventListener("keydown", e => {
        if (e.key === " " || e.key === "Enter") { e.preventDefault(); toggle(w); }
        else if (e.key === "ArrowRight" || e.key === "ArrowDown") { e.preventDefault(); focusWord(Math.min(i + 1, words.length - 1)); }
        else if (e.key === "ArrowLeft" || e.key === "ArrowUp") { e.preventDefault(); focusWord(Math.max(i - 1, 0)); }
        else if (e.key === "Home") { e.preventDefault(); focusWord(0); }
        else if (e.key === "End") { e.preventDefault(); focusWord(words.length - 1); }
      });
    });

    act.querySelector(".ll-check").addEventListener("click", () => {
      const keys = new Set(words.filter(w => w.dataset.key).map(w => w.dataset.key));
      const found = new Set();
      let extra = 0;
      words.forEach(w => {
        const picked = w.getAttribute("aria-pressed") === "true";
        w.classList.remove("hit", "missed", "extra");
        if (w.dataset.key) {
          if (picked) found.add(w.dataset.key);
        } else if (picked) { w.classList.add("extra"); extra++; }
      });
      words.forEach(w => { if (w.dataset.key) w.classList.add(found.has(w.dataset.key) ? "hit" : "missed"); });
      checked = true;
      passage.classList.add("checked");
      score.textContent = `You found ${found.size} of ${keys.size} loaded words or phrases.` +
        (extra ? ` You also marked ${extra} other word${extra === 1 ? "" : "s"}. Be ready to explain why!` : "");
      results.hidden = false;
    });

    act.querySelector(".ll-reset").addEventListener("click", () => {
      checked = false;
      passage.classList.remove("checked");
      words.forEach(w => {
        w.classList.remove("picked", "hit", "missed", "extra");
        w.setAttribute("aria-pressed", "false");
      });
      results.hidden = true;
    });
  });
}

function setupHighlighter() {
  document.querySelectorAll(".compare").forEach((cmp, ci) => {
    const areas = [...cmp.querySelectorAll(".compare-scroll")];
    if (!areas.length) return;
    const saveKey = `bk-hl-${document.body.dataset.page}-${ci}`;

    const bar = document.createElement("div");
    bar.className = "hl-toolbar";
    bar.setAttribute("role", "toolbar");
    bar.setAttribute("aria-label", "Highlighter");
    bar.innerHTML = `<span class="hl-label">🖍️ Highlighter:</span>
      <button type="button" data-color="green" aria-pressed="false"><span class="hl-swatch hl-green"></span>Similar</button>
      <button type="button" data-color="pink" aria-pressed="false"><span class="hl-swatch hl-pink"></span>Different</button>
      <button type="button" data-color="yellow" aria-pressed="false"><span class="hl-swatch hl-yellow"></span>Puritan</button>
      <button type="button" data-color="erase" aria-pressed="false">🧽 Eraser</button>
      <button type="button" class="hl-clear">Clear all</button>
      <span class="hl-hint">Pick a color, then select words in either column.</span>`;
    cmp.before(bar);
    let color = null;

    const textNodes = root => {
      const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
      const out = [];
      while (w.nextNode()) out.push(w.currentNode);
      return out;
    };
    const unwrap = m => { m.replaceWith(...m.childNodes); };
    const wrapRange = (area, start, end, col) => {
      let pos = 0;
      textNodes(area).forEach(n => {
        const len = n.length, s0 = Math.max(start, pos), e0 = Math.min(end, pos + len);
        if (s0 < e0) {
          let node = n;
          if (e0 - pos < len) node.splitText(e0 - pos);
          if (s0 - pos > 0) node = node.splitText(s0 - pos);
          if (node.textContent.trim()) {
            const m = document.createElement("mark");
            m.className = `hl hl-${col}`;
            node.replaceWith(m);
            m.append(node);
          }
        }
        pos += len;
      });
    };
    const offsetOf = (area, node, offset) => {
      const r = document.createRange();
      r.setStart(area, 0);
      r.setEnd(node, offset);
      return r.toString().length;
    };
    const save = () => {
      const data = areas.map(a => [...a.querySelectorAll("mark.hl")].map(m => {
        const r = document.createRange();
        r.setStart(a, 0);
        r.setEndBefore(m);
        const start = r.toString().length;
        return [start, start + m.textContent.length, m.className.replace("hl hl-", "")];
      }));
      store(saveKey, JSON.stringify(data));
    };
    try {
      const saved = JSON.parse(store(saveKey) || "null");
      if (saved) saved.forEach((marks, i) => areas[i] && marks.forEach(([a, b, c]) => wrapRange(areas[i], a, b, c)));
    } catch (e) { }

    const applySelection = () => {
      const sel = window.getSelection();
      if (!color || !sel.rangeCount || sel.isCollapsed) return false;
      const r = sel.getRangeAt(0);
      const area = areas.find(a => a.contains(r.commonAncestorContainer));
      if (!area) return false;
      const start = offsetOf(area, r.startContainer, r.startOffset);
      const end = offsetOf(area, r.endContainer, r.endOffset);
      area.querySelectorAll("mark.hl").forEach(m => { if (r.intersectsNode(m)) unwrap(m); });
      area.normalize();
      if (color !== "erase") wrapRange(area, start, end, color);
      sel.removeAllRanges();
      save();
      return true;
    };

    bar.addEventListener("mousedown", e => e.preventDefault());
    bar.querySelectorAll("[data-color]").forEach(btn => btn.addEventListener("click", () => {
      color = btn.getAttribute("aria-pressed") === "true" ? null : btn.dataset.color;
      bar.querySelectorAll("[data-color]").forEach(b => b.setAttribute("aria-pressed", b === btn && color !== null));
      cmp.classList.toggle("hl-active", !!color);
      cmp.classList.toggle("hl-erasing", color === "erase");
      applySelection();
    }));
    bar.querySelector(".hl-clear").addEventListener("click", () => {
      areas.forEach(a => { a.querySelectorAll("mark.hl").forEach(unwrap); a.normalize(); });
      save();
    });
    areas.forEach(a => {
      a.addEventListener("mouseup", () => setTimeout(applySelection));
      a.addEventListener("touchend", () => setTimeout(applySelection, 50));
      a.addEventListener("keyup", e => { if (e.shiftKey) applySelection(); });
      a.addEventListener("click", e => {
        const m = e.target.closest("mark.hl");
        if (m && color === "erase") { unwrap(m); a.normalize(); save(); }
      });
    });
  });
}

function setupAnticipation() {
  document.querySelectorAll(".anticipation").forEach(guide => {
    const id = guide.dataset.guide;
    const key = `bk-ag-${id}`;
    let saved = {};
    try { saved = JSON.parse(store(key) || "{}"); } catch (e) { saved = {}; }
    const save = () => store(key, JSON.stringify(saved));
    const items = [...guide.querySelectorAll(".ag-item")];
    const revisit = document.querySelector(`.ag-revisit[data-guide="${id}"] .ag-list`);

    const paint = (group, value) => group.querySelectorAll("button").forEach(b => b.setAttribute("aria-pressed", b.dataset.v === value));

    const after = items.map(item => {
      const n = item.dataset.id;
      const li = document.createElement("li");
      li.className = "ag-item";
      li.innerHTML = `<span class="ag-text"></span>
        <span class="ag-choices" role="group" aria-label="Your answer now">
          <button type="button" data-v="agree" aria-pressed="false">👍 Agree</button>
          <button type="button" data-v="disagree" aria-pressed="false">👎 Disagree</button>
        </span>
        <span class="ag-changed" role="status"></span>`;
      li.querySelector(".ag-text").textContent = item.querySelector(".ag-text").textContent;
      if (revisit) revisit.append(li);
      return { n, before: item, after: li };
    });

    const refresh = () => after.forEach(({ n, before, after: li }) => {
      const b = saved["b" + n], a = saved["a" + n];
      paint(before, b);
      paint(li, a);
      li.querySelector(".ag-changed").textContent = b && a && a !== b ? "✏️ You changed your mind!" : "";
    });

    after.forEach(({ n, before, after: li }) => {
      before.querySelectorAll("button").forEach(btn => btn.addEventListener("click", () => {
        saved["b" + n] = btn.dataset.v; save(); refresh();
      }));
      li.querySelectorAll("button").forEach(btn => btn.addEventListener("click", () => {
        saved["a" + n] = btn.dataset.v; save(); refresh();
      }));
    });
    refresh();
  });
}

function setupFlashcards() {
  document.querySelectorAll(".flashcard").forEach(card => {
    card.setAttribute("aria-pressed", "false");
    card.addEventListener("click", () =>
      card.setAttribute("aria-pressed", card.getAttribute("aria-pressed") !== "true"));
  });
  document.getElementById("shuffle-cards")?.addEventListener("click", () => {
    const grid = document.querySelector(".flash-grid");
    [...grid.children].sort(() => Math.random() - 0.5).forEach(c => grid.appendChild(c));
  });
}

function setupMovieMode() {
  const btn = document.querySelector(".movie-btn");
  const frame = document.querySelector(".video-frame");
  if (!btn || !frame) return;
  const dim = document.createElement("div");
  dim.className = "movie-dim";
  document.body.append(dim);
  const video = frame.querySelector("video");

  const place = () => {
    if (!document.body.classList.contains("movie-mode")) return;
    const r = frame.getBoundingClientRect();
    const above = r.top - btn.offsetHeight - 8;
    btn.style.top = (above >= 8 ? above : r.bottom + 8) + "px";
    btn.style.left = Math.max(8, r.right - btn.offsetWidth) + "px";
    requestAnimationFrame(place);
  };

  const set = on => {
    document.body.classList.toggle("movie-mode", on);
    btn.setAttribute("aria-pressed", on);
    btn.textContent = on ? "💡 Lights on" : "🎬 Movie mode";
    btn.style.top = btn.style.left = "";
    if (on) requestAnimationFrame(place);
    if (on) {
      const r = frame.getBoundingClientRect();
      const scale = Math.min(1.6, (innerWidth - 32) / r.width, (innerHeight - 32) / r.height);
      frame.style.setProperty("--movie-scale", Math.max(1, scale));
      frame.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  btn.addEventListener("click", () => set(!document.body.classList.contains("movie-mode")));
  dim.addEventListener("click", () => set(false));
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") set(false);
  });
  if (video) video.addEventListener("ended", () => set(false));
}

function setupComments() {
  let uid = 0;
  document.querySelectorAll(".comment-board").forEach(el => {
    const board = el.dataset.board;
    const p = `cb${++uid}`;
    const periods = SITE.periods.map(n => `<option value="${n}">Period ${n}</option>`).join("");
    el.innerHTML = `
      <form class="cb-form" novalidate>
        <h3 class="cb-form-title">✍️ Add your voice</h3>
        <p class="cb-replying" hidden>↪ Replying to <strong></strong>
          <button type="button" class="cb-cancel-reply">✕ Cancel</button></p>
        <div class="cb-row">
          <label for="${p}-first">First name<input id="${p}-first" name="first" autocomplete="given-name" maxlength="40" required></label>
          <label for="${p}-last">Last name<input id="${p}-last" name="last" autocomplete="family-name" maxlength="40" required></label>
          <label for="${p}-period">Period<select id="${p}-period" name="period" required><option value="">Choose…</option>${periods}</select></label>
        </div>
        <label for="${p}-comment">Your response<textarea id="${p}-comment" name="comment" rows="6" maxlength="2000" required></textarea></label>
        <label class="cb-hp" aria-hidden="true">Website<input name="website" tabindex="-1" autocomplete="off"></label>
        <p class="cb-note">🔒 Only your first name and last initial are shown publicly. Posts appear after Mr. Booth approves them.</p>
        <button type="submit" class="btn">📨 Post</button>
        <p class="cb-status" role="status"></p>
      </form>
      <p class="cb-count" hidden></p>
      <div class="cb-posts" tabindex="0" role="region" aria-label="Posts" aria-live="polite"><p class="cb-empty">Loading posts…</p></div>`;

    const postsEl = el.querySelector(".cb-posts");
    const form = el.querySelector(".cb-form");
    const status = form.querySelector(".cb-status");
    const replying = form.querySelector(".cb-replying");
    let parent = "";

    const setReply = (id, name) => {
      parent = id;
      replying.hidden = !id;
      replying.querySelector("strong").textContent = name || "";
      if (id) form.comment.focus();
    };
    replying.querySelector(".cb-cancel-reply").addEventListener("click", () => setReply("", ""));

    ["first", "last", "period"].forEach(k => {
      const saved = store("bk-" + k);
      if (saved) form[k].value = saved;
    });

    if (!SITE.commentsUrl) {
      postsEl.innerHTML = `<p class="cb-empty">💤 The comment board isn’t connected yet. (Teacher: add the web app URL in <code>js/site.js</code>.)</p>`;
      form.querySelector("button[type=submit]").disabled = true;
      return;
    }

    const renderPost = post => {
      const div = document.createElement("article");
      div.className = "cb-post" + (post.teacher ? " cb-teacher" : "");
      const head = document.createElement("p");
      head.className = "cb-meta";
      const name = document.createElement("strong");
      name.textContent = post.name;
      head.append(name, post.teacher ? " · ⭐ Model Response" : ` · Period ${post.period}`);
      if (post.time) head.append(` · ${new Date(post.time).toLocaleDateString()}`);
      const body = document.createElement("p");
      body.className = "cb-text";
      body.textContent = post.comment;
      div.append(head, body);
      if (!post.parent) {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "cb-reply-btn";
        btn.textContent = "↪ Reply";
        btn.addEventListener("click", () => setReply(post.id, post.name));
        div.append(btn);
      }
      return div;
    };

    const load = () => fetch(`${SITE.commentsUrl}?board=${encodeURIComponent(board)}`)
      .then(r => r.json())
      .then(data => {
        if (!data.ok) throw new Error();
        postsEl.innerHTML = "";
        const count = el.querySelector(".cb-count");
        count.hidden = !data.posts.length;
        count.textContent = `💬 ${data.posts.length} post${data.posts.length === 1 ? "" : "s"}`;
        const tops = data.posts.filter(x => !x.parent).sort((a, b) => (b.teacher ? 1 : 0) - (a.teacher ? 1 : 0));
        if (!tops.length) {
          postsEl.innerHTML = `<p class="cb-empty">No posts yet. Be the first! 🌟</p>`;
          return;
        }
        tops.forEach(t => {
          const thread = renderPost(t);
          const replies = data.posts.filter(x => x.parent === t.id);
          if (replies.length) {
            const wrap = document.createElement("div");
            wrap.className = "cb-replies";
            replies.forEach(r => wrap.append(renderPost(r)));
            thread.append(wrap);
          }
          postsEl.append(thread);
        });
      })
      .catch(() => { postsEl.innerHTML = `<p class="cb-empty">⚠️ Couldn’t load posts right now. Try refreshing.</p>`; });

    form.addEventListener("submit", e => {
      e.preventDefault();
      const missing = ["first", "last", "period", "comment"].find(k => !form[k].value.trim());
      if (missing) {
        status.textContent = "⚠️ Please fill in your first name, last name, period, and response.";
        form[missing].focus();
        return;
      }
      ["first", "last", "period"].forEach(k => store("bk-" + k, form[k].value.trim()));
      const btn = form.querySelector("button[type=submit]");
      btn.disabled = true;
      status.textContent = "Sending…";
      fetch(SITE.commentsUrl, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          board, parent,
          first: form.first.value, last: form.last.value,
          period: form.period.value, comment: form.comment.value,
          website: form.website.value,
        }),
      })
        .then(r => r.json())
        .then(data => {
          if (!data.ok) throw new Error(data.error);
          form.comment.value = "";
          setReply("", "");
          status.textContent = "✅ Thanks! Your post will appear once Mr. Booth approves it.";
        })
        .catch(err => { status.textContent = "⚠️ " + (err.message || "Something went wrong. Please try again."); })
        .finally(() => { btn.disabled = false; });
    });

    load();
  });
}

buildChrome();
buildJourney();
setupEntries();
setupTools();
setupReadAloud();
setupVocab();
setupOrganizer();
setupSort();
setupFlashcards();
setupLoadedLanguage();
setupAnticipation();
setupHighlighter();
setupMovieMode();
setupComments();
