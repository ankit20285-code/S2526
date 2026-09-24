// ==================================================
// ADD / EDIT YOUR MEMORIES HERE
// ==================================================
// Each { ... } block is one memory. The ORDER of blocks = the order on the timeline.
//
// To ADD another memory: copy a block, paste it wherever you want it, change the text.
// To REMOVE one: delete its whole { ... } block (and its trailing comma).
// To REORDER: cut and paste blocks into a new order.
//
// Every field is optional (date, title, image, description, style).
// If you leave one out (or set it to ""), the layout adapts.
// style: "standard" | "polaroid" | "cinematic" | "portrait" | "wide" | "collage"
// collage takes two photos:  image: ["assets/images/a.jpg", "assets/images/b.jpg"]
// Optional alt text for screen readers:  alt: "Describe the photo"
//
// Optional CHAPTER divider (a full-screen title). Delete these if you don't want chapters:
//   { type: "chapter", title: "ADD CHAPTER TITLE", subtitle: "ADD SUBTITLE", image: "assets/images/portrait.jpg" },
// A chapter's image is optional: it appears as a round portrait above the title. Remove the
// image line to hide it. Put your file at assets/images/portrait.jpg (or change the path).

const memories = [
    { type: "chapter", title: "DIVYA NARAYAN", subtitle: "2008 - TODAY", image: "assets/images/portrait3.jpg" },

    {
        date: "September 25, 2008; 9:14AM",
        title: "Divya Narayan",
        image: "assets/images/memory-01.jpg",
        description: "Birth of a princess",
        style: "standard"
    },
    {
        // date: "ADD DATE",
        title: "Badtamiz DivyA",
        image: "assets/images/memory-02.jpg",
        description: "DivyA just being DivyA",
        style: "polaroid"
    },
    {
        // date: "ADD DATE",
        title: "Parhaku Bacchi",
        image: "assets/images/memory-03.jpg",
        description: "Pedayeshi Topper",
        style: "cinematic"
    },
    {
        // date: "ADD DATE",
        // title: "ADD TITLE",
        image: "assets/images/memory-04.jpg",
        // description: "ADD DESCRIPTION",
        style: "portrait"
    },
    {
        // date: "ADD DATE",
        // title: "ADD TITLE",
        image: ["assets/images/memory-05.jpg",
            "assets/images/memory-06.jpg"],
        // description: "ADD DESCRIPTION", 
        style: "collage"
    },
    {
        // date: "ADD DATE",
        // title: "ADD TITLE",
        image: "assets/images/memory-09.jpg",
        // description: "ADD DESCRIPTION",
        style: "cinematic"
    },
    {
        // date: "ADD DATE",
        image: "assets/images/memory-07.jpg",
        style: "wide"
    },
    {
        // date: "ADD DATE",
        // title: "ADD TITLE",
        image: "assets/images/memory-08.jpg",
        // description: "ADD DESCRIPTION",
        style: "standard"
    },
    {
        // date: "ADD DATE",
        // title: "ADD TITLE",
        image: "assets/images/memory-10.jpg",
        // description: "ADD DESCRIPTION",
        style: "portrait"
    },
    {
        // date: "ADD DATE",
        // title: "ADD TITLE",
        image: "assets/images/memory-11.jpg",
        // description: "ADD DESCRIPTION",
        style: "polaroid"
    },
    {
        // date: "ADD DATE",
        // title: "ADD TITLE",
        image: "assets/images/memory-12.jpg",
        // description: "ADD DESCRIPTION",
        style: "portrait"
    },
    {
        // date: "ADD DATE",
        // title: "ADD TITLE",
        image: "assets/images/memory-13.jpg",
        // description: "ADD DESCRIPTION",
        style: "portrait"
    },
    {
        // date: "ADD DATE",
        // title: "ADD TITLE",
        image: "assets/images/memory-14.jpg",
        // description: "ADD DESCRIPTION",
        style: "standard"
    },
    {
        // date: "ADD DATE",
        // title: "ADD TITLE",
        image: "assets/images/memory-15.jpg",
        // description: "ADD DESCRIPTION",
        style: "standard"
    },
    {
        // date: "ADD DATE",
        // title: "ADD TITLE",
        image: "assets/images/memory-16.jpg",
        // description: "ADD DESCRIPTION",
        style: "potrait"
    },
    {
        // date: "ADD DATE",
        // title: "ADD TITLE",
        image: "assets/images/memory-17.jpg",
        // description: "ADD DESCRIPTION",
        style: "standard"
    },
    {
        // date: "ADD DATE",
        // title: "ADD TITLE",
        image: "assets/images/memory-18.jpg",
        // description: "ADD DESCRIPTION",
        style: "standard"
    },
    {
        // date: "ADD DATE",
        // title: "ADD TITLE",
        image: "assets/images/memory-19.jpg",
        // description: "ADD DESCRIPTION",
        style: "standard"
    },
    {
        // date: "ADD DATE",
        // title: "ADD TITLE",
        image: "assets/images/memory-20.jpg",
        // description: "ADD DESCRIPTION",
        style: "potrait"
    },
    {
        // date: "ADD DATE",
        // title: "ADD TITLE",
        image: "assets/images/memory-21.jpg",
        // description: "ADD DESCRIPTION",
        style: "standard"
    },
    {
        // date: "ADD DATE",
        // title: "ADD TITLE",
        image: "assets/images/memory-22.jpg",
        // description: "ADD DESCRIPTION",
        style: "cinematic"
    },
    {
        // date: "ADD DATE",
        // title: "ADD TITLE",
        image: "assets/images/memory-23.jpg",
        // description: "ADD DESCRIPTION",
        style: "potrait"
    },
    {
        // date: "ADD DATE",
        // title: "PRESENT", 
        image: "assets/images/memory-24.jpg",
        // description: "2026's DivyA",
        style: "potrait"
    },
    { date: "September 19, 2026", title: "PRESENT", image: "assets/images/memory-25.jpg", description: "2026's DivyA", style: "potrait" },
    { date: "September 25, 2026", title: "TODAY", image: "assets/images/memory-26.jpg", description: "2026's DivyA", style: "potrait" }
];

