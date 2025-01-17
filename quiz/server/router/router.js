const express = require('express')
const { getAllData, getAllDataById, deleteDataById, postData, editDataById } = require('../controller/controller')
const router = express.Router()


router.get("/",getAllData)
router.get("/:id",getAllDataById)
router.delete("/:id",deleteDataById)
router.post("/",postData)
router.put("/:id",editDataById)

module.exports = router


