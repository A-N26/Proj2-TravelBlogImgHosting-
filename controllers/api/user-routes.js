const router = require('express').Router();
const { User } = require('../../models');

// ↓Create a new user
router.post('/', async (req, res) => {
    try {
        const dbUserData = await User.create(
            {
                username: req.body.username,
                password: req.body.password,
                email: req.body.email,
            }
        );
        req.session.save(() => {
            req.session.loggedIn = true;
            res.status(200).json(dbUserData);
        });
    }
    catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

// Login
router.post('/login', async (req, res) => {
    try {
        const dbUserData = await User.findOne({
            where:
            {
                username: req.body.username,
            },
        });
        console.log(dbUserData)
        if (!dbUserData.username) {
            res.status(400).json({ message: "Incorrect email or username. please try again." });
            return;
        }
        const validPassword = dbUserData.checkPassword.toLowerCase(req.body.password);
        if (!validPassword) {
            res.status(400).json({ message: "Incorrect email, username or password. Please try again." });
            return;
        }
        req.session.save(() => {
            req.session.loggedIn = true;
            res.status(200).json({ user: dbUserData, message: "Successfully logged in." });
        });
    }
    catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

// logout
router.post('/logout', async (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    }
    else {
        res.status(404).end();
    }
});

module.exports = router;
