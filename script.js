// Get today's date in Washington, D.C. time
const today = new Date();
const washingtonTime = new Date(today.toLocaleString("en-US", { timeZone: "America/New_York" }));
const currentMonth = washingtonTime.getMonth() + 1; // Months are 0-based
const currentDate = washingtonTime.getDate(); // Extract the day of the month

console.log(`Washington D.C. Time: ${washingtonTime}`);
console.log(`Current Month: ${currentMonth}`);
console.log(`Current Date: ${currentDate}`);


// Background Music
const music = new Audio("./old carol.mp3");
music.loop = true;

// Create a toggle button for music
const musicToggleButton = document.createElement("button");
musicToggleButton.id = "musicToggle";
musicToggleButton.textContent = "🎵 Play Music";
document.body.appendChild(musicToggleButton);

musicToggleButton.addEventListener("click", () => {
    if (music.paused) {
        music.play();
        musicToggleButton.textContent = "🔇 Pause Music";
    } else {
        music.pause();
        musicToggleButton.textContent = "🎵 Play Music";
    }
});

// Generate Snowflakes
const snowContainer = document.getElementById("snowContainer");

function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.className = "snowflake";
    snowflake.textContent = "❄️";
    snowflake.style.left = Math.random() * 100 + "vw";
    snowflake.style.animationDuration = Math.random() * 3 + 7 + "s";
    snowflake.style.fontSize = Math.random() * 10 + 10 + "px";

    snowContainer.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, 10000);
}

setInterval(createSnowflake, 400);

// Slot Content
const surprises = {
    1: "Let’s Build a Gingerbread House Together! 🏠\nI thought of this idea way before you got your hands on the Trader Joe's Gingerbread house kit by the way!!",
    2: "Purr-fect Day at Crumbs & Whiskers @ Georgetown! 🐾\nDate: 12:20 PM\nLet’s surround ourselves with adorable whiskers, soft purrs, and maybe a latte or two.",
    3: "Let’s Play Holiday Bingo! 🎄\nWho will win first? Whoever does gets to decide our next holiday-themed activity. Ready, set, bingo!",
    4: "Redeem Your Relaxing Facial 💆\nA calming, DIY spa experience awaits. Expires in 20 days—claim your moment of relaxation whenever you’re ready.",
    5: `
        <p>Cookie Baking! 🍪</p>
        <p> Sit down and relax, I'm making us cookies!<p>
        <img src="https://media.giphy.com/media/xT0xeMA62E1XIlup68/giphy.gif" alt="Baking" style="max-width: 100%; border-radius: 10px;">
    `,
    6: "Let’s Glide into Fun! ⛸️\nChoose your rink: National Gallery Sculpture Garden, The Wharf, or Washington Harbour. Lace-up those skates—it’s time for some holiday magic on the ice.",
    7: "Your Turn to Decide! 🎭\nYou’re in charge today. Pick an activity, and I’m all yours—no questions asked!",
    8: "Ready for a Festive Snack Adventure? 🎉\nLet’s explore the season’s flavors with a snack taste test. Who knows what our favorite holiday treat will be?",
    9: "You’ve Unlocked a Bundle of 5 Kisses! 💋\nRedeemable anytime, anywhere. Use wisely!",
};
// Initialize the slots
document.querySelectorAll(".slot").forEach((slot) => {
    const slotDay = parseInt(slot.getAttribute("data-day"));

    if (slotDay === currentDate) {
        slot.classList.remove("locked");
        slot.classList.add("unlocked");
        slot.addEventListener("click", () => {
            const surpriseMessage = surprises[slotDay] || "Surprise coming soon! 🎁";

            const modal = document.getElementById("modal");
            const modalMessage = document.getElementById("modal-message");
            modalMessage.innerHTML = surpriseMessage;
            modal.classList.add("show");

            const closeModalButton = document.getElementById("close-modal");
            closeModalButton.addEventListener("click", () => {
                modal.classList.remove("show");
            });
        });
    } else if (slotDay < currentDate) {
        slot.classList.remove("locked");
        slot.classList.add("unlocked");
    } else {
        slot.classList.add("locked");
    }
});


// Unified Countdown and Progress Bar Updates
function updateCountdownsAndBars() {
    const now = new Date();
    const startOfDecember = new Date(now.getFullYear(), 11, 1); // Dec 1
    const christmas = new Date(now.getFullYear(), 11, 25); // Dec 25
    const nycTrip = new Date(now.getFullYear(), 11, 20); // Dec 20

    // Calculate days remaining
    const daysUntilChristmas = Math.max(0, Math.floor((christmas - now) / (1000 * 60 * 60 * 24)));
    const daysUntilNYC = Math.max(0, Math.floor((nycTrip - now) / (1000 * 60 * 60 * 24)));

    // Calculate progress percentages
    const totalDaysDecember = Math.floor((christmas - startOfDecember) / (1000 * 60 * 60 * 24));
    const totalDaysToNYC = Math.floor((nycTrip - startOfDecember) / (1000 * 60 * 60 * 24));

    const progressChristmas = ((totalDaysDecember - daysUntilChristmas) / totalDaysDecember) * 100;
    const progressNYC = ((totalDaysToNYC - daysUntilNYC) / totalDaysToNYC) * 100;

    // Update progress bars
    document.getElementById("progressChristmas").style.width = `${progressChristmas}%`;
    document.getElementById("progressNYC").style.width = `${progressNYC}%`;

    // Update countdown text
    document.getElementById("countdownChristmasText").textContent = `${daysUntilChristmas} day(s) until Christmas! 🎄`;
    document.getElementById("countdownNYCText").textContent = `${daysUntilNYC} day(s) until our NYC trip! 🗽`;
}

// Run countdown and progress bar updates every second
setInterval(updateCountdownsAndBars, 1000);
updateCountdownsAndBars();
