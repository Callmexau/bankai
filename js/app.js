import { sectionOrder, sectionToScene, translations } from "./content.js";
import { scenes } from "./scenes.js";

const elements = {
  loader: document.querySelector("#loader"),
  loaderProgress: document.querySelector("#loader-progress"),
  loaderNumber: document.querySelector("#loader-number"),
  shell: document.querySelector("#site-shell"),
  nav: document.querySelector("#main-nav"),
  stage: document.querySelector("#stage"),
  sceneWorld: document.querySelector("#scene-world"),
  sceneImage: document.querySelector("#scene-image"),
  placeholderDescription: document.querySelector("#placeholder-description"),
  languageFrame: document.querySelector("#room-language-frame"),
  accessibleLanguages: document.querySelector("#accessible-languages"),
  hotspots: document.querySelector("#hotspots"),
  heroCopy: document.querySelector("#hero-copy"),
  panel: document.querySelector("#scene-panel"),
  panelContent: document.querySelector("#panel-content"),
  curtain: document.querySelector("#transition-curtain"),
  language: document.querySelector("#language-switch"),
  menuToggle: document.querySelector("#menu-toggle"),
  motionToggle: document.querySelector("#motion-toggle")
};

const state = {
  language: "fr",
  section: null,
  scene: "office",
  motion: !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  imageCache: new Map(),
  busy: false
};

function text(path) {
  return path.split(".").reduce((value, key) => value?.[key], translations[state.language]) ?? path;
}

function renderLanguageFrame() {
  const languages = translations[state.language].content.languages;
  elements.languageFrame.innerHTML = `
    <span class="room-frame-title">${text("labels.languages")}</span>
    <ul class="room-language-list">${languages.map(([language, level]) => `
      <li><strong>${language}</strong><span>${level}</span></li>
    `).join("")}</ul>`;
  elements.accessibleLanguages.textContent = `${text("labels.languages")}: ${languages.map(([language, level]) => `${language}, ${level}`).join("; ")}.`;
}

function setLanguage(language) {
  state.language = language;
  document.documentElement.lang = language;
  document.title = language === "fr"
    ? "Exaucé Jackson L. — Ingénieur Logiciel"
    : "Exaucé Jackson L. — Software Engineer";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = text(node.dataset.i18n);
  });
  document.querySelector("#copyright-note").textContent = text("copyright").replace("{year}", String(new Date().getFullYear()));
  document.querySelectorAll("[data-i18n-aria]").forEach((node) => {
    node.setAttribute("aria-label", text(node.dataset.i18nAria));
  });
  renderLanguageFrame();
  elements.language.textContent = language === "fr" ? "EN" : "FR";
  elements.language.setAttribute("aria-label", language === "fr" ? "Switch language to English" : "Passer en français");
  updateMotionControl();
  document.querySelector("#wordmark").setAttribute("aria-label", language === "fr" ? "Retour à l’accueil" : "Back to the office");
  renderNavigation();
  renderHotspots();
  renderSceneCaption();
  if (state.section) renderSection();
}

function renderNavigation() {
  elements.nav.innerHTML = sectionOrder.map((section) => `
    <a href="#${section}" data-section="${section}" class="${state.section === section ? "is-current" : ""}">
      ${text(`nav.${section}`)}
    </a>
  `).join("");
  elements.nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      navigate(link.dataset.section);
      closeMenu();
    });
  });
}

function renderHotspots() {
  const hotspots = scenes.office.hotspots;
  elements.hotspots.innerHTML = hotspots.map((hotspot, index) => `
    <button class="hotspot" type="button" data-section="${hotspot.section}"
      style="--hotspot-x:${hotspot.x}%;--hotspot-y:${hotspot.y}%;--hotspot-delay:${index * 90}ms"
      aria-label="${text(`objects.${hotspot.id}`)} — ${text(`objectHints.${hotspot.id}`)}">
      <span class="hotspot-ring"><span></span></span>
      <span class="hotspot-label"><strong>${text(`objects.${hotspot.id}`)}</strong><small>${text(`objectHints.${hotspot.id}`)}</small></span>
    </button>
  `).join("");
  elements.hotspots.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => navigate(button.dataset.section));
  });
}

