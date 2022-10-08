const router = require("express").Router();
const { Post, Comment, User } = require("../models");
const withAuth = require("../utils/auth");









router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/", (req, res) => {
  res.render("homepage", { loggedIn: req.session.loggedIn })
})

router.get("/about_us", (req, res) => {
  res.render("about_us", { loggedIn: req.session.loggedIn })
})






module.exports = router;
