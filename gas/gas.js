// Jesus Briseno
// 7/6/26

let entryCount = 0;
let totalGas = 0;

let userName = prompt("Enter your name:");

if (userName === null) {
    alert("You cancelled the name prompt.");
}
else if (userName.trim() === "") {
    alert("You must type a name.");
}
else {
    let gasAvg = calcGasAvg();

    if (entryCount === 0) {
        alert("No gas totals were entered.");
    }
    else if (gasAvg === null) {
        alert("You cancelled entering gas totals.");
    }
    else {
        if (entryCount === 1) {
            alert(`${userName}'s gas total is $${gasAvg.toFixed(2)}.`);
        }
        else {
            alert(`${userName}'s average weekly gas bill is $${gasAvg.toFixed(2)}.`);
        }
    }

    if (entryCount === 1) {
        alert("You entered 1 gas total.");
    }
    else {
        alert(`You entered ${entryCount} gas totals.`);
    }
}

//

function calcGasAvg() {
    let weeklyGas = prompt("Enter your first week's gas total. Enter -1 when done.");

    if (weeklyGas === null) {
        return null;
    }

    weeklyGas = +weeklyGas;

    while (weeklyGas !== -1) {
        if (isNaN(weeklyGas)) {

            alert("Please enter a valid number.");

            weeklyGas = prompt("Enter your next week's gas total. Enter -1 when done.");

            if (weeklyGas === null) {
                return null;
            }
            
            weeklyGas = +weeklyGas;
        }
        else {

            totalGas += weeklyGas;
            entryCount++;

            weeklyGas = prompt("Enter your next week's gas total. Enter -1 when done.");

            if (weeklyGas === null) {
                return null;
            }

            weeklyGas = +weeklyGas;
        }
    }

    let average;

    if (entryCount > 0) {
        average = totalGas / entryCount;
    }
    else {
        average = 0;
    }
    return average;
}