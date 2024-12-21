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
11: `
    <p><strong>Memory Jar 🎁</strong></p>
    <img id="memoryJar" src="images/memory jar.png" alt="Memory Jar" style="max-width: 300px; cursor: pointer;">
    <p>Click the jar to take a trip down memory lane!</p>
`,
12: `
    <p><strong>Holiday Lights Walk 🎄✨</strong></p>
    <p>Let’s take a romantic stroll to see D.C.’s holiday lights and decorations.</p>
`,

13: `
    <p><strong>Tarot Reading 🔮</strong></p>
    <img id="tarotDeck" src="./images/riderwaite.jpg.jpeg" alt="Tarot Deck" style="max-width: 300px; cursor: pointer;">
    <p>Click the tarot deck for a random intuitive message, just for George...</p>
`,


14: `
    <p><strong>DIY Snow Globe ❄️</strong></p>
    <p>Guess who’s making snow globes? Hint: it’s us!</p>
`,

15: `
    <p><strong>Cozy Tea/Coffee Date ☕</strong></p>
    <p>I’ll make you the drink you’re thinking of – anything you want, just name it!</p>
`,

16: `
    <p><strong>Mini Language Lesson 🇻🇳</strong></p>
    <p>Learn a sweet phrase or inside joke in Vietnamese today.</p>
`,
17: `
<p>Exactly one year ago, we met for the first time. Here’s something special I made just for us.</p>
<audio id="day17Song" src="assets/sounds/For George and Ivy.mp3" controls autoplay></audio>
`,
18: `
    <p><strong> Cozy Socks & Lazy Day 🧦🎄☕❤️</strong></p>
    <p>Prepare for a day of pure relaxation, cozy socks included.</p>
 `,   
 19: `
    <p><strong>Random Appreciation 💖</strong></p>
    <p>George, I appreciate how kind and thoughtful you are. This sounds generic and cliche but those are some of your best qualities.</p>
    <p>Even if we sometimes don't get along that well, I hope this calendar is more than enough to remind you that our love >>> our disagreements.</p>
`,
 20: `
    <p><strong> A No-Complaint Movie Night 🎥🍿😌❤️</strong></p>
    <p>Tonight, you get to pick a movie for us to watch. Anything you like! </p>
 `,   
 21:    ` 
    <p><strong> Coding Challenge! 🎄</strong></p>
    <p>George, today you get to challenge me! Pick a new feature for this advent calendar: a snowflake animation, a favorite song button, or even a mini-game. Anything you'd like to see on this calendar more.</p>
    <p>I'll do it, and no need to go easy on me!</p>
   `, 
 22: `
    <p><strong> Change in plans 🔄🤔✨ </strong></p>
    <p> This was originally a NYC-focus day. Instead, let's use this day to actually plan what we will do when we get to NYC 🗽</p>
 `,   
        // Add additional surprises for other slots as needed
    };

    document.querySelectorAll(".slot").forEach((slot) => {
        const slotDay = parseInt(slot.getAttribute("data-day"));
// Memory Jar Logic for Day 11
document.addEventListener("click", (event) => {
    if (event.target && event.target.id === "memoryJar") {
        // Shaking animation
        const jar = event.target;
        jar.style.animation = "shake 0.5s ease-in-out";
        
        setTimeout(() => {
            jar.style.animation = ""; // Remove animation after it plays
            // Display a random memory
            const memories = [
                { image: "images/hello thailand.jpeg", text: "You got me the cutest bouquet at the Thailand airport. Our second meet-cute 💐✨🥹" },
                { image: "images/i can see your trunk.jpeg", text: "I can see your trunk 🐘👀" },
                { image: "images/just a cute photo of us.jpeg", text: "Just a cute photo of me. Oh wait, you're there too 📸🥰👋💖 Hi George!" },
                { image: "images/just us chillin in LA.jpeg", text: "Just us in L.A. Life was simpler back then 🌴" },
                { image: "images/our first baby photo.jpeg", text: "This might be our first photo together! 📸" },
                { image: "images/our first meal together.jpeg", text: "Our first meet-cute. You didn't know what you were signing up for 💘😆🎯" },
                { image: "images/that driver dashed 60 km just to give me the bouquet.jpeg", text: "Remember this bouquet? That driver dashed 60kms just to deliver it. The speed of... true love? 💐🏎️💨❤️" },
                { image: "images/this bennihanna date was everything.jpeg", text: "Our first (and only) Benihanna date. I remember it like it was yesterday: Shirley temple is not an alcoholic drink 🍹🍣😂💕" },
                { image: "images/took you three hours to take this photo.JPG", text: "This photo took you three hours to take. Let's look at it one more time. Bask in my beauty." },
                { image: "images/us at the beach.jpeg", text: "We went to see the seals! One looked like a big black banana." },
                { image: "images/when you look like a wild husky.jpeg", text: "You looked like a wild husky in this photo 🐺" },
                { image: "images/you leaving the airport to go back to the states.jpeg", text: "Photo of a man leaving the country after his 8-hour date. " },
                { image: "images/you were not impressed with how this photo turned out.jpeg", text: "You were NOT impressed with how that lady took this photo. I agree lol." },
                { image: "images/your first bouquet for me.jpeg", text: "Your first bouquet for me. Gets me all emotional 💐" },

            ];
            const randomMemory = memories[Math.floor(Math.random() * memories.length)];
            const modal = document.getElementById("modal");
            const modalMessage = document.getElementById("modal-message");
            modalMessage.innerHTML = `
                <img src="${randomMemory.image}" alt="Memory" style="max-width: 100%; border-radius: 10px;">
                <p>${randomMemory.text}</p>
            `;
            modal.classList.add("show");
        }, 500); // Match the animation duration
    }
});

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
// Tarot Reading Logic
document.addEventListener("click", (event) => {
    if (event.target && event.target.id === "tarotDeck") {
        const tarotMessages = [
            // Self-Growth & Reflection
            "Your Inner Fire – You’ve been holding back on something you’re passionate about. It’s time to reignite that flame—start small, but start now.",
            "The Answer Lies Within – You’ve been seeking external validation, but the clarity you want is already inside you. Spend quiet time alone and trust your intuition.",
            "Reclaim Your Power – You’ve let past experiences dim your light. Stand tall, reclaim your confidence, and show the world who you truly are.",
            "Breaking Patterns – You’re on the verge of breaking an old habit that’s held you back. The first step is the hardest, but freedom is within reach.",
            "Your Unique Path – Stop comparing your journey to others. You’re meant to carve your own way, even if no one understands it right now.",

            // Relationships & Emotions
            "Words from the Heart – There’s something important you’ve been meaning to say. Speak your truth gently, and the response will surprise you.",
            "Deeper Connections – Someone in your life craves a closer connection with you. Open your heart—you might be surprised by what blossoms.",
            "Healing Together – You and someone close to you are healing through shared experiences. Be patient with their process as much as your own.",
            "Unexpected Reunion – Someone from your past might resurface with an important message. Listen carefully; closure or reconnection is possible.",
            "Love in Bloom – A relationship you’ve nurtured is growing stronger. Celebrate the small moments—they are what build something lasting.",

            // Opportunities & Career
            "Next Big Step – You’re on the edge of something game-changing. Trust your skills—you’re more prepared than you think.",
            "Your Unique Gift – You have a talent you’ve been underestimating. Lean into it—it could be your greatest strength professionally.",
            "Say Yes to Change – A new opportunity might seem risky but could open doors you didn’t expect. Take the leap with curiosity, not fear.",
            "Seeds of Success – The work you’ve been doing will soon pay off. Stay consistent, even when progress feels slow.",
            "Aligned Purpose – Stop chasing what feels 'safe.' A path more aligned with your true calling is waiting if you have the courage to explore it.",

            // Personal Transformation & Life Journey
            "The Journey Home – You’re coming back to yourself after a long, uncertain period. Trust that what feels right is guiding you home to who you’ve always been.",
            "Seasons of Change – Life is shifting beneath your feet. Let the old fall away so the new can root itself in your life.",
            "Release and Rebuild – You’ve been holding on to something out of fear of the unknown. Letting go will create space for something even better.",
            "Soul Awakening – You’re being called to step into a more authentic, soulful version of yourself. Don’t dim your light for anyone.",
            "Universal Support – Even when you feel alone, you are deeply supported by forces beyond what you can see. Trust that everything is unfolding perfectly.",
        ];

        // Pick a random tarot message
        const randomMessage = tarotMessages[Math.floor(Math.random() * tarotMessages.length)];

        // Display it in the modal
        const modal = document.getElementById("modal");
        const modalMessage = document.getElementById("modal-message");
        modalMessage.innerHTML = `
            <p><strong>Your Tarot Message 🔮</strong></p>
            <p>${randomMessage}</p>
        `;
        modal.classList.add("show");
    }
});
