const router = require("express").Router();
const multer = require('multer');
const { storage } = require("../cloudinary")
const upload = multer({ storage })


// add blog[/blog/newblog]
// router.get('/upload', (req, res) => {
//     res.render('testing')
// })

// router.post('/upload', upload.single('image'), (req, res) => {
//     res.send('image uploaded')
// })

router.get("/newblog", (req, res) => {
    res.render("newblog", { loggedIn: req.session.loggedIn })
})

router.post('/newblog', upload.single('image'), (req, res) => {
    console.log(req.body, req.file)
    res.send('it worked')
})

// router.post("/tacos", (req, res) => {
//     res.send('hello from post')
// })



module.exports = router;