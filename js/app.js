const PAGE_SIZE = 9;
const FAV_KEY = "andes-favs";

const ICONS = {
  logo: `<svg viewBox="0 0 36 28" fill="none" aria-hidden="true"><path d="M4 24 L14 8 L20 16 L24 10 L32 24 Z" fill="white"/><path d="M10 24 L18 12 L26 24" fill="#8ec8e6"/></svg>`,
  user: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="3.5"/><path d="M5 19c1.5-3.2 4-5 7-5s5.5 1.8 7 5"/></svg>`,
  search: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>`,
  pin: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.2"/></svg>`,
  star: `<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3.6l2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 16.8 6.2 18.5l.9-5.4L3.2 9.3l5.4-.8z"/></svg>`,
  heart: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><path d="M12 20s-7-4.4-9.2-8.2C.8 8.6 2.2 5 6 5c2 0 3.2 1 4 2 0.8-1 2-2 4-2 3.8 0 5.2 3.6 3.2 6.8C19 15.6 12 20 12 20z"/></svg>`,
  arrow: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`
};

function getFavs() {
  try {
    return JSON.parse(localStorage.getItem(FAV_KEY) || "[]");
  } catch {
    return [];
  }
}

function toggleFav(id) {
  const favs = getFavs();
  const next = favs.includes(id) ? favs.filter((x) => x !== id) : [...favs, id];
  localStorage.setItem(FAV_KEY, JSON.stringify(next));
  return next;
}

function header(active) {
  return `
    <header class="site-header">
      <div class="container header-inner">
        <a class="logo" href="index.html">${ICONS.logo} ANDES TRAVEL</a>
        <nav>
          <ul class="nav-links" id="navLinks">
            <li><a href="index.html" class="${active === "destinos" ? "active" : ""}">Destinos</a></li>
            <li><a href="paquetes.html" class="${active === "paquetes" ? "active" : ""}">Paquetes</a></li>
            <li><a href="servicios.html" class="${active === "servicios" ? "active" : ""}">Servicios</a></li>
            <li><a href="ofertas.html" class="${active === "ofertas" ? "active" : ""}">Ofertas</a></li>
            <li><a href="blog.html" class="${active === "blog" ? "active" : ""}">Blog</a></li>
            <li><a href="contacto.html" class="${active === "contacto" ? "active" : ""}">Contacto</a></li>
          </ul>
        </nav>
        <div class="header-actions" id="headerActions">
          <a class="btn btn-ghost" href="ingresar.html">${ICONS.user} Ingresar</a>
          <a class="btn btn-orange" href="registrarse.html">Registrarse</a>
        </div>
        <button class="menu-toggle" id="menuToggle" aria-label="Menú">☰</button>
      </div>
    </header>`;
}

function footer() {
  return `
    <footer class="site-footer">
      <div class="container footer-grid">
        <div class="footer-brand">
          <a class="logo" href="index.html">${ICONS.logo} ANDES TRAVEL</a>
          <p>Viajes inspiradores con experiencias auténticas y reservas seguras.</p>
          <div class="socials">
            <a href="#" aria-label="Instagram"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg></a>
            <a href="#" aria-label="Facebook"><svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h3l1-3h-4V10c0-.6.4-1 1-1z"/></svg></a>
            <a href="#" aria-label="X"><svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h5.2l4.1 5.8L17.8 3H21l-6.8 8.2L21.4 21h-5.2l-4.5-6.3L6 21H3l7.2-8.7z"/></svg></a>
          </div>
        </div>
        <div class="footer-col">
          <h4>Empresa</h4>
          <a href="servicios.html">Nosotros</a>
          <a href="blog.html">Blog</a>
          <a href="contacto.html">Contacto</a>
        </div>
        <div class="footer-col">
          <h4>Explora</h4>
          <a href="index.html">Destinos</a>
          <a href="paquetes.html">Paquetes</a>
          <a href="ofertas.html">Ofertas</a>
        </div>
        <div class="footer-col">
          <h4>Soporte</h4>
          <a href="contacto.html">Ayuda</a>
          <a href="contacto.html">Términos</a>
          <a href="contacto.html">Privacidad</a>
        </div>
      </div>
      <div class="container copyright">© 2026 Andes Travel. Todos los derechos reservados.</div>
    </footer>`;
}

