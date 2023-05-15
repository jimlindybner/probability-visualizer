window.onload = () => {
    // footer: copyright year
    let copyDate = new Date();
    let currentYr = copyDate.getFullYear();
    let copyYr = document.querySelector("#copy-yr");
    copyYr.innerHTML = currentYr;

    // form handles & variables
    const btnSubmit = document.querySelector("#btn-submit");
    const btnAgain = document.querySelector("#btn-again");
    const btnRandom = document.querySelector("#btn-random");
    const outputArea = document.querySelector(".output-area");
    const question = document.querySelector("#question");
    const outputAns = document.querySelector("#ans");
    const form = document.visualization_form;
    const formNumerator = form.numerator;
    const formDenominator = form.denominator;
    const msgInputError = `There is an invalid input in one or more fields. \nPlease enter whole numbers greater than 0.`;
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
            desc: "Your chance of getting the Royal Flush hand in a game of Texas Hold'em is 1 in 649,740.",
            numer: 1,
            denom: 649740,
            source: "Wikipedia",
            sourceURL: "https://en.wikipedia.org/wiki/Poker_probability"
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
        }
    ];

    // functions
    // random stat
    let randomStat = () => {
        // hide question & btnSubmit
        question.style.display = "none";
        btnSubmit.style.display = "none";

        // clear outputArea
        outputArea.innerHTML = "";

        // generate random num for funStats arr
        let randomNum = Math.floor(Math.random() * funStats.length);

        // output to outputAns
        outputAns.innerHTML = `<p>${funStats[randomNum].desc}</p><p>Source: <a href="${funStats[randomNum].sourceURL}" target="_blank">${funStats[randomNum].source}.</a></p>`;
        
        // output-area: create balls based on user numerator input
        for (let i = 0; i < funStats[randomNum].numer; i++) {
            let ball = document.createElement("div");
            ball.className = "ball-hit";
            outputArea.appendChild(ball);
        }

        // output-area: create balls based on user denominator input
        for (let i = 0; i < (funStats[randomNum].denom - funStats[randomNum].numer); i++) {
            let ball = document.createElement("div");
            ball.className = "ball";
            outputArea.appendChild(ball);
        }
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
    let visualize = event => {
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
            alert(msgInputError);
            return false;
        } else if (inputDenominator === "" || inputDenominator === "0" || inputDenominator.includes(".") || inputDenominator.includes("-")) {
            formDenominator.value = "";
            formDenominator.focus();
            alert(msgInputError);
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
        percentageToFixed = percentage.toFixed(2);

        // output to outputAns
        outputAns.innerHTML = `${numerator} in ${denominator} ( ${simpleNumerator} / ${simpleDenominator} ) is:<ul><li>probability of ${decimalToFixed} or ${percentageToFixed}% chance</li><li>${simpleNumerator}-to-${simpleDenominator - simpleNumerator} ( ${simpleNumerator} : ${simpleDenominator - simpleNumerator} ) odds</li></ul><div class="txt-three-quarters">(above figures may be approximates)</div>`;

        // output-area: create balls based on user numerator input
        for (let i = 0; i < simpleNumerator; i++) {
            let ball = document.createElement("div");
            ball.className = "ball-hit";
            outputArea.appendChild(ball);
        }

        // output-area: create balls based on user denominator input
        for (let i = 0; i < (simpleDenominator - simpleNumerator); i++) {
            let ball = document.createElement("div");
            ball.className = "ball";
            outputArea.appendChild(ball);
        }

        // focus on btnAgain
        btnAgain.focus();
    }

    // refresh window function
    let reloadWindow = () => {
        window.location.reload();
    }

    // event listener
    btnSubmit.addEventListener("click", visualize);
    btnAgain.addEventListener("click", reloadWindow);
    btnRandom.addEventListener("click", randomStat);
}