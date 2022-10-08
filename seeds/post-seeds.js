const { Post } = require('../models');

const postData = [
    {
        title: "Why I'll never go back to Hamilton: The Barton Story",
        content: "The city is advising motorists to expect delays on the southbound Red Hill Valley Parkway Thursday as crews close the Barton Street off-ramp between 9 a.m. and 2 p.m. The city said in a tweet that crew members will be completing guide rail repairs at the Barton Street off-ramp. A portion of the RHVP is also under maintenance between Greenhill Avenue and King Street East. The work is expected to be completed in the coming four weeks. Crew members are completing stormwater management maintenance at a pond along the RHVP.",
        user_id: 1,
        image: "https://pixabay.com/photos/dandelion-seeds-dew-dewdrops-445228/"
    },
    {
        title: "Thanksgiving travel: Canadians have one major destination in mind — and it’s not in the country, Skyscanner says",
        content: "Just days away from Thanksgiving for Canadians, travel is certainly in the cards for many looking to take advantage of the long weekend, ncluding international travel. This year, we're seeing more than half of travel will be international for Thanksgiving from Canada, that's a big shift from where we were a couple of years ago,” Laura Lindsay, Skyscanner’s trend and destination expert, told Yahoo Canada.",
        user_id: 2,
        image: "https://pixabay.com/photos/dandelion-seeds-dew-dewdrops-445228/"
    },
    {
        title: "Train strikes: Passengers told to avoid travel on Saturday",
        content: "Passengers should avoid travelling by train unless absolutely necessary on Saturday due to expected widespread disruption from strikes, the rail industry has said. Unions are striking as part of a long-running series of disputes over jobs, pay and conditions. They will be joined by members of the TSSA union, who staff station ticket offices and work in on-board operational roles, affecting Avanti West Coast, c2c and Transpennine Express services.",
        user_id: 2

    },
    {
        title: "AMA Travel: Explore Jamaica",
        content: "Roland Van Meurs from AMA Travel joined Global News Morning to talk about what there is to discover in Jamaica and recommended the best way to do that. Sponsored by AMA. ",
        user_id: 5
    },
    {
        title: "UK firms plan to increase business travel during the next year",
        content: "Two-thirds of UK companies plan to increase spending on business travel by at least 50 per cent over the next year, according to research from corporate card company American Express. A survey of business leaders and travellers also found that 42 per cent of SMEs were looking to take more business trips in the next 12 months. More than 80 per cent of companies believed that travel played a key role in increasing revenue, with 60 per cent planning to expand around the UK and 35 per cent wanting to enter new international markets.",
        user_id: 4
    }

]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;