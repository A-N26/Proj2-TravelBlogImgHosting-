const { User } = require('../models');

const userData =
    [
        {
            username: "XxgeometrylowxX",
            password: "password22",
            email: "emmelot@gmail.com",
        },
        {
            username: "Angular132",
            password: "password11",
            email: "moose@hotmail.com",

        },
        {
            username: "Range50",
            password: "password33",
            email: "batterup@gmail.com",
        },
        {
            username: "Fakeaccount2021",
            password: "password44",
            email: "Peter@gmail.com"
        },
        {
            username: "Author217",
            password: "password48",
            email: "Travellover0@gmail.com"

        },
        {
            username: "testing1234",
            password: "passwordfdfd",
            email: "testing12340@gmail.com"

        },
    ]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;