import express = require('express');
import path = require('path');

const app:express.Application = express();

app.use(express.static(path.join( __dirname, '..',  'public')));

app.use("/", (req: express.Request, res: express.Response)=>{
    res.sendFile(path.join(__dirname, "..", 'public', 'index.html'));
})

app.listen(3000, ()=>{console.log("Wordle is listening at port 3000...")})