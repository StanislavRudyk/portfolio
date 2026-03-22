const translations = {
    ua: {
        nav_about: "Про мене", nav_expertise: "Навички", nav_projects: "Роботи", nav_contact: "Контакти",
        hero_tag: "Digital Architect & Backend Engineer", hero_name: "СТАНІСЛАВ РУДИК",
        hero_lead: "Розробка високонавантажених серверних рішень та складних бізнес-екосистем. Створюю відмовостійкий код з акцентом на архітектурну чистоту та максимальну продуктивність.",
        hero_btn_projects: "Дивитися роботи", hero_btn_contact: "Зв'язатись",
        about_sub: "01. ПРО МЕНЕ", about_title: "Backend Engineer / <br>Software Developer",
        about_p1: "Мій основний фокус це проектування та розробка високонавантажених серверних архітектур на базі <b>C# 13</b> та платформі <b>.NET 9</b>. Я не просто пишу код, а будую масштабовані екосистеми з використанням <b>Clean Architecture</b> та <b>Domain-Driven Design (DDD)</b>. Кожне моє технічне рішення проходить через призму продуктивності, безпеки та відмовостійкості, що дозволяє створювати системи, здатні витримувати екстремальні навантаження без деградації сервісу.",
        about_p2: "В межах <b>IT-волонтерства</b> я займався вирішенням критичних проблем зв'язку в умовах обмеженої пропускної здатності. Я спроектував та впровадив <b>власний бінарний протокол передачі даних</b>, який дозволив скоротити мережевий трафік на 60%. Для підтримки консистентності даних у розподілених вузлах я реалізував логіку <b>Conflict Resolution</b> на основі <b>CRDT (Conflict-free Replicated Data Types)</b>, що забезпечило автоматичне вирішення конфліктів стану без постійного з'єднання.",
        about_p3: "Мій шлях на фрілансі як <b>Full-cycle Engineer</b> це еволюція від простого написання коду до ролі стратегічного <b>технічного партнера</b>. Я спеціалізуюсь на побудові прозорої комунікації з клієнтами, де моє ключове завдання трансформувати розмиті бізнес-ідеї у чітку технічну архітектуру. Я глибоко занурююсь у бізнес-логіку замовника, проводжу аналіз ризиків та допомагаю обрати оптимальний стек для досягнення цілей. Керуючи проектом від першого діалогу до фінального деплою в Docker та налаштування CI/CD, я гарантую не лише технічну досконалість, а й відповідність продукту реальним потребам ринку.",
        about_mat1: "Експертиза .NET 9 & C# 13",
        about_mat2: "Розподілені системи та CRDT",
        about_mat3: "Full-cycle розробка продуктів",
        about_mat4: "High-load архітектура",
        exp_sub: "02. НАВИЧКИ", exp_title: "Технічний стек та навички",
        exp_be: "BACKEND",
        exp_arch: "АРХІТЕКТУРА",
        exp_dev: "ТЕХНОЛОГІЇ",
        exp_soft: "SOFT SKILLS",
        sk_netc: "ASP.NET Core", sk_api: "ASP.NET Web API", sk_mvc: "ASP.NET MVC", sk_nf: ".NET Framework",
        sk_micro: "Мікросервісна архітектура", sk_shab: "Знання шаблонів проєктування", sk_oop: "Знання принципів ООП", sk_solid: "SOLID Principles",
        sk_tg: "Налаштування Telegram-ботів", 
        sk_comm: "Комунікабельність", sk_learn: "Здатність до навчання", sk_init: "Ініціативність",
        sk_nice: "Доброзичливість", sk_nonconf: "Неконфліктність", sk_honest: "Чесність",
        sk_adapt: "Адаптивність", sk_discip: "Дисциплінованість", sk_org: "Організованість",
        sk_hard: "Працьовитість", sk_resp: "Відповідальність",
        proj_sub: "03. ПРОЄКТИ", proj_title: "ОБРАНІ ПРОЄКТИ",
        proj_tech_label: "Технічний стек:",
        proj1_title: "Coffesystem", proj1_desc: "Комплексне рішення для повного циклу управління кав'ярнею на базі <b>.NET 8/9</b> та <b>PostgreSQL</b>. Система автоматизує все від миттєвого оформлення чеків у терміналі касира з кошиком <b>SovereignLedger</b> до детального складського обліку та аналітики виручки в реальному часі. Унікальний дизайн на рушії <b>Sovereign UI</b> забезпечує преміальний UX, а <b>Docker</b> надійний деплой бізнес-логіки.", 
        proj2_title: "Komorebi-Shop", proj2_desc: "Масштабна e-commerce платформа для сучасного онлайн-рітейлу на базі <b>FastAPI</b>. Додаток забезпечує повний цикл покупок від розумної фільтрації товарів за категоріями до асинхронної обробки замовлень та управління кошиком. Система гарантує миттєвий відгук інтерфейсу та повну безпеку персональних даних користувачів.", 
        proj3_title: "Promokod-parser", proj3_desc: "Автоматизований інтелектуальний помічник для пошуку та агрегації вигідних пропозицій на <b>Python</b>. Програма самостійно сканує десятки платформ, обходить захисні системи та збирає актуальні промокоди в єдину базу. Завдяки багатопотоковості користувач завжди отримує лише перевірену та свіжу інформацію без зайвих зусиль.", 
        contact_sub: "04. КОНТАКТИ", contact_title: "Зв’язок та Співпраця",
        card_title: "ЗВ’ЯЖІТЬСЯ ЗІ МНОЮ", card_subtitle: "Завжди відкритий до нових викликів та складних рішень.",
        label_email: "EMAIL:", desc_email: "Напишіть мені, я відповім найближчим часом.",
        label_tg: "TELEGRAM:", desc_tg: "Найшвидший спосіб зв'язку.",
        label_gh: "GITHUB:", desc_gh: "Мій код та архітектурні патерни.",
        footer_text: "// STANISLAV RUDYK 2026 // ", footer_repo: "РЕПОЗИТОРІЙ ПРОЄКТІВ ↗"
    },
    en: {
        nav_about: "About", nav_expertise: "Skills", nav_projects: "Projects", nav_contact: "Contact",
        hero_tag: "Digital Architect & Backend Engineer", hero_name: "STANISLAV RUDYK",
        hero_lead: "Developing high-load server solutions and complex business ecosystems. Creating fault-tolerant code with priority on architectural purity and performance.",
        hero_btn_projects: "View Projects", hero_btn_contact: "Contact Me",
        about_sub: "01. ABOUT ME", about_title: "Backend Engineer / <br>Software Developer",
        about_p1: "My primary focus is on architecting and developing high-load server solutions using <b>C# 13</b> and the <b>.NET 9</b> platform. I don't just write code; I build scalable ecosystems utilizing <b>Clean Architecture</b> and <b>Domain-Driven Design (DDD)</b>. Every technical decision is filtered through the lens of performance, security, and resilience, enabling the creation of systems that handle extreme loads without service degradation.",
        about_p2: "As part of <b>IT volunteering</b>, I addressed critical communication challenges under limited bandwidth. I designed and implemented a <b>custom binary data protocol</b> that reduced network traffic by 60%. To maintain data consistency across distributed nodes, I implemented <b>Conflict Resolution</b> logic based on <b>CRDT (Conflict-free Replicated Data Types)</b>, ensuring automated state resolution without persistent connectivity.",
        about_p3: "My freelance path as a <b>Full-cycle Engineer</b> is an evolution from simple coding to a strategic <b>Technical Partner</b> role. I specialize in building transparent communication with clients, where my primary task is transforming vague business ideas into clear technical architecture. I dive deep into the client's business logic, conduct risk analysis, and help choose the optimal tech stack to reach goals. By managing the project from the first dialogue to final Docker deployment and CI/CD setup, I guarantee not just technical excellence but also market-readiness.",
        about_mat1: "Expertise in .NET 9 & C# 13",
        about_mat2: "Distributed Systems & CRDT",
        about_mat3: "Full-cycle Product Delivery",
        about_mat4: "High-load Architecture",
        exp_sub: "02. SKILLS", exp_title: "Technical Stack & Skills",
        exp_be: "BACKEND",
        exp_arch: "ARCHITECTURE",
        exp_dev: "TECHNOLOGIES",
        exp_soft: "SOFT SKILLS",
        sk_netc: "ASP.NET Core", sk_api: "ASP.NET Web API", sk_mvc: "ASP.NET MVC", sk_nf: ".NET Framework",
        sk_micro: "Microservices", sk_shab: "Design Patterns", sk_oop: "OOP Principles", sk_solid: "SOLID Principles",
        sk_tg: "Telegram Bot Dev", 
        sk_comm: "Communication", sk_learn: "Fast Learner", sk_init: "Proactivity",
        sk_nice: "Friendliness", sk_nonconf: "Non-conflictual", sk_honest: "Honesty",
        sk_adapt: "Adaptability", sk_discip: "Discipline", sk_org: "Organization",
        sk_hard: "Hardworking", sk_resp: "Responsibility",
        proj_sub: "03. PROJECTS", proj_title: "SELECTED PROJECTS",
        proj_tech_label: "Tech Stack:",
        proj1_title: "Coffesystem", proj1_desc: "A comprehensive solution for the full coffee shop management cycle built on <b>.NET 8/9</b> and <b>PostgreSQL</b>. The system automates everything from instant checkout in the cashier terminal with the <b>SovereignLedger</b> cart up to detailed inventory management and real-time revenue analytics. Premium looks are powered by <b>Sovereign UI</b> with <b>Docker</b> ensuring reliable deployment.", 
        proj2_title: "Komorebi-Shop", proj2_desc: "A large-scale e-commerce platform for modern online retail built on <b>FastAPI</b>. The application manages the entire shopping lifecycle from smart product filtering by categories to asynchronous order processing and cart management. The system guarantees an instant interface response and full security of user data.", 
        proj3_title: "Promokod-parser", proj3_desc: "An automated intelligent assistant for finding and aggregating the best deals on <b>Python</b>. The program autonomously scans dozens of platforms, bypasses security systems and collects current promocodes into a single database without extra effort.", 
        contact_sub: "04. CONTACT", contact_title: "Connect & Collaborate",
        card_title: "GET IN TOUCH", card_subtitle: "Always open to new challenges and complex architectural solutions.",
        label_email: "EMAIL:", desc_email: "Email me, I will get back to you shortly.",
        label_tg: "TELEGRAM:", desc_tg: "Fastest way to reach me.",
        label_gh: "GITHUB:", desc_gh: "My code and architectural patterns.",
        footer_text: "// STANISLAV RUDYK 2026 // ", footer_repo: "PROJECTS REPOSITORY ↗"
    }
};

