// ============================================================
//  lang.js — IND / ENG Language Toggle
//  Revata Yasa Lienardi Portfolio
// ============================================================

const translations = {
  id: {
    // NAV
    "nav-logo":       "Portfolio Saya",
    "nav-about":      "Tentang",
    "nav-skills":     "Keahlian",
    "nav-experience": "Pengalaman",
    "nav-projects":   "Proyek",
    "nav-contact":    "Kontak",

    // HERO
    "hero-eyebrow":   "Selamat Datang",
    "hero-name":      "Revata<br /><em>Yasa Lienardi</em>",
    "hero-desc":      "Saya seorang Web Developer yang berfokus membangun website yang tidak hanya terlihat bagus, tapi juga cepat, responsif, dan mudah digunakan. Di sini Anda bisa melihat perjalanan dan karya-karya saya.",
    "hero-stat-exp":  "Tahun Pengalaman",
    "hero-stat-proj": "Proyek Selesai",
    "hero-stat-lang": "Bahasa",
    "hero-cta-contact": "Hubungi Saya",
    "hero-cta-about":   "Pelajari Lebih",

    // ABOUT
    "section-label-about": "01 — Tentang Saya",
    "section-title-about": "Kenali <em>Lebih Jauh</em>",
    "fact-label-name":      "Nama Lengkap",
    "fact-label-born":      "Tempat, Tanggal Lahir",
    "fact-label-domicile":  "Domisili",
    "fact-label-edu":       "Pendidikan Terakhir",
    "fact-label-field":     "Bidang",
    "fact-value-born":      "Bandung, 30 September 2004",
    "fact-value-domicile":  "Bandung, Jawa Barat",
    "about-p1": "Perkenalkan, saya <strong>Revata Yasa Lienardi</strong> — seorang Web Developer dengan keahlian mendalam di bidang UI/UX. Saya memiliki passion yang kuat terhadap menciptakan antarmuka yang intuitif, estetis, dan menyenangkan untuk digunakan, serta berkomitmen untuk menghadirkan pengalaman digital terbaik di setiap proyek yang saya kerjakan.",
    "about-p2": "Dengan pengalaman lebih dari <strong>2 tahun</strong> di industri ini, saya telah berhasil menangani berbagai proyek nyata — mulai dari membangun website resmi <strong>Kasih Paramitha School</strong> hingga website restoran burger yang menarik dan fungsional. Saya percaya bahwa <strong>kolaborasi, kreativitas, dan ketekunan</strong> adalah kunci kesuksesan dalam setiap proyek.",
    "about-p3": "Di luar pekerjaan, saya menikmati olahraga. Hal ini membantu saya menjaga keseimbangan dan terus berkembang sebagai pribadi maupun profesional.",

    // SKILLS
    "section-label-skills": "02 — Keahlian",
    "section-title-skills": "Apa yang <em>Saya Kuasai</em>",
    "skill-uiux-name":   "UI/UX Design",
    "skill-uiux-desc":   "Merancang antarmuka yang intuitif dan estetis, dengan fokus pada pengalaman pengguna yang mulus dan menyenangkan.",
    "skill-fe-name":     "Frontend Development",
    "skill-fe-desc":     "Membangun tampilan website yang responsif dan interaktif dengan kode yang bersih dan terstruktur.",
    "skill-web-name":    "Web Development",
    "skill-web-desc":    "Mengembangkan website dari konsep hingga deployment, memastikan performa, keamanan, dan skalabilitas.",
    "skill-resp-name":   "Responsive Design",
    "skill-resp-desc":   "Memastikan setiap website tampil sempurna di semua perangkat — desktop, tablet, maupun smartphone.",
    "skill-devops-name": "DevOps",
    "skill-devops-desc": "Mengelola proses deployment dan kolaborasi tim menggunakan GitHub untuk memastikan alur kerja yang terorganisir dan efisien.",
    "skill-ms-name":     "Microsoft Office",
    "skill-ms-desc":     "Mahir mengoperasikan berbagai aplikasi Microsoft Office untuk kebutuhan dokumentasi, analisis data, dan presentasi profesional.",
    "skill-lang-name":   "Multibahasa",
    "skill-lang-desc":   "Mampu berkomunikasi secara profesional dalam tiga bahasa, memudahkan kolaborasi dengan klien dan tim dari berbagai latar belakang.",
    "skill-lang-tag-1":  "Indonesia",
    "skill-lang-tag-2":  "Inggris",
    "skill-lang-tag-3":  "Mandarin",

    // EXPERIENCE
    "section-label-exp": "03 — Pengalaman",
    "section-title-exp": "Rekam <em>Jejak</em>",
    "exp1-role":    "Freelance Digital Assistant",
    "exp1-company": "Self-Employed",
    "exp1-desc":    "Memberikan layanan freelance seperti data entry, pengelolaan database, serta dukungan digital untuk pembuatan dan pengelolaan website. Bekerja secara mandiri untuk membantu klien menyelesaikan tugas administrasi dan kebutuhan teknis secara efisien.",
    "exp2-role":    "Export Coordinator (Parfume Products)",
    "exp2-company": "Self-Employed",
    "exp2-desc":    "Mengelola proses ekspor produk parfum termasuk koordinasi pengiriman, komunikasi dengan pihak terkait, serta memastikan proses pengiriman barang ke luar negeri berjalan dengan lancar.",
    "exp3-role":    "Seafood Trader (Ebi)",
    "exp3-company": "Self-Employed",
    "exp3-desc":    "Menjalankan perdagangan seafood secara mandiri dengan fokus pada produk ebi. Bertanggung jawab atas proses sourcing produk, pengelolaan stok, negosiasi dengan pembeli, serta pengaturan distribusi kepada pelanggan.",
    "exp4-role":    "Chief Operational Officer",
    "exp4-company": "SideWLK",
    "exp4-desc":    "Mengawasi dan mengelola seluruh operasional brand clothing SideWLK, termasuk manajemen stok, pengelolaan pesanan, dan koordinasi dengan supplier. Melakukan analisis tren fashion untuk menentukan produk yang sesuai dengan permintaan pasar serta melakukan outreach dan presentasi produk kepada calon pelanggan untuk meningkatkan awareness dan penjualan brand.",

    // PROJECTS
    "section-label-projects": "04 — Proyek",
    "section-title-projects":  "Karya <em>Nyata</em>",
    "proj1-title": "Kasih Paramitha School",
    "proj1-desc":  "Website resmi sekolah Kasih Paramitha yang menampilkan informasi akademik, galeri kegiatan, dan informasi kegiatan terbaru dari sekolah Kasih Paramitha",
    "proj2-title": "Website Restoran Burger",
    "proj2-desc":  "Website restoran burger yang menampilkan menu interaktif, sistem pemesanan online, serta desain yang menarik dan ramah pengguna di semua perangkat.",
    "btn-demo":   "Lihat Demo",

    // CONTACT
    "section-label-contact": "05 — Kontak",
    "section-title-contact":  "Mari <em>Terhubung</em>",
    "contact-intro": "Saya selalu terbuka untuk peluang baru, kolaborasi, atau sekadar berdiskusi. Jangan ragu untuk menghubungi saya melalui salah satu saluran berikut.",
    "contact-type-email":  "Email",
    "contact-type-phone":  "Telepon",
    "form-label-name":    "Nama Anda",
    "form-placeholder-name":  "Masukkan nama Anda",
    "form-label-email":   "Email",
    "form-label-message": "Pesan",
    "form-placeholder-message": "Tuliskan pesan Anda di sini...",
    "btn-send": "Kirim Pesan",

    // FOOTER
    "footer-copy": "© 2026 — Hak cipta dilindungi",

    // TYPED phrases
    "typed-phrases": ["Frontend Developer", "UI/UX Enthusiast", "Web Developer", "React & Node.js"],
  },

  en: {
    // NAV
    "nav-logo":       "My Portfolio",
    "nav-about":      "About",
    "nav-skills":     "Skills",
    "nav-experience": "Experience",
    "nav-projects":   "Projects",
    "nav-contact":    "Contact",

    // HERO
    "hero-eyebrow":   "Welcome",
    "hero-name":      "Revata<br /><em>Yasa Lienardi</em>",
    "hero-desc":      "I'm a Web Developer focused on building websites that don't just look great, but are also fast, responsive, and easy to use. Here you can explore my journey and works.",
    "hero-stat-exp":  "Years of Experience",
    "hero-stat-proj": "Projects Completed",
    "hero-stat-lang": "Languages",
    "hero-cta-contact": "Contact Me",
    "hero-cta-about":   "Learn More",

    // ABOUT
    "section-label-about": "01 — About Me",
    "section-title-about": "Get to <em>Know Me</em>",
    "fact-label-name":     "Full Name",
    "fact-label-born":     "Place, Date of Birth",
    "fact-label-domicile": "Domicile",
    "fact-label-edu":      "Last Education",
    "fact-label-field":    "Field",
    "fact-value-born":     "Bandung, September 30, 2004",
    "fact-value-domicile": "Bandung, West Java",
    "about-p1": "Hello, I'm <strong>Revata Yasa Lienardi</strong> — a Web Developer with deep expertise in UI/UX. I have a strong passion for creating intuitive, aesthetic, and enjoyable interfaces, and I'm committed to delivering the best digital experience in every project I work on.",
    "about-p2": "With over <strong>2 years</strong> of experience in the industry, I have successfully handled various real-world projects — from building the official website of <strong>Kasih Paramitha School</strong> to an attractive and functional burger restaurant website. I believe that <strong>collaboration, creativity, and perseverance</strong> are the keys to success in every project.",
    "about-p3": "Outside of work, I enjoy sports. It helps me maintain balance and continue to grow both personally and professionally.",

    // SKILLS
    "section-label-skills": "02 — Skills",
    "section-title-skills": "What I <em>Master</em>",
    "skill-uiux-name":   "UI/UX Design",
    "skill-uiux-desc":   "Designing intuitive and aesthetic interfaces, focused on delivering a smooth and enjoyable user experience.",
    "skill-fe-name":     "Frontend Development",
    "skill-fe-desc":     "Building responsive and interactive website interfaces with clean, well-structured code.",
    "skill-web-name":    "Web Development",
    "skill-web-desc":    "Developing websites from concept to deployment, ensuring performance, security, and scalability.",
    "skill-resp-name":   "Responsive Design",
    "skill-resp-desc":   "Ensuring every website looks perfect on all devices — desktop, tablet, and smartphone.",
    "skill-devops-name": "DevOps",
    "skill-devops-desc": "Managing deployment processes and team collaboration using GitHub to ensure an organized and efficient workflow.",
    "skill-ms-name":     "Microsoft Office",
    "skill-ms-desc":     "Proficient in operating various Microsoft Office applications for documentation, data analysis, and professional presentations.",
    "skill-lang-name":   "Multilingual",
    "skill-lang-desc":   "Able to communicate professionally in three languages, facilitating collaboration with clients and teams from diverse backgrounds.",
    "skill-lang-tag-1":  "Indonesian",
    "skill-lang-tag-2":  "English",
    "skill-lang-tag-3":  "Mandarin",

    // EXPERIENCE
    "section-label-exp": "03 — Experience",
    "section-title-exp": "Career <em>Track Record</em>",
    "exp1-role":    "Freelance Digital Assistant",
    "exp1-company": "Self-Employed",
    "exp1-desc":    "Providing freelance services such as data entry, database management, and digital support for website creation and maintenance. Working independently to help clients complete administrative tasks and technical needs efficiently.",
    "exp2-role":    "Export Coordinator (Perfume Products)",
    "exp2-company": "Self-Employed",
    "exp2-desc":    "Managing the perfume product export process including shipment coordination, communication with relevant parties, and ensuring the overseas delivery process runs smoothly.",
    "exp3-role":    "Seafood Trader (Ebi)",
    "exp3-company": "Self-Employed",
    "exp3-desc":    "Running an independent seafood trading business focused on dried shrimp (ebi). Responsible for product sourcing, inventory management, buyer negotiations, and distribution logistics.",
    "exp4-role":    "Chief Operational Officer",
    "exp4-company": "SideWLK",
    "exp4-desc":    "Overseeing and managing the entire operations of the SideWLK clothing brand, including inventory management, order processing, and supplier coordination. Analyzed fashion trends to determine market-appropriate products and conducted outreach and product presentations to potential customers to increase brand awareness and sales.",

    // PROJECTS
    "section-label-projects": "04 — Projects",
    "section-title-projects":  "Real <em>Works</em>",
    "proj1-title": "Kasih Paramitha School",
    "proj1-desc":  "The official website of Kasih Paramitha School featuring academic information, activity gallery, and the latest school news and updates.",
    "proj2-title": "Burger Restaurant Website",
    "proj2-desc":  "A burger restaurant website featuring an interactive menu, online ordering system, and an attractive, user-friendly design across all devices.",
    "btn-demo":    "Live Demo",

    // CONTACT
    "section-label-contact": "05 — Contact",
    "section-title-contact":  "Let's <em>Connect</em>",
    "contact-intro": "I'm always open to new opportunities, collaborations, or just a good conversation. Feel free to reach out through any of the channels below.",
    "contact-type-email": "Email",
    "contact-type-phone": "Phone",
    "form-label-name":    "Your Name",
    "form-placeholder-name":  "Enter your name",
    "form-label-email":   "Email",
    "form-label-message": "Message",
    "form-placeholder-message": "Write your message here...",
    "btn-send": "Send Message",

    // FOOTER
    "footer-copy": "© 2026 — All rights reserved",

    // TYPED phrases
    "typed-phrases": ["Frontend Developer", "UI/UX Enthusiast", "Web Developer", "React & Node.js"],
  }
};

