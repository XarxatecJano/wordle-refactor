import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
var app = express();
var __filename = fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname)));
app.use("/", function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.listen(3000, function () { console.log("Wordle is listening at port 3000..."); });
