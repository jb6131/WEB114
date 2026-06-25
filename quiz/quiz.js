// Jesus Briseno
// 06/22/2026

"use strict";

/* PLANNING / PSEUDOCODE

1. Initialize score = 0

2. Question 1: What is my dead brother's name?
    - Variable name: deadBrother
    - Correct answer: luis
    - How I'll validate and check the answer: 
        - if (deadBrother && deadBrother.trim() !== "") to validate input
        - if (deadBrother.toLowerCase() === "luis") to check answer

3. Use that structure for all four questions.

6. Math: How will I calculate the percentage? Add total score, divide by number of questions, then multiply by 100

7. Final feedback logic (if / else if / else):
    if score = 4, else if score = 3, else if score = 2, else if score = 1, else

Logical operators I will use:
- && for input validation
- ! for input validation
*/

console.log("=== My Quiz Game ===");

// Initialize score
let score = 0;

// Question 1
let deadBrother = prompt("What is my dead brother's name?");

if (deadBrother && deadBrother.trim() !== "") {
    if (deadBrother.toLowerCase() === "luis") {
        score++;
    }
}
else {
    alert("Invalid input!");
}

// Question 2
let numWomen = prompt("How many women did my dad cheat on my mom with before their divorce?");

if (numWomen && numWomen.trim() !== "") {
    if (numWomen === "4") {
        score++;
    }
}
else {
    alert("Invalid input!");
}

// Question 3
let prisonCity = prompt("In what city is the prison that is holding my stepbrother who tried to murder his parents and brother? (Hint: in Kansas)");

if (prisonCity && prisonCity.trim() !== "") {
    if (prisonCity.toLowerCase() === "leavenworth") {
        score++;
    }
}
else {
    alert("Invalid input!");
}

// Question 4
let youtuberName = prompt("What former YouTuber does my dad use as an example of successful conversion therapy?");

if (youtuberName && youtuberName.trim() !== "") {
    if (youtuberName.toLowerCase() === "lohanthony") {
        score++;
    }
}
else {
    alert("Invalid input!");
}

// Calculate percentage using math
let scorePercentage = (score / 4) * 100;

// Final feedback using if / else if / else
if (score == 4) {
    alert(`Whoa...you got all four questions right. Honestly kinda weird...`);
}
else if (score == 3) {
    alert(`You got 3 out of 4 right! You must know me pretty well.`);
}
else if (score == 2) {
    alert(`You got 2 out of 4 right. Not bad!`);
}
else if (score == 1) {
    alert(`Considering you only got one right, it was probably just a lucky guess.`);
}
else {
    alert(`None right? Honestly valid.`);
}

// Additional feedback with logical operators

// Final summary alert
alert(`===== Summary =====

Question 1
Your Answer: ${deadBrother.toLowerCase()}
Correct Answer: luis

Question 2
Your Answer: ${numWomen}
Correct Answer: 4

Question 3
Your Answer: ${prisonCity.toLowerCase()}
Correct Answer: leavenworth

Question 4
Your Answer: ${youtuberName.toLowerCase()}
Correct Answer: lohanthony

Accuracy: ${scorePercentage}%
`);