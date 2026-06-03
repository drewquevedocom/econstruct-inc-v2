/* ============================================================================
   chrome.js — injects the shared utility bar, header (with real econstruct
   nav), mobile drawer, and footer into every page. Keeps navigation identical
   site-wide. Set <body data-nav="services|projects|blog|reviews|about|contact">
   to highlight the active top-level item.
   ============================================================================ */
(function () {
  var HOME = "Econstruct Homepage.html";
  var PHONE = "(310) 820-0673", TEL = "3108200673";
  var EMAIL = "info@econstructinc.com";

  // ---- icons --------------------------------------------------------------
  var I = {
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    chev: '<svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" width="26" height="26"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" width="26" height="26"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
    fb: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z"/></svg>',
    x: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.24 2H21.5l-7.13 8.15L22.75 22h-6.56l-5.14-6.72L5.17 22H1.9l7.62-8.71L1.25 2h6.73l4.64 6.14L18.24 2zm-1.15 18h1.82L7 3.9H5.06L17.09 20z"/></svg>',
    li: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>',
    ig: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 3.68a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-10.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg>',
    yt: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.51A3.02 3.02 0 0 0 .5 6.2C0 8.07 0 12 0 12s0 3.93.5 5.8a3.02 3.02 0 0 0 2.12 2.14c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z"/></svg>'
  };

  // ---- nav model ----------------------------------------------------------
  var NAV = [
    { key: "industries", label: "Industries", wide: true, groups: [
      { h: "Restaurant Construction", links: [
        ["Restaurant Construction", "#"],
        ["Fast Casual Construction", "#", true],
        ["Casual-Dining Construction", "#", true],
        ["Bar Construction", "#", true] ] },
      { h: "Residential Construction", links: [
        ["Residential Construction", "#"],
        ["Luxury Home Builders", "#", true],
        ["ADU Construction", "#", true],
        ["Tiny Homes", "#", true],
        ["Hillside Lift Construction", "#", true] ] },
      { h: "Commercial", links: [
        ["Retail Construction", "#"],
        ["Office TI Construction", "#"],
        ["Food Manufacturing Plants", "#"] ] }
    ]},
    { key: "services", label: "Services", menu: [
      ["Architectural Design", "#"],
      ["Construction Management", "#"],
      ["General Contracting", "Services.html"],
      ["Entitlement/Expediting", "#"],
      ["Equipment Procurement", "#"],
      ["Interior Design", "#"],
      ["Lease Negotiation", "#"] ] },
    { key: "company", label: "Our Company", menu: [
      ["About Us", "About.html"],
      ["Blogs", "Blog.html"],
      ["Case Studies", "#"],
      ["Our Work", "Project.html"] ] },
    { key: "videos", label: "Videos", href: "#" },
    { key: "reviews", label: "Reviews", href: "Reviews.html" },
    { key: "contact", label: "Contact Us", href: "Contact.html" }
  ];

  var active = document.body.getAttribute("data-nav") || "";

  // ---- build header -------------------------------------------------------
  function navItem(it) {
    var cur = it.key === active ? ' aria-current="page"' : '';
    if (it.href) {
      return '<div class="nav__item"><a class="nav__link" href="' + it.href + '"' + cur + '>' + it.label + '</a></div>';
    }
    var menu;
    if (it.wide) {
      menu = '<div class="nav__menu nav__menu--wide">' + it.groups.map(function (g) {
        return '<div class="nav__group"><div class="nav__group-h">' + g.h + '</div>' +
          g.links.map(function (l) { return '<a class="' + (l[2] ? 'sub' : '') + '" href="' + l[1] + '">' + l[0] + '</a>'; }).join('') + '</div>';
      }).join('') + '</div>';
    } else {
      menu = '<div class="nav__menu">' + it.menu.map(function (l) { return '<a href="' + l[1] + '">' + l[0] + '</a>'; }).join('') + '</div>';
    }
    return '<div class="nav__item has-menu"><button class="nav__link"' + cur + ' aria-haspopup="true">' + it.label + I.chev + '</button>' + menu + '</div>';
  }

  var headerHTML =
    '<div class="utility"><div class="wrap">' +
      '<div class="util-left">' +
        '<a href="tel:' + TEL + '">' + I.phone + PHONE + '</a>' +
        '<a href="mailto:' + EMAIL + '">' + I.mail + EMAIL + '</a>' +
      '</div>' +
      '<div class="util-right">' +
        '<span class="u">' + I.pin + '25350 Magic Mountain Pkwy, Ste. 300, Valencia</span>' +
        '<span class="u-sep"></span>' +
        '<a href="#">Careers</a>' +
      '</div>' +
    '</div></div>' +
    '<header class="site-header" id="siteHeader"><div class="wrap">' +
      '<a class="brand" href="' + HOME + '" aria-label="econstruct home">' +
        '<span class="brand__mark"><img class="brand__sq" src="assets/logos/econ-red-square.png" alt="" /><img class="brand__e" src="assets/logos/econ-e-white.png" alt="" /></span>' +
        '<img class="brand__word" src="assets/logos/econ-construct-word.png" alt="econstruct" />' +
      '</a>' +
      '<nav class="nav" aria-label="Primary">' + NAV.map(navItem).join('') + '</nav>' +
      '<div class="header-cta">' +
        '<a class="btn btn--primary" href="Contact.html">Free Consultation <span class="arr" aria-hidden="true">→</span></a>' +
        '<button class="nav-toggle" id="navToggle" aria-label="Open menu" aria-expanded="false">' + I.menu + '</button>' +
      '</div>' +
    '</div></header>';

  // ---- build drawer -------------------------------------------------------
  function drawerRows() {
    return NAV.map(function (it) {
      if (it.href) return '<div class="drawer__row"><a class="drawer__link" href="' + it.href + '">' + it.label + '</a></div>';
      var subs;
      if (it.wide) {
        subs = it.groups.map(function (g) {
          return '<a href="' + (g.links[0][1]) + '">' + g.h + '</a>' +
            g.links.slice(1).map(function (l) { return '<a href="' + l[1] + '" style="opacity:.75;padding-left:14px">' + l[0] + '</a>'; }).join('');
        }).join('');
      } else {
        subs = it.menu.map(function (l) { return '<a href="' + l[1] + '">' + l[0] + '</a>'; }).join('');
      }
      return '<div class="drawer__row"><button class="drawer__link">' + it.label + I.chev + '</button><div class="drawer__sub">' + subs + '</div></div>';
    }).join('');
  }

  var drawerHTML =
    '<div class="drawer" id="drawer">' +
      '<div class="drawer__scrim" data-close></div>' +
      '<div class="drawer__panel">' +
        '<div class="drawer__head"><img src="assets/logos/econ-lockup.png" alt="econstruct" />' +
          '<button class="drawer__close" data-close aria-label="Close menu">' + I.close + '</button></div>' +
        '<div class="drawer__nav">' + drawerRows() + '</div>' +
        '<a class="btn btn--primary" href="Contact.html" data-close>Free Consultation <span class="arr" aria-hidden="true">→</span></a>' +
      '</div>' +
    '</div>';

  // ---- build footer -------------------------------------------------------
  var footerHTML =
    '<footer class="footer"><div class="wrap">' +
      '<div class="footer__top">' +
        '<div class="footer__brand">' +
          '<img src="assets/logos/econ-lockup-dark.png" alt="econstruct" />' +
          '<p>West LA\u2019s premier restaurant &amp; luxury home construction company. Over 50 years of combined partner experience building exceptional spaces to live, work, shop and eat.</p>' +
          '<div class="footer__social">' +
            '<a href="#" aria-label="Facebook">' + I.fb + '</a>' +
            '<a href="#" aria-label="X">' + I.x + '</a>' +
            '<a href="#" aria-label="LinkedIn">' + I.li + '</a>' +
            '<a href="#" aria-label="Instagram">' + I.ig + '</a>' +
            '<a href="#" aria-label="YouTube">' + I.yt + '</a>' +
          '</div>' +
        '</div>' +
        '<div class="footer__col"><h4>Company</h4><ul>' +
          '<li><a href="About.html">About Us</a></li>' +
          '<li><a href="Blog.html">Blogs</a></li>' +
          '<li><a href="#">Case Studies</a></li>' +
          '<li><a href="#">Careers</a></li>' +
          '<li><a href="Contact.html">Contact Us</a></li>' +
          '<li><a href="#">FAQ</a></li>' +
          '<li><a href="Project.html">Our Work</a></li>' +
          '<li><a href="#">Privacy Policy</a></li>' +
        '</ul></div>' +
        '<div class="footer__col"><h4>Services</h4><ul>' +
          '<li><a href="#">Architectural Design</a></li>' +
          '<li><a href="#">Construction Management</a></li>' +
          '<li><a href="Services.html">General Contracting</a></li>' +
          '<li><a href="#">Entitlement/Expediting</a></li>' +
          '<li><a href="#">Equipment Procurement</a></li>' +
          '<li><a href="#">Interior Design</a></li>' +
          '<li><a href="#">Lease Negotiation</a></li>' +
          '<li><a href="#">Turn-Key Build Outs</a></li>' +
        '</ul></div>' +
        '<div class="footer__col"><h4>Get in touch</h4>' +
          '<div class="footer__contact-item">' + I.pin + '<span>25350 Magic Mountain Pkwy, Ste. 300<br>Valencia, CA 91355</span></div>' +
          '<div class="footer__contact-item">' + I.phone + '<a href="tel:' + TEL + '">' + PHONE + '</a></div>' +
          '<div class="footer__contact-item">' + I.mail + '<a href="mailto:' + EMAIL + '">' + EMAIL + '</a></div>' +
          '<div class="footer__contact-item" style="margin-top:6px"><span style="color:var(--c-stone)">CA License #964015</span></div>' +
        '</div>' +
      '</div>' +
      '<div class="footer__bottom">' +
        '<span>\u00a9 2024\u201326 econstruct Inc. All rights reserved.</span>' +
        '<div class="links">' +
          '<a href="Services.html">Services</a><a href="Project.html">Our Work</a>' +
          '<a href="Reviews.html">Reviews</a><a href="About.html">About</a>' +
          '<a href="Contact.html">Contact</a><a href="#">Privacy Policy</a>' +
        '</div>' +
      '</div>' +
    '</div></footer>';

  // ---- inject -------------------------------------------------------------
  var headTpl = document.createElement("template");
  headTpl.innerHTML = headerHTML + drawerHTML;
  document.body.insertBefore(headTpl.content, document.body.firstChild);

  var footTpl = document.createElement("template");
  footTpl.innerHTML = footerHTML;
  document.body.appendChild(footTpl.content);

  // ---- wire interactions --------------------------------------------------
  var header = document.getElementById("siteHeader");
  function onScroll() { header.classList.toggle("scrolled", window.scrollY > 8); }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  var drawer = document.getElementById("drawer");
  var toggle = document.getElementById("navToggle");
  toggle.addEventListener("click", function () { drawer.classList.add("open"); toggle.setAttribute("aria-expanded", "true"); document.body.style.overflow = "hidden"; });
  drawer.addEventListener("click", function (e) {
    if (e.target.closest("[data-close]")) { drawer.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); document.body.style.overflow = ""; }
  });
  drawer.querySelectorAll(".drawer__link").forEach(function (btn) {
    if (btn.tagName !== "BUTTON") return;
    btn.addEventListener("click", function () { btn.parentElement.classList.toggle("open"); });
  });

  // fade-up reveal (shared)
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) { if (entry.isIntersecting) { entry.target.classList.add("in"); io.unobserve(entry.target); } });
  }, { threshold: 0.12, rootMargin: "0px 0px -7% 0px" });
  document.querySelectorAll(".fade-up").forEach(function (el) { io.observe(el); });

  // ---- Animated favicon ---------------------------------------------------
  // The red blueprint square stays still; only the white "e" gives a small 8°
  // rotation every ~22s, then settles — mirroring the header mark.
  (function animatedFavicon() {
    var link = document.querySelector('link[rel="icon"]');
    if (!link) { link = document.createElement("link"); link.rel = "icon"; document.head.appendChild(link); }
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var size = 64;
    var cv = document.createElement("canvas"); cv.width = size; cv.height = size;
    var c = cv.getContext("2d");
    var sq = new Image(), e = new Image();
    var loaded = 0;
    sq.src = "assets/logos/econ-red-square.png";
    e.src = "assets/logos/econ-e-white.png";

    function render(angle) {
      c.clearRect(0, 0, size, size);
      // static red square (contain)
      var sr = sq.width / sq.height, sw = size, sh = size;
      if (sr >= 1) { sw = size; sh = size / sr; } else { sh = size; sw = size * sr; }
      c.drawImage(sq, (size - sw) / 2, (size - sh) / 2, sw, sh);
      // white "e" rotated about centre
      c.save();
      c.translate(size / 2, size / 2);
      c.rotate(angle * Math.PI / 180);
      var ew = size * 0.66, eh = ew * (e.height / e.width);
      c.drawImage(e, -ew / 2, -eh / 2, ew, eh);
      c.restore();
      try { link.href = cv.toDataURL("image/png"); } catch (err) {}
    }
    function easeInOut(t) { return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2; }
    function animate(from, to, dur) {
      return new Promise(function (resolve) {
        var start = null;
        function step(ts) {
          if (start === null) start = ts;
          var t = Math.min((ts - start) / dur, 1);
          render(from + (to - from) * easeInOut(t));
          if (t < 1) requestAnimationFrame(step); else resolve();
        }
        requestAnimationFrame(step);
      });
    }
    var running = false;
    function nudge() {
      if (running || document.hidden) return;
      running = true;
      animate(0, 8, 700)                                  // rotate 8°
        .then(function () { return animate(8, 0, 800); }) // settle back, then stop
        .then(function () { running = false; });
    }
    function ready() {
      if (++loaded < 2) return;
      render(0);
      if (reduce) return;
      setTimeout(nudge, 4000);          // first nudge shortly after load
      setInterval(nudge, 22000);        // then ~every 22s
    }
    sq.onload = ready; e.onload = ready;
  })();
})();
