"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use("/", (req, res) => {
    res.sendFile(path.join(__dirname, "..", 'public', 'index.html'));
});
app.listen(3000, () => { console.log("Wordle is listening at port 3000..."); });
