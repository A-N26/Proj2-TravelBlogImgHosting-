const router = require('express').Router();
const { Post, Comment, User } = require('../models');

router.get('/', function (req, res) {
    res.render('testing');
});

module.exports = router;
