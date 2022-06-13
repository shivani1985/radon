const express = require('express');
const router = express.router();
const ordercontroller =require("../controllers/ordercontroller")
const productcontroller =require("../controllers/productcontroller")
const userinformationcontroller =require("../controllers/informationcontroller")
const commonMiddleware=reqiure("../middlewares/commonmiddlewares")


router.get("/test-me",function(req,res) {
    res.send("my first ever api")
})

router.post("/createuserinformation",userinformationcontroller.createuserinformation)

router.post("/createproduct",productcontroller.createproduct)

router.post("/createorder,ordercontroller.createorder")


