const express = require("express");
const router = new express.Router();
const bookController = require("../controllers/book.controller");

router.get("/", bookController.getBooks);

module.exports = router;
