import { ILetterManagerInterface } from "./ILettersManager.js";
import {MAX_WORD_SIZE, MAX_ATTEMPTS} from "../env.js";

export class LetterManager  implements ILetterManagerInterface{
    #turn: number;
    #position: number;
    #letter: string;
    #code: string;
    #validLetterCodes: string[];
    #actualPosition: number;
    
    constructor() { 
        this.#turn = 0;
        this.#position = 0;
        this.#letter = "";
        this.#code = "";
        this.#validLetterCodes = ["KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Semicolon"];
        this.#actualPosition = 0;
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
    set letter(newLetter: string) {
        this.#letter = newLetter;
    }
    get code(): string {
        return this.#code;
    }
    set code(newCode: string) {
        this.#code = newCode;
    }
    get validLetterCodes() {
        return this.#validLetterCodes;
    }
    set validLetterCodes(letters) {
        this.#validLetterCodes = letters;
    }
    get actualPosition(){
        return this.#actualPosition;
    }
    set actualPosition(num){
        this.#actualPosition = num;
    }

    setNewLetter(turn: number, position: number, letter: string): void {
        Array.from(document.getElementById(`row_${turn}`)!.children)[position].textContent = letter;
    }

    deleteLetter(turn: number, position: number): void {
        Array.from(document.getElementById(`row_${turn}`)!.children)[position].textContent = "";
    }

    isValidLetter(code: string):boolean {
        return  this.#validLetterCodes.includes(code) && this.#actualPosition < MAX_WORD_SIZE; 
    }
}
