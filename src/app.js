import { loadT2DMKnowledge } from "./knowledgeLoader.js";

console.log("🚀 Pharma Market App Started");

const button = document.getElementById("calculateBtn");

if (button) {
    button.addEventListener("click", () => {
        console.log("Calculate button clicked");
    });
}


loadT2DMKnowledge()
    .then(data => {

    console.log("Knowledge Loaded");
    console.log(data);


    const status = document.getElementById("knowledgeStatus");

    if (status) {
        status.innerText = "Knowledge Loaded";
    }


        // ===== Connect Knowledge Base to UI =====

        const patientDisplay = document.getElementById(
            "patientPopulationDisplay"
        );

        if (patientDisplay) {
            patientDisplay.innerText =
                data.market.patientPopulation.value / 100000000 + "亿";
        }


        const diagnosisDisplay = document.getElementById(
            "diagnosisRateDisplay"
        );

        if (diagnosisDisplay) {
            diagnosisDisplay.innerText =
                data.market.diagnosisRate.value * 100 + "%";
        }


        const treatmentDisplay = document.getElementById(
            "treatmentRateDisplay"
        );

        if (treatmentDisplay) {
            treatmentDisplay.innerText =
                data.market.treatmentRate.value * 100 + "%";
        }

    })
    .catch(error => {

        console.error(
            "Knowledge loading failed:",
            error
        );

    });