let currentLang = localStorage.getItem('lang') || 'ua';
let currentTheme = localStorage.getItem('theme') || 'dark';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.getElementById('canvas-container').appendChild(renderer.domElement);

// PARTICLE GRID SYSTEM
const particlesCount = 1500;
const posArray = new Float32Array(particlesCount * 3);
const velocityArray = new Float32Array(particlesCount * 3);

for(let i=0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 15;
    velocityArray[i] = (Math.random() - 0.5) * 0.002;
}

const particlesGeometry = new THREE.BufferGeometry();
particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

const particlesMaterial = new THREE.PointsMaterial({
    size: 0.008,
    color: currentTheme === 'light' ? 0x007680 : 0x00f2ff,
    transparent: true,
    opacity: 0.4,
    blending: currentTheme === 'light' ? THREE.NormalBlending : THREE.AdditiveBlending
});

const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particlesMesh);

// ADD SUBTLE GRID LINES
const gridHelper = new THREE.GridHelper(20, 40, currentTheme === 'light' ? 0x007680 : 0x00f2ff, 0x112233);
gridHelper.position.y = -2;
gridHelper.material.opacity = currentTheme === 'light' ? 0.08 : 0.05;
gridHelper.material.transparent = true;
scene.add(gridHelper);

camera.position.z = 5;

