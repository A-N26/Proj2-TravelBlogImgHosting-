const sequelize = require('../config/connection');

const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log(chalk.blue.bold(figlet.textSync(`\n----- DATABASE SYNCED -----\n`)));
    await seedUsers();
    console.log(chalk.green.italic(`\n----- USERS SYNCED -----\n`));
    await seedPosts();
    console.log(chalk.yellow.italic(`\n----- POSTS SYNCED -----\n`));
    await seedComments();
    console.log(chalk.red.italic(`\n----- COMMENTS SYNCED -----\n`));

    process.exit(0);
};

seedAll();