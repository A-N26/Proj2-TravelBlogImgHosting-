const { User } = require('../models');

const userdata =
    [
        {
            username: "XxgeometrylowxX",
            password: "password22",
            email: "emmelot@gmail.com",
        },
        {
            username: "Angular132",
            password: "password11",
            email: "emmelot@gmail.com",
        },
        {
            username: "Range50",
            password: "password33",
            email: "batterup@gmail.com",
        },

    ]

const seedUsers = () =>
    User.bulkCreate(userdata, {
        individualHooks: true,
        returning: true,
    });

module.exports = seedUsers;