// ↓Declarations
// ↓'Require' values
const path = require('path');
const routes = require('./controllers');
const PORT = process.env.PORT || 3001;

const express = require('express');
const app = express();
const HB = require('express-handlebars');
const helpers = require('./utils/helpers');
    // custom helpers for the handlebars
const helpBars = HB.create({
    helpers
});

const sequelize = require('./config/connection');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// ↓Session values
const SeqS = {
    // Add the word under DB_SECRET in .env file.
    secret: process.env.DB_SECRET,
    cookie: {
        // session expiry check - every 5 Minutes.
        checkExpirationInterval: 1000 * 60 * 5,
        // session expires after 10 Minutes.
        expires: 1000 * 60 * 10
    },
    reSave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize,
    })
};

// application method implementations
app.engine('handlebars', helpBars.engine);
app.set('view engine', 'handlebars');

app.use(session(SeqS));
app.use(express.json());
app.use(express.urlencoded({ extended: true, }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./controllers'));

app.use(routes);

// db and server connection
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, console.log('server listening on port ' + `${ PORT }`));
});
