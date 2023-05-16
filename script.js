window.onload = () => {
    // footer: copyright year
    let copyDate = new Date();
    let currentYr = copyDate.getFullYear();
    let copyYr = document.querySelector("#copy-yr");
    if (currentYr > 2023) {
        copyYr.innerHTML = `2023 &ndash; ${currentYr}`;
    } else {
        copyYr.innerHTML = currentYr;
    }

    // variables & form handles
    const btnSubmit = document.querySelector("#btn-submit");
    const btnReload = document.querySelector("#btn-reload");
    const btnRandom = document.querySelector("#btn-random");
    const outputArea = document.querySelector(".output-area");
    const question = document.querySelector("#question");
    const outputAns = document.querySelector("#ans");
    const form = document.visualization_form;
    const formNumerator = form.numerator;
    const formDenominator = form.denominator;
    const msgInputError1 = "There is an invalid input in one or more fields. \nPlease enter only natural numbers (1, 2, 3, 4 and so on).";
    const msgInputError2 = "The numerator cannot be greater than the denominator.";
    const msgRoundedFigures = "Note: The above figures for probabilities and odds may not be exact due to rounding."
    let gcd;

    // focus on formNumerator on page load
    formNumerator.focus();

    // random stats & facts
    let funStats = [
        {
            desc: "40%, or 2 in 5, of the people you shook hands with didn't wash their hands after the last time they used the washroom.",
            numer: 2,
            denom: 5,
            source: "Making Numbers Count: The Art and Science of Communicating Numbers",
            sourceURL: "https://www.simonandschuster.com/books/Making-Numbers-Count/Chip-Heath/9781982165444"
        },
        {
            desc: "Naturally, twins occur in about 1 in 250 pregnancies",
            numer: 1,
            denom: 250,
            source: "ReproductiveFacts.org",
            sourceURL: "https://www.reproductivefacts.org/news-and-publications/patient-fact-sheets-and-booklets/documents/fact-sheets-and-info-booklets/multiple-pregnancy-and-birth-twins-triplets-and-high-order-multiples-booklet/#:~:text=Naturally%2C%20twins%20occur%20in%20about,but%20there%20are%20other%20factors."
        },
        {
            desc: "About 1 in every 3,000 calico cats is born a male.",
            numer: 1,
            denom: 3000,
            source: "The Spruce Pets",
            sourceURL: "https://www.thesprucepets.com/calico-cats-photo-gallery-4031810#:~:text=About%20one%20in%20every%203%2C000,of%20many%20other%20health%20problems."
        },
        {
            desc: "By 2050, 1 in 4 people on Earth will be African.",
            numer: 1,
            denom: 4,
            source: "CNBC",
            sourceURL: "https://www.cnbc.com/2015/07/30/world-population-quarter-of-earth-will-be-african-in-2050.html"
        },
        {
            desc: "English is spoken by about 1 in 5 people on Earth.",
            numer: 1,
            denom: 5,
            source: "CIA World Factbook",
            sourceURL: "https://www.cia.gov/the-world-factbook/countries/world/#people-and-society"
        },
        {
            desc: "Mandarin Chinese is spoken by almost 7 out of every 50 people on Earth.",
            numer: 7,
            denom: 50,
            source: "CIA World Factbook",
            sourceURL: "https://www.cia.gov/the-world-factbook/countries/world/#people-and-society"
        },
        {
            desc: "Hindi is spoken by 3 out of every 40 people on Earth.",
            numer: 3,
            denom: 40,
            source: "CIA World Factbook",
            sourceURL: "https://www.cia.gov/the-world-factbook/countries/world/#people-and-society"
        },
        {
            desc: "Spanish is spoken by almost 7 out of every 100 people on Earth.",
            numer: 7,
            denom: 100,
            source: "CIA World Factbook",
            sourceURL: "https://www.cia.gov/the-world-factbook/countries/world/#people-and-society"
        },
        {
            desc: "About 1 in 20 people on Earth speaks Arabic as their first language.",
            numer: 1,
            denom: 20,
            source: "CIA World Factbook",
            sourceURL: "https://www.cia.gov/the-world-factbook/countries/world/#people-and-society"
        },
        {
            desc: "About 1 in 3 people in the world is Christian.",
            numer: 1,
            denom: 3,
            source: "CIA World Factbook",
            sourceURL: "https://www.cia.gov/the-world-factbook/countries/world/#people-and-society"
        },
        {
            desc: "About 1 in 4 people in the world is Muslim.",
            numer: 1,
            denom: 4,
            source: "CIA World Factbook",
            sourceURL: "https://www.cia.gov/the-world-factbook/countries/world/#people-and-society"
        },
        {
            desc: "About 3 out of every 20 people in the world are Hindus.",
            numer: 3,
            denom: 20,
            source: "CIA World Factbook",
            sourceURL: "https://www.cia.gov/the-world-factbook/countries/world/#people-and-society"
        },
        {
            desc: "Almost 3 in 5 people on earth live in cities.",
            numer: 3,
            denom: 5,
            source: "CIA World Factbook",
            sourceURL: "https://www.cia.gov/the-world-factbook/countries/world/#people-and-society"
        },
        {
            desc: "About 1 in 4 people on earth is in the 0&ndash;14 years age range",
            numer: 1,
            denom: 4,
            source: "CIA World Factbook",
            sourceURL: "https://www.cia.gov/the-world-factbook/countries/world/#people-and-society"
        },
        {
            desc: "More than 1 in 3 people on earth is in the 15&ndash;64 years age range",
            numer: 1,
            denom: 3,
            source: "CIA World Factbook",
            sourceURL: "https://www.cia.gov/the-world-factbook/countries/world/#people-and-society"
        },
        {
            desc: "About 1 in 10 people on earth is older than 65.",
            numer: 1,
            denom: 10,
            source: "CIA World Factbook",
            sourceURL: "https://www.cia.gov/the-world-factbook/countries/world/#people-and-society"
        },
        {
            desc: "About 2 in 5 Canadians live in the province of Ontario.",
            numer: 2,
            denom: 5,
            source: "Google",
            sourceURL: "https://www.google.com/search?q=ontario+population&oq=ontario+population&aqs=chrome.0.0i67i433i650j0i67i650j0i131i433i512j0i512l2j69i64j0i512l2.1853j1j4&sourceid=chrome&ie=UTF-8"
        },
        {
            desc: "In 2011, about 3 in 10 Canadians spoke French.",
            numer: 3,
            denom: 10,
            source: "Wikipedia",
            sourceURL: "https://en.wikipedia.org/wiki/Francophone_Canadians"
        },
        {
            desc: "About 21 out of 25 Brits live in England.",
            numer: 21,
            denom: 25,
            source: "Google",
            sourceURL: "https://www.google.com/search?q=population+england&oq=population+England&aqs=chrome.0.0i512l10.2347j1j9&sourceid=chrome&ie=UTF-8"
        },
        {
            desc: "Your chances of getting a straight flush in a game of poker is about 1 in 72,193.",
            numer: 1,
            denom: 72193,
            source: "Wikipedia",
            sourceURL: "https://en.wikipedia.org/wiki/Poker_probability"
        },
        {
            desc: "Your chances of getting four of a kind in a game of poker is about 1 in 4,166.",
            numer: 1,
            denom: 4166,
            source: "Wikipedia",
            sourceURL: "https://en.wikipedia.org/wiki/Poker_probability"
        },
        {
            desc: "Your chances of getting a full house in a game of poker is about 1 in 694.",
            numer: 1,
            denom: 694,
            source: "Wikipedia",
            sourceURL: "https://en.wikipedia.org/wiki/Poker_probability"
        },
        {
            desc: "Your chances of getting three of a kind in a game of poker is about 1 in 47.",
            numer: 1,
            denom: 47,
            source: "Wikipedia",
            sourceURL: "https://en.wikipedia.org/wiki/Poker_probability"
        },
        {
            desc: "Your chances of getting a two pair in a game of poker is about 1 in 21.",
            numer: 1,
            denom: 21,
            source: "Wikipedia",
            sourceURL: "https://en.wikipedia.org/wiki/Poker_probability"
        }
    ];

    // functions
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
        // hide question & btnSubmit
        question.style.display = "none";
        btnSubmit.style.display = "none";

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
        let randomStatProbToFixed = (randomStatProb).toFixed(3);
        let RandomStatPct = randomStatNumer / randomStatDenom * 100;
        let randomStatPctToFixed = (RandomStatPct).toFixed(1);

        // output to outputAns
        outputAns.innerHTML = `<p>${funStats[randomNum].desc}</p>`
        outputAns.innerHTML += `<p>That's a probability of ${randomStatProbToFixed} (&nbsp;${randomStatPctToFixed}% chance&nbsp;), or ${randomStatNumer}&#8209;to&#8209;${randomStatDenom - randomStatNumer} (&nbsp;${randomStatNumer}&nbsp;:&nbsp;${randomStatDenom - randomStatNumer}&nbsp;) odds.</p>`
        outputAns.innerHTML += `<p class="txt-three-quarters">${msgRoundedFigures}</p>`
        outputAns.innerHTML += `<p>Source: <a href="${funStats[randomNum].sourceURL}" target="_blank">${funStats[randomNum].source}.</a></p>`;
        
        // call visualization function
        visualize(randomStatNumer, randomStatDenom);
    }

    // greatest common divisor
    let twoNumGCD = (x, y) => {
        if ((typeof x !== 'number') || (typeof y !== 'number')) {
            return false;
        }
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
    let calculate = event => {
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

        // form validation: if inputs are missing or not whole numbers
        if (inputNumerator === "" || inputNumerator === "0" || inputNumerator.includes(".") || inputNumerator.includes("-")) {
            if (inputDenominator === "" || inputDenominator === "0" || inputDenominator.includes(".") || inputDenominator.includes("-")) {
                formDenominator.value = "";
            }
            formNumerator.value = "";
            formNumerator.focus();
            alert(msgInputError1);
            return false;
        } else if (inputDenominator === "" || inputDenominator === "0" || inputDenominator.includes(".") || inputDenominator.includes("-")) {
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

        // hide question & btnSubmit
        question.style.display = "none";
        btnSubmit.style.display = "none";

        // call function twoNumGCD to set gcd variable
        twoNumGCD(numerator, denominator);

        // simplify fractions
        simpleNumerator = numerator / gcd;
        simpleDenominator = denominator / gcd;

        // calculate decimal and percentage
        decimal = simpleNumerator / simpleDenominator;
        decimalToFixed = decimal.toFixed(3);
        percentage = decimal * 100;
        percentageToFixed = percentage.toFixed(1);

        // output to outputAns
        outputAns.innerHTML = `<div>${numerator} in ${denominator} (&nbsp;${simpleNumerator} / ${simpleDenominator}&nbsp;) is:</div>`
        outputAns.innerHTML += `<ul><li>probability of ${decimalToFixed} (&nbsp;${percentageToFixed}% chance&nbsp;)</li><li>${simpleNumerator}&#8209;to&#8209;${simpleDenominator - simpleNumerator} (&nbsp;${simpleNumerator}&nbsp;:&nbsp;${simpleDenominator - simpleNumerator}&nbsp;) odds</li></ul>`
        outputAns.innerHTML += `<div class="txt-three-quarters">${msgRoundedFigures}</div>`;

        // call visualization function
        visualize(simpleNumerator, simpleDenominator);

        // focus on btnReload
        btnReload.focus();
    }

    // refresh window function
    let reloadWindow = () => {
        window.location.reload();
    }

    // event listeners
    // call calculate function when user submits form
    btnSubmit.addEventListener("click", calculate);
    
    // call reloadWindow function when user clicks refresh btn
    btnReload.addEventListener("click", reloadWindow);
    
    // call randomStat function when user clicks random btn
    btnRandom.addEventListener("click", randomStat);
}