function renderSceneCaption() {
  const scene = scenes[state.scene];
  const shot = scene.placeholder === "office" ? "office" : "detail";
  elements.placeholderDescription.textContent = text(`placeholderShots.${shot}`);
  const sceneOrder = ["office", "desk", "skills", "computer", "books", "documents", "phone"];
  document.querySelector("#scene-index").textContent = `${String(sceneOrder.indexOf(state.scene) + 1).padStart(2, "0")} — ${String(sceneOrder.length).padStart(2, "0")}`;
}

function renderSection() {
  const section = state.section;
  const labels = text(`labels.${section}`);
  const content = translations[state.language].content;
  const sectionBody = {
    about: `
      <p class="panel-copy">${content.aboutBody}</p>
      <div class="statement"><span>${text("labels.position")}</span><p>${content.aboutVision}</p></div>
      <a class="panel-action" href="${content.cvUrl}" target="_blank" rel="noreferrer">${text("labels.downloadCV")} <span aria-hidden="true">↗</span></a>`,
    expertise: `
      <p class="panel-copy">${content.expertiseBody}</p>
      <div class="skill-grid">${content.skills.map(([title, description, technologies], index) => `
        <article class="skill-card">
          <span class="card-index">0${index + 1}</span>
          <h3>${title}</h3>
          <p>${description}</p>
          <ul class="tag-list skill-tags">${technologies.map((technology) => `<li>${technology}</li>`).join("")}</ul>
        </article>
      `).join("")}</div>
      `,
    projects: `
      <p class="panel-copy">${content.projectsBody}</p>
      <div class="project-grid">${content.projects.map((project, index) => `
        <article class="project-card">
          <div class="project-meta">${project.year ? `<span>${project.year}</span>` : ""}<span>${project.type}</span></div>
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          ${project.images?.length ? `
            <div class="project-gallery" role="group" aria-label="${project.title} — ${text("labels.projectScreenshot")}">
              <a class="project-shot" href="${project.images[0]}" target="_blank" rel="noreferrer">
                <img src="${project.images[0]}" alt="${project.title} — ${text("labels.projectScreenshot")} 1" loading="lazy" decoding="async">
              </a>
              ${project.images.length > 1 ? `
                <button class="project-gallery-toggle" type="button" aria-expanded="false" aria-controls="project-gallery-more-${index}">${text("labels.showMoreScreenshots")}</button>
                <div class="project-gallery-more" id="project-gallery-more-${index}" hidden>
                  ${project.images.slice(1).map((image, imageIndex) => `
                    <a class="project-shot" href="${image}" target="_blank" rel="noreferrer">
                      <img src="${image}" alt="${project.title} — ${text("labels.projectScreenshot")} ${imageIndex + 2}" loading="lazy" decoding="async">
                    </a>
                  `).join("")}
                </div>
              ` : ""}
            </div>
          ` : ""}
          ${project.technologies.length ? `<ul class="tag-list">${project.technologies.map((technology) => `<li>${technology}</li>`).join("")}</ul>` : ""}
          ${project.url ? `<a class="project-link" href="${project.url}" target="_blank" rel="noreferrer">${text("labels.viewProject")} <span aria-hidden="true">↗</span></a>` : ""}
        </article>
      `).join("")}</div>`,
    experience: `
      <p class="panel-copy">${content.experienceBody}</p>
      <div class="timeline-list">${content.experience.map((item) => `
        <article class="timeline-item">
          <span class="timeline-marker"></span>
          <div>
            <div class="timeline-meta">
              <span class="timeline-label">${item.role}</span>
              <span class="timeline-date">${item.period}</span>
            </div>
            <h3>${item.organization}</h3>
            <ul class="experience-points">${item.achievements.map((achievement) => `<li>${achievement}</li>`).join("")}</ul>
          </div>
        </article>
      `).join("")}</div>`,
    education: `
      <p class="panel-copy">${content.educationBody}</p>
      <article class="training-item">
        <span class="timeline-label">${text("labels.training")}</span>
        <h3>${content.training.title}</h3>
        <p>${content.training.institution}</p>
      </article>
      <div class="subsection-heading">${text("labels.certifications")}</div>
      <div class="certificate-list">${content.certifications.map((certificate) => `
        <article class="certificate-item">
          <div><span class="timeline-label">${text("labels.studies")}</span><h3>${certificate.title}</h3><p>${certificate.issuer}</p></div>
          ${certificate.url ? `<a class="certificate-link" href="${certificate.url}" target="_blank" rel="noreferrer">${text("labels.viewCertificate")} <span aria-hidden="true">↗</span></a>` : ""}
        </article>
      `).join("")}</div>`,
    contact: `
      <p class="panel-copy">${content.contactBody}</p>
      <div class="contact-list">
        ${content.contactItems.map((item, index) => item.href ? `
          <a class="contact-row" href="${item.href}" ${item.external ? 'target="_blank" rel="noreferrer"' : ""}>
            <span class="contact-number">0${index + 1}</span><span>${item.label}</span><span class="contact-value">${item.value}</span>
          </a>
        ` : `
          <div class="contact-row">
            <span class="contact-number">0${index + 1}</span><span>${item.label}</span><span class="contact-value">${item.value}</span>
          </div>
        `).join("")}
      </div>`
  };
  const titles = {
    about: content.aboutTitle,
    expertise: content.expertiseTitle,
    projects: content.projectsTitle,
    experience: content.experienceTitle,
    education: content.educationTitle,
    contact: content.contactTitle
  };
  elements.panelContent.innerHTML = `
    <div class="panel-heading">
      <span class="eyebrow"><span class="status-dot"></span>${labels}</span>
      <span class="panel-sequence">0${sectionOrder.indexOf(section) + 1} <span>/</span> 06</span>
    </div>
    <h2>${titles[section]}</h2>
    ${sectionBody[section]}
    <div class="panel-section-nav">${sectionOrder.map((item) => `
      <button type="button" data-section="${item}" class="${item === section ? "is-current" : ""}">${text(`nav.${item}`)}</button>
    `).join("")}</div>`;
  elements.panelContent.scrollTop = 0;
  elements.panelContent.querySelectorAll(".project-gallery-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const expanded = button.getAttribute("aria-expanded") !== "true";
      button.setAttribute("aria-expanded", String(expanded));
      button.nextElementSibling.hidden = !expanded;
      button.textContent = text(expanded ? "labels.hideScreenshots" : "labels.showMoreScreenshots");
    });
  });
  elements.panelContent.querySelectorAll(".panel-section-nav button").forEach((button) => {
    button.addEventListener("click", () => navigate(button.dataset.section));
  });
}

