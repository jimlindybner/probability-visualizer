window.onload = () => {
    // footer: copyright year
    let copyDate = new Date();
    let currentYr = copyDate.getFullYear();
    let copyYr = document.querySelector("#copy-yr");
    copyYr.innerHTML = currentYr;

    // form handles
    const btnSubmit = document.querySelector("#btn-submit");
    const btnAgain = document.querySelector("#btn-again");
    const outputArea = document.querySelector(".output-area");
    const question = document.querySelector("#question");
    const outputPercent = document.querySelector("#ans");
    const form = document.visualization_form;
    const formNumerator = form.numerator;
    const formDenominator = form.denominator;

    // focus on formNumerator
    formNumerator.focus();

    // function
    function processForm(e) {
        // prevent form submission
        e.preventDefault();

        // variables
        const inputNumerator = formNumerator.value;
        const inputDenominator = formDenominator.value;
        const numerator = parseInt(inputNumerator);
        const denominator = parseInt(inputDenominator);
        let percentage;

        // hide question & btnSubmit
        question.style.display = "none";
        btnSubmit.style.display = "none";

        // show btnAgain
        btnAgain.style.display = "block";

        // calculate percentage
        percentage = numerator / denominator * 100;
        percentageToFixed = percentage.toFixed(2);

        // output to outputPercent
        outputPercent.innerHTML = `${numerator} in ${denominator} is (approx.) ${percentageToFixed}% chance, or ${numerator}-to-${denominator - numerator} odds.`;

        // output-area: create circles based on user denominator input
        for (let i = 0; i < (denominator - numerator); i++) {
            let circle = document.createElement("div");
            circle.className = "circle";
            outputArea.appendChild(circle);
        }
        // output-area: create circles based on user numerator input
        for (let i = 0; i < numerator; i++) {
            let circle = document.createElement("div");
            circle.className = "circle-red";
            outputArea.appendChild(circle);
        }
        // focus on btnAgain
        btnAgain.focus();
    }

    // event listener
    btnSubmit.addEventListener("click", processForm);
    btnAgain.addEventListener("click", () => {
        window.location.reload();
    })
}