import { ManageKeys } from "./manageKeys/ManageKeys.js";
import { getRandomWord } from "./manageWords/getRandomWord.js";
import { printPickedWord } from "./manageWords/printPickedWord.js";

async function startGame(): Promise<void> {
    const manageKeysInstance = new ManageKeys();
    const pickedWord: string = await getRandomWord();
    printPickedWord(pickedWord);
    manageKeysInstance.setupGameWithListeners(pickedWord);
}

startGame();
