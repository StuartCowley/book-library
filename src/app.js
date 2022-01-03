// src/app.js
const express = require("express");
const readerRouter = require("./routes/reader");
const bookRouter = require("./routes/book");

const app = express();

app.use(express.json());

app.use(readerRouter, bookRouter);

module.exports = app;