// ==================================================
// EDIT FINAL BIRTHDAY MESSAGE HERE
// ==================================================
const finalMessage = {
    lead: "And this was a transformation of DivyA from a baby to a baby",
    title: "Happy Birthday",
    subtitle: "DIVYA NARAYAN",
    message: "Always stay happy, calm and achieve everything that you want in your life"   // line breaks: use \n
};

// ==================================================
// MUSIC SETTINGS
// ==================================================
const musicSettings = {
    source: "assets/audio/music.mp3",
    title: "DivyA Special"
};

// ==================================================
// OPTIONAL: HIDDEN STARS (easter eggs)
// ==================================================
const secretMessage = "You found a little secret.";
const secretSpots = [[14, 9], [82, 30], [10, 58], [88, 84]];   // [left %, top %] along the timeline. Use [] for none.


// ==================================================
// WEBSITE LOGIC — you don't need to edit anything below
// ==================================================
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const tl = $('#timeline');
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const el = (t, c, x) => { const e = document.createElement(t); if (c) e.className = c; if (x) e.textContent = x; return e; };

// ---------- timeline ----------
function photo(src, m) {
    const b = el('button', 'ph');
    b.type = 'button';
    b.setAttribute('aria-label', 'Open photo' + (m.title ? ': ' + m.title : ''));
    const img = new Image();
    img.loading = 'lazy'; img.decoding = 'async'; img.src = src;
    img.alt = m.alt || m.title || m.description || 'A memory photograph';
    img.onerror = () => { img.remove(); b.classList.add('miss'); b.append('Photo goes here\n' + src); };
    b.append(img);
    b.onclick = () => { if (!b.classList.contains('miss')) openLB(img.src, m, b); };
    return b;
}

