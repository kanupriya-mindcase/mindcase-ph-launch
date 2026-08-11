/* Shared top nav + tab bar + theme toggle + persistent checklists.
   Each page sets <body data-page="playbook|warmup|communities|assets|audience|launch|post">. */
(function () {
  // Apply saved theme ASAP (before paint where possible)
  try { var t = localStorage.getItem("phwd-theme"); if (t) document.documentElement.setAttribute("data-theme", t); } catch (e) {}

  const TABS = [
    { id: "playbook",    label: "Playbook",    href: "index.html" },
    { id: "warmup",      label: "Warm-up",     href: "warmup.html" },
    { id: "hunters",     label: "Hunters",     href: "hunters.html" },
    { id: "communities", label: "Communities", href: "communities.html" },
    { id: "assets",      label: "Assets",      href: "assets.html" },
    { id: "audience",    label: "Audience",    href: "audience.html" },
    { id: "launch",      label: "Launch Day",  href: "launch-day.html" },
    { id: "post",        label: "Post-Launch", href: "post-launch.html" }
  ];
  const current = document.body.dataset.page || "playbook";

  const phLogo = `
    <svg class="ph-logo" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" aria-label="Product Hunt">
      <g fill="none" fill-rule="evenodd">
        <path fill="#FF6154" d="M40 20c0 11.046-8.954 20-20 20S0 31.046 0 20 8.954 0 20 0s20 8.954 20 20"/>
        <path fill="#FFF" d="M22.667 20H17v-6h5.667a3 3 0 0 1 0 6m0-10H13v20h4v-6h5.667a7 7 0 1 0 0-14"/>
      </g>
    </svg>`;

  const tabsHtml = TABS.map(t =>
    `<a class="tab${t.id === current ? " active" : ""}" href="${t.href}">${t.label}</a>`
  ).join("");

  const root = document.getElementById("app-nav");
  if (root) {
    root.innerHTML = `
      <div class="topbar">
        <div class="nav-in">
          <div class="nav-top">
            <div class="nav-brand">
              ${phLogo}
              <div>
                <h1>Product Hunt Launch Cockpit</h1>
                <div class="sub">Mindcase · launcher <b>@kritish</b></div>
              </div>
            </div>
            <button id="themeToggle" class="theme-toggle" type="button" aria-label="Switch light or dark theme"></button>
          </div>
          <nav class="tabs">${tabsHtml}</nav>
        </div>
      </div>`;

    // ---- Theme toggle ----
    const SUN = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5 5l1.4 1.4M17.6 17.6 19 19M19 5l-1.4 1.4M6.4 17.6 5 19"/></svg>`;
    const MOON = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z"/></svg>`;
    const KEY = "phwd-theme";
    const toggle = document.getElementById("themeToggle");
    function effective(){
      const set = document.documentElement.getAttribute("data-theme");
      if (set) return set;
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    function setIcon(){ toggle.innerHTML = effective() === "dark" ? SUN : MOON; }
    setIcon();
    toggle.addEventListener("click", function(){
      const next = effective() === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try { localStorage.setItem(KEY, next); } catch(e){}
      setIcon();
    });
  }

  /* Persistent checklists: any <li> inside .checklist with a data-key is remembered. */
  window.initChecklists = function () {
    document.querySelectorAll(".checklist li[data-key]").forEach(li => {
      const key = "phcl:" + li.dataset.key;
      const cb = li.querySelector("input[type=checkbox]");
      if (!cb) return;
      const saved = localStorage.getItem(key) === "1";
      cb.checked = saved;
      li.classList.toggle("checked", saved);
      cb.addEventListener("change", () => {
        localStorage.setItem(key, cb.checked ? "1" : "0");
        li.classList.toggle("checked", cb.checked);
      });
    });
  };
  document.addEventListener("DOMContentLoaded", window.initChecklists);
  if (document.readyState !== "loading") window.initChecklists();
})();
