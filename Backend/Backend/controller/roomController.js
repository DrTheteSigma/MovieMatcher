const roomsModel = require("../models/roomsModel")
const axios = require("axios");


function findMutualObjects(array1, array2) {
    const mutualObjects = [];
  
    array1.forEach(obj1 => {
      const matchingObj = array2.find(obj2 => obj1.id === obj2.id);
      if (matchingObj) {
        mutualObjects.push({...obj1, ...matchingObj});
      }
    });
  
    return mutualObjects;
  }


const asyncHandler = require("express-async-handler");


const getGoals =  asyncHandler( async (req,res) =>{
    const rooms = await roomsModel.find()
    res.status(200).json(rooms)
})

const createGoals = asyncHandler( async (req,res) =>{

   // if(!req.body.text){
     //   res.status(400)
       // throw new Error("Please add the fields")
   // }

    const room = await roomsModel.create({
        //text: req.body.text
    })
    res.status(200).json({message: room.id})
})


const putmovie = asyncHandler( async (req, res) =>{

   
    playnum = req.body.playerNum
    roomId = req.body.roomId
    index = req.body.themovie
    

    const rooms = await roomsModel.findById(roomId);

    list = rooms["IMDB"];
    list = list[index]
    
    // Update the user array with a new element
    if(playnum=1){
        await rooms.updateOne({ $push: { User1: list } });
    }
    if(playnum=2){
        await rooms.updateOne({ $push: { User2: list } });
    }


    // Fetch the updated document again
    const updatedRooms = await roomsModel.findById(roomId);

    console.log(roomId)
    console.log(updatedRooms);

    

    res.status(200).json(updatedRooms);

  
})



const matcherfind = asyncHandler( async (req, res) =>{

    console.log("working")

    roomId = req.body.roomId
    

    const rooms = await roomsModel.findById(roomId);
    

    user1 = rooms.User1
    user2 = rooms.User2

    matches = findMutualObjects(user1, user2)

    console.log(matches)

    

})

const getAvailable = asyncHandler (async(req, res) =>{

    roomId = req.body.roomId

    const room = await roomsModel.findById(roomId);

    if(room){
        res.status(200).json({Available: true})
    }else{
        res.status(200).json({Available: false})
    }

})

const getRoom = asyncHandler (async (req,res) =>{
    roomId = req.body.roomId
    const room = await roomsModel.findById(roomId);
    res.status(200).json(room)




})



module.exports = {
    getGoals,
    createGoals,
    putmovie,
    matcherfind,
    getAvailable,
    getRoom
}