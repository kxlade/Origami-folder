const aboutContent = document.getElementById("about-content");
const summariseButton = document.getElementById("summarise");
const resetButton = document.getElementById("resetAbout");
const languageButton = document.getElementById("toggleLang");
const readMoreButton = document.getElementById("readmore");
const reloadButton = document.getElementById("relodd");
const backToTop = document.querySelector(".back-to-top");
const footerCreatorLink = document.getElementById("footerCreatorLink");
const origamiLoader = document.getElementById("origamiLoader");
const overlayToggle = document.getElementById("op");
const overlayLinks = document.querySelectorAll(".overlay a[href^='#']");

const englishInitial = `
    <h1 class="head">Introduction to Origami</h1>
    <p id="paras">
        Origami is the traditional Japanese art of paper folding, where a single
        sheet of paper is transformed into beautiful shapes without cutting or
        using glue. Over the years, origami has evolved from a cultural practice
        into a creative art form enjoyed by people of all ages across the world.
        This website is designed to showcase the beauty, creativity, and
        educational value of origami through various designs, categories, and
        step-by-step instructions.
        <br><br>
        The Origami Website serves as a complete guide for beginners, children,
        and advanced learners who are interested in learning paper folding
        techniques. It highlights different origami designs such as animals,
        birds, flowers, faces, and many more, while also providing
        easy-to-follow steps and images for each design.
    </p>
    <p id="paras">
        You will find lots of wonderful origami models to fold at
        <a href="https://origami.guide/" style="font-weight: bolder">origami.guide</a>,
        many of which are unique and fun to try.
    </p>

    <h1 class="head" id="headd">About Origami</h1>
    <p id="paras">
        Origami originated in Japan over a thousand years ago, where it was
        considered both a ceremonial practice and a form of artistic expression.
        The word <em>origami</em> comes from two Japanese words: <em>ori</em>
        (folding) and <em>kami</em> (paper). Over time, origami spread across
        cultures and became a global art form used in education, mathematics,
        design, and even engineering.
    </p>
    <p id="paras">
        Learn more about the origins of origami
        <a href="https://origami.guide/history-of-origami/" style="font-weight: bolder">here</a>.
    </p>
`;

const englishSummary = `
    <p>
        This website is designed to showcase the beauty, creativity, and
        educational value of origami through tutorials, categories, and
        easy-to-follow inspiration for beginners and advanced folders.
    </p>
`;

const englishFull = `
    <p>
        Origami, the ancient Japanese art of paper folding, has captivated
        enthusiasts around the world for centuries. This website is dedicated to
        showcasing the beauty, creativity, and educational value of origami
        through various designs, categories, and step-by-step instructions.
        <br><br>
        The Origami Website serves as a complete guide for beginners, children,
        and advanced learners who are interested in learning paper folding
        techniques. It highlights different origami designs such as animals,
        birds, flowers, faces, and many more, while also providing
        easy-to-follow steps and images for each design.
        <br><br>
        Origami is not just a craft. It is a form of artistic expression that
        encourages creativity, patience, and precision. Through the process of
        folding paper, individuals can develop fine motor skills, enhance
        spatial awareness, and cultivate a sense of mindfulness.
        <br><br>
        In addition to providing instructions for various origami designs, this
        website also explores the history and cultural significance of origami.
        It shows how a simple fold can become something meaningful, beautiful,
        and even useful in other fields.
    </p>
`;

const japaneseText = `
    <h1 class="head">Origami in Japanese</h1>
    <p>
        折り紙は、日本の伝統的な紙の芸術であり、一枚の紙を折ることで
        さまざまな形を作り出します。このサイトでは、折り紙の美しさ、
        楽しさ、そして学びの価値を紹介しています。
        <br><br>
        初心者から上級者まで楽しめるように、いろいろな作品や参考リンクを
        まとめています。英語版に戻ると、より詳しい説明も読むことができます。
    </p>
`;

let currentLanguage = "en";
let currentView = "initial";

function renderEnglishView(view) {
    if (!aboutContent) {
        return;
    }

    if (view === "summary") {
        aboutContent.innerHTML = englishSummary;
    } else if (view === "full") {
        aboutContent.innerHTML = englishFull;
    } else {
        aboutContent.innerHTML = englishInitial;
    }
}

if (aboutContent) {
    renderEnglishView("initial");
}

if (summariseButton && readMoreButton && languageButton && resetButton) {
    summariseButton.addEventListener("click", () => {
        aboutContent.innerHTML = currentLanguage === "en" ? englishSummary : japaneseText;
        currentView = "summary";
        readMoreButton.style.display = "Block";
        summariseButton.style.display = "None";
        readMoreButton.textContent = "Read more";
        languageButton.style.display = "None";
        resetButton.style.display = "Block";
    });

    readMoreButton.addEventListener("click", () => {
        aboutContent.innerHTML = currentLanguage === "en" ? englishFull : japaneseText;
        currentView = "full";
        readMoreButton.style.display = "None";
        summariseButton.style.display = "Block";
        languageButton.style.display = "Block";
    });

    languageButton.addEventListener("click", () => {
        if (currentLanguage === "en") {
            aboutContent.innerHTML = japaneseText;
            currentLanguage = "jp";
            languageButton.textContent = "English";
            summariseButton.style.display = "None";
            readMoreButton.style.display = "None";
        } else {
            renderEnglishView(currentView);
            currentLanguage = "en";
            languageButton.textContent = "Japanese / English";
            summariseButton.style.display = "Block";
        }
    });

    resetButton.addEventListener("click", () => {
        renderEnglishView("initial");
        currentLanguage = "en";
        currentView = "initial";
        resetButton.style.display = "none";
        languageButton.style.display = "Block";
        languageButton.textContent = "Japanese / English";
        summariseButton.style.display = "Block";
        readMoreButton.style.display = "None";
    });
}