function loadImage(sceneId) {
  const source = scenes[sceneId]?.image;
  if (!source) return Promise.resolve(null);
  if (state.imageCache.has(source)) return state.imageCache.get(source);
  const imagePromise = new Promise((resolve) => {
    const image = new Image();
    image.decoding = "async";
    image.onload = () => resolve(image);
    image.onerror = () => {
      console.error(`Unable to load portfolio scene image: ${source}`);
      resolve(null);
    };
    image.src = source;
  });
  state.imageCache.set(source, imagePromise);
  return imagePromise;
}

async function setScene(sceneId, animate = false) {
  const scene = scenes[sceneId];
  if (!scene) return;
  state.scene = sceneId;
  const image = await loadImage(sceneId);
  const activeImage = elements.sceneImage.querySelector(".scene-photo.is-current");
  if (image) {
    const sceneImage = image.cloneNode();
    sceneImage.alt = typeof scene.alt === "string" ? scene.alt : scene.alt[state.language];
    sceneImage.className = "scene-photo";
    elements.sceneImage.append(sceneImage);
    requestAnimationFrame(() => sceneImage.classList.add("is-current"));
    activeImage?.classList.remove("is-current");
    if (activeImage) {
      window.setTimeout(() => activeImage.remove(), 1300);
    }
    elements.stage.classList.add("has-photo");
  } else {
    elements.sceneImage.replaceChildren();
    elements.stage.classList.remove("has-photo");
  }
  applyCamera(sceneId, animate);
  renderSceneCaption();
}

function applyCamera(sceneId, animate = true) {
  const camera = scenes[sceneId]?.camera;
  if (!camera) return;
  const frame = window.matchMedia("(max-width: 650px)").matches ? camera.mobile : camera.desktop;
  const width = elements.stage.clientWidth;
  const height = elements.stage.clientHeight;
  const offsetX = width / 2 - (frame.x / 100) * width * frame.zoom;
  const offsetY = height / 2 - (frame.y / 100) * height * frame.zoom;
  elements.sceneWorld.style.setProperty("--camera-x", `${offsetX}px`);
  elements.sceneWorld.style.setProperty("--camera-y", `${offsetY}px`);
  elements.sceneWorld.style.setProperty("--camera-zoom", frame.zoom);
  elements.sceneWorld.classList.toggle("is-moving", animate && state.motion);
}

