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
      phoneNum: user.phoneNum,
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

//function to order a whole chapter
router.post("/multi-order", async (req, res) => {
  try {
    const { kind, chapter, price, userId } = req.body;
    console.log(kind, chapter, price, userId);
    if (!kind || !chapter || !userId || !price) {
      return res.status(400).json("please provide all requirments");
    }

    const user = await Users.findById(userId);
    let username = user.username;

    const videos = await Vedios.find({ kind, chapter });
    let videoname = chapter;

    let videoIds = [];
    videos.map((video) => {
      videoIds.push(video._id);
    });
    console.log(videoIds);

    let newRequest = new Request({
      username,
      phoneNum: user.phoneNum,
      videoname,
      price,
      videoId: videoIds,
      userId: user.id,
    });

    const request = await newRequest.save();
    console.log(request);
    return res.json(request);
  } catch (e) {
    console.log(e);
  }
});

//accept request
router.post("/give-access", (req, res) => {
  const { videoId, userId } = req.body;

  if (!videoId || !userId) {
    return res.status(400).json({ msg: "please provide user id and video id" });
  }
  //update user
  let newVideoId = [];
  let newUserId = [];
  Users.findById(userId)
    .then((user) => {
      //update user videos
      newVideoId = user.videosId.push(videoId);
      console.log(newVideoId);

      Users.findByIdAndUpdate(userId, { videosId: user.videosId })
        .then((newuser) => {
          console.log(newuser);
        })
        .catch((err) => console.log(err));
      //update videos
      videoId.map((video) => {
        Vedios.findById(video)
          .then((video1) => {
            newUserId = video1.users.push(userId);
            console.log(newUserId);

            Vedios.findByIdAndUpdate(video, { users: video1.users })
              .then((newvideo) => {
                console.log(newvideo);
              })
              .catch((err) => console.log(err));
          })
          .catch((err) => console.log(err));
      });

      //returning user
      res.json(user);
    })
    .catch((err) => console.log(err));
});

//delete request
router.post("/delete-req", validUser, (req, res) => {
  let { orderId } = req.body;
  console.log(orderId);
  if (!orderId) {
    return res.status(400).json({ msg: "please provide order id" });
  }
  //find and delete
  Request.deleteOne({ _id: orderId })
    .then((order) => {
      res.json(order);
    })
    .catch((err) => console.log("delete err", err));
});

module.exports = router;
