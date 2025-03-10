let score = prompt("Enter your score:"); // Prompt user for input
score = parseInt(score); // Convert input to number

let grade;

if (score >= 90) {
    grade = "Excellent";
} else if (score >= 80) {
    grade = "Good";
} else if (score >= 70) {
    grade = "Fair";
} else {
    grade = "Needs Improvement";
}

console.log(`Your grade is: ${grade}.`);