async function navigate(section) {
  if (!sectionOrder.includes(section) || state.busy) return;
  const sceneId = sectionToScene[section];
  if (state.section === section) return;
  state.busy = true;
  const nextScene = loadImage(sceneId);
  applyCamera(sceneId);
  elements.heroCopy.classList.add("is-hidden");
  elements.hotspots.classList.add("is-hidden");
  elements.panel.classList.add("is-transitioning");
  elements.curtain.classList.add("is-active");
  await wait(state.motion ? 180 : 0);
  state.section = section;
  await nextScene;
  await setScene(sceneId, true);
  renderNavigation();
  renderSection();
  elements.panel.classList.add("is-visible");
  elements.panel.classList.remove("is-transitioning");
  elements.panel.setAttribute("aria-hidden", "false");
  elements.curtain.classList.remove("is-active");
  elements.curtain.classList.add("is-clearing");
  await wait(state.motion ? 1550 : 0);
  elements.curtain.classList.remove("is-clearing");
  elements.sceneWorld.classList.remove("is-moving");
  state.busy = false;
  loadImage(sectionToScene[sectionOrder[(sectionOrder.indexOf(section) + 1) % sectionOrder.length]]);
}

async function returnToOffice() {
  if (state.busy) return;
  state.busy = true;
  applyCamera("office");
  elements.panel.classList.add("is-transitioning");
  elements.curtain.classList.add("is-active");
  await wait(state.motion ? 180 : 0);
  state.section = null;
  await setScene("office", true);
  renderNavigation();
  elements.panel.classList.remove("is-visible");
  elements.panel.classList.remove("is-transitioning");
  elements.panel.setAttribute("aria-hidden", "true");
  elements.heroCopy.classList.remove("is-hidden");
  elements.hotspots.classList.remove("is-hidden");
  elements.curtain.classList.remove("is-active");
  elements.curtain.classList.add("is-clearing");
  await wait(state.motion ? 1550 : 0);
  elements.curtain.classList.remove("is-clearing");
  elements.sceneWorld.classList.remove("is-moving");
  state.busy = false;
}

function wait(duration) {
  return new Promise((resolve) => window.setTimeout(resolve, duration));
}

function closeMenu() {
  elements.nav.classList.remove("is-open");
  elements.menuToggle.setAttribute("aria-expanded", "false");
}

function toggleMotion() {
  state.motion = !state.motion;
  document.documentElement.classList.toggle("reduced-motion", !state.motion);
  updateMotionControl();
}

function updateMotionControl() {
  const label = state.language === "fr"
    ? (state.motion ? "Réduire les animations" : "Activer les animations")
    : (state.motion ? "Reduce motion" : "Enable animations");
  elements.motionToggle.classList.toggle("is-off", !state.motion);
  elements.motionToggle.title = label;
  elements.motionToggle.setAttribute("aria-label", label);
  elements.motionToggle.setAttribute("aria-pressed", String(!state.motion));
}

function startLoader() {
  const started = performance.now();
  const duration = 850;
  let imageReady = false;
  loadImage("office").then(() => {
    imageReady = true;
  });
  function tick(now) {
    const elapsed = now - started;
    const progress = imageReady && elapsed >= duration
      ? 100
      : Math.min(90, Math.round((elapsed / duration) * 100));
    elements.loaderProgress.style.width = `${progress}%`;
    elements.loaderNumber.textContent = String(progress).padStart(2, "0");
    if (progress < 100) {
      requestAnimationFrame(tick);
      return;
    }
    window.setTimeout(() => {
      elements.loader.classList.add("is-done");
      elements.shell.removeAttribute("aria-hidden");
    }, 140);
  }
  requestAnimationFrame(tick);
}

document.querySelector("#explore-button").addEventListener("click", () => navigate("about"));
document.querySelector("#back-button").addEventListener("click", returnToOffice);
document.querySelector("#wordmark").addEventListener("click", (event) => {
  event.preventDefault();
  if (state.section) returnToOffice();
});
elements.language.addEventListener("click", () => setLanguage(state.language === "fr" ? "en" : "fr"));
elements.menuToggle.addEventListener("click", () => {
  const open = elements.nav.classList.toggle("is-open");
  elements.menuToggle.setAttribute("aria-expanded", String(open));
});
elements.motionToggle.addEventListener("click", toggleMotion);
window.addEventListener("resize", () => applyCamera(state.scene, false));
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
    if (state.section) returnToOffice();
  }
});

setLanguage(state.language);
setScene("office");
loadImage(sectionToScene.about);
startLoader();
