const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const commonMid=require("../middleware/auth")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId",commonMid.mid,commonMid.authorisation, userController.getUserData)

router.put("/users/:userId",commonMid.mid,commonMid.authorisation, userController.updateUser)
router.delete("/users/:userId",commonMid.mid,commonMid.authorisation,userController.deleteUser)
router.post("/users/:userId/posts",commonMid.mid,commonMid.authorisation,userController.postMessage)
module.exports = router;