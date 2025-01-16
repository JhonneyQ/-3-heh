const express = require("express");
const { getAllData, getAllDataById, deleteById, postData, editDataById } = require("../controller/controller");
const router = express.Router()

router.get("/",getAllData)
router.get("/:id",getAllDataById)
router.delete("/:id",deleteById)
router.post("/",postData)
router.put("/:id",editDataById)

module.exports = router