const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const Vedios = require('../../../models/vedios');
const xssFilter = require('xss-filters');
const fs = require('fs');


//multer middleware
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/vedios')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix + '.mp4' )
    }
  })
  
const upload = multer({ storage: storage });

//public route
//get vedios from db
router.get('/', (req, res) =>{
  let kind = req.header('kind');
  let booknum = req.header('booknum');

  if( !kind || !booknum){
    return res.status(400).json({msg: 'please set headers'})
  }

  Vedios.find({kind, booknum})
   .then(videos =>{
     if(!videos){
       console.log('couldnt fetch from db for some reasons')
     }
     res.json({videos});
   }).catch(err => console.log(err));
})

//post rout get vedios from front 
//private route
router.post('/post-video', upload.single('file'),  (req, res, next) =>{
    let { subject, kind, booknum, chapter, subName, price } = req.body;
    let { filename } = req.file;

//filter input
subject = xssFilter.inHTMLData(subject);
kind = xssFilter.inHTMLData(kind);
booknum = xssFilter.inHTMLData(booknum);
chapter = xssFilter.inHTMLData(chapter);
subName = xssFilter.inHTMLData(subName);
price = xssFilter.inHTMLData(price);


    //check if req.body is complete
 if (!subject || !kind || !booknum || !chapter || !subName || !price || !filename){
     return res.status(400).json({msg: 'please enter all fields'});
 }
 //check if file is replicated
  Vedios.findOne({subName})
   .then(vedio =>{
     if(vedio){
       return res.status(400).json({msg: "file already exists"});
     }
   }).catch(err => console.log(err));

 //add vedio to database
  let newVedio = new Vedios({
     link: filename,
     subject,
     kind,
     booknum,
     chapter,
     subName,
     price 
    });

   newVedio.save()
    .then(vedio =>{
      res.json({vedio});
    }).catch(err => console.log('vedio_err', err)); 
});

//get route for streaming the vedio
//private route
router.get('/stream-vedio', (req, res) =>{

  // Ensure there is a range given for the video
  const range = req.headers.range;
  if (!range) {
    res.status(400).send("Requires Range header");
  }

  // get video stats (about 61MB)
  const videoPath = path.join(__dirname, '../../../public/vedios/file-1645603876742-298826938.mp4');
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


module.exports = router;