function mountChrome(active) {
  const h = document.getElementById("site-header");
  const f = document.getElementById("site-footer");
  if (h) h.outerHTML = header(active);
  if (f) f.outerHTML = footer();
  const toggle = document.getElementById("menuToggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      document.getElementById("navLinks").classList.toggle("open");
      document.getElementById("headerActions").classList.toggle("open");
    });
  }
}

function syncRangeFill() {
  const min = document.getElementById("priceMin");
  const max = document.getElementById("priceMax");
  const fill = document.getElementById("rangeFill");
  const minL = document.getElementById("priceMinLabel");
  const maxL = document.getElementById("priceMaxLabel");
  if (!min || !max || !fill) return;
  let a = Number(min.value);
  let b = Number(max.value);
  if (a > b) [a, b] = [b, a];
  const span = 1400;
  fill.style.left = `${((a - 100) / span) * 100}%`;
  fill.style.width = `${((b - a) / span) * 100}%`;
  minL.textContent = `S/ ${a}`;
  maxL.textContent = `S/ ${b}`;
}

function collectDraft() {
  return {
    regiones: [...document.querySelectorAll("[name=region]:checked")].map((i) => i.value),
    duraciones: [...document.querySelectorAll("[name=duracion]:checked")].map((i) => i.value),
    calificacion: document.querySelector("[name=rating]:checked")?.value || "todas",
    min: Number(document.getElementById("priceMin").value),
    max: Number(document.getElementById("priceMax").value),
    q: document.getElementById("q").value.trim().toLowerCase(),
    sort: document.getElementById("sort").value
  };
}

function applyFilters(list, f) {
  return list.filter((d) => {
    if (f.regiones.length && !f.regiones.includes(d.region)) return false;
    if (f.duraciones.length && !f.duraciones.includes(d.duracion)) return false;
    if (f.calificacion === "4.5" && d.rating < 4.5) return false;
    if (f.calificacion === "4.0" && d.rating < 4.0) return false;
    const lo = Math.min(f.min, f.max);
    const hi = Math.max(f.min, f.max);
    if (d.precio < lo || d.precio > hi) return false;
    if (f.q) {
      const blob = `${d.nombre} ${d.region} ${d.lugar} ${d.desc}`.toLowerCase();
      if (!blob.includes(f.q)) return false;
    }
    return true;
  }).sort((a, b) => {
    if (f.sort === "precio-asc") return a.precio - b.precio;
    if (f.sort === "precio-desc") return b.precio - a.precio;
    if (f.sort === "rating") return b.rating - a.rating;
    return 0;
  });
}

function chipHtml(filters) {
  const chips = [];
  filters.regiones.forEach((r) => chips.push({ k: "region", v: r, t: r }));
  filters.duraciones.forEach((d) => chips.push({ k: "duracion", v: d, t: `${d} días` }));
  return chips
    .map(
      (c) =>
        `<span class="chip">${c.t} <button type="button" data-chip="${c.k}" data-value="${c.v}" aria-label="Quitar">×</button></span>`
    )
    .join("");
}

function cardHtml(d, favs) {
  const on = favs.includes(d.id);
  return `
    <article class="card">
      <div class="card-media">
        <img src="${d.imagen}" alt="${d.nombre}">
        <button class="fav ${on ? "active" : ""}" data-fav="${d.id}" aria-label="Favorito">${ICONS.heart}</button>
      </div>
      <div class="card-body">
        <h3 class="card-title"><a href="destino.html?id=${d.id}">${d.nombre}</a></h3>
        <div class="card-rating">${ICONS.star} ${d.rating.toFixed(1)}</div>
        <div class="card-loc">${ICONS.pin} ${d.region} · ${d.lugar}</div>
        <div class="card-from">Desde</div>
        <div class="card-price">S/ ${d.precio}</div>
        <a class="go" href="destino.html?id=${d.id}" aria-label="Ver ${d.nombre}">${ICONS.arrow}</a>
      </div>
    </article>`;
}

function paginationHtml(page, pages) {
  const items = [];
  for (let p = 1; p <= pages; p += 1) {
    items.push(`<button class="page-btn ${p === page ? "active" : ""}" data-page="${p}">${p}</button>`);
  }
  return `
    <button class="page-btn" data-page="${page - 1}" ${page === 1 ? "disabled" : ""}>‹</button>
    ${items.join("")}
    <button class="page-btn" data-page="${page + 1}" ${page === pages ? "disabled" : ""}>›</button>`;
}

