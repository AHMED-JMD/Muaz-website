const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const Vedios = require("../../../models/vedios");
const User = require("../../../models/users");
const xssFilter = require("xss-filters");
const fs = require("fs");
const validUser = require("../../../middlwares/auth");

//multer middleware
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/videos");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + ".mp4");
  },
});

const upload = multer({ storage: storage });

//public route
//get all videos data from
router.get("/all-videos", (req, res) => {
  Vedios.find({})
    .then((video) => {
      Promise.all(
        video.map((video1) => {
          return { subName: video1.subName };
        })
      ).then((result) => {
        res.json(result);
      });
    })
    .catch((err) => console.log(err));
});

//public route
//get vedios from db
router.post("/", (req, res) => {
  let { kind, chapter } = req.body;

  if (!kind || !chapter) {
    return res.status(400).json({ msg: "please set headers" });
  }

  Vedios.find({ kind, chapter })
    .then((videos) => {
      if (!videos) {
        console.log("couldnt fetch from db for some reasons");
      }
      res.json({ videos });
    })
    .catch((err) => console.log(err));
});

//public route
//search for specific video
router.get("/searched-video", (req, res) => {
  const { subName } = req.body;

  Vedios.findOne({ subName })
    .then((video) => {
      res.json(video);
    })
    .catch((err) => console.log(err));
});

//post rout get vedios from front
//private route
//post
router.post(
  "/post-video",
  upload.single("file"),
  validUser,
  (req, res, next) => {
    let { subject, kind, booknum, chapter, subName, price, details } = req.body;
    let { filename } = req.file;
    console.log(details);
    //filter input
    subject = xssFilter.inHTMLData(subject);
    kind = xssFilter.inHTMLData(kind);
    booknum = xssFilter.inHTMLData(booknum);
    chapter = xssFilter.inHTMLData(chapter);
    subName = xssFilter.inHTMLData(subName);
    price = xssFilter.inHTMLData(price);
    details = xssFilter.inHTMLData(details);

    //check if req.body is complete
    if (
      !subject ||
      !kind ||
      !booknum ||
      !chapter ||
      !subName ||
      !price ||
      !details ||
      !filename
    ) {
      return res.status(400).json({ msg: "please enter all fields" });
    }
    //check user is admin
    User.findById(req.user.id)
      .then((user) => {
        if (!user) {
          console.log("no user found");
        } else if (user.role !== "admin") {
          return res.status(401).json("not allowed, your not an admin");
        }
        //add vedio to database
        let newVedio = new Vedios({
          link: filename,
          subject,
          kind,
          booknum,
          chapter,
          subName,
          price,
          details,
        });

        newVedio
          .save()
          .then((vedio) => {
            res.json({ vedio });
          })
          .catch((err) => console.log("vedio_err", err));
      })
      .catch((err) => console.log(err));
  }
);
//route for getting user videos by-id
//public route
router.post("/user-videos", validUser, (req, res) => {
  let { videosId } = req.body;
  console.log(videosId);

  Promise.all(
    videosId.map((videoId) => {
      return Vedios.findById(videoId).then((video) => {
        return video;
      });
    })
  ).then((result) => {
    res.json(result);
  });
});

//route for getting video by id
//public route
router.post("/get-byID", (req, res) => {
  const { id } = req.body;

  if (!id) {
    return res.status(400).json({ msg: "provide a valid id" });
  }

  Vedios.findById({ _id: id })
    .then((video) => {
      if (!video) {
        console.log("couldnt fetch request");
      }
      res.json({ video });
    })
    .catch((err) => console.log(err));
});

//get route for streaming the vedio
//private route

//VALIDATE USER HERE
TODO: router.get("/stream-vedio", (req, res) => {
  const { link } = req.query;

  const range = req.headers.range;
  if (!range) {
    res.status(400).send("Requires Range header");
  }

  // get video stats (about 61MB)
  const videoPath = path.join(__dirname, `../../../public/videos/${link}`);
  const videoSize = fs.statSync(videoPath).size;

  // Parse Range
  // Example: "bytes=32324-"
  const CHUNK_SIZE = 10 ** 6; // 1MB
  const start = Number(range.replace(/\D/g, ""));
  const end = Math.min(start + CHUNK_SIZE, videoSize - 1);

  // Create headers
  const contentLength = end - start + 1;
  const headers = {
    "Content-Range": `bytes ${start}-${end}/${videoSize}`,
    "Accept-Ranges": "bytes",
    "Content-Length": contentLength,
    "Content-Type": "video/mp4",
  };

  // HTTP Status 206 for Partial Content
  res.writeHead(206, headers);

  // create video read stream for this particular chunk
  const videoStream = fs.createReadStream(videoPath, { start, end });

  // Stream the video chunk to the client
  videoStream.pipe(res);
});

//route for delete videos
//private route
router.post("/delete-video", validUser, (req, res) => {
  const { videoId } = req.body;

  if (!videoId) {
    return res.status(400).json({ msg: "please provide an id" });
  }
  //check user role and delete from file system
  User.findById(req.user.id)
    .then((user) => {
      if (!user) console.log("couldnt find user");
      if (user.role !== "admin")
        return res.status(401).json("only admins can delete videos");

      Vedios.findById(videoId).then((video) => {
        //check if video has users
        if (video.users.length) {
          video.users.map((user2) => {
            console.log(user2);
            //find by id
            User.findById(user2).then((videoUser) => {
              console.log(videoUser);
              //if user has videos
              if (videoUser.videosId.length) {
                let newVideoId = videoUser.videosId.filter(
                  (newVideo) => newVideo !== videoId
                );
                console.log(newVideoId);
                //updating users videos
                User.findByIdAndUpdate(videoUser, { videosId: newVideoId })
                  .then((moduser) => {
                    console.log(moduser);
                  })
                  .catch((err) => console.log(err));
              }
            });
          });
        }

        //find and delete from server
        fs.unlink(
          path.join(__dirname, `../../../public/videos/${video.link}`),
          (err) => {
            if (err) console.log(err);
            else {
              console.log("deleted video successfully from fs");
            }
          }
        );
        //delete video from db
        Vedios.deleteOne({ _id: video._id })
          .then((video) => {
            console.log(video);
          })
          .catch((err) => console.log(err));
      });
    })
    .catch((err) => console.log(err));
});

module.exports = router;
