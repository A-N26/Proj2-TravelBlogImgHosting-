const { Comment } = require('../models');

const commentData = [
    {
        comment_text: "Great article. Looking forward to the next",
        user_id: 2,
        post_id: 3,

    },
    {
        comment_text: "Interesting Read!",
        user_id: 2,
        post_id: 5,

    },
    {
        comment_text: "Would love to learn More!",
        user_id: 4,
        post_id: 1,

    },
    {
        comment_text: "Man, can't wait to travel next month",
        user_id: 3,
        post_id: 5,

    },
    {
        comment_text: "Where can I learn more?",
        user_id: 3,
        post_id: 4,

    },
    {
        comment_text: "Not too sure if I agree with the tone of the article..",
        user_id: 2,
        post_id: 1,

    },
    {
        comment_text: "Oh man, what a read.",
        user_id: 5,
        post_id: 3,

    },
    {
        comment_text: "Awesome, I'd like to know more.",
        user_id: 2,
        post_id: 1,

    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;