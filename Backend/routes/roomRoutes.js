const express = require("express")
const router = express.Router()
const {getGoals, createGoals, putmovie1, putmovie2, matcherfind} = require('../controller/roomController')


router.get('/', getGoals)
router.post('/create', createGoals)

router.put("/putmovie1", putmovie1)
router.put("/putmovie2", putmovie2)

router.get("/available")

router.get("/matches", matcherfind)




module.exports = router