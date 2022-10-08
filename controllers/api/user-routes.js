const router = require('express').Router()
const { User } = require("../../models")


//create new user (/user)
router.post('/', async (req, res) => {
    try {
        const dbUserData = await User.create({
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
        });
        req.session.save(() => {
            req.session.loggedIn = true;
            res.status(200).json(dbUserData);
        });

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//login
router.post('/login', async (req, res) => {
    try {
        const dbUserData = await User.findOne({
            where: {
                username: req.body.username,
            },
        });
        console.log(dbUserData)
        if (!dbUserData) {
            res
                .status(400)
                .json({ message: "Incorrect email or password. Please try again" });
            return;
        }
        const validPassword = dbUserData.checkPassword(req.body.password);
        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password. Please try again' });
            return;
        }
        req.session.save(() => {
            req.session.loggedIn = true;

            res
                .status(200)
                .json({ user: dbUserData, message: "Successfully logged in" });
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//logout
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});


// router.get("/", (req, res) => {
//     const { username, password } = req.body
//     res.send(username)
// })

module.exports = router;
