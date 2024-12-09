document.addEventListener("DOMContentLoaded", function() {
    const today = new Date();
    const washingtonTime = new Date(today.toLocaleString("en-US", { timeZone: "America/New_York" }));
    const currentDate = washingtonTime.getDate();  // Unlock based on real-time date

    // Function to update countdowns and progress bars
function updateCountdownsAndBars() {
    const now = new Date();
    const christmas = new Date(now.getFullYear(), 11, 25); // December 25
    const nycTrip = new Date(now.getFullYear(), 11, 20); // December 20

    // Calculate days remaining
    const daysUntilChristmas = Math.max(0, Math.ceil((christmas - now) / (1000 * 60 * 60 * 24)));
    const daysUntilNYC = Math.max(0, Math.ceil((nycTrip - now) / (1000 * 60 * 60 * 24)));

    // Calculate progress
    const totalDaysDecember = Math.ceil((christmas - new Date(now.getFullYear(), 11, 1)) / (1000 * 60 * 60 * 24));
    const totalDaysToNYC = Math.ceil((nycTrip - new Date(now.getFullYear(), 11, 1)) / (1000 * 60 * 60 * 24));

    const progressChristmas = ((totalDaysDecember - daysUntilChristmas) / totalDaysDecember) * 100;
    const progressNYC = ((totalDaysToNYC - daysUntilNYC) / totalDaysToNYC) * 100;

    // Update progress bars
    document.getElementById("progressChristmas").style.width = `${progressChristmas}%`;
    document.getElementById("progressNYC").style.width = `${progressNYC}%`;

    // Update countdown text
    document.getElementById("countdownChristmasText").textContent = `${daysUntilChristmas} day(s) until Christmas! 🎄`;
    document.getElementById("countdownNYCText").textContent = `${daysUntilNYC} day(s) until our NYC trip! 🗽`;
}

// Call the update function initially and then set it to update every second
setInterval(updateCountdownsAndBars, 1000);
    const surprises = {
        1: "Let’s Build a Gingerbread House Together! 🏠 I thought of this idea way before you got your hands on the Trader Joe's Gingerbread house kit by the way!!",
        2: "Purr-fect Day at Crumbs & Whiskers @ Georgetown! 🐾 Date: 12:20 PM Let’s surround ourselves with adorable whiskers, soft purrs, and maybe a latte or two.",
        3: `Holiday Bingo Game
                <p>
                <strong>Play Together:</strong> Only play when both of you are present. <br>
                <strong>Spot & Show:</strong> If you spot an item on your card, point it out to cross it off. <br>
                <strong>Winning:</strong> The first to complete a row in any direction wins. <br>
                <strong>Dinner on the Line:</strong> The winner decides dinner, and the other person cooks. <br>
                <strong>Play to Win:</strong> The game continues until there's a winner.
                </p>
                <img src="./Images/holiday bingo.jpg" alt="Holiday Bingo" style="max-width: 100%; border-radius: 10px;">
                <p>For a better version of the Bingo card, <a href="https://docs.google.com/document/d/12xaeG7kOY9BBuW9WVFgExHwHm301AzZKVBNCR3WpGiA/edit?usp=sharing" target="_blank">click here</a>.</p>`,
        4: "Your Coupon for a free Facial 💆 A calming, DIY spa experience awaits. Expires in 20 days—claim your moment of relaxation whenever you’re ready.",
        5: `
        <p>Cookie Baking! 🍪</p>
        <p>Sit down and relax – I’m baking us some cookies!</p>
        <img src="https://media.giphy.com/media/xT0xeMA62E1XIlup68/giphy.gif" alt="Baking" style="max-width: 100%; border-radius: 10px;">
    `,
    6: `
        <p>Ice Skating Date ⛸️</p>
        <p>Let’s glide into fun @ National Gallery of Art Sculpture Garden, Washington Harbour Ice Rink, or The Wharf Ice Rink!</p>
    `,
    7: `
        <p>Role-Reversal Day Coupon 🎭</p>
        <p>Today, you get to pick our activity!</p>
    `,
    8: `
        <p>Holiday Taste Test 🎉</p>
        <p>Ready for some festive flavors? Let’s have a holiday snack taste test!</p>
    `,
    9: `
        <p>Bundle of Kisses 💋</p>
        <p>You’ve unlocked a bundle of 5 kisses, redeemable anytime, anywhere.</p>
    `,
    10:  `
<p>🎁 <strong>Treasure Hunt Begins!</strong></p>
<p>Today’s surprise is something extra special...<br> 
A magical treasure hunt awaits!</p>
<button onclick="showClue1()">Start the Hunt</button>
`,

        // Add additional surprises for other slots as needed
    };

    document.querySelectorAll(".slot").forEach((slot) => {
        const slotDay = parseInt(slot.getAttribute("data-day"));

        // Unlock slots based on the current date
        slot.classList.toggle("locked", slotDay > currentDate);
        slot.classList.toggle("unlocked", slotDay <= currentDate);

        // Add event listeners to unlocked slots
        if (slot.classList.contains("unlocked")) {
            slot.addEventListener("click", () => {
                const surpriseMessage = surprises[slotDay];
                const modal = document.getElementById("modal");
                const modalMessage = document.getElementById("modal-message");
                modalMessage.innerHTML = surpriseMessage;
                modal.classList.add("show");

                const closeModalButton = document.getElementById("close-modal");
                closeModalButton.addEventListener("click", () => {
                    modal.classList.remove("show");
                });
            });
        }
    });

    const music = new Audio("./assets/sounds/old carol.mp3");
    music.loop = true;

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

    function createSnowflake() {
        const snowflake = document.createElement("div");
        snowflake.className = "snowflake";
        snowflake.textContent = "❄️";
        snowflake.style.left = Math.random() * 100 + "vw";
        snowflake.style.animationDuration = Math.random() * 3 + 7 + "s";
        snowflake.style.fontSize = Math.random() * 10 + 10 + "px";
        document.getElementById("snowContainer").appendChild(snowflake);
        setTimeout(() => {
            snowflake.remove();
        }, 10000);
    }
    setInterval(createSnowflake, 400);
});
function displayModal(message) {
    const modal = document.getElementById("modal");
    const modalMessage = document.getElementById("modal-message");
    modalMessage.innerHTML = message;
    modal.classList.add("show");
}
document.getElementById("close-modal").addEventListener("click", function() {
    const modal = document.getElementById("modal");
    modal.classList.remove("show");
});


