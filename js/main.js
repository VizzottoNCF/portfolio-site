const UI = {
  en: { navProjects: "Projects", navAbout: "About", title: "Game Developer",
        intro: "I make games, these are my projects.",
        about: "Write a short paragraph about yourself here: where you are, what you like to build, and how to reach you.",
        role: "My role", skills: "Main skills" },
  pt: { navProjects: "Projetos", navAbout: "Sobre", title: "Desenvolvedor de Jogos",
        intro: "Eu faço jogos, esses são meus projetos.",
        about: "Escreva aqui um parágrafo sobre você: onde está, o que gosta de criar e como entrar em contato.",
        role: "Meu papel", skills: "Principais habilidades" }
};

let lang = localStorage.getItem("lang") || "en";
let openProject = null;

const $ = (s) => document.querySelector(s);
const grid = $("#project-grid"), dlg = $("#project-dialog");

// Image with a placeholder if the file is missing
function media(src, alt) {
  const img = new Image();
  img.alt = alt;
  img.src = src;
  img.onerror = () => {
    const ph = document.createElement("div");
    ph.className = "placeholder";
    ph.textContent = alt.charAt(0);
    img.replaceWith(ph);
  };
  return img;
}

function renderGrid() {
  grid.innerHTML = "";
  PROJECTS.forEach((p) => {
    const card = document.createElement("button");
    card.className = "card";
    card.append(media(p.cover, p.title));
    const body = document.createElement("div");
    body.className = "card-body";
    body.innerHTML = `<h3>${p.title}</h3><p>${p.summary[lang]}</p>`;
    card.append(body);
    card.addEventListener("click", () => showProject(p));
    grid.append(card);
  });
}

function showProject(p) {
  openProject = p;
  $("#dlg-title").textContent = p.year ? `${p.title} (${p.year})` : p.title;
  $("#dlg-desc").textContent = p.description[lang];
  $("#dlg-role").textContent = p.role[lang];
  $("#dlg-skills").innerHTML = p.skills.map((s) => `<li>${s}</li>`).join("");
  $("#dlg-links").innerHTML = p.links.map((l) => `<a href="${l.url}" target="_blank" rel="noopener">${l.label}</a>`).join(" ");

  const main = $("#dlg-main"), thumbs = $("#dlg-thumbs");
  const setMain = (src) => { main.innerHTML = ""; main.append(media(src, p.title)); };
  setMain(p.images[0]);
  thumbs.innerHTML = "";
  if (p.images.length > 1) {
    p.images.forEach((src) => {
      const b = document.createElement("button");
      b.setAttribute("aria-label", "Show image");
      b.append(media(src, p.title));
      b.addEventListener("click", () => setMain(src));
      thumbs.append(b);
    });
  }
  if (!dlg.open) dlg.showModal();
}

function applyLang() {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => (el.textContent = UI[lang][el.dataset.i18n]));
  document.querySelectorAll(".lang").forEach((b) => b.classList.toggle("active", b.dataset.lang === lang));
  renderGrid();
  if (dlg.open && openProject) showProject(openProject);
}

document.querySelectorAll(".lang").forEach((b) =>
  b.addEventListener("click", () => { lang = b.dataset.lang; localStorage.setItem("lang", lang); applyLang(); })
);
dlg.querySelector(".close").addEventListener("click", () => dlg.close());
dlg.addEventListener("click", (e) => { if (e.target === dlg) dlg.close(); }); // click backdrop
$("#year").textContent = new Date().getFullYear();
applyLang();