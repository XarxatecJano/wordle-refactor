export class UIChanger {
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
}

// ============  SUGERENCIA DE CÓDIGO  ==================

// NUEVO ARCHIVO: LetterManager.ts
/* export class LetterManager {
    setNewLetter(turn: number, position: number, letter: string) {
        const rowElement = document.getElementById(`row_${turn}`);
        if (rowElement) {
            const cellElement = rowElement.children[position];
            if (cellElement) {
                cellElement.textContent = letter;
            }
        }
    }

    deleteLetter(turn: number, position: number) {
        const rowElement = document.getElementById(`row_${turn}`);
        if (rowElement) {
            const cellElement = rowElement.children[position];
            if (cellElement) {
                cellElement.textContent = "";
            }
        }
    }
} */

// NUEVO ARCHIVO: BackgroundManager.ts
/* export class BackgroundManager {
    changeBackgroundPosition(turn: number, position: number, state: string) {
        const positionClass =
            state === "rightLetter"
                ? "cell-green"
                : state === "misplacedLetter"
                ? "cell-orange"
                : "cell-grey";

        const rowElement = document.getElementById(`row_${turn}`);
        if (rowElement) {
            const cellElement = rowElement.children[position];
            if (cellElement) {
                cellElement.classList.add(positionClass);
            }
        }
    }

    changeBackgroundKey(code: string) {
        if (code !== "Enter" && code !== "Backspace") {
            const keys = document.getElementsByClassName("key");
            for (const key of keys) {
                if (key instanceof HTMLElement && key.dataset.code === code) {
                    key.classList.add("keyPressed");
                }
            }
        }
    }
} */

// MODIFICACIONES EN: IUChanger.ts

/* import { LetterManager } from './LetterManager';
import { BackgroundManager } from './BackgroundManager';

export class UIChanger {
    private letterManager: LetterManager;
    private backgroundManager: BackgroundManager;

    constructor() {
        this.letterManager = new LetterManager();
        this.backgroundManager = new BackgroundManager();
    }

    // Métodos que delegan a las clases correspondientes
    setNewLetter(turn: number, position: number, letter: string) {
        this.letterManager.setNewLetter(turn, position, letter);
    }

    deleteLetter(turn: number, position: number) {
        this.letterManager.deleteLetter(turn, position);
    }

    changeBackgroundPosition(turn: number, position: number, state: string) {
        this.backgroundManager.changeBackgroundPosition(turn, position, state);
    }

    changeBackgroundKey(code: string) {
        this.backgroundManager.changeBackgroundKey(code);
    }
} */