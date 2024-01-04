var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ManageKeys } from "./manageKeys/ManageKeys.js";
import { getRandomWord } from "./manageWords/getRandomWord.js";
import { printPickedWord } from "./manageWords/printPickedWord.js";
import { Game } from "./Game.js";
function startGame() {
    return __awaiter(this, void 0, void 0, function* () {
        const gameInstance = new Game('');
        const manageKeysInstance = new ManageKeys(gameInstance);
        const pickedWord = yield getRandomWord();
        printPickedWord(pickedWord);
        manageKeysInstance.setupGameWithListeners(pickedWord);
    });
}
startGame();
