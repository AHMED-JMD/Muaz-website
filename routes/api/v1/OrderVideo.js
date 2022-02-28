const express = require("express");
const router = express.Router();
const Vedios = require("../../../models/vedios");
const Users = require("../../../models/users");
const Request = require("../../../models/request");
const validUser = require("../../../middlwares/auth");
//function to get orders
router.get("/get-request", validUser, (req, res) => {
  Users.findById(req.user.id)
    .then((user) => {
      if (!user) {
        console.log("no user found");
      } else if (user.role !== "admin") {
        return res.status(401).json("not allowed");
      }
      Request.find({})
        .then((request) => {
          return res.json(request);
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
});

//function to place order
router.post("/", async (req, res) => {
  try {
    let username = "";
    let videoname = "";
    let price = 0;

    const { videoId, userId } = req.body;

    if (!videoId || !userId) {
      return res
        .status(400)
        .json({ msg: "please provide user id and video id" });
    }

    const user = await Users.findById(userId);
    username = user.username;

    const video = await Vedios.findById(videoId);
    videoname = video.subName;
    price = video.price;

    console.log(username, videoname, price);

    let newRequest = new Request({
      username,
      videoname,
      price,
      userId: user.id,
      videoId: video.id,
    });

    const request = await newRequest.save();
    return res.json(request);
  } catch (error) {
    console.log(err);
  }
});

//accept request
router.post("/give-access", (req, res) => {
  const { videoId, userId } = req.body;

  if (!videoId || !userId) {
    return res.status(400).json({ msg: "please provide user id and video id" });
  }

  Users.findByIdAndUpdate(userId, { videosId: videoId })
    .then((user) => {
      console.log(user);
      res.json(user);
    })
    .catch((err) => console.log(err));
});

//delete request
router.post("/delete-req", validUser, (req, res) => {
  let { videoId } = req.body;

  if (!videoId) {
    return res.status(400).json({ msg: "please provide user id and video id" });
  }
  //find and delete
  Vedios.deleteOne({ _id: videoId })
    .then((video) => {
      console.log(video);
    })
    .catch((err) => console.log(err));
});

module.exports = router;
