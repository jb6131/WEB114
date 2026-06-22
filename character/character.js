// Jesus Briseno
// 06-16-2026

"use strict";

alert(`Welcome, traveler, to Rellagard, The City Floating in the Sky. My name is Jesus, and I shall be your guide.`);

const charName = prompt(`First, what is your name?`, `Flint`) || `Wanderer`;

const petName = prompt(`Very good, ${charName}. And what type of pet or companion do you have?`, `dragon`);

const superpower = prompt(`Mm. Makes sense. And what sort of powers do you possess?`, `super strength`);

const trainingYearsText = prompt(`Really? Hmm... And how many years have you been training?`, `20`);
const trainingYears = +trainingYearsText;
console.log(trainingYearsText, typeof trainingYearsText);
console.log(trainingYears, typeof trainingYears);

const powerLevel = trainingYears * 10;

const likesFighting = confirm(
    `Do you, ${charName}, like fighting monsters?
Click OK for YES.
Click Cancel for NO.`);
console.log(likesFighting, typeof likesFighting);

alert(`Gathering magic for you, ${charName}...almost ready!`);

alert(`
====================================
Name: ${charName}
Pet/Companion: ${petName}
Superpower: ${superpower}
Power Level: ${powerLevel}
Monster fighter? ${likesFighting ? "Yes" : "No"}

In the floating sky city of Rellagard, you, ${charName}, begin your adventure alongside your companion ${petName}.
You possess the amazing power of ${superpower}. Having trained this power for ${trainingYears} years, you are finally ready to start your journey. Good luck!
====================================
`);