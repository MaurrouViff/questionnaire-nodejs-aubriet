import { readFileSync, writeFileSync } from "fs";
import { createInterface } from "readline";

// Lire les questions du fichier
const questions = readFileSync("questions.txt", "utf-8").split("\n").filter(q => q.trim() !== "");


const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

let answers = [];
let index = 0;


// fonction pour poser les questions
function askQuestion() {
    if (index < questions.length) {
        rl.question(questions[index] + " ", (answer) => {
            answers.push(answer);
            index++;
            askQuestion();
        });
    } else {
        rl.close();

        writeFileSync("reponses.txt", answers.join("\n"), "utf-8");
        console.log("Toutes les réponses ont été enregistrées dans reponses.txt ✅");
    }
}

askQuestion();
