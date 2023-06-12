window.onload = () => {
    // VARIABLES & FORM HANDLES
    // btns & containers
    const header = document.querySelector("header div.header-copy");
    const btnSubmit = document.querySelector(".form__submit");
    const btnReload = document.querySelector(".page-top__btn-reload");
    const btnRandom = document.querySelector(".page-top__btn-random");
    const outputAns = document.querySelector(".output__text");
    const outputArea = document.querySelector(".output__dots-container");
    const btnScrollToTop = document.querySelector(".scroll-to-top-btn");

    // user input display
    let x = document.querySelector(".question__x");
    let y = document.querySelector(".question__y");
    let aAn = document.querySelector(".question__aan");

    // colourless stylesheet
    const colourlessCSS = document.styleSheets[1];

    // colour toggle
    const btnColour = document.querySelector(".page-top__btn-colour");
    const colourCheckbox = document.querySelector(".colour-toggle__input");
    const colourOn = document.querySelector(".btn-colour__on");
    const colourOff = document.querySelector(".btn-colour__off");

    // main form
    const form = document.forms.visualization_form;
    const formNumerator = form.numerator;
    const formDenominator = form.denominator;
    let inputNumerator;
    let inputDenominator;

    // msgs
    const msgInputError1 = "Please enter only natural numbers (1, 2, 3, 4, etc.) up to 100,000.";
    const msgInputError2 = "The numerator cannot be greater than the denominator.";
    const msgRoundedFigures = "Note: The probability figures above may not be exact due to rounding.";

    // page-top btns temporary disabling
    const msDelay = 1000;

    // ENABLE COLOUR ON PAGE LOAD
    colourlessCSS.disabled = true;
    colourCheckbox.checked = true;
    colourOff.style.display = "none";

    // FOCUS ON NUMERATOR INPUT ON PAGE LOAD
    formNumerator.focus();

    // FUNCTIONS
    // displayInput
    let displayInput = () => {
        // get input values for numerator and denominator
        inputNumerator = formNumerator.value;
        inputDenominator = formDenominator.value;

        // clear x and y
        x.innerHTML = "";
        y.innerHTML = "";

        // output input values to x and y
        if (inputNumerator === "") {
            x.innerHTML = "x";
        } else {
            x.innerHTML = parseInt(inputNumerator).toLocaleString("en-CA");
        }

        if (inputDenominator === "") {
            y.innerHTML = "y";
        } else {
            y.innerHTML = parseInt(inputDenominator).toLocaleString("en-CA");
        }

        // change a to an if numerator = 11, in the 11,000s, 18 or starts with 8
        let elevenKRegex = /^(11)\d{3}$/;
        if (inputNumerator === "11" || elevenKRegex.test(inputNumerator) || inputNumerator === "18" || inputNumerator === "8" || inputNumerator.startsWith("8")) {
            aAn.innerHTML = "an";
        } else {
            aAn.innerHTML = "a";
        }
    }

    // disable pagetop btns
    let disablePagetopBtns = () => {
        btnRandom.disabled = true;
        btnReload.disabled = true;
        btnColour.disabled = true;
        btnRandom.classList.add("page-top__btn-random_disabled");
        btnReload.classList.add("page-top__btn-reload_disabled");
        btnColour.classList.add("page-top__btn-colour_disabled");
    }

    // enable pagetop btns
    let enablePagetopBtns = () => {
        btnRandom.disabled = false;
        btnReload.disabled = false;
        btnColour.disabled = false;
        btnRandom.classList.remove("page-top__btn-random_disabled");
        btnReload.classList.remove("page-top__btn-reload_disabled");
        btnColour.classList.remove("page-top__btn-colour_disabled");
    }

    // visualization
    let visualize = (numerator, denominator) => {
        // output-area: create dots based on numerator
        for (let i = 0; i < numerator; i++) {
            let dot = document.createElement("div");
            dot.className = "dot-hit";
            outputArea.appendChild(dot);
        }

        // output-area: create dots based on denominator less numerator
        for (let i = 0; i < (denominator - numerator); i++) {
            let dot = document.createElement("div");
            dot.className = "dot";
            outputArea.appendChild(dot);
        }
    }

    // random stat
    let randomStat = () => {
        // disable pagetop btns for a few seconds
        disablePagetopBtns();

        // hide form
        form.style.display = "none";

        // clear outputArea
        outputArea.innerHTML = "";

        // change refresh btn text
        btnReload.innerHTML = "Your Stat";

        // generate random num for funStats arr
        let randomNum = Math.floor(Math.random() * funStats.length);

        // variables
        let randomStatNumer = funStats[randomNum].numer;
        let randomStatDenom = funStats[randomNum].denom;
        let randomStatProb = randomStatNumer / randomStatDenom;
        let randomStatProbFixed = (randomStatProb).toFixed(3);
        let RandomStatPct = randomStatNumer / randomStatDenom * 100;
        let randomStatPctFixed = (RandomStatPct).toFixed(1);
        let retrievalDate = new Date(funStats[randomNum].retrieveDate);
        let outputYear = retrievalDate.getFullYear();
        let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let outputMonth = retrievalDate.getMonth();
        let outputDate = retrievalDate.getDate() + 1;

        // output to outputAns
        outputAns.innerHTML = `<p>${funStats[randomNum].desc}</p>`
        outputAns.innerHTML += `<p><span class="text-tertiary-color">That's a probability of ${randomStatProbFixed} (&nbsp;${randomStatPctFixed}% chance&nbsp;), or ${randomStatNumer.toLocaleString("en-CA")}&#8209;to&#8209;${(randomStatDenom - randomStatNumer).toLocaleString("en-CA")} (&nbsp;${randomStatNumer.toLocaleString("en-CA")}&nbsp;:&nbsp;${(randomStatDenom - randomStatNumer).toLocaleString("en-CA")}&nbsp;) odds.</span></p>`
        outputAns.innerHTML += `<p class="txt-three-quarters">${msgRoundedFigures}</p>`
        outputAns.innerHTML += `<p><span class="txt-three-quarters">Source: <a href="${funStats[randomNum].sourceURL}" target="_blank">${funStats[randomNum].source}</a> (retrieved ${outputDate} ${monthNames[outputMonth]} ${outputYear})</span>.</p>`;

        // call visualization function
        visualize(randomStatNumer, randomStatDenom);

        // re-enable pagetop btns (1000ms delay)
        if (btnRandom.disabled === true && btnReload.disabled === true) {
            setTimeout(enablePagetopBtns, msDelay);
        }
    }

    // greatest common divisor
    let twoNumGCD = (x, y) => {
        if ((typeof x !== "number") || (typeof y !== "number")) {
            return false;
        }
        x = Math.abs(x);
        y = Math.abs(y);
        while(y) {
            let t = y;
            y = x % y;
            x = t;
        }

        return x;
    }

    // process form
    let calculate = event => {
        // prevent form submission
        event.preventDefault();

        // get user input values & declare new variables
        inputNumerator = formNumerator.value;
        inputDenominator = formDenominator.value;
        let numerator = parseInt(inputNumerator);
        let denominator = parseInt(inputDenominator);
        let simpleNumerator;
        let simpleDenominator;
        let percentage;
        let percentageFixed;
        let decimal;
        let decimalFixed;
        let gcd;

        // form validation: if inputs are missing, not whole numbers or greater than 100,000
        if (inputNumerator === "" || inputNumerator === "0" || inputNumerator.includes(".") || inputNumerator.includes("-") || numerator > 100000) {
            if (inputDenominator === "" || inputDenominator === "0" || inputDenominator.includes(".") || inputDenominator.includes("-") || denominator > 100000) {
                formDenominator.value = "";
            }
            formNumerator.value = "";
            formNumerator.focus();
            alert(msgInputError1);
            return false;
        } else if (inputDenominator === "" || inputDenominator === "0" || inputDenominator.includes(".") || inputDenominator.includes("-") || denominator > 100000) {
            formDenominator.value = "";
            formDenominator.focus();
            alert(msgInputError1);
            return false;
        }

        // form validation: if numerator is greater than denominator
        if (numerator > denominator) {
            formNumerator.value = "";
            formDenominator.value = "";
            formNumerator.focus();
            alert(msgInputError2);
            return false;
        }

        // disable pagetop btns (until function run completes)
        disablePagetopBtns();

        // hide form
        form.style.display = "none";

        // call function twoNumGCD to set gcd variable
        gcd = twoNumGCD(numerator, denominator);

        // simplify fractions
        simpleNumerator = numerator / gcd;
        simpleDenominator = denominator / gcd;

        // calculate decimal and percentage
        decimal = simpleNumerator / simpleDenominator;
        decimalFixed = decimal.toFixed(3);
        percentage = decimal * 100;
        percentageFixed = percentage.toFixed(1);

        // output to outputAns
        outputAns.innerHTML = `<p>${numerator.toLocaleString("en-CA")} in ${denominator.toLocaleString("en-CA")} (&nbsp;${simpleNumerator.toLocaleString("en-CA")} / ${simpleDenominator.toLocaleString("en-CA")}&nbsp;) is:</p>`
        outputAns.innerHTML += `<p><span class="text-tertiary-color">a probability of ${decimalFixed} (&nbsp;${percentageFixed}% chance&nbsp;)</span></p>`;
        outputAns.innerHTML += `<p><span class="text-tertiary-color">or ${simpleNumerator.toLocaleString("en-CA")}&#8209;to&#8209;${(simpleDenominator - simpleNumerator).toLocaleString("en-CA")} (&nbsp;${simpleNumerator.toLocaleString("en-CA")}&nbsp;:&nbsp;${(simpleDenominator - simpleNumerator).toLocaleString("en-CA")}&nbsp;) odds</span></p>`;
        outputAns.innerHTML += `<p class="txt-three-quarters">${msgRoundedFigures}</p>`;

        // call visualization function
        visualize(simpleNumerator, simpleDenominator);

        // re-enable pagetop btns (1000ms delay)
        if (btnRandom.disabled === true &&
            btnReload.disabled === true &&
            btnColour.disabled === true) {
            setTimeout(enablePagetopBtns, msDelay);
        }

        // focus on btnReload after a few seconds (when page-top btns are re-enabled)
        setTimeout(() => {
            btnReload.focus();
        }, msDelay);
    }

    // refresh window function
    let reloadWindow = () => {
        window.location.reload();
    }

    // toggle style sheets
    let toggleColour = () => {
        if (colourCheckbox.checked === true) {
            colourlessCSS.disabled = false;
            colourCheckbox.checked = false;
            colourOff.style.display = "inline";
            colourOn.style.display = "none";
        } else {
            colourlessCSS.disabled = true;
            colourCheckbox.checked = true;
            colourOn.style.display = "inline";
            colourOff.style.display = "none";
        }
    }

    // try again function
    let tryAgain = () => {
        // clear outputAns & outputArea
        outputAns.innerHTML = "";
        outputArea.innerHTML = "";

        // unhide visualization form
        form.style.display = "block";

        // reset input values
        formNumerator.value = "";
        formDenominator.value = "";

        // reset user input display
        x.innerHTML = "x";
        y.innerHTML = "y";
        aAn.innerHTML = "an";

        // change refresh btn text
        btnReload.innerHTML = "Refresh";

        // focus on numerator input
        formNumerator.focus();
    }

    // scroll to top
    let scrollToTop = () => {
        document.documentElement.scrollTop = 0;
    }

    // FOOTER - COPYRIGHT YEAR
    let copyDate = new Date();
    let currentYr = copyDate.getFullYear();
    let copyYr = document.querySelector("#copy-yr");
    if (currentYr > 2023) {
        copyYr.innerHTML = `2023 &ndash; ${currentYr}`;
    } else {
        copyYr.innerHTML = currentYr;
    }

    // EVENT LISTENERS
    // call calculate function when user submits form
    btnSubmit.addEventListener("click", calculate);

    // call tryAgain function when user clicks refresh btn
    btnReload.addEventListener("click", tryAgain);

    // call reload window function when user clicks on header text
    header.addEventListener("click", reloadWindow);

    // call randomStat function when user clicks random btn
    btnRandom.addEventListener("click", randomStat);

    // display user input as they type
    form.numerator.addEventListener("input", displayInput);
    form.denominator.addEventListener("input", displayInput);

    // toggle colour
    btnColour.addEventListener("click", toggleColour);

    // scroll-to-top btn
    btnScrollToTop.addEventListener("click", scrollToTop);
}