// MOUSE INTERACTION
let mouseX = 0;
let mouseY = 0;

window.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
});

// ANIMATION LOOP
function animate() {
    requestAnimationFrame(animate);

    const positions = particlesGeometry.attributes.position.array;
    for(let i=0; i < particlesCount * 3; i++) {
        positions[i] += velocityArray[i];
        if(positions[i] > 8 || positions[i] < -8) velocityArray[i] *= -1;
    }
    particlesGeometry.attributes.position.needsUpdate = true;

    particlesMesh.rotation.y += 0.0005;
    particlesMesh.rotation.x += 0.0002;

    // Interactive shift
    gsap.to(scene.rotation, {
        y: mouseX * 0.1,
        x: -mouseY * 0.1,
        duration: 2,
        ease: "power2.out"
    });

    renderer.render(scene, camera);
}

animate();

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// GSAP Animations for sections
gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll('section').forEach(section => {
    gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });
});

// Scramble Text Effect
class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = '!<>-_\\/[]{}—=+*^?#________';
    this.update = this.update.bind(this);
  }
  setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise((resolve) => this.resolve = resolve);
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({ from, to, start, end });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }
  update() {
    let output = '';
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
        let { from, to, start, end, char } = this.queue[i];
        if (this.frame >= end) {
            complete++;
            output += to;
        } else if (this.frame >= start) {
            if (!char || Math.random() < 0.28) {
                char = this.randomChar();
                this.queue[i].char = char;
            }
            output += `<span style="opacity:0.5; color:var(--primary)">${char}</span>`;
        } else {
            output += from;
        }
    }
    this.el.innerHTML = output;
    if (complete === this.queue.length) {
        this.resolve();
    } else {
        this.frameRequest = requestAnimationFrame(this.update);
        this.frame++;
    }
  }
  randomChar() { return this.chars[Math.floor(Math.random() * this.chars.length)]; }
}



function updateContent() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            el.innerHTML = translations[currentLang][key];
        }
    });
    document.getElementById('lang-toggle').innerText = currentLang === 'ua' ? 'EN' : 'UA';
}

function initTheme() {
    if (currentTheme === 'light') document.body.classList.add('light-theme');
    updateContent();
}

document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    currentTheme = document.body.classList.contains('light-theme') ? 'light' : 'dark';
    localStorage.setItem('theme', currentTheme);
    
    // Update Three.js Visuals
    const newColor = currentTheme === 'light' ? 0x007680 : 0x00f2ff;
    particlesMaterial.color.setHex(newColor);
    particlesMaterial.blending = currentTheme === 'light' ? THREE.NormalBlending : THREE.AdditiveBlending;
    gridHelper.material.color.setHex(newColor);
});

document.getElementById('lang-toggle').addEventListener('click', () => {
    currentLang = currentLang === 'ua' ? 'en' : 'ua';
    localStorage.setItem('lang', currentLang);
    updateContent();
});

initTheme();

/* 
const consolePitch = document.querySelector('.node-pitch');
if (consolePitch) {
    const fx = new TextScramble(consolePitch);
    const text = consolePitch.textContent; 
    ScrollTrigger.create({
        trigger: ".contact-node",
        start: "top 90%",
        onEnter: () => fx.setText(text)
    });
}
*/
