const aboutContent = document.getElementById("about-content");
const summariseButton = document.getElementById("summarise");
const resetButton = document.getElementById("resetAbout");
const languageButton = document.getElementById("toggleLang");
const readMoreButton = document.getElementById("readmore");
const reloadButton = document.getElementById("relodd");
const backToTop = document.querySelector(".back-to-top");
const footerCreatorLink = document.getElementById("footerCreatorLink");
const origamiLoader = document.getElementById("origamiLoader");

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

if (footerCreatorLink && origamiLoader) {
    footerCreatorLink.addEventListener("click", (event) => {
        event.preventDefault();
        const destination =
            footerCreatorLink.dataset.aboutUrl || footerCreatorLink.getAttribute("href");

        origamiLoader.classList.add("is-active");
        origamiLoader.setAttribute("aria-hidden", "false");

        window.setTimeout(() => {
            window.location.href = destination;
        }, 1150);
    });
}
