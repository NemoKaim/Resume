const portfolio = {
    ru: {
        pageTitle: "Портфолио",
        pageSubtitle: "Ларин Никита - C# / C++ разработчик",
        navResume: "Резюме",
        navPortfolio: "Портфолио",
        intro: {
            title: "О ПОРТФОЛИО",
            text: "Здесь собраны мои проекты: игры в Steam (выпущенные и готовящаяся к релизу PersonaNet), коммерческое веб-приложение и собственный игровой движок. По каждому проекту указано, что именно делал я и на чём."
        },
        stackTitle: "Стек:",
        roleTitle: "Роль:",
        detailsTitle: "Что сделано:",
        linksTitle: "Ссылки:",
        statusTitle: "Статус:",
        groups: [
            {
                title: "ДВИЖОК",
                projects: [
                    {
                        name: "AetherEngine",
                        tagline: "Игровой движок на C++ с рендером на Vulkan",
                        period: "2025 - настоящее время",
                        status: "В активной разработке",
                        role: "Единственный разработчик",
                        stack: "C++, Vulkan, CMake, Jolt Physics, Assimp, FreeType, Python (кодогенерация)",
                        description: "Движок с редактором сцен и отдельным рантаймом для сборки готовых игр. Помимо графики включает свой скриптовый язык с визуальными нодами, систему рефлексии типов, аудиодвижок и физику.",
                        details: [
                            "Рендер на Vulkan: настраиваемый пайплайн проходов (RenderPipeline / RendererFeature), PBR-освещение, теневые карты для направленного света, IBL и skybox из HDR-карт, пост-эффекты",
                            "Скриптовый язык AetherScript: лексер, парсер, семантический анализ, компиляция в байткод, верификатор байткода, дизассемблер и виртуальная машина",
                            "Визуальное программирование на нодах: скрипт можно писать кодом или собирать графом нод и переключаться между представлениями в любой момент",
                            "Система рефлексии типов (TypeDB, Variant, PropertyInfo) - на её основе работают инспектор в редакторе и сериализация сцен",
                            "Редактор: работа со сценами, ассетами, гизмо, undo/redo, IPC между редактором и рантаймом",
                            "Аудиодвижок: микшер, шины, DSP, 3D-звук; бэкенды WASAPI (Windows) и CoreAudio (macOS)",
                            "Физика на базе Jolt Physics через абстрактный бэкенд-слой",
                            "Кроссплатформенный слой окон и ввода: Win32 и Cocoa",
                            "Сборка на CMake с пресетами, кодогенерация биндингов и экспортов на Python"
                        ],
                        links: [
                            {text: "GitHub", url: "https://github.com/NemoKaim/AetherEngine"}
                        ]
                    }
                ]
            },
            {
                title: "ИГРЫ (STEAM)",
                projects: [
                    {
                        name: "PersonaNet",
                        tagline: "3D-хоррор в духе тамагочи, страница открыта в Steam",
                        period: "2025 - настоящее время",
                        status: "В разработке, скоро в Steam (можно добавить в список желаемого)",
                        role: "Разработчик, геймдизайнер и автор сюжета",
                        stack: "Unity, C#, Steamworks SDK",
                        description: "Игра, стилизованная под «потерянную» игру 2000-х: игрок заботится о жителях маленькой деревни, а со временем привычный мир начинает ломаться и превращается в психологический хоррор.",
                        details: [
                            "Геймдизайн и сюжет: дизайн-документы по лору, персонажам и геймплейным циклам",
                            "Шесть жителей деревни, у каждого своя мини-игра и «искажённая» версия во втором цикле",
                            "Стилизация под ретро-консоль: запуск через меню в духе PS2, глитч-эффекты и сломанные сцены",
                            "Подготовка и публикация страницы в Steam"
                        ],
                        links: [
                            {text: "Страница в Steam", url: "https://store.steampowered.com/app/4704890/PersonaNet/"}
                        ]
                    },
                    {
                        name: "Lobotomy",
                        tagline: "Игра для PC, издана в Steam",
                        period: "2024 - 2025",
                        status: "Релиз",
                        role: "Единственный разработчик",
                        stack: "Unity, C#, Steamworks SDK",
                        description: "Проект от прототипа до релиза в Steam: геймплей, UI, сохранения, сборка и публикация страницы в магазине.",
                        details: [
                            "Разработка игровой логики и UI",
                            "Система сохранений",
                            "Интеграция Steam API: достижения, сборки, настройка страницы",
                            "Оптимизация производительности, пост-релизные обновления и фиксы"
                        ],
                        links: [
                            {text: "Страница в Steam", url: "https://store.steampowered.com/app/3505700/Lobotomy/"}
                        ]
                    },
                    {
                        name: "100 Dogs",
                        tagline: "Игра для PC, издана в Steam",
                        period: "2023 - 2024",
                        status: "Релиз",
                        role: "Единственный разработчик",
                        stack: "Unity, C#, Steamworks SDK",
                        description: "Полный цикл разработки и публикации: от прототипа до релиза и поддержки после выхода.",
                        details: [
                            "Геймплейные механики и уровни",
                            "UI и меню",
                            "Настройка сборок и достижений в Steam",
                            "Поддержка и обновления после релиза"
                        ],
                        links: [
                            {text: "Страница в Steam", url: "https://store.steampowered.com/app/3048670/100_Dogs/"}
                        ]
                    }
                ]
            },
            {
                title: "ВЕБ / КОММЕРЧЕСКАЯ РАЗРАБОТКА",
                projects: [
                    {
                        name: "Веб-приложение для расчёта КП - ООО «Three A»",
                        tagline: "Внутренний инструмент для B2B-продаж",
                        period: "2024 - настоящее время",
                        status: "В продакшене",
                        role: "C# разработчик",
                        stack: "ASP.NET Core, Blazor, C#, MySQL",
                        description: "Приложение для расчёта цен B2B-предложений с выгрузкой коммерческих предложений в Excel и PDF.",
                        details: [
                            "Разработка и поддержка приложения на ASP.NET Core и Blazor",
                            "Проектирование архитектуры приложения и API",
                            "Интеграция с базой данных",
                            "Генерация документов в Excel и PDF",
                            "Сбор требований и согласование сроков с заказчиками"
                        ],
                        links: [
                            {text: "threea.kz", url: "https://www.threea.kz/"}
                        ]
                    }
                ]
            }
        ]
    },
    en: {
        pageTitle: "Portfolio",
        pageSubtitle: "Nikita Larin - C# / C++ developer",
        navResume: "Resume",
        navPortfolio: "Portfolio",
        intro: {
            title: "ABOUT THIS PAGE",
            text: "My projects: games on Steam (shipped titles and the upcoming PersonaNet), a commercial web application and my own game engine. For each project I list what exactly I built and with what."
        },
        stackTitle: "Stack:",
        roleTitle: "Role:",
        detailsTitle: "What I built:",
        linksTitle: "Links:",
        statusTitle: "Status:",
        groups: [
            {
                title: "ENGINE",
                projects: [
                    {
                        name: "AetherEngine",
                        tagline: "C++ game engine with a Vulkan renderer",
                        period: "2025 - present",
                        status: "In active development",
                        role: "Sole developer",
                        stack: "C++, Vulkan, CMake, Jolt Physics, Assimp, FreeType, Python (code generation)",
                        description: "An engine with a scene editor and a separate runtime for shipping built games. Besides graphics it includes a custom scripting language with visual nodes, a type reflection system, an audio engine and physics.",
                        details: [
                            "Vulkan renderer: configurable render pass pipeline (RenderPipeline / RendererFeature), PBR lighting, directional shadow maps, IBL and skybox from HDR maps, post-processing effects",
                            "AetherScript scripting language: lexer, parser, semantic analysis, bytecode compilation, bytecode verifier, disassembler and virtual machine",
                            "Node-based visual scripting: a script can be written as code or built as a node graph, switching between the two views at any time",
                            "Type reflection system (TypeDB, Variant, PropertyInfo) powering the editor inspector and scene serialization",
                            "Editor: scenes, assets, gizmos, undo/redo, IPC between editor and runtime",
                            "Audio engine: mixer, buses, DSP, 3D sound; WASAPI (Windows) and CoreAudio (macOS) backends",
                            "Physics based on Jolt Physics behind an abstract backend layer",
                            "Cross-platform window and input layer: Win32 and Cocoa",
                            "CMake build with presets, Python code generation for bindings and exports"
                        ],
                        links: [
                            {text: "GitHub", url: "https://github.com/NemoKaim/AetherEngine"}
                        ]
                    }
                ]
            },
            {
                title: "GAMES (STEAM)",
                projects: [
                    {
                        name: "PersonaNet",
                        tagline: "3D Tamagotchi-like horror game, Steam page is live",
                        period: "2025 - present",
                        status: "In development, coming soon to Steam (wishlists open)",
                        role: "Developer, game designer and writer",
                        stack: "Unity, C#, Steamworks SDK",
                        description: "A game styled as a lost 2000s title: the player cares for the residents of a small village, until the familiar world starts to break down and turns into psychological horror.",
                        details: [
                            "Game design and story: design documents covering lore, characters and gameplay loops",
                            "Six village residents, each with their own minigame and a distorted version in the second loop",
                            "Retro console styling: launched through a PS2-like menu, glitch effects and broken scenes",
                            "Steam store page preparation and publishing"
                        ],
                        links: [
                            {text: "Steam page", url: "https://store.steampowered.com/app/4704890/PersonaNet/"}
                        ]
                    },
                    {
                        name: "Lobotomy",
                        tagline: "PC game published on Steam",
                        period: "2024 - 2025",
                        status: "Released",
                        role: "Sole developer",
                        stack: "Unity, C#, Steamworks SDK",
                        description: "From prototype to Steam release: gameplay, UI, save system, builds and store page setup.",
                        details: [
                            "Game logic and UI development",
                            "Save system",
                            "Steam API integration: achievements, builds, store page setup",
                            "Performance optimization, post-release updates and fixes"
                        ],
                        links: [
                            {text: "Steam page", url: "https://store.steampowered.com/app/3505700/Lobotomy/"}
                        ]
                    },
                    {
                        name: "100 Dogs",
                        tagline: "PC game published on Steam",
                        period: "2023 - 2024",
                        status: "Released",
                        role: "Sole developer",
                        stack: "Unity, C#, Steamworks SDK",
                        description: "Full development and publishing cycle: from prototype to release and post-launch support.",
                        details: [
                            "Gameplay mechanics and levels",
                            "UI and menus",
                            "Steam builds and achievements setup",
                            "Post-release support and updates"
                        ],
                        links: [
                            {text: "Steam page", url: "https://store.steampowered.com/app/3048670/100_Dogs/"}
                        ]
                    }
                ]
            },
            {
                title: "WEB / COMMERCIAL WORK",
                projects: [
                    {
                        name: "Quotation pricing web app - LLC \"Three A\"",
                        tagline: "Internal tool for B2B sales",
                        period: "2024 - present",
                        status: "In production",
                        role: "C# developer",
                        stack: "ASP.NET Core, Blazor, C#, MySQL",
                        description: "Application for calculating B2B offer pricing with export of commercial proposals to Excel and PDF.",
                        details: [
                            "Development and maintenance of an ASP.NET Core and Blazor application",
                            "Application architecture and API design",
                            "Database integration",
                            "Excel and PDF document generation",
                            "Requirements gathering and deadline coordination with clients"
                        ],
                        links: [
                            {text: "threea.kz", url: "https://www.threea.kz/"}
                        ]
                    }
                ]
            }
        ]
    }
};

