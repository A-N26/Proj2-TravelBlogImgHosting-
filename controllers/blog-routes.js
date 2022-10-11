const router = require("express").Router();
const multer = require('multer');
const { storage } = require("../cloudinary")
const upload = multer({ storage })
const { Post } = require('../models')


//render the blog form (/blog/newblog)
router.get("/newblog", (req, res) => {
    res.render("newblog", { loggedIn: req.session.loggedIn })
})

//create a new blog post
router.post('/newblog', upload.single('image'), async (req, res) => {
    // const { title, content } = req.body
    // const imageUrl = req.file.path
    // console.log(title, content, imageUrl)
    // console.log(req.body)
    // console.log(req.file.path)
    // res.send('it worked')
    const { title, content } = req.body
    const image = req.file.path
    try {
        const newPost = await Post.create({ title, content, image })
        console.log(newPost)
        res.redirect("/homepage")
    }
    catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }
})

module.exports = router;