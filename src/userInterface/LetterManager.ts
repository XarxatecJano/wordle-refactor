import { ILetterManagerInterface } from "./ILettersManager.js";

export class LetterManager  implements ILetterManagerInterface{
    #turn: number;
    #position: number;
    #letter: string;
    
    constructor() { 
        this.#turn = 0;
        this.#position = 0;
        this.#letter = "";
    }

    get position(): number {
        return this.#position;
    }
    set position(newPosition: number) {
        this.#position = newPosition;
    }
    get turn(): number {
        return this.#turn;
    }
    set turn(newTurn: number) {
        this.#turn = newTurn;
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
