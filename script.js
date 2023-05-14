window.onload = () => {
    // footer: copyright year
    let copyDate = new Date();
    let currentYr = copyDate.getFullYear();
    let copyYr = document.querySelector("#copy-yr");
    copyYr.innerHTML = currentYr;

    // form handles
    const btnSubmit = document.querySelector("#btn-submit");
    const outputArea = document.querySelector(".output-area");
    const outputInPercent = document.querySelector("#ans");
    const form = document.visualization_form;
    const formNumerator = form.numerator;
    const formDenominator = form.denominator;

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
        // calculate percentage
        percentage = numerator / denominator * 100;
        percentageToFixed = percentage.toFixed(3);
        // output to outputInPercent
        outputInPercent.innerHTML = `That's about ${percentageToFixed}%.`;

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
    }

    // event listener
    btnSubmit.addEventListener("click", processForm);
}