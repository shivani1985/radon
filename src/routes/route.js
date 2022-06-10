const express = require('express');
const router = express.Router();
const publishercontroller =require("../controller/publishercontroller")
const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor  )
router.post("/", publisherController.createpublisher  )

router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createBook", bookController.publisher  )

router.get("/getBooksData", bookController.getBooksData)

router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

module.exports = router;