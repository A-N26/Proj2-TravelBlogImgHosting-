const router = require("express").Router();
const { Post, User } = require("../models");
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

//get all posts
router.get("/homepage", async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      attributes: [
        'title', 'content', 'image'
      ]
    })
    const posts = dbPostData.map((post) => post.get({ plain: true }))
    res.render('homepage', { data: posts, loggedIn: req.session.loggedIn })
    console.log(posts)
    // console.log(req.session.loggedIn)
  }
  catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})

//add blog
router.get("/newblog", (req, res) => {
  res.render("newblog", { loggedIn: req.session.loggedIn })
})

//about us 
router.get("/about_us", (req, res) => {
  res.render("about_us", { loggedIn: req.session.loggedIn })
})




module.exports = router;
