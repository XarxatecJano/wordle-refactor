import { Word } from "./Word.js";
import { WordleGame } from "./WordleGame.js";
const wordsCollection = new Word(["JUEGO", "TALAR", "BAILE", "ANDAR", "MONTE", "PLAYA", "PLATA", "ARBOL", "QUESO"]);
const pickedWord = wordsCollection.getRandomWord();
console.log(pickedWord);
const game = new WordleGame(pickedWord);
Array.from(document.getElementsByClassName("key")).forEach(element => element.addEventListener("click", (e) => {
    game.newKeyPressed(e.target.value);
}));
document.addEventListener("keydown", (e) => {
    game.newKeyPressed(e.code);
});
