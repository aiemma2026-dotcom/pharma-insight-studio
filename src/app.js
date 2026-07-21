import { loadT2DMKnowledge } from "./knowledgeLoader.js";

console.log("🚀 Pharma Market App Started");

const button = document.getElementById("calculateBtn");

if (button) {
    button.addEventListener("click", () => {
        alert("Calculator Connected!");
    });
}

loadT2DMKnowledge()
    .then(data => {
        console.log("Knowledge Loaded");
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });