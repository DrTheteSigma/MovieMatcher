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

    if(!req.body.text){
        res.status(400)
        throw new Error("Please add the fields")
    }

    const room = await roomsModel.create({
        text: req.body.text
    })
    res.status(200).json({message: room.id})
})


const putmovie1 = asyncHandler( async (req, res) =>{

    //usernum: User1 or User2
    // roomId: Enter userID
    // object: the object

    roomId = req.body.roomId
    
    list = {
        "rank": 33,
        "title": "City of God",
        "thumbnail": "https://m.media-amazon.com/images/M/MV5BOTMwYjc5ZmItYTFjZC00ZGQ3LTlkNTMtMjZiNTZlMWQzNzI5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX45_CR0,0,45,67_AL_.jpg",
        "rating": "8.6",
        "id": "top23",
        "year": 2002,
        "image": "https://m.media-amazon.com/images/M/MV5BOTMwYjc5ZmItYTFjZC00ZGQ3LTlkNTMtMjZiNTZlMWQzNzI5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,2,380,562_.jpg",
        "description": "In the slums of Rio, two kids' paths diverge as one struggles to become a photographer and the other a kingpin.",
        "trailer": "https://www.youtube.com/embed/dcUOO4Itgmw",
        "genre": [
            "Crime",
            "Drama"
        ],
        "director": [
            "Fernando Meirelles",
            "Kátia Lund (co-director)"
        ],
        "writers": [
            "Paulo Lins (novel)",
            "Bráulio Mantovani (screenplay)"
        ],
        "imdbid": "tt0317248"
    }

    const rooms = await roomsModel.findById(roomId);

    
    // Update the user array with a new element
    await rooms.updateOne({ $push: { User1: list } });

    // Fetch the updated document again
    const updatedRooms = await roomsModel.findById(roomId);

    console.log(updatedRooms);

    res.status(200).json(updatedRooms);

  
})

const putmovie2 = asyncHandler( async (req, res) =>{

    //usernum: User1 or User2
    // roomId: Enter userID
    // object: the object

    roomId = req.body.roomId
    
    list = {
        "rank": 33,
        "title": "City of God",
        "thumbnail": "https://m.media-amazon.com/images/M/MV5BOTMwYjc5ZmItYTFjZC00ZGQ3LTlkNTMtMjZiNTZlMWQzNzI5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX45_CR0,0,45,67_AL_.jpg",
        "rating": "8.6",
        "id": "top23",
        "year": 2002,
        "image": "https://m.media-amazon.com/images/M/MV5BOTMwYjc5ZmItYTFjZC00ZGQ3LTlkNTMtMjZiNTZlMWQzNzI5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,2,380,562_.jpg",
        "description": "In the slums of Rio, two kids' paths diverge as one struggles to become a photographer and the other a kingpin.",
        "trailer": "https://www.youtube.com/embed/dcUOO4Itgmw",
        "genre": [
            "Crime",
            "Drama"
        ],
        "director": [
            "Fernando Meirelles",
            "Kátia Lund (co-director)"
        ],
        "writers": [
            "Paulo Lins (novel)",
            "Bráulio Mantovani (screenplay)"
        ],
        "imdbid": "tt0317248"
    }

    const rooms = await roomsModel.findById(roomId);

    
    // Update the user array with a new element
    await rooms.updateOne({ $push:  {User2: list} });

    // Fetch the updated document again
    const updatedRooms = await roomsModel.findById(roomId);

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

    const room = await roomsModel.findById(roomId);

    if(rooms){
        res.status(200).json({Available: true})
    }else{
        res.status(200).json({Available: false})
    }

})



module.exports = {
    getGoals,
    createGoals,
    putmovie1,
    putmovie2,
    matcherfind,
    getAvailable
}