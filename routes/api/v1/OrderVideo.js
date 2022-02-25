const express = require('express');
const router = express.Router()
const Vedios = require('../../../models/vedios');
const Users = require('../../../models/users');
const Request = require('../../../models/request');


router.get('/get-request', (req, res) =>{

    Request.find({})
     .then(request =>{
        return res.json(request);
     }).catch(err =>console.log(err))
});

router.post('/', async (req, res) =>{

    try {
        let username = '' ;
        let videoname = '';
        let price = 0;
    
        const {videoId, userId} = req.body;
    
        if(!videoId || !userId){
            return res.status(400).json({msg: 'please provide user id and video id'})
        }
    
        const user = await Users.findById(userId)       
        username = user.username
     
    
         const video = await Vedios.findById(videoId)
            videoname = video.subName;
            price = video.price;
        
    
          console.log(username, videoname, price)
    
        let newRequest = new Request({username, videoname, price, userId: user.id, videoId:video.id})
    
        const request = newRequest.save()
         return res.json(request);
          
    } catch (error) {
        console.log(err)
    }
    



});

//accept request
router.post('/give-access', (req, res) =>{
    const {videoId, userId} = req.body;

    if(!videoId || !userId){
        return res.status(400).json({msg: 'please provide user id and video id'})
    }

   Users.findByIdAndUpdate(userId, {videosId: videoId})
    .then(user =>{
        console.log(user);
        res.json(user);
    }).catch(err => console.log(err)); 

})



module.exports = router;