function getLanguageFromURL() {
    const hash = window.location.hash.substring(1);
    return hash === 'en' ? 'en' : 'ru';
}

function renderProject(project, data) {
    return `
        <div class="experience-item">
            <div class="experience-header">
                <h3 class="job-title">${project.name}</h3>
                <span class="date">${project.period}</span>
            </div>
            <div class="company">${project.tagline}</div>
            <p class="job-description">${project.description}</p>
            <div class="project-meta">
                <div><span class="project-meta-label">${data.roleTitle}</span> ${project.role}</div>
                <div><span class="project-meta-label">${data.stackTitle}</span> ${project.stack}</div>
                <div><span class="project-meta-label">${data.statusTitle}</span> ${project.status}</div>
            </div>
            <div class="responsibilities-title">${data.detailsTitle}</div>
            <ul class="responsibilities">
                ${project.details.map(d => `<li>${d}</li>`).join('')}
            </ul>
            ${project.links && project.links.length ? `
            <div class="links-section">
                <div class="links-title">${data.linksTitle}</div>
                <ul>
                    ${project.links.map(l => `<li><a href="${l.url}" target="_blank">${l.text}</a></li>`).join('')}
                </ul>
            </div>` : ''}
        </div>
    `;
}

function updateContent(lang) {
    const data = portfolio[lang];

    document.documentElement.lang = lang;
    document.title = 'Larin Nikita - ' + data.pageTitle;
    document.getElementById('page-title').textContent = data.pageTitle;
    document.getElementById('page-subtitle').textContent = data.pageSubtitle;

    const navResume = document.getElementById('nav-resume');
    const navPortfolio = document.getElementById('nav-portfolio');
    navResume.textContent = data.navResume;
    navResume.href = 'index.html#' + lang;
    navPortfolio.textContent = data.navPortfolio;

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    document.getElementById('portfolio-content').innerHTML = `
        <section class="section">
            <h2 class="section-title">${data.intro.title}</h2>
            <p class="section-text">${data.intro.text}</p>
        </section>
        ${data.groups.map(group => `
            <section class="section">
                <h2 class="section-title">${group.title}</h2>
                ${group.projects.map(p => renderProject(p, data)).join('')}
            </section>
        `).join('')}
    `;
}

document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.hash = btn.dataset.lang;
        updateContent(btn.dataset.lang);
    });
});

window.addEventListener('hashchange', () => updateContent(getLanguageFromURL()));
window.addEventListener('DOMContentLoaded', () => updateContent(getLanguageFromURL()));
