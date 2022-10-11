const router = require("express").Router();
const { Post } = require("../models");
// const withAuth = require("../utils/auth");

//intro page
router.get("/", (req, res) => {
  res.render("intropage")
})

//login
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    console.log(req.session.loggedIn)
    res.redirect('/homepage');
    return;
  }
  res.render('login');
});

//signin
router.get("/signup", (req, res) => {
  res.render("signup");
});

//get all posts for homepage
router.get("/homepage", async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      attributes: [
        'title', 'content', 'image', 'createdAt'
      ]
    })
    const posts = dbPostData.map((post) => post.get({ plain: true }))
    // res.send(posts)
    res.render('homepage', { data: posts, loggedIn: req.session.loggedIn })
  }
  catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})

//about us 
router.get("/about_us", (req, res) => {
  res.render("about-us", { loggedIn: req.session.loggedIn })
})

module.exports = router;
