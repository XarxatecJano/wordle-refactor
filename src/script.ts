import { ManageKeys } from "./manageKeys/ManageKeys.js";
import { getRandomWord } from "./manageWords/getRandomWord.js";
import { printPickedWord } from "./manageWords/printPickedWord.js";
import { Game } from "./Game.js";

async function startGame(): Promise<void> {
    const gameInstance = new Game ('');
    const manageKeysInstance = new ManageKeys(gameInstance);
    const pickedWord: string = await getRandomWord();
    printPickedWord(pickedWord);
    manageKeysInstance.setupGameWithListeners(pickedWord);
}

startGame();
