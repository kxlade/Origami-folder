const coffeeShop = document.getElementById("coffeeShop");
const coffeeButton = document.getElementById("coffeeButton");
const coffeeStatus = document.getElementById("coffeeStatus");

const coffeeMessages = [
    "Brewing support mode... student energy just got a tiny buff.",
    "Coffee DLC unlocked. The late-night code session says thanks.",
    "Plot twist: the builder arc just got a caffeine side quest."
];

if (coffeeShop && coffeeButton && coffeeStatus) {
    coffeeButton.addEventListener("click", (event) => {
        event.preventDefault();

        const nextMessage =
            coffeeMessages[Math.floor(Math.random() * coffeeMessages.length)];

        coffeeShop.classList.add("is-brewing");
        coffeeStatus.textContent = nextMessage;

        window.setTimeout(() => {
            window.location.href = coffeeButton.getAttribute("href");
        }, 850);

        window.setTimeout(() => {
            coffeeShop.classList.remove("is-brewing");
        }, 1400);
    });
}
