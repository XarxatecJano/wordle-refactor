import { ILetterManagerInterface } from "./ILettersManager.js";

export class LetterManager  implements ILetterManagerInterface{
    #letter: string;
    
    constructor() {
        this.#letter = "";
    }

    get letter(): string {
        return this.#letter;
    }

    setNewLetter(turn: number, position: number, letter: string): void {
        Array.from(document.getElementById(`row_${turn}`)!.children)[position].textContent = letter;
    }

    deleteLetter(turn: number, position: number): void {
        Array.from(document.getElementById(`row_${turn}`)!.children)[position].textContent = "";
    }
}