function build() {
    let n = 0;
    memories.forEach(m => {
        if (m.type === 'chapter') {
            const s = el('section', 'chap reveal stg');
            if (m.image) {
                const w = el('div', 'chap-img'), img = new Image();
                img.loading = 'lazy'; img.decoding = 'async'; img.src = m.image; img.alt = m.alt || m.title || 'Portrait';
                img.onerror = () => { img.remove(); w.classList.add('miss'); w.append('Photo goes here\n' + m.image); };
                w.append(img); s.append(w);
            }
            s.append(el('h2', '', m.title), el('p', '', m.subtitle));
            tl.append(s);
            return;
        }
        n++;
        const st = m.style || 'standard';
        const mem = el('article', `mem reveal ${st} ${n % 2 ? 'l' : 'r'}`);
        if (n === 1) mem.id = 'photos';
        const card = el('div', 'card'), fig = el('div', 'fig');
        [].concat(m.image || []).slice(0, st === 'collage' ? 2 : 1).forEach(src => fig.append(photo(src, m)));
        const meta = el('div', 'meta stg');
        if (m.date) meta.append(el('time', 'date', m.date));
        if (m.title) meta.append(el('h3', '', m.title));
        if (m.description) meta.append(el('p', '', m.description));
        if (fig.children.length) card.append(fig);
        if (meta.children.length) card.append(meta);
        mem.append(el('i', 'node'), card);
        tl.append(mem);
    });
    secretSpots.forEach(([x, y]) => {
        const s = el('button', 'star');
        s.type = 'button'; s.setAttribute('aria-label', 'A tiny glowing star');
        s.style.left = x + '%'; s.style.top = y + '%';
        s.onclick = () => { toast(secretMessage); s.style.display = 'none'; };
        tl.append(s);
    });
    $('#e-lead').textContent = finalMessage.lead || '';
    $('#e-title').textContent = finalMessage.title;
    $('#e-sub').textContent = finalMessage.subtitle;
    $('#e-msg').textContent = finalMessage.message;
    $('#waves').innerHTML = [1, 2, 3].map(i => `<svg class="w w${i}" viewBox="0 0 1440 120" preserveAspectRatio="none"><path d="M0 60C180 20 540 100 720 60S1260 100 1440 60V120H0Z"/></svg>`).join('');
}
build();

// ---------- fade the timeline line out behind chapter titles ----------
function maskLine() {
    const line = $('.line'), H = tl.offsetHeight;
    const g = ['transparent 0', `#000 ${H * 0.04}px`];
    $$('.chap').forEach(c => {
        const a = c.offsetTop + c.offsetHeight * 0.2, b = c.offsetTop + c.offsetHeight * 0.8;
        g.push(`#000 ${a - 60}px`, `transparent ${a}px`, `transparent ${b}px`, `#000 ${b + 60}px`);
    });
    g.push(`#000 ${H * 0.88}px`, `transparent ${H}px`);
    line.style.webkitMaskImage = line.style.maskImage = `linear-gradient(to bottom,${g.join(',')})`;
}
maskLine();
addEventListener('load', maskLine);
addEventListener('resize', maskLine);

// ---------- reveal on scroll ----------
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); }),
    { rootMargin: '0px 0px -22% 0px', threshold: 0.12 });
$$('.reveal').forEach(x => io.observe(x));

// ---------- scroll progress, background shift, line fill ----------
let ticking = false, replaying = false;
function onScroll() {
    if (ticking) return; ticking = true;
    requestAnimationFrame(() => {
        ticking = false;
        const h = document.documentElement.scrollHeight - innerHeight, p = h > 0 ? scrollY / h : 0;
        document.body.style.setProperty('--p', p.toFixed(3));
        $('#prog i').style.top = (p * 100) + '%';
        const r = tl.getBoundingClientRect();
        $('.line b').style.height = Math.max(0, Math.min(r.height, innerHeight * 0.5 - r.top)) + 'px';
        if (replaying && scrollY < 40) { replaying = false; $$('.reveal').forEach(x => x.classList.remove('in')); }
    });
}
addEventListener('scroll', onScroll, { passive: true });

