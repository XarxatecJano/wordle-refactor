var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Game } from "./Game.js";
import { solutionWord } from "./solutionWord.js";
// const wordsCollection: Word = new Word(["JUEGO", "TALAR", "BAILE", "ANDAR", "MONTE", "PLAYA", "PLATA", "ARBOL", "QUESO"]);
// const pickedWord: string = wordsCollection.getRandomWord();
// console.log(pickedWord);
function startGame() {
    return __awaiter(this, void 0, void 0, function* () {
        const word = new solutionWord();
        const pickedWord = yield word.getRandomWordAPI();
        console.log(pickedWord);
        const game = new Game(pickedWord);
        Array.from(document.getElementsByClassName("key")).forEach(element => element.addEventListener("click", (e) => {
            game.newKeyPressed(e.target.value);
        }));
        document.addEventListener("keydown", (e) => {
            game.newKeyPressed(e.code);
        });
    });
}
startGame();
