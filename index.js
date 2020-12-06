var inquirer = require("inquirer")
var fs = require("fs")
var generateMarkdown = require("./utils/generateMarkdown")

const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the project title?",
    },
    {
        type: "input",
        name: "description",
        message: "Can you describe your project?",
    },
    {
        type: "input",
        name: "installation",
        message: "How can you install your project?",
    },
    {
        type: "input",
        name: "installation",
        message: "How to install the project?",
    },
    {
        type: "input",
        name: "User Information",
        message: "Information to use the app"
    },
    {
        type: "input",
        name: "Contributions",
        message: "What is the member's Responsibility?"
    },
    {
        type: "input",
        name: "Tests",
        message: "Does the app work when tested?"
    }
];

function writeToFile(fileName, data) {
    var text = generateMarkdown(data)
    fs.writeFileSync(fileName, text)
}

function init() {
    inquirer
        .prompt(
            questions
        )
        .then(answers => {

            console.log(answers)
            writeToFile("./output/README.md", answers)
        })
}

init();