// First Riddle Function for the Treasure Hunt
function showClue1() {
    displayModal(`
        <p>📜 <strong>First Riddle:</strong></p>
        <p>"Start where we laugh and binge all night, <br>
        A screen with shows we both find light. <br>
        ‘Love on the Spectrum’ we’ve enjoyed a ton, <br>
        Your first clue’s near where the TV’s run."</p>
        <p>Good luck! 😉</p>
        <button onclick="showFoodMemoryPopup()">Enter Answer for Clue 4 🍽️</button>
    `);
}

// Attach Event Listener for the "I Found It!" Button
document.addEventListener("click", (event) => {
    if (event.target && event.target.id === "foundItButton") {
        unlockFoodMemoryChallenge();
    }
});

// Unlock Next Challenge After Clue 1 is Solved
function unlockFoodMemoryChallenge() {
    const nextButton = document.getElementById("startFoodMemory");
    nextButton.style.display = "inline-block";  // Make it visible
}

function showFoodMemoryPopup() {
    displayModal(`
        <p>🍽️ <strong>Food Memory Challenge - Clue 4</strong></p>
        <p>Enter the restaurant names by number:</p>
        <label for="food1">1:</label> <input type="text" id="food1" placeholder="Enter name"><br>
        <label for="food2">2:</label> <input type="text" id="food2" placeholder="Enter name"><br>
        <label for="food3">3:</label> <input type="text" id="food3" placeholder="Enter name"><br>
        <button onclick="checkFoodMemoryAnswer()">Submit</button>
    `);
}
function checkFoodMemoryAnswer() {
    const food1 = document.getElementById("food1").value.toLowerCase().trim();
    const food2 = document.getElementById("food2").value.toLowerCase().trim();
    const food3 = document.getElementById("food3").value.toLowerCase().trim();

    const correctAnswers = ["kao sarn thai street food", "shilla bakery", "red light bar & detroit pizza"];

    if (food1 === correctAnswers[0] && food2 === correctAnswers[1] && food3 === correctAnswers[2]) {
        displayModal(`
            <p>🎉 Great work, food connoisseur! 🎉</p>
            <p>Your next clue lies where we sit and create,<br>
            Not a desk, but a space where we congregate.<br>
            Think of where laptops buzz, and ideas generate.</p>
                    <button onclick="showBinaryAnswerPopup()">Answer Clue 5</button>
     
            `);
    } else {
        alert("Hmm, not quite! Please enter full restaurant names, no caps.");
    }
}
function showBinaryAnswerPopup() {
    displayModal(`
        <p>🤖 <strong>Clue 5</strong></p>
        <p>What's your answer for Clue 5?</p>
        <input type="text" id="binaryAnswer" placeholder="Enter answer here">
        <button onclick="checkBinaryAnswer()">Submit</button>
    `);
}
function checkBinaryAnswer() {
    const answer = document.getElementById("binaryAnswer").value.trim();
    const correctAnswer = "100000010001";

    if (answer === correctAnswer) {
        displayModal(`
            <p>🎉 You got it! 🎉</p>
            <p> Now that you’ve cracked this number’s case!<br>
            <p>Your next clue’s in a refreshing place.<br>
            A place for refreshment and bubbly fun,<br>
            Look where the towels are spun.</p>
         <button id="treasureHuntClose">Click when you finish the hunt</button>
    `);

    // Add Close Button Event Listener
    document.getElementById("treasureHuntClose").addEventListener("click", function() {
        const modal = document.getElementById("modal");
        modal.classList.remove("show");
        alert("Adventure complete! You’ve outsmarted every trap... for now.");
    });
    } else {
        alert("Hmm, that doesn't seem right. Think like a coder!");
    }
}
