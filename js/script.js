const translations = {
    ru: {
        name: "Ларин Никита",
        position: "C# / C++ РАЗРАБОТЧИК",
        location: "Алматы, Казахстан",
        sections: {
            about: {
                title: "О СЕБЕ",
                text: "C# / C++ разработчик с коммерческим опытом в вебе и геймдеве. Работаю в продакшене на ASP.NET Core и Blazor (B2B-приложение для расчёта коммерческих предложений), сам выпустил игры в Steam на Unity и сейчас готовлю к релизу PersonaNet. Параллельно пишу собственный игровой движок на C++ и Vulkan: рендер, редактор, свой скриптовый язык с байткодом и VM и визуальное программирование на нодах с переключением между кодом и графом. Довожу проекты от идеи до релиза, держу сроки и умею общаться с заказчиками напрямую."
            },
            career: {
                title: "КАРЬЕРНЫЕ ЦЕЛИ",
                text: "Ищу позицию C# / C++ разработчика в геймдеве, разработке движков и инструментов или в бэкенде на .NET. Хочу работать над продуктом, где важны производительность и архитектура, и приносить команде опыт полного цикла: от прототипа до релиза и поддержки."
            },
            experience: {
                title: "ОПЫТ РАБОТЫ",
                jobs: [
                    {
                        title: "C# Разработчик",
                        date: "2024 - настоящее время",
                        company: 'OOO "Three A"',
                        description: "Разработка и поддержка веб-приложения на ASP.NET Core и Blazor для коммерческих клиентов, расчёт цен для B2B предложений и выгрузка КП в Excel и PDF форматах.",
                        responsibilitiesTitle: "Обязанности:",
                        responsibilities: [
                            "Разработка веб-приложений на ASP.NET Core и Blazor для расчёта коммерческих предложений",
                            "Интеграция с базами данных",
                            "Проектирование архитектуры приложений и API",
                            "Общение с заказчиками, согласование требований и сроков"
                        ],
                        linksTitle: "Ссылки:",
                        links: ["https://www.threea.kz/"]
                    },
                    {
                        title: "Разработчик игрового движка (C++ / Vulkan)",
                        date: "2025 - настоящее время",
                        company: "AetherEngine - личный проект",
                        description: "Собственный игровой движок на C++ с рендером на Vulkan: редактор, рантайм-плеер, свой скриптовый язык с визуальными нодами и система рефлексии.",
                        responsibilitiesTitle: "Что реализовано:",
                        responsibilities: [
                            "Рендер на Vulkan: настраиваемый пайплайн проходов, PBR-освещение, теневые карты, IBL и skybox, пост-эффекты",
                            "Свой скриптовый язык AetherScript: лексер, парсер, семантический анализ, компиляция в байткод и виртуальная машина",
                            "Визуальное программирование на нодах: один и тот же скрипт можно редактировать кодом или графом нод и переключаться между ними",
                            "Система рефлексии и сериализации типов, редактор сцен, undo/redo, работа с ассетами",
                            "Аудиодвижок с миксером, шинами и DSP, бэкенды WASAPI и CoreAudio",
                            "Физика на базе Jolt Physics, кроссплатформенный слой окон и ввода (Win32 / Cocoa)",
                            "Сборка на CMake, кодогенерация на Python, отдельный рантайм для сборки готовых игр"
                        ],
                        linksTitle: "Ссылки:",
                        links: ["https://github.com/NemoKaim/AetherEngine"]
                    },
                    {
                        title: "Unity/C# разработчик",
                        date: "07-2022 - настоящее время",
                        company: "Инди-разработка (Steam-проекты)",
                        description: "Разработка собственных игр для PC и публикация в Steam. Выпущены Lobotomy и 100 Dogs, в разработке PersonaNet (3D-хоррор в духе тамагочи, страница в Steam уже открыта).",
                        responsibilitiesTitle: "Обязанности:",
                        responsibilities: [
                            "Полный цикл разработки игр: от прототипа до релиза и пост-релизных апдейтов",
                            "Настройка сборок для Steam, настройка achievement-системы и встроенных покупок",
                            "Разработка игровой логики, UI, систем сохранений и интеграции с Steam API",
                            "Оптимизация производительности и исправление багов"
                        ],
                        linksTitle: "Ссылки:",
                        links: [
                            {text: "PersonaNet", url: "https://store.steampowered.com/app/4704890/PersonaNet/"},
                            {text: "Lobotomy", url: "https://store.steampowered.com/app/3505700/Lobotomy/"},
                            {text: "100 Dogs", url: "https://store.steampowered.com/app/3048670/100_Dogs/"}
                        ]
                    }
                ]
            },
            education: {
                title: "ОБРАЗОВАНИЕ",
                items: [
                    {
                        degree: "Разработчик программного обеспечения",
                        date: "09-2022 - 06-2025",
                        institution: "ЦАТЭК (Колледж Алматы)",
                        details: ["Казахстан", "(GPA) 3.6. Красный диплом"]
                    },
                    {
                        degree: "Информационные Системы",
                        date: "09-2025 - настоящее время",
                        institution: "Туран Университет Алматы",
                        details: ["Казахстан"]
                    }
                ]
            },
            courses: {
                title: "КУРСЫ/СЕРТИФИКАТЫ",
                items: [
                    {name: "Новосибирская академия дизайна и программирования", date: "06-2021"}
                ]
            },
            skills: {
                title: "НАВЫКИ",
                technical: {
                    subtitle: "Технические навыки",
                    list: "• C# • .NET Core • ASP.NET • Blazor • Unity • Steamworks SDK • C++ • Vulkan • CMake • SQL • MySQL • HTML • CSS • JavaScript • Git • GitHub"
                },
                soft: {
                    subtitle: "Софт навыки",
                    list: "• Решение проблем • Работа с продакшеном • Обучаемость • Коммуникация • Соблюдение дедлайнов"
                }
            },
            languages: {
                title: "ЯЗЫКИ",
                items: [
                    {name: "русский", level: "родной"},
                    {name: "английский", level: "B2"}
                ]
            }
        }
    },
    en: {
        name: "Nikita Larin",
        position: "C# / C++ DEVELOPER",
        location: "Almaty, Kazakhstan",
        sections: {
            about: {
                title: "ABOUT ME",
                text: "C# / C++ developer with commercial experience in web and game development. I work in production on ASP.NET Core and Blazor (a B2B quotation pricing app), have shipped my own Unity games on Steam and am now preparing PersonaNet for release. In parallel I am building my own game engine in C++ and Vulkan: renderer, editor, a custom scripting language with bytecode and a VM, and node-based visual scripting with switching between code and graph. I take projects from idea to release, meet deadlines and communicate with clients directly."
            },
            career: {
                title: "CAREER GOALS",
                text: "Looking for a C# / C++ developer role in game development, engine and tools development, or .NET backend. I want to work on a product where performance and architecture matter, and bring full-cycle experience to the team: from prototype to release and support."
            },
            experience: {
                title: "WORK EXPERIENCE",
                jobs: [
                    {
                        title: "C# Developer",
                        date: "2024 - present",
                        company: 'LLC "Three A"',
                        description: "Development and maintenance of web application on ASP.NET Core and Blazor for commercial clients, pricing for B2B offers and exporting proposals to Excel and PDF formats.",
                        responsibilitiesTitle: "Responsibilities:",
                        responsibilities: [
                            "Development of web applications on ASP.NET Core and Blazor for calculating commercial proposals",
                            "Database integration",
                            "Application architecture and API design",
                            "Communication with clients, requirements and deadlines coordination"
                        ],
                        linksTitle: "Links:",
                        links: ["https://www.threea.kz/"]
                    },
                    {
                        title: "Game Engine Developer (C++ / Vulkan)",
                        date: "2025 - present",
                        company: "AetherEngine - personal project",
                        description: "Own game engine written in C++ with a Vulkan renderer: editor, runtime player, custom scripting language with visual nodes and reflection system.",
                        responsibilitiesTitle: "Implemented:",
                        responsibilities: [
                            "Vulkan renderer: configurable render pass pipeline, PBR lighting, shadow maps, IBL and skybox, post-processing effects",
                            "Custom scripting language AetherScript: lexer, parser, semantic analysis, bytecode compilation and virtual machine",
                            "Node-based visual scripting: the same script can be edited as code or as a node graph, with switching between the two",
                            "Type reflection and serialization system, scene editor, undo/redo, asset pipeline",
                            "Audio engine with mixer, buses and DSP, WASAPI and CoreAudio backends",
                            "Physics based on Jolt Physics, cross-platform window and input layer (Win32 / Cocoa)",
                            "CMake build system, Python code generation, separate runtime for shipping built games"
                        ],
                        linksTitle: "Links:",
                        links: ["https://github.com/NemoKaim/AetherEngine"]
                    },
                    {
                        title: "Unity/C# Developer",
                        date: "07-2022 - present",
                        company: "Indie Development (Steam Projects)",
                        description: "Development of my own PC games and publishing them on Steam. Shipped Lobotomy and 100 Dogs; PersonaNet (a 3D Tamagotchi-like horror game) is in development with its Steam page already live.",
                        responsibilitiesTitle: "Responsibilities:",
                        responsibilities: [
                            "Full game development cycle: from prototype to release and post-release updates",
                            "Steam build configuration, achievement system and in-app purchases setup",
                            "Game logic development, UI, save systems and Steam API integration",
                            "Performance optimization and bug fixing"
                        ],
                        linksTitle: "Links:",
                        links: [
                            {text: "PersonaNet", url: "https://store.steampowered.com/app/4704890/PersonaNet/"},
                            {text: "Lobotomy", url: "https://store.steampowered.com/app/3505700/Lobotomy/"},
                            {text: "100 Dogs", url: "https://store.steampowered.com/app/3048670/100_Dogs/"}
                        ]
                    }
                ]
            },
            education: {
                title: "EDUCATION",
                items: [
                    {
                        degree: "Software Developer",
                        date: "09-2022 - 06-2025",
                        institution: "CATEC (Almaty College)",
                        details: ["Kazakhstan", "(GPA) 3.6. Red Diploma"]
                    },
                    {
                        degree: "Information Systems",
                        date: "09-2025 - present",
                        institution: "Turan University Almaty",
                        details: ["Kazakhstan"]
                    }
                ]
            },
            courses: {
                title: "COURSES/CERTIFICATES",
                items: [
                    {name: "Novosibirsk Academy of Design and Programming", date: "06-2021"}
                ]
            },
            skills: {
                title: "SKILLS",
                technical: {
                    subtitle: "Technical Skills",
                    list: "• C# • .NET Core • ASP.NET • Blazor • Unity • Steamworks SDK • C++ • Vulkan • CMake • SQL • MySQL • HTML • CSS • JavaScript • Git • GitHub"
                },
                soft: {
                    subtitle: "Soft Skills",
                    list: "• Problem Solving • Production Work • Learning Ability • Communication • Meeting Deadlines"
                }
            },
            languages: {
                title: "LANGUAGES",
                items: [
                    {name: "Russian", level: "native"},
                    {name: "English", level: "B2"}
                ]
            }
        }
    }
};