// ---------- music ----------
const au = new Audio(musicSettings.source);
au.loop = true; au.preload = 'auto'; au.volume = 0;
let vol = 0.6, on = false;
$('#mt').textContent = '♫ ' + musicSettings.title;
const setBtn = () => { const b = $('#pp'); b.textContent = on ? '❚❚' : '▶'; b.setAttribute('aria-label', on ? 'Pause music' : 'Play music'); };
function fade(to, ms) {
    const from = au.volume, t0 = performance.now();
    (function step(t) { const k = Math.min(1, (t - t0) / ms); au.volume = from + (to - from) * k; if (k < 1) requestAnimationFrame(step); })(t0);
}
$('#pp').onclick = () => {
    on = !on;
    if (on) { au.play().catch(() => { }); fade(vol, 1200); }
    else { fade(0, 500); setTimeout(() => { if (!on) au.pause(); }, 520); }
    setBtn();
};
$('#vol').oninput = e => { vol = +e.target.value; if (on) au.volume = vol; };
au.ontimeupdate = () => { $('#pb').style.width = (au.duration ? au.currentTime / au.duration * 100 : 0) + '%'; };

// ---------- lightbox ----------
const lb = $('#lb'); let lastFocus;
function openLB(src, m, from) {
    lastFocus = from;
    const img = $('#lb img'); img.src = src; img.alt = m.alt || m.title || 'Memory photograph';
    $('#lb time').textContent = m.date || ''; $('#lb h3').textContent = m.title || ''; $('#lb p').textContent = m.description || '';
    lb.hidden = false;
    requestAnimationFrame(() => { lb.classList.add('open'); $('.x').focus(); });
}
function closeLB() {
    lb.classList.remove('open');
    setTimeout(() => { lb.hidden = true; }, 450);
    if (lastFocus) lastFocus.focus();
}
lb.onclick = e => { if (e.target === lb || e.target.closest('.x')) closeLB(); };
addEventListener('keydown', e => { if (e.key === 'Escape' && !lb.hidden) closeLB(); });

// ---------- toast ----------
let tt;
function toast(t) { const e = $('#toast'); e.textContent = t; e.classList.add('show'); clearTimeout(tt); tt = setTimeout(() => e.classList.remove('show'), 2800); }

// ---------- floating dust ----------
const cv = $('#fx'), cx = cv.getContext('2d'); let W, H, P = [];
function resize() {
    W = cv.width = innerWidth; H = cv.height = innerHeight;
    P = Array.from({ length: W < 700 ? 26 : 55 }, () => ({ x: Math.random() * W, y: Math.random() * H, r: Math.random() * 1.3 + 0.3, s: Math.random() * 0.25 + 0.05, a: Math.random() * 6.28 }));
}
function draw(t) {
    cx.clearRect(0, 0, W, H); cx.fillStyle = '#e9e2f5';
    for (const p of P) {
        if (!reduced) { p.y -= p.s; p.x += Math.sin(t / 3000 + p.a) * 0.15; if (p.y < -4) p.y = H + 4; }
        cx.globalAlpha = 0.2 + 0.4 * Math.sin(t / 1400 + p.a) ** 2;
        cx.beginPath(); cx.arc(p.x, p.y, p.r, 0, 6.28); cx.fill();
    }
    if (!reduced) requestAnimationFrame(draw);
}
addEventListener('resize', () => { resize(); onScroll(); });
resize(); requestAnimationFrame(draw);

// ---------- begin / replay ----------
$('#begin').onclick = () => {
    on = true; au.play().catch(() => { }); fade(vol, 3000);
    $('#player').hidden = false; setBtn();
    $('#intro').classList.add('out');
    document.body.classList.remove('locked');
    scrollTo(0, 0); onScroll();
    setTimeout(() => { $('#intro').style.display = 'none'; }, 1500);
};
$('#replay').onclick = () => { replaying = true; scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' }); };
