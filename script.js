window.onload = () => {
    // footer: copyright year
    let copyDate = new Date();
    let currentYr = copyDate.getFullYear();
    let copyYr = document.querySelector("#copy-yr");
    copyYr.innerHTML = currentYr;

    // form handles & variables
    const btnSubmit = document.querySelector("#btn-submit");
    const btnAgain = document.querySelector("#btn-again");
    const outputArea = document.querySelector(".output-area");
    const question = document.querySelector("#question");
    const outputAns = document.querySelector("#ans");
    const form = document.visualization_form;
    const formNumerator = form.numerator;
    const formDenominator = form.denominator;
    let gcd;

    // focus on formNumerator
    formNumerator.focus();

    // functions
    // greatest common divisor
    let twoNumGCD = (x, y) => {
        if ((typeof x !== 'number') || (typeof y !== 'number')) 
          return false;
        x = Math.abs(x);
        y = Math.abs(y);
        while(y) {
          let t = y;
          y = x % y;
          x = t;
        }
        // assign gcd value
        gcd = x;
    }

    // process form
    let processForm = event => {
        // prevent form submission
        event.preventDefault();

        // variables
        const inputNumerator = formNumerator.value;
        const inputDenominator = formDenominator.value;
        const numerator = parseInt(inputNumerator);
        const denominator = parseInt(inputDenominator);
        let simpleNumerator;
        let simpleDenominator;
        let percentage;
        let decimal;

        // hide question & btnSubmit
        question.style.display = "none";
        btnSubmit.style.display = "none";

        // show btnAgain
        btnAgain.style.display = "block";

        // call function twoNumGCD to set gcd variable
        twoNumGCD(numerator, denominator);

        // simplify fractions
        simpleNumerator = numerator / gcd;
        simpleDenominator = denominator / gcd;

        // calculate decimal and percentage
        decimal = simpleNumerator / simpleDenominator;
        decimalToFixed = decimal.toFixed(3);
        percentage = decimal * 100;
        percentageToFixed = percentage.toFixed(2);

        // output to outputAns
        outputAns.innerHTML = `${numerator} in ${denominator} (${simpleNumerator}/${simpleDenominator}) is:<ul><li>probability of ${decimalToFixed} or ${percentageToFixed}% chance</li><li>${simpleNumerator}-to-${simpleDenominator - simpleNumerator} odds</li></ul><div class="txt-three-quarters">(above figures may be approximates)</div>`;

        // output-area: create circles based on user numerator input
        for (let i = 0; i < simpleNumerator; i++) {
            let circle = document.createElement("div");
            circle.className = "circle-red";
            outputArea.appendChild(circle);
        }

        // output-area: create circles based on user denominator input
        for (let i = 0; i < (simpleDenominator - simpleNumerator); i++) {
            let circle = document.createElement("div");
            circle.className = "circle";
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