let currentLang = 'ru';

function getLanguageFromURL() {
    const hash = window.location.hash.substring(1);
    if (hash === 'en') return 'en';
    if (hash === 'ru') return 'ru';
    return 'ru';
}

function updateContent(lang) {
    currentLang = lang;
    const data = translations[lang];
    
    document.documentElement.lang = lang;
    document.getElementById('name').textContent = data.name;
    document.getElementById('position').textContent = data.position;
    document.getElementById('location').textContent = data.location;

    const navResume = document.getElementById('nav-resume');
    const navPortfolio = document.getElementById('nav-portfolio');
    if (navResume) navResume.textContent = lang === 'en' ? 'Resume' : 'Резюме';
    if (navPortfolio) {
        navPortfolio.textContent = lang === 'en' ? 'Portfolio' : 'Портфолио';
        navPortfolio.href = 'portfolio.html#' + lang;
    }

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });

    const content = document.getElementById('main-content');
    content.innerHTML = `
        <section class="section">
            <h2 class="section-title">${data.sections.about.title}</h2>
            <p class="section-text">${data.sections.about.text}</p>
        </section>

        <section class="section">
            <h2 class="section-title">${data.sections.career.title}</h2>
            <p class="section-text">${data.sections.career.text}</p>
        </section>

        <section class="section">
            <h2 class="section-title">${data.sections.experience.title}</h2>
            ${data.sections.experience.jobs.map(job => `
                <div class="experience-item">
                    <div class="experience-header">
                        <h3 class="job-title">${job.title}</h3>
                        <span class="date">${job.date}</span>
                    </div>
                    <div class="company">${job.company}</div>
                    <p class="job-description">${job.description}</p>
                    <div class="responsibilities-title">${job.responsibilitiesTitle}</div>
                    <ul class="responsibilities">
                        ${job.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
                    </ul>
                    ${job.links && job.links.length ? `
                    <div class="links-section">
                        <div class="links-title">${job.linksTitle}</div>
                        <ul>
                            ${job.links.map(link => {
                                if (typeof link === 'string') {
                                    return `<li><a href="${link}" target="_blank">${link}</a></li>`;
                                } else {
                                    return `<li>${link.text}: <a href="${link.url}" target="_blank">${link.url}</a></li>`;
                                }
                            }).join('')}
                        </ul>
                    </div>` : ''}
                </div>
            `).join('')}
        </section>

        <section class="section">
            <h2 class="section-title">${data.sections.education.title}</h2>
            ${data.sections.education.items.map(item => `
                <div class="education-item">
                    <div class="education-header">
                        <h3 class="degree-title">${item.degree}</h3>
                        <span class="date">${item.date}</span>
                    </div>
                    <div class="institution">${item.institution}</div>
                    ${item.details.map(detail => `<div class="education-details">${detail}</div>`).join('')}
                </div>
            `).join('')}
        </section>

        <section class="section">
            <h2 class="section-title">${data.sections.courses.title}</h2>
            ${data.sections.courses.items.map(course => `
                <div class="courses-item">
                    <div class="course-header">
                        <h3 class="course-name">${course.name}</h3>
                        <span class="date">${course.date}</span>
                    </div>
                </div>
            `).join('')}
        </section>

        <section class="section">
            <h2 class="section-title">${data.sections.skills.title}</h2>
            <div class="skills-grid">
                <div class="skills-column">
                    <div class="skills-subtitle">${data.sections.skills.technical.subtitle}</div>
                    <div class="skills-list">${data.sections.skills.technical.list}</div>
                </div>
                <div class="skills-column">
                    <div class="skills-subtitle">${data.sections.skills.soft.subtitle}</div>
                    <div class="skills-list">${data.sections.skills.soft.list}</div>
                </div>
            </div>
        </section>

        <section class="section">
            <h2 class="section-title">${data.sections.languages.title}</h2>
            ${data.sections.languages.items.map(lang => `
                <div class="languages-item">
                    <span class="language-name">${lang.name}:</span> ${lang.level}
                </div>
            `).join('')}
        </section>
    `;
}

document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = btn.dataset.lang;
        window.location.hash = lang;
        updateContent(lang);
    });
});

window.addEventListener('hashchange', () => {
    const lang = getLanguageFromURL();
    updateContent(lang);
});

window.addEventListener('DOMContentLoaded', () => {
    const lang = getLanguageFromURL();
    updateContent(lang);
});
