const sequelize = require("../config/connection");
const seedUsers = require("./user-seeds");
const seedPosts = require("./post-seeds");
const seedComments = require("./comment-seeds");


const seedAll = async () => {

    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedUsers();
    console.log('\n----- USERS SYNCED -----\n');
    await seedPosts();
    console.log('\n----- POSTS SYNCED -----\n');
    await seedComments();
    console.log('\n----- COMMENTS SYNCED -----\n');
    await seedAll

    process.exit(0);
};

seedAll();