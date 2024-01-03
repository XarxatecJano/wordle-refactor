import { ManageKeys } from "./manageKeys/ManageKeys.js";

// Función principal para iniciar el juego
async function startGame(): Promise<void> {
    const manageKeysInstance = new ManageKeys();
    const pickedWord: string = await manageKeysInstance.getRandomWord();
    manageKeysInstance.printPickedWord(pickedWord);
    manageKeysInstance.setupGameWithListeners(pickedWord);
}

// Iniciar el juego
startGame();
