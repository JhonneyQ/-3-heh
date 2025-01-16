const express = require('express')
const { getAllData, getAllDataById, deleteData, postData, editData } = require('../controller/controller')
const router = express()

router.get("/",getAllData)
router.get("/:id",getAllDataById)
router.delete("/:id",deleteData)
router.post("/",postData)
router.put("/:id",editData)

module.exports = router