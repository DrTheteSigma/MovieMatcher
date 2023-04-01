const express = require("express")
const router = express.Router()
const {getGoals, createGoals, putmovie, matcherfind, getAvailable, getRoom} = require('../controller/roomController')


router.get('/', getGoals)
router.post('/create', createGoals)

router.post("/putmovie1", putmovie)


router.post("/available", getAvailable)

router.post("/getroom", getRoom )


router.post("/matches", matcherfind)




module.exports = router