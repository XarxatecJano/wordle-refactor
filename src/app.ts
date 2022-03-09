import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';

const app:express.Application = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join( __dirname)));

app.use("/", (req: express.Request, res: express.Response)=>{
    res.sendFile(path.join(__dirname,'..','public', 'index.html'));
})

app.use("/winner", (req: express.Request, res: express.Response)=>{
    res.sendFile(path.join(__dirname,'..','public', 'winner.html'));
})

app.use("/loser", (req: express.Request, res: express.Response)=>{
    console.log(path.join(__dirname,'..','public', 'loser.html'));
    res.sendFile(path.join(__dirname,'..','public', 'loser.html'));
})

app.listen(3000, ()=>{console.log("Wordle is listening at port 3000...")})