// ── State ────────────────────────────────────────────────────
let currentLang = localStorage.getItem("portfolioLang") || "id";

// ── Apply translations ───────────────────────────────────────
function applyLang(lang) {
  const t = translations[lang];

  // Helper: set innerHTML on a [data-i18n] element
  const set = (key, value) => {
    const els = document.querySelectorAll(`[data-i18n="${key}"]`);
    els.forEach(el => { el.innerHTML = value; });
  };
  const setAttr = (key, attr, value) => {
    const els = document.querySelectorAll(`[data-i18n-${attr}="${key}"]`);
    els.forEach(el => { el.setAttribute(attr, value); });
  };

  Object.keys(t).forEach(key => {
    if (key === "typed-phrases") return; // handled separately
    set(key, t[key]);
  });

  // Placeholders
  const nameInput = document.getElementById("form-name");
  const msgInput  = document.getElementById("form-message");
  if (nameInput) nameInput.placeholder = t["form-placeholder-name"];
  if (msgInput)  msgInput.placeholder  = t["form-placeholder-message"];

  // Update <html lang=""> attribute
  document.documentElement.lang = lang === "id" ? "id" : "en";

  // Update toggle button label
  const btn = document.getElementById("lang-toggle");
  if (btn) {
    btn.setAttribute("aria-label", lang === "id" ? "Switch to English" : "Ganti ke Indonesia");
    btn.querySelector(".lang-active").textContent  = lang === "id" ? "IND" : "ENG";
    btn.querySelector(".lang-inactive").textContent = lang === "id" ? "ENG" : "IND";
  }

  // Restart typed animation with new phrases
  if (window._restartTyped) window._restartTyped(t["typed-phrases"]);
}

// ── Toggle ───────────────────────────────────────────────────
function toggleLang() {
  currentLang = currentLang === "id" ? "en" : "id";
  localStorage.setItem("portfolioLang", currentLang);
  applyLang(currentLang);
}

// ── Init ─────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  applyLang(currentLang);
});