// Import Sequelize constructor
const Sequelize = require("sequelize");
require("dotenv").config();

// ↓Create database connection.
let sequelize;

if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
}
else {
    sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PW, {
            host: 'localhost',
            dialect: 'mysql',
            PORT: 3306
        }
    );
}

module.exports = sequelize;