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
    const outputAns = document.querySelector("#ans");
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
        let decimal;

        // hide question & btnSubmit
        question.style.display = "none";
        btnSubmit.style.display = "none";

        // show btnAgain
        btnAgain.style.display = "block";

        // calculate decimal and percentage
        decimal = numerator / denominator;
        decimalToFixed = decimal.toFixed(3);
        percentage = decimal * 100;
        percentageToFixed = percentage.toFixed(2);

        // output to outputAns
        outputAns.innerHTML = `${numerator} in ${denominator} is:<ul><li>probability of ${decimalToFixed} or ${percentageToFixed}% chance</li><li>${numerator}-to-${denominator - numerator} odds</li></ul><div class="txt-three-quarters">(above figures may be approximates)</div>`;

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