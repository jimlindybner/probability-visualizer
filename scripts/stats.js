// RANDOM STATS & FACTS
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
        desc: "Only about 1 in every 3,000 calico cats is born a male.",
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
    },
    {
        desc: "Out of 50 air molecules on Earth, 39 are nitrogen. The rest are mostly oxygen.",
        numer: 39,
        denom: 50,
        source: "NASA",
        sourceURL: "https://climate.nasa.gov/news/2491/10-interesting-things-about-air/#:~:text=The%20air%20in%20Earth's%20atmosphere,nitrogen%20and%2021%20percent%20oxygen.",
        retrieveDate: "2023-06-02"
    },
    {
        desc: "Out of 25 air molecules on Mars, 24 are carbon dioxide.",
        numer: 24,
        denom: 25,
        source: "NASA",
        sourceURL: "https://mars.nasa.gov/all-about-mars/facts/",
        retrieveDate: "2023-06-03"
    },
    {
        desc: "If the solar system were to be divided into 5,000 equal parts, 4,993 would be made up of the sun's mass (the remaining 7 parts would mostly be just the planet Jupiter).",
        numer: 4993,
        denom: 5000,
        source: "Wikipedia",
        sourceURL: "https://en.wikipedia.org/wiki/Solar_System",
        retrieveDate: "2023-06-03"
    },
    {
        desc: "If the universe were to be divided into 25 equal parts, only 1 would be made up of stars, planets and galaxies (the rest is made up of undetected dark matter and dark energy).",
        numer: 1,
        denom: 25,
        source: "Space.com",
        sourceURL: "https://www.space.com/11642-dark-matter-dark-energy-4-percent-universe-panek.html",
        retrieveDate: "2023-06-03"
    },
    {
        desc: "For every 10 people in the world, only about 1 lives in the southern hemisphere.",
        numer: 1,
        denom: 10,
        source: "Wikipedia",
        sourceURL: "https://en.wikipedia.org/wiki/Southern_Hemisphere#:~:text=More%20than%20850%20million%20people,the%20total%20global%20human%20population.",
        retrieveDate: "2023-06-03"
    },
    {
        desc: "Out of the world's roughly 7,000 languages, only 15 have over 100,000 speakers. That's just 3 in 1,400!",
        numer: 3,
        denom: 1400,
        source: "Everything Everywhere Daily",
        sourceURL: "https://everything-everywhere.com/esperanto-and-the-search-for-a-global-language/",
        retrieveDate: "2023-06-11"
    },
    {
        desc: "In 1918, 8 out of 25 children worldwide didn't live long enough to see their 5th birthday (that's come down to 1 in 25 today).",
        numer: 8,
        denom: 25,
        source: "The Data Detective",
        sourceURL: "https://timharford.com/books/datadetective/",
        retrieveDate: "2023-07-03"
    },
    {
        desc: "In the early 1800s, 19 out of 20 people worldwide lived in \"extreme poverty\" (today, it's 1 in 10).",
        numer: 19,
        denom: 20,
        source: "The Data Detective",
        sourceURL: "https://timharford.com/books/datadetective/",
        retrieveDate: "2023-07-03"
    }
];