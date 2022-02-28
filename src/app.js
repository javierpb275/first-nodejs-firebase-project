const express = require("express");
const cors = require("cors");
const bookRouter = require("./routers/book.router");

const app = express();

//settings
app.set("port", process.env.PORT || 3000);

//middlewares
app.use(cors());
app.use(express.json());

//routes
app.use("/api/books", bookRouter);

module.exports = app;
