const express = require('express');
const User = require('../../models/users');
const router = express.Router();
const bcrypt = require('bcryptjs');
const xssFilter = require('xss-filters');


router.post('/', (req, res) =>{
    let { name, username, password, role, confirmPas} = req.body;

 if(!name || !username || !password  || !confirmPas ){
     return res.status(400).json({msg: 'please enter all feilds'})
 };

 if(confirmPas !== password){
     return res.status(400).json({msg: 'password does not match'})
 }

 //filter input
     name = xssFilter.inHTMLData(name),
     username = xssFilter.inHTMLData(username),
     password = xssFilter.inHTMLData(password),
     confirmPas = xssFilter.inHTMLData(confirmPas)
console.log(password)


 User.findOne({username})
  .then(user =>{
      if(user){
          return res.status(400).json({msg: 'User already exists'})
      }
  }).catch(err => {if (err) throw err});

 const newUser = new User({name, username, password, role});

 bcrypt.genSalt(15, (salt, err) =>{
   bcrypt.hash(newUser.password, salt, (hash, err) =>{
    if (err) throw err;
    newUser.password = hash;

    //save user
    newUser.save()
     .then(user =>{
         res.json({
             user:{
                 id: user._id,
                 name: user.name,
                 username: user.username,
                 password : user.password,
                 role: user.role
             }
         })
     }).catch( err => {if (err) console.log('register_err:', err)})
   });  
 });

});



module.exports = router;