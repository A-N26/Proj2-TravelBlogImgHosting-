const router = require("express").Router();
const authenticate = require('../utils/auth')
const multer = require('multer');
const { storage } = require("../cloudinary")
const upload = multer({ storage })
const { Post } = require('../models')


//render the blog form (/blog/newblog)
router.get("/newblog", (req, res) => {
    res.render("newblog", { loggedIn: req.session.loggedIn })
})

//create a new blog post
router.post('/newblog', authenticate, upload.single('image'), (req, res) => {
    // const { title, content } = req.body
    // const imageUrl = req.file.path
    // console.log(title, content, imageUrl)
    // console.log(req.body)
    // console.log(req.file.path)
    // res.send('it worked')
    if (req.session) {
        Post.create({
            title: req.body.title,
            content: req.body.content,
            image: req.file.path,
            user_id: req.session.user_id
        })
        return res.redirect("/homepage")
            .then(dbPostData => res.json(dbPostData))
            .catch(err => {
                console.log(err)
                res.status(400).json(err)
            })
    }
    // console.log(newPost)
    // res.send("success")
    // res.redirect("/homepage")
})

module.exports = router;