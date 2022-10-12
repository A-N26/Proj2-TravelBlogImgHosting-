const router = require("express").Router();
const authenticate = require('../utils/auth')
const multer = require('multer');
const { storage } = require("../cloudinary")
const upload = multer({ storage })
const { Post, Comment } = require('../models');


//render the blog form (/blog/newblog)
router.get("/newblog", (req, res) => {
    res.render("newblog", { loggedIn: req.session.loggedIn })
})

//create a new blog post
router.post('/newblog', authenticate, upload.single('image'), (req, res) => {
    if (req.session) {
        Post.create({
            title: req.body.title,
            content: req.body.content,
            image: req.file.path,
            user_id: req.session.user_id
        })
        res.redirect("/homepage")
    }
})



// show individual blog post
router.get("/:id", authenticate, async (req, res) => {
    try {
        const dbPostData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: Comment,
                    attributes: [
                        'comment_text'
                    ]
                }
            ]
        })
        const result = dbPostData.get({ plain: true })
        console.log(result)
        res.render("blog-detail", { data: result, loggedIn: req.session.loggedIn })
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

module.exports = router;