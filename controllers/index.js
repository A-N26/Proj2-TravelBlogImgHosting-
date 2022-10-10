const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./home-routes");
const blogRoutes = require('./blog-routes')

router.use("/", homeRoutes);
router.use('/api', apiRoutes);
router.use('/blog', blogRoutes);

module.exports = router;