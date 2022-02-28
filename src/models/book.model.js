const { db } = require("../db/admin");

const booksRef = db.collection("Books");

module.exports = booksRef;
