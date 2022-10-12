const router = require('express').Router();
const { Post, Comment, User } = require('../models');

require('../utils/auth');

// homepage
router.get('/', function (req, res) {
    res.render('introPage')
});

router.get('/homepage', function (req, res) {
    res.render('homepage', { loggedIn: req.session.LoggedIn })
});

router.get('/login', function (req, res) {
    if (req.session.LoggedIn) {
        res.redirect('/homepage');
        return;
    }
    res.render('login');
});

router.get('/signup', function (req, res) {
    res.render('signup');
});

router.get('/about-us', function (req, res) {
    res.render('about-us', { loggedIn: req.session.LoggedIn })
});

module.exports = router;
