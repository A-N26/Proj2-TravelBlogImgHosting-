// ↓Declarations
// ↓'Require' values
const path = require('path');
const routes = require('./controllers');
const PORT = process.env.PORT || 3001;

const express = require('express');
const app = express();
const HB = require('express-handlebars');

const sequelize = require('./config/connection');
const session = require('express-session');

// db and server connection
sequelize.sync({ force: false }).then(() => {
    app.listen(port, console.log('server listening on port ' + `${ PORT }`));
});