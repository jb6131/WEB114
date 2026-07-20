// Jesus Briseno
// 7/19/2026

// Grab places to display mood name and message
let moodDisplay = document.querySelector("#mood-name");
let moodMessage = document.querySelector("#quote");

const moods = {
    happy: {
        name: "Happy",
        bg: "#ffd700",
        text: "#bd26b0",
        message: "Warm smiles and the suns kisses!"
    },
    calm: {
        name: "Calm",
        bg: "#a2cffe",
        text: "#fed1a2",
        message: "Take a chill pill..."
    },
    angry: {
        name: "Angry",
        bg: "#e00000",
        text: "#00e0e0",
        message: "Scream with rage!!"
    },
    sleepy: {
        name: "Sleepy",
        bg: "#e1a4ff",
        text: "#C2FFA4",
        message: "Time for bed..."
    },
}

function changeMood(moodName) {
    const mood = moods[moodName];

    document.body.style.backgroundColor = mood.bg;
    document.body.style.color = mood.text;
    document.title = mood.name;
    moodDisplay.textContent = mood.name;
    moodMessage.textContent = mood.message;
}

function handleHappyClick() {
    changeMood("happy");
}

function handleCalmClick() {
    changeMood("calm");
}

function handleAngryClick() {
    changeMood("angry");
}

function handleSleepyClick() {
    changeMood("sleepy");
}

const happyBtn = document.getElementById("happyBtn");
happyBtn.addEventListener("click", handleHappyClick);

const calmBtn = document.getElementById("calmBtn");
calmBtn.addEventListener("click", handleCalmClick);

const angryBtn = document.getElementById("angryBtn");
angryBtn.addEventListener("click", handleAngryClick);

const sleepyBtn = document.getElementById("sleepyBtn");
sleepyBtn.addEventListener("click", handleSleepyClick);