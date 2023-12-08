import { LetterManager } from './userInterface/LetterManager.js';
import { BackgroundManager } from './userInterface/BackgroundManager.js';
export class UIChanger {
    #letterManager: LetterManager;
    #backgroundManager: BackgroundManager;

    constructor() {
        this.#letterManager = new LetterManager();
        this.#backgroundManager = new BackgroundManager();
    }

    setNewLetter(turn: number, position: number, letter: string) {
        this.#letterManager.setNewLetter(turn, position, letter);
    }

    deleteLetter(turn: number, position: number) {
        this.#letterManager.deleteLetter(turn, position);
    }

    changeBackgroundPosition(turn: number, position: number, state: string) {
        this.#backgroundManager.changeCellBackground(turn, position, state);
    }

    changeBackgroundKey(code: string) {
        this.#backgroundManager.changeKeyBackground(code);
    }
}

//  ===========  Código antiguo ============

/* export class UIChanger {
    setNewLetter(turn: number,position: number, letter: string) {
        Array.from(document.getElementById(`row_${turn}`)!.children)[position].textContent = letter;
    }
    deleteLetter(turn: number, position: number) {
        Array.from(document.getElementById(`row_${turn}`)!.children)[position].textContent = "";
    }
    changeBackgroundPosition(turn: number, position: number, state: string){
        let positionClass = "cell-grey";
        if (state=="rightLetter") positionClass = "cell-green";
        if (state=="misplacedLetter") positionClass = "cell-orange";
        Array.from(document.getElementById(`row_${turn}`)!.children)[position].classList.add(positionClass);
    }
    changeBackgroundKey(code: string){
        const keys: any = document.getElementsByClassName("key");
        for (let key of keys) {
            if (key.value == code && code !== "Enter" && code !=="Backspace"){
                key.classList.add("keyPressed");
            }
        }
    }
} */
