const router = require("express").Router();
// const { Post, Comment, User } = require("../models");
// const withAuth = require("../utils/auth");

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/register", (req, res) => {
  res.render("register");
});

//for testing only
router.get("/testing/:id", (req, res) => {
  const { id } = req.params;
  res.render("testing", { id });
});

module.exports = router;
