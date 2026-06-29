// Jesus Briseno
// 06/22/2026

"use strict";

/* PLANNING / PSEUDOCODE

1. Initialize score = 0

2. Question 1: In what country did I study abroad for a year?
    - Variable name: studyAbroadCountry
    - Correct answer: south korea
    - How I'll validate and check the answer: 
        - if (studyAbroadCountry && studyAbroadCountry.trim() !== "") to validate input
        - if (studyAbroadCountry.toLowerCase() === "south korea") to check answer

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
let studyAbroadCountry = prompt("In what country did I study abroad for a year?");

if (studyAbroadCountry && studyAbroadCountry.trim() !== "") {
    if (studyAbroadCountry.toLowerCase() === "south korea") {
        score++;
    }
}
else {
    alert("Invalid input!");
}

// Question 2
let showName = prompt("What popular TV show did I watch all 8 seasons of recently?");

if (showName && showName.trim() !== "") {
    if (showName.toLowerCase() === "game of thrones") {
        score++;
    }
}
else {
    alert("Invalid input!");
}

// Question 3
let parentsHometown = prompt("What city in Mexico are my parents from?");

if (parentsHometown && parentsHometown.trim() !== "") {
    if (parentsHometown.toLowerCase() === "puebla") {
        score++;
    }
}
else {
    alert("Invalid input!");
}

// Question 4
let bodyPart = prompt("What body part did I nearly lose when I was 3?");

if (bodyPart && bodyPart.trim() !== "") {
    if (bodyPart.toLowerCase() === "tongue") {
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

// Final summary alert
alert(`===== Summary =====

Q1: In what country did I study abroad for a year?
Your Answer: ${studyAbroadCountry.toLowerCase()}
Correct Answer: south korea

Q2: What popular TV show did I watch all 8 seasons of recently?
Your Answer: ${showName.toLowerCase()}
Correct Answer: game of thrones

Q3: What city in Mexico are my parents from?
Your Answer: ${parentsHometown.toLowerCase()}
Correct Answer: puebla

Q4: What body part did I nearly lose when I was 3?
Your Answer: ${bodyPart.toLowerCase()}
Correct Answer: tongue

Accuracy: ${scorePercentage}%
`);