if (reloadButton) {
    reloadButton.addEventListener("click", () => {
        window.location.reload();
    });
}

if (backToTop) {
    window.addEventListener("scroll", () => {
        backToTop.style.display = window.scrollY > 400 ? "block" : "none";
    });

    backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

if (overlayToggle && overlayLinks.length > 0) {
    overlayLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            const targetId = link.getAttribute("href");
            const targetSection = targetId ? document.querySelector(targetId) : null;

            if (!targetSection) {
                return;
            }

            event.preventDefault();
            overlayToggle.checked = false;

            window.setTimeout(() => {
                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }, 380);
        });
    });
}

// ===== SEARCH BAR FUNCTIONALITY =====
const searchIconBtn = document.querySelector('.search-icon-btn');
const searchInput = document.querySelector('.search-input');
const searchBarContainer = document.querySelector('.search-bar-container');
const bodyElement = document.body;

// 1. TOGGLE SEARCH BAR WHEN ICON IS CLICKED
searchIconBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent click from triggering "click outside" logic

    // Toggle the active class
    searchInput.classList.toggle('active');

    // If activating, focus on the input so user can type immediately
    if (searchInput.classList.contains('active')) {
        searchInput.focus();
        searchInput.value = ''; // Clear previous search
    }
});

// 2. CLOSE SEARCH BAR WHEN CLICKING OUTSIDE
document.addEventListener('click', (e) => {
    // If click is outside the search bar container, close the search bar
    if (!searchBarContainer.contains(e.target)) {
        searchInput.classList.remove('active');
        clearSearch(); // Clear search results
    }
});

// 3. SEARCH FUNCTIONALITY - AS USER TYPES
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase().trim();

    if (searchTerm === '') {
        // If search box is empty, show everything
        clearSearch();
    } else {
        // Search through the page
        performSearch(searchTerm);
    }
});

// 4. SEARCH FUNCTION - Filter and highlight content
function performSearch(searchTerm) {
    // Get all sections that contain searchable content
    const sections = document.querySelectorAll('section, .gallery');
    let foundAny = false;

    sections.forEach((section) => {
        const sectionText = section.textContent.toLowerCase();

        if (sectionText.includes(searchTerm)) {
            // Show the section if it contains the search term
            section.classList.remove('hidden-search');
            foundAny = true;

            // Highlight matching text within headings and paragraphs
            highlightMatches(section, searchTerm);
        } else {
            // Hide the section if it doesn't contain the search term
            section.classList.add('hidden-search');
        }
    });

    // Also search in gallery images and links
    searchGalleryItems(searchTerm);
}

// 5. HIGHLIGHT MATCHES - Show where the search term appears
function highlightMatches(container, searchTerm) {
    // Find all text nodes and highlight matches
    const headings = container.querySelectorAll('h1, h2, h3, p');

    headings.forEach((element) => {
        const originalText = element.textContent;

        // Only highlight if it's not already highlighted
        if (!element.innerHTML.includes('search-highlight')) {
            const regex = new RegExp(`(${searchTerm})`, 'gi');
            const newHTML = originalText.replace(
                regex,
                '<span class="search-highlight">$1</span>'
            );
            element.innerHTML = newHTML;
        }
    });
}

// 6. SEARCH GALLERY ITEMS
function searchGalleryItems(searchTerm) {
    const galleryLinks = document.querySelectorAll('.gallery a');

    galleryLinks.forEach((link) => {
        const linkText = link.textContent.toLowerCase();
        const linkHref = link.getAttribute('href').toLowerCase();

        if (linkText.includes(searchTerm) || linkHref.includes(searchTerm)) {
            link.closest('.gallery').classList.remove('hidden-search');
        }
    });
}

// 7. CLEAR SEARCH - Reset everything
function clearSearch() {
    // Remove hidden-search class from all sections
    document.querySelectorAll('section, .gallery').forEach((section) => {
        section.classList.remove('hidden-search');
    });

    // Remove highlights
    document.querySelectorAll('.search-highlight').forEach((highlight) => {
        const parent = highlight.parentNode;
        parent.textContent = parent.textContent; // Remove span tags
    });

    // Clear input
    searchInput.value = '';
}

// 8. PREVENT SEARCH FROM CLOSING WHEN TYPING
searchInput.addEventListener('click', (e) => {
    e.stopPropagation();
});

if (footerCreatorLink && origamiLoader) {
    footerCreatorLink.addEventListener("click", (event) => {
        event.preventDefault();
        const destination = footerCreatorLink.dataset.aboutUrl || footerCreatorLink.getAttribute("href");

        origamiLoader.classList.add("is-active");
        origamiLoader.setAttribute("aria-hidden", "false");

        window.setTimeout(() => {
            window.location.href = destination;
        }, 1150);
    });
}