function initCatalog() {
  let applied = collectDraft();
  let page = 1;

  const render = () => {
    const favs = getFavs();
    const filtered = applyFilters(DESTINOS, applied);
    const pages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
    if (page > pages) page = pages;
    const slice = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
    document.getElementById("count").textContent = `${filtered.length} destinos encontrados`;
    document.getElementById("chips").innerHTML = chipHtml(applied);
    document.getElementById("cards").innerHTML =
      slice.length > 0 ? slice.map((d) => cardHtml(d, favs)).join("") : `<div class="empty">No hay destinos con esos filtros.</div>`;
    document.getElementById("pagination").innerHTML = paginationHtml(page, pages);
  };

  document.getElementById("apply").addEventListener("click", () => {
    applied = collectDraft();
    page = 1;
    render();
  });
  document.getElementById("clear").addEventListener("click", () => {
    document.querySelectorAll("[name=region], [name=duracion]").forEach((i) => (i.checked = false));
    document.getElementById("ratingAll").checked = true;
    document.getElementById("priceMin").value = 100;
    document.getElementById("priceMax").value = 1500;
    document.getElementById("q").value = "";
    document.getElementById("sort").value = "relevancia";
    syncRangeFill();
    applied = collectDraft();
    page = 1;
    render();
  });
  document.getElementById("q").addEventListener("input", () => {
    applied = collectDraft();
    page = 1;
    render();
  });
  document.getElementById("sort").addEventListener("change", () => {
    applied = collectDraft();
    page = 1;
    render();
  });
  ["priceMin", "priceMax"].forEach((id) => {
    document.getElementById(id).addEventListener("input", syncRangeFill);
  });
  document.getElementById("chips").addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-chip]");
    if (!btn) return;
    const sel = `[name=${btn.dataset.chip}][value="${btn.dataset.value}"]`;
    const el = document.querySelector(sel);
    if (el) el.checked = false;
    applied = collectDraft();
    page = 1;
    render();
  });
  document.getElementById("cards").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-fav]");
    if (!btn) return;
    e.preventDefault();
    toggleFav(btn.dataset.fav);
    render();
  });
  document.getElementById("pagination").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-page]");
    if (!btn || btn.disabled) return;
    page = Number(btn.dataset.page);
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  syncRangeFill();
  render();
}

function initDetail() {
  const id = new URLSearchParams(location.search).get("id");
  const d = DESTINOS.find((x) => x.id === id) || DESTINOS[0];
  document.getElementById("d-img").src = d.imagen;
  document.getElementById("d-img").alt = d.nombre;
  document.getElementById("d-name").textContent = d.nombre;
  document.getElementById("d-loc").textContent = `${d.region} · ${d.lugar}`;
  document.getElementById("d-rating").textContent = d.rating.toFixed(1);
  document.getElementById("d-desc").textContent = d.desc;
  document.getElementById("d-price").textContent = `S/ ${d.precio}`;
  document.getElementById("d-dur").textContent = `${d.duracion} días`;
  document.title = `${d.nombre} · Andes Travel`;
  const form = document.getElementById("book-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    document.getElementById("book-msg").classList.add("show");
    document.getElementById("book-msg").textContent =
      "Solicitud enviada. Un asesor te contactará para confirmar disponibilidad.";
  });
}

function initAuth(kind) {
  const form = document.getElementById("auth-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const msg = document.getElementById("auth-msg");
    msg.classList.add("show");
    msg.textContent =
      kind === "in"
        ? "Sesión iniciada (demo). Bienvenido a Andes Travel."
        : "Cuenta creada (demo). Ya puedes explorar destinos.";
  });
}

function initContact() {
  document.getElementById("contact-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const msg = document.getElementById("contact-msg");
    msg.classList.add("show");
    msg.textContent = "Mensaje enviado. Te responderemos en menos de 24 horas.";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page;
  mountChrome(page);
  if (page === "destinos") initCatalog();
  if (page === "destino") initDetail();
  if (page === "ingresar") initAuth("in");
  if (page === "registro") initAuth("up");
  if (page === "contacto") initContact();
});
