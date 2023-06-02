window.onload = () => {
    // variables & form handles
    const header = document.querySelector("header div.header-copy");
    const btnSubmit = document.querySelector("#btn-submit");
    const btnReload = document.querySelector("#btn-reload");
    const btnRandom = document.querySelector("#btn-random");
    const outputArea = document.querySelector(".output-area");
    const outputAns = document.querySelector("#ans");
    const form = document.visualization_form;
    const formNumerator = form.numerator;
    const formDenominator = form.denominator;
    const msgInputError1 = "There is an invalid input in one or more fields. \nPlease enter only natural numbers (1, 2, 3, 4, etc.) up to 100,000.";
    const msgInputError2 = "The numerator cannot be greater than the denominator.";
    const msgRoundedFigures = "Note: The above figures for probabilities and odds may not be exact due to rounding.";

    // focus on formNumerator on page load
    formNumerator.focus();

    // random stats & facts
    let funStats = [
        {
            desc: "40%, or 2 in 5, of the people you shook hands with didn't wash their hands after the last time they used the washroom.",
            numer: 2,
            denom: 5,
            source: "Making Numbers Count: The Art and Science of Communicating Numbers",
            sourceURL: "https://www.simonandschuster.com/books/Making-Numbers-Count/Chip-Heath/9781982165444",
            retrieveDate: "2023-05-14"
        },
        {
            desc: "Naturally, twins occur in about 1 in 250 pregnancies",
            numer: 1,
            denom: 250,
            source: "ReproductiveFacts.org",
            sourceURL: "https://www.reproductivefacts.org/news-and-publications/patient-fact-sheets-and-booklets/documents/fact-sheets-and-info-booklets/multiple-pregnancy-and-birth-twins-triplets-and-high-order-multiples-booklet/#:~:text=Naturally%2C%20twins%20occur%20in%20about,but%20there%20are%20other%20factors.",
            retrieveDate: "2023-05-14"
        },
        {
            desc: "About 1 in every 3,000 calico cats is born a male.",
            numer: 1,
            denom: 3000,
            source: "The Spruce Pets",
            sourceURL: "https://www.thesprucepets.com/calico-cats-photo-gallery-4031810#:~:text=About%20one%20in%20every%203%2C000,of%20many%20other%20health%20problems.",
            retrieveDate: "2023-05-14"
        },
        {
            desc: "By 2050, 1 in 4 people on Earth will be African.",
            numer: 1,
            denom: 4,
            source: "CNBC",
            sourceURL: "https://www.cnbc.com/2015/07/30/world-population-quarter-of-earth-will-be-african-in-2050.html",
            retrieveDate: "2023-05-14"
        },
        {
            desc: "English is spoken by about 1 in 5 people on Earth.",
            numer: 1,
            denom: 5,
            source: "CIA World Factbook",
            sourceURL: "https://www.cia.gov/the-world-factbook/countries/world/#people-and-society",
            retrieveDate: "2023-05-14"
        },
        {
            desc: "Mandarin Chinese is spoken by almost 7 out of every 50 people on Earth.",
            numer: 7,
            denom: 50,
            source: "CIA World Factbook",
            sourceURL: "https://www.cia.gov/the-world-factbook/countries/world/#people-and-society",
            retrieveDate: "2023-05-14"
        },
        {
            desc: "Hindi is spoken by 3 out of every 40 people on Earth.",
            numer: 3,
            denom: 40,
            source: "CIA World Factbook",
            sourceURL: "https://www.cia.gov/the-world-factbook/countries/world/#people-and-society",
            retrieveDate: "2023-05-14"
        },
        {
            desc: "Spanish is spoken by almost 7 out of every 100 people on Earth.",
            numer: 7,
            denom: 100,
            source: "CIA World Factbook",
            sourceURL: "https://www.cia.gov/the-world-factbook/countries/world/#people-and-society",
            retrieveDate: "2023-05-14"
        },
        {
            desc: "About 1 in 20 people on Earth speaks Arabic as their first language.",
            numer: 1,
            denom: 20,
            source: "CIA World Factbook",
            sourceURL: "https://www.cia.gov/the-world-factbook/countries/world/#people-and-society",
            retrieveDate: "2023-05-14"
        },
        {
            desc: "About 1 in 3 people in the world is Christian.",
            numer: 1,
            denom: 3,
            source: "CIA World Factbook",
            sourceURL: "https://www.cia.gov/the-world-factbook/countries/world/#people-and-society",
            retrieveDate: "2023-05-14"
        },
        {
            desc: "About 1 in 4 people in the world is Muslim.",
            numer: 1,
            denom: 4,
            source: "CIA World Factbook",
            sourceURL: "https://www.cia.gov/the-world-factbook/countries/world/#people-and-society",
            retrieveDate: "2023-05-14"
        },
        {
            desc: "About 3 out of every 20 people in the world are Hindus.",
            numer: 3,
            denom: 20,
            source: "CIA World Factbook",
            sourceURL: "https://www.cia.gov/the-world-factbook/countries/world/#people-and-society",
            retrieveDate: "2023-05-14"
        },
        {
            desc: "Almost 3 in 5 people on earth live in cities.",
            numer: 3,
            denom: 5,
            source: "CIA World Factbook",
            sourceURL: "https://www.cia.gov/the-world-factbook/countries/world/#people-and-society",
            retrieveDate: "2023-05-14"
        },
        {
            desc: "About 1 in 4 people on earth is in the 0&ndash;14 years age range",
            numer: 1,
            denom: 4,
            source: "CIA World Factbook",
            sourceURL: "https://www.cia.gov/the-world-factbook/countries/world/#people-and-society",
            retrieveDate: "2023-05-14"
        },
        {
            desc: "More than 1 in 3 people on earth is in the 15&ndash;64 years age range",
            numer: 1,
            denom: 3,
            source: "CIA World Factbook",
            sourceURL: "https://www.cia.gov/the-world-factbook/countries/world/#people-and-society",
            retrieveDate: "2023-05-14"
        },
        {
            desc: "About 1 in 10 people on earth is older than 65.",
            numer: 1,
            denom: 10,
            source: "CIA World Factbook",
            sourceURL: "https://www.cia.gov/the-world-factbook/countries/world/#people-and-society",
            retrieveDate: "2023-05-14"
        },
        {
            desc: "About 2 in 5 Canadians live in the province of Ontario.",
            numer: 2,
            denom: 5,
            source: "Google",
            sourceURL: "https://www.google.com/search?q=ontario+population&oq=ontario+population&aqs=chrome.0.0i67i433i650j0i67i650j0i131i433i512j0i512l2j69i64j0i512l2.1853j1j4&sourceid=chrome&ie=UTF-8",
            retrieveDate: "2023-05-14"
        },
        {
            desc: "In 2011, about 3 in 10 Canadians spoke French.",
            numer: 3,
            denom: 10,
            source: "Wikipedia",
            sourceURL: "https://en.wikipedia.org/wiki/Francophone_Canadians",
            retrieveDate: "2023-05-14"
        },
        {
            desc: "About 21 out of 25 Brits live in England.",
            numer: 21,
            denom: 25,
            source: "Google",
            sourceURL: "https://www.google.com/search?q=population+england&oq=population+England&aqs=chrome.0.0i512l10.2347j1j9&sourceid=chrome&ie=UTF-8",
            retrieveDate: "2023-05-15"
        },
        {
            desc: "Your chances of getting a straight flush in a game of poker is about 1 in 72,193.",
            numer: 1,
            denom: 72193,
            source: "Wikipedia",
            sourceURL: "https://en.wikipedia.org/wiki/Poker_probability",
            retrieveDate: "2023-05-15"
        },
        {
            desc: "Your chances of getting four of a kind in a game of poker is about 1 in 4,166.",
            numer: 1,
            denom: 4166,
            source: "Wikipedia",
            sourceURL: "https://en.wikipedia.org/wiki/Poker_probability",
            retrieveDate: "2023-05-15"
        },
        {
            desc: "Your chances of getting a full house in a game of poker is about 1 in 694.",
            numer: 1,
            denom: 694,
            source: "Wikipedia",
            sourceURL: "https://en.wikipedia.org/wiki/Poker_probability",
            retrieveDate: "2023-05-15"
        },
        {
            desc: "Your chances of getting three of a kind in a game of poker is about 1 in 47.",
            numer: 1,
            denom: 47,
            source: "Wikipedia",
            sourceURL: "https://en.wikipedia.org/wiki/Poker_probability",
            retrieveDate: "2023-05-15"
        },
        {
            desc: "Your chances of getting a two pair in a game of poker is about 1 in 21.",
            numer: 1,
            denom: 21,
            source: "Wikipedia",
            sourceURL: "https://en.wikipedia.org/wiki/Poker_probability",
            retrieveDate: "2023-05-15"
        },
        {
            desc: "In the US, on average, there are about 4 airplane crashes (not all of which are fatal) per day, out of 44,945 flights.",
            numer: 4,
            denom: 44945,
            source: "The Hive Law",
            sourceURL: "https://www.thehivelaw.com/blog/how-often-do-planes-crash-statistics-how-many-planes-crash-a-year/#:~:text=Let's%20look%20at%20how%20many,119.6%20planes%20crash%20per%20week.",
            retrieveDate: "2023-05-16"
        },
        {
            desc: "According to the National Safety Council, your chance of dying from \"choking on food\" in the US is 1 in 2,659.",
            numer: 1,
            denom: 2659,
            source: "National Safety Council",
            sourceURL: "https://injuryfacts.nsc.org/all-injuries/preventable-death-overview/odds-of-dying/",
            retrieveDate: "2023-05-16"
        },
        {
            desc: "According to the National Safety Council, your chance of dying from a \"cataclysmic storm\" in the US is 1 in 20,098.",
            numer: 1,
            denom: 20098,
            source: "National Safety Council",
            sourceURL: "https://injuryfacts.nsc.org/all-injuries/preventable-death-overview/odds-of-dying/",
            retrieveDate: "2023-05-16"
        },
        {
            desc: "According to the National Safety Council, your chance of dying from an \"accidental gun discharge\" in the US is 1 in 7,944.",
            numer: 1,
            denom: 7944,
            source: "National Safety Council",
            sourceURL: "https://injuryfacts.nsc.org/all-injuries/preventable-death-overview/odds-of-dying/",
            retrieveDate: "2023-05-16"
        },
        {
            desc: "According to the National Safety Council, your chance of dying from \"hornet, wasp and bee stings\" in the US is 1 in 54,516.",
            numer: 1,
            denom: 54516,
            source: "National Safety Council",
            sourceURL: "https://injuryfacts.nsc.org/all-injuries/preventable-death-overview/odds-of-dying/",
            retrieveDate: "2023-05-16"
        },
        {
            desc: "According to the National Safety Council, your chance of dying from a \"dog attack\" in the US is 1 in 53,843.",
            numer: 1,
            denom: 53843,
            source: "National Safety Council",
            sourceURL: "https://injuryfacts.nsc.org/all-injuries/preventable-death-overview/odds-of-dying/",
            retrieveDate: "2023-05-16"
        },
        {
            desc: "According to the National Safety Council, your chance of dying from a \"motor-vehicle crash\" in the US is 1 in 93.",
            numer: 1,
            denom: 93,
            source: "National Safety Council",
            sourceURL: "https://injuryfacts.nsc.org/all-injuries/preventable-death-overview/odds-of-dying/",
            retrieveDate: "2023-05-16"
        },
        {
            desc: "According to the National Safety Council, your chance of dying from \"drowning\" in the US is 1 in 1,006.",
            numer: 1,
            denom: 1006,
            source: "National Safety Council",
            sourceURL: "https://injuryfacts.nsc.org/all-injuries/preventable-death-overview/odds-of-dying/",
            retrieveDate: "2023-05-16"
        },
        {
            desc: "According to the National Safety Council, your chance of dying from \"fire or smoke\" in the US is 1 in 1,287.",
            numer: 1,
            denom: 1287,
            source: "National Safety Council",
            sourceURL: "https://injuryfacts.nsc.org/all-injuries/preventable-death-overview/odds-of-dying/",
            retrieveDate: "2023-05-16"
        },
        {
            desc: "According to the National Safety Council, your chance of dying from \"sharp objects\" in the US is 1 in 25,960.",
            numer: 1,
            denom: 25960,
            source: "National Safety Council",
            sourceURL: "https://injuryfacts.nsc.org/all-injuries/preventable-death-overview/odds-of-dying/",
            retrieveDate: "2023-05-16"
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
        outputAns.innerHTML += `<p><span class="text-tertiary-color">That's a probability of ${randomStatProbFixed} (&nbsp;${randomStatPctFixed}% chance&nbsp;), or ${randomStatNumer}&#8209;to&#8209;${randomStatDenom - randomStatNumer} (&nbsp;${randomStatNumer}&nbsp;:&nbsp;${randomStatDenom - randomStatNumer}&nbsp;) odds.</span></p>`
        outputAns.innerHTML += `<p class="txt-three-quarters">${msgRoundedFigures}</p>`
        outputAns.innerHTML += `<p>Source: <a href="${funStats[randomNum].sourceURL}" target="_blank">${funStats[randomNum].source}</a> <span class="txt-three-quarters">(retrieved on ${outputDate} ${monthNames[outputMonth]} ${outputYear})</span>.</p>`;

        // call visualization function
        visualize(randomStatNumer, randomStatDenom);
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

        // variables
        const inputNumerator = formNumerator.value;
        const inputDenominator = formDenominator.value;
        const numerator = parseInt(inputNumerator);
        const denominator = parseInt(inputDenominator);
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
        outputAns.innerHTML = `<p>${numerator} in ${denominator} (&nbsp;${simpleNumerator} / ${simpleDenominator}&nbsp;) is:</p>`
        outputAns.innerHTML += `<ul>`;
        outputAns.innerHTML += `<li><span class="text-tertiary-color">a probability of ${decimalFixed} (&nbsp;${percentageFixed}% chance&nbsp;)</span></li>`;
        outputAns.innerHTML += `<li><span class="text-tertiary-color">${simpleNumerator}&#8209;to&#8209;${simpleDenominator - simpleNumerator} (&nbsp;${simpleNumerator}&nbsp;:&nbsp;${simpleDenominator - simpleNumerator}&nbsp;) odds</span></li>`;
        outputAns.innerHTML += `</ul>`;
        outputAns.innerHTML += `<p class="txt-three-quarters">${msgRoundedFigures}</p>`;

        // call visualization function
        visualize(simpleNumerator, simpleDenominator);

        // focus on btnReload
        btnReload.focus();
    }

    // refresh window function
    let reloadWindow = () => {
        window.location.reload();
    }

    // footer: copyright year
    let copyDate = new Date();
    let currentYr = copyDate.getFullYear();
    let copyYr = document.querySelector("#copy-yr");
    if (currentYr > 2023) {
        copyYr.innerHTML = `2023 &ndash; ${currentYr}`;
    } else {
        copyYr.innerHTML = currentYr;
    }

    // event listeners
    // call calculate function when user submits form
    btnSubmit.addEventListener("click", calculate);

    // call reloadWindow function when user clicks refresh btn
    btnReload.addEventListener("click", reloadWindow);

    // call reload window function when user clicks on header text
    header.addEventListener("click", reloadWindow);

    // call randomStat function when user clicks random btn
    btnRandom.addEventListener("click", randomStat);
}