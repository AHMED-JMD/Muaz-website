const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

//multer middleware
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/vedios')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
  const upload = multer({ storage: storage })

  //post rout get vedios from front 
//private route
router.post('/', upload.single('file'),  (req, res, next) =>{
    const { subject, kind, booknum, chapter, subName, price } = req.body;
    const { filename } = req.file;
    console.log(req.file , req.body);
 if (!subject || !kind || !booknum || !chapter || !subName || !price ){
     return res.status(400).json({msg: 'please enter all fields'});
 }
    res.send('welcome to post vedios');
})


module.exports = router;