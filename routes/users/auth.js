const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../../models/users");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const xssFilter = require("xss-filters");
const validUser = require("../../middlwares/auth");

router.post("/", (req, res) => {
  let { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ msg: "please enter all feilds" });
  }

  //filter input
  (username = xssFilter.inHTMLData(username)),
    (password = xssFilter.inHTMLData(password));

  User.findOne({ username }).then((user) => {
    if (!user) {
      return res.status(400).json({ msg: "User not Found!" });
    }

    bcrypt
      .compare(password, user.password)
      .then((isMatch) => {
        if (!isMatch) {
          return res.status(400).json({ msg: "wrong password" });
        } else {
          //sign user
          jwt.sign({ id: user.id }, process.env.JWTSECRET, (err, token) => {
            if (err) throw err;
            res.json({
              token,
              user: {
                id: user.id,
                name: user.name,
                username: user.username,
                role: user.role,
                videosId: user.videosId,
              },
            });
          });
        }
      })
      .catch((err) => {
        if (err) throw err;
      });
  });
});

router.get("/get-user", validUser, (req, res) => {
  User.findById(req.user.id)
    .select("-password")
    .then((user) => {
      res.json(user);
    })
    .catch((err) => console.log(err));
});

module.exports = router;
