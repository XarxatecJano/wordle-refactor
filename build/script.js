import { Word } from "./Word.js";
import { Game } from "./Game.js";
var wordsCollection = new Word(["JUEGO", "TALAR", "BAILE", "ANDAR", "MONTE", "PLAYA", "PLATA", "ARBOL", "QUESO"]);
var pickedWord = wordsCollection.getRandomWord();
console.log(pickedWord);
var game = new Game(pickedWord);
Array.from(document.getElementsByClassName("key")).forEach(function (element) { return element.addEventListener("click", function (e) {
    game.newKeyPressed(e.target.value);
}); });
document.addEventListener("keydown", function (e) {
    game.newKeyPressed(e.code);
});
