const { User } = require('../models');

const userData =
[
  {
    username: "XxgeometrylowxX",
    email: "emmelot@gmail.com",
    password: "password22"
  },
  {
    username: "Angular132",
    email: "moose@hotmail.com",
    password: "password11"
  },
  {
    username: "Range50",
    email: "batterup@gmail.com",
    password: "password33"
  },
  {
    username: "Fakeaccount2021",
    email: "Peter@gmail.com",
    password: "password44"
  },
  {
    username: "Author217",
    email: "Travellover0@gmail.com",
    password: "password48"
  }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;