const router = require("express").Router();
const { Post, Comment, User } = require("../models");
const withAuth = require("../utils/auth");

//homepage
router.get("/", (req, res) => {
  res.render("intropage")
})

router.get("/homepage", (req, res) => {
  res.render("homepage", { loggedIn: req.session.loggedIn })
})

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/homepage');
    return;
  }
  res.render('login');
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/about_us", (req, res) => {
  res.render("about_us", { loggedIn: req.session.loggedIn })
})

// router.get("/intro", (req, res) => {
//   res.render('intropage')
// })




module.exports = router;
