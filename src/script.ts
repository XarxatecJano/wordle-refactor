import {Word} from "./Word.js";
import {Game} from "./Game.js";
import {solutionWord} from "./solutionWord.js";


// const wordsCollection: Word = new Word(["JUEGO", "TALAR", "BAILE", "ANDAR", "MONTE", "PLAYA", "PLATA", "ARBOL", "QUESO"]);
// const pickedWord: string = wordsCollection.getRandomWord();
// console.log(pickedWord);

async function startGame() {
    const word = new solutionWord();
    const pickedWord = await word.getRandomWordAPI();
    console.log(pickedWord)

    const game = new Game(pickedWord);

    Array.from(document.getElementsByClassName("key")).forEach(element => element.addEventListener("click", (e)=>{
        game.newKeyPressed((<HTMLButtonElement>e.target).value);
    }));

    document.addEventListener("keydown", (e)=>{
        game.newKeyPressed(e.code);
    });

}
startGame();
