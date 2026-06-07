// ====== RENDER DATA ======
document.addEventListener("DOMContentLoaded", () => {
  const d = portfolioData;

  // Hero
  document.getElementById("heroName").textContent = d.name;
  document.getElementById("heroRole").textContent = d.role;
  document.getElementById("heroTagline").textContent = d.tagline;
  document.getElementById("heroSocials").innerHTML = d.socials
    .map(s => `<a href="${s.url}" target="_blank" rel="noopener"><i class="${s.icon}"></i></a>`)
    .join("");

  // About
  document.getElementById("aboutText").innerHTML = `<p>${d.aboutText}</p>`;
  document.getElementById("aboutCards").innerHTML = d.aboutCards
    .map(c => `<div class="about-card"><h4>${c.title}</h4><p>${c.detail}</p></div>`)
    .join("");

  // Skills
  document.getElementById("skillsGrid").innerHTML = d.skills
    .map(s => `
      <div class="skill-card reveal">
        <i class="${s.icon}"></i>
        <h4>${s.title}</h4>
        <p>${s.desc}</p>
      </div>`)
    .join("");

  // Experience
  document.getElementById("timeline").innerHTML = d.experience
    .map(e => `
      <div class="timeline-item reveal">
        <p class="timeline-date">${e.date}</p>
        <h3 class="timeline-title">${e.title}</h3>
        <p class="timeline-company">${e.company}</p>
        <div class="timeline-desc"><ul>${e.points.map(p => `<li>${p}</li>`).join("")}</ul></div>
      </div>`)
    .join("");

  // Projects
  document.getElementById("projectsGrid").innerHTML = d.projects
    .map(p => `
      <div class="project-card reveal">
        <div class="project-image">
          ${p.image ? `<img src="${p.image}" alt="${p.title}" onerror="this.style.display='none'">` : `<i class="fa-solid fa-diagram-project"></i>`}
        </div>
        <div class="project-body">
          <div class="project-tags">${p.tags.map(t => `<span class="project-tag">${t}</span>`).join("")}</div>
          <h3>${p.title}</h3>
          <p>${p.description}</p>
          <div class="project-links">
            ${p.demo ? `<a href="${p.demo}" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i> View</a>` : ""}
            ${p.repo ? `<a href="${p.repo}" target="_blank"><i class="fa-brands fa-github"></i> Code</a>` : ""}
          </div>
        </div>
      </div>`)
    .join("");

  // Fun facts
  document.getElementById("funFactsGrid").innerHTML = d.funFacts
    .map(f => `
      <div class="funfact-card reveal">
        <div class="funfact-icon">${f.icon}</div>
        <h4>${f.title}</h4>
        <p>${f.desc}</p>
      </div>`)
    .join("");

  // Contact info
  document.getElementById("contactInfo").innerHTML = `
    <div class="contact-item"><i class="fa-solid fa-envelope"></i><div><h4>Email</h4><a href="mailto:${d.contact.email}">${d.contact.email}</a></div></div>
    <div class="contact-item"><i class="fa-solid fa-phone"></i><div><h4>Phone</h4><p>${d.contact.phone}</p></div></div>
    <div class="contact-item"><i class="fa-solid fa-location-dot"></i><div><h4>Location</h4><p>${d.contact.location}</p></div></div>
    <div class="contact-item"><i class="fa-brands fa-linkedin-in"></i><div><h4>LinkedIn</h4><a href="https://${d.contact.linkedin}" target="_blank">${d.contact.linkedin}</a></div></div>
  `;

  // Footer year
  document.getElementById("year").textContent = new Date().getFullYear();

  // ====== EMAILJS INIT ======
  if (d.emailjs.publicKey && d.emailjs.publicKey !== "YOUR_PUBLIC_KEY") {
    emailjs.init({ publicKey: d.emailjs.publicKey });
  }

  // ====== CONTACT FORM ======
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");
  const submitBtn = document.getElementById("submitBtn");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (d.emailjs.publicKey === "YOUR_PUBLIC_KEY") {
      status.textContent = "⚠️ EmailJS belum disetup. Lihat STEP 6 panduan.";
      status.className = "form-status error";
      return;
    }
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
    try {
      await emailjs.sendForm(d.emailjs.serviceId, d.emailjs.templateId, form);
      status.textContent = "✅ Message sent! I'll get back to you soon.";
      status.className = "form-status success";
      form.reset();
    } catch (err) {
      console.error(err);
      status.textContent = "❌ Failed to send. Please email directly: " + d.contact.email;
      status.className = "form-status error";
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send Message';
    }
  });

  // ====== NAVBAR SCROLL EFFECT ======
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
  });

  // ====== HAMBURGER ======
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");
  hamburger.addEventListener("click", () => navLinks.classList.toggle("open"));
  navLinks.querySelectorAll("a").forEach(a =>
    a.addEventListener("click", () => navLinks.classList.remove("open"))
  );

  // ====== SCROLL REVEAL ======
  const observer = new IntersectionObserver(
    (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add("visible")),
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

  // ====== ACTIVE NAV LINK ON SCROLL ======
  const sections = document.querySelectorAll("section[id]");
  const links = document.querySelectorAll(".nav-links a");
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
    });
    links.forEach(l => l.classList.toggle("active", l.getAttribute("href") === "#" + current));
  });
});
