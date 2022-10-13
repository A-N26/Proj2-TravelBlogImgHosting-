const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./home-routes");
const blogRoutes = require('./blog-routes')


router.use("/", homeRoutes);
router.use('/api', apiRoutes);
router.use('/blog', blogRoutes);



// router.get('/testing', async (req, res) => {
//     try {
//         const data = await User.findAll({})
//         console.log(data)
//     }
//     catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//     }
// })


module.exports = router;