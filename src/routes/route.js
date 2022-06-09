const express = require('express');
const router = express.Router();
const AuthorModel= require("../models/authorModel.js")
const AuthorController= require("../controllers/authorController.js")
const BookModel= require("../models/bookmodel.js")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthors", AuthorController.createAuthors  )

router.get("/getAuthorsData", AuthorController.getAuthorsData)

router.post("/createBook", BookController.createBook  )

router.get("/getBooksData", BookController.getBooksData)

module.exports = router;