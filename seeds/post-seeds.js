const { Post } = require('../models');

const postData = [
    {
        title: "Melbourne",
        content: `I went to Melbourne last Christmas and I was amazed by the culture, food, and landscape of the city. It was the first time for me to spend my Christmas in summer and it was kinda weird without layers of jackets and inches of snow, but still a good one xd! Got some seafood and the oyster there was sooo fresh and delicious! The landscape of the great ocean road was stunning and I couldn’t wait to jump into the blue water. Oh and we also did some snorkelling! First time for me to explore the underwater world and it was fun interacting with the wild creatures!
        `,
        user_id: 1,
        image: "https://i.imgur.com/lTJuUyK.jpg"
    },
    {
        title: "Singapore",
        content: `Just came back from Singapore and miss the Hainanese chicken rice and bak kut the so so much! it was a tiny city like Hong Kong and the climate there was… hot and too hot… just like Hong Kong🥵(cant live without a/c). 
        Oh forgot to mention the Merlion! It was so aesthetic at night and walking along the harbour sidewalk was so relaxing. We also spent some time on the universal studio, it was good but no surprise. Just the same as the one in Japan and the restaurants inside were… super expensive lol`,
        user_id: 2,
        image: 'https://i.imgur.com/aLlZGop.jpg'
    },
    {
        title: "Hong Kong",
        content: `Went back to my lovely home last month, it’s been a year away from my family and I miss them so so much. I also miss the tram in Hong Kong, it carries a lot of memory coz I ve been taking them to the university for 4 years xd. 
        The food is a must-try item in Hong Kong and it’s much cheaper than Toronto with the same quality. Remember to try the Japanese cuisine coz it’s much better than those in Toronto xd. One more thing, try NOT to drive in Hong Kong! It’s too crowded and the parking fee is tooooo HIGH☹`,
        user_id: 2,
        image: 'https://i.imgur.com/7kEyfzV.jpg'

    },
    {
        title: "AMA Travel: Explore Jamaica",
        content: "Roland Van Meurs from AMA Travel joined Global News Morning to talk about what there is to discover in Jamaica and recommended the best way to do that. Sponsored by AMA. ",
        user_id: 5,
        image: 'https://i.imgur.com/wKzCgEe.jpg'
    },
    {
        title: "UK firms plan to increase business travel during the next year",
        content: "Two-thirds of UK companies plan to increase spending on business travel by at least 50 per cent over the next year, according to research from corporate card company American Express. A survey of business leaders and travellers also found that 42 per cent of SMEs were looking to take more business trips in the next 12 months. More than 80 per cent of companies believed that travel played a key role in increasing revenue, with 60 per cent planning to expand around the UK and 35 per cent wanting to enter new international markets.",
        user_id: 4,
        image: 'https://i.imgur.com/Dlcu68e.jpg'
    },
    {
        title: "Train strikes: Passengers told to avoid travel on Saturday",
        content: `Passengers should avoid travelling by train unless absolutely necessary on Saturday due to expected widespread disruption from strikes, the rail industry has said. Unions are striking as part of a long-running series of disputes over jobs, pay and conditions. They will be joined by members of the TSSA union, who staff station ticket offices and work in on-board operational roles, affecting Avanti West Coast, c2c and Transpennine Express services.`,
        user_id: 6,
        image: 'https://i.imgur.com/V0E88pl.jpg'

    }

]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
