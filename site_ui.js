const themeToggleButtons = document.querySelectorAll("[data-theme-toggle]");
const themeSwitchCheckbox = document.querySelector(".theme-switch__checkbox");
const deviceLabels = document.querySelectorAll("[data-device-label]");
const root = document.documentElement;
const body = document.body;

const THEME_KEY = "origami-theme";

function detectPlatform() {
    const ua = navigator.userAgent || navigator.vendor || "";
    const platform = (navigator.userAgentData && navigator.userAgentData.platform) || navigator.platform || "";

    if (/android/i.test(ua)) {
        return { label: "Android", isMobile: true };
    }

    if (/iPhone/i.test(ua)) {
        return { label: "iPhone", isMobile: true };
    }

    if (/iPad|iPod/i.test(ua)) {
        return { label: "Apple mobile", isMobile: true };
    }

    if (/Win/i.test(platform) || /Windows/i.test(ua)) {
        return { label: "Windows", isMobile: false };
    }

    if (/Mac/i.test(platform) || /Macintosh|Mac OS X/i.test(ua)) {
        return { label: "Mac", isMobile: false };
    }

    if (/Linux/i.test(platform) || /Linux/i.test(ua)) {
        return { label: "Linux", isMobile: false };
    }

    return { label: "your device", isMobile: false };
}

function updateDeviceLabels() {
    const platform = detectPlatform();

    deviceLabels.forEach((label) => {
        const prefix = label.dataset.prefix || "Origami for";
        label.textContent = `${prefix} ${platform.label}`;
    });

    if (platform.isMobile) {
        body.classList.add("is-mobile-device");
    }
}

function setTheme(theme) {
    root.dataset.theme = theme;

    if (themeSwitchCheckbox) {
        themeSwitchCheckbox.checked = theme === "dark";
        themeSwitchCheckbox.setAttribute("aria-checked", String(theme === "dark"));
    }

    themeToggleButtons.forEach((button) => {
        const themeLabel = button.querySelector("[data-theme-label]");
        button.setAttribute("aria-pressed", String(theme === "dark"));

        if (themeLabel) {
            themeLabel.textContent = theme === "dark" ? "Dark mode" : "Light mode";
        }
    });
}

function getInitialTheme() {
    const savedTheme = window.localStorage.getItem(THEME_KEY);

    if (savedTheme === "light" || savedTheme === "dark") {
        return savedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function initializeThemeToggle() {
    let currentTheme = getInitialTheme();
    setTheme(currentTheme);

    themeToggleButtons.forEach((button) => {
        button.addEventListener("click", () => {
            currentTheme = currentTheme === "dark" ? "light" : "dark";
            setTheme(currentTheme);
            window.localStorage.setItem(THEME_KEY, currentTheme);
        });
    });

    if (themeSwitchCheckbox) {
        themeSwitchCheckbox.addEventListener("change", () => {
            currentTheme = themeSwitchCheckbox.checked ? "dark" : "light";
            setTheme(currentTheme);
            window.localStorage.setItem(THEME_KEY, currentTheme);
        });
    }
}

updateDeviceLabels();
initializeThemeToggle();
