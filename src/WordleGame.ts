import { Game } from "./Game.js";
import { MAX_WORD_SIZE, MAX_ATTEMPTS } from "./env.js";

export class WordleGame extends Game {
    
    isValidLetter(code: string): boolean {

        return this.validLetterCodes.includes(code) && this.actualPosition < MAX_WORD_SIZE;
    }

    isEnterKey(code: string): boolean {
        return code == "Enter";
    }

    isBackspaceKey(code: string): boolean {
        return code == "Backspace";
    }

    transformCodeToLetter(code: string): string {
        let letter: string = "";
        if (code == "Semicolon") letter = "Ñ";
        else letter = code.split("y")[1];
        return letter;
    }

    newLetter(code: string): void {
        let letter: string = this.transformCodeToLetter(code);
        this.interface.setNewLetter(this.turn, this.actualPosition, letter);
        this.actualPosition = this.actualPosition + 1;
        this.actualWord += letter;
    }

    checkWordIsRight(): void {
        if (this.actualWord == this.pickedWord) {
            location.assign("/winner");
        }
    }

    checkRightLetters = (): void => {
        for (let i = 0; i < MAX_WORD_SIZE; i++) {
            if (this.pickedWord[i] == this.actualWord[i]) {
                this.interface.changeBackgroundPosition(this.turn, i, "rightLetter");
            }
        }
    }

    checkMisplacedLetters = (): void => {
        let actualLetter: string = "";
        let pattern: RegExp;
        let numberOfCoincidencesPickedWord: number = 0;
        let numberOfCoincidencesActualWord: number = 0;
        let differenceOfCoincidences: number = 0;
        let isMisplacedLetter: boolean = true;
        for (let i = 0; i < MAX_WORD_SIZE; i++) {
            isMisplacedLetter = true;
            actualLetter = this.actualWord[i];
            pattern = new RegExp(actualLetter, "g");
            numberOfCoincidencesPickedWord = (this.pickedWord.match(pattern) || []).length;
            numberOfCoincidencesActualWord = (this.actualWord.match(pattern) || []).length;
            differenceOfCoincidences = Math.abs(numberOfCoincidencesActualWord - numberOfCoincidencesPickedWord);
            if (differenceOfCoincidences == 1) {
                for (let j = 0; j < MAX_WORD_SIZE; j++) {
                    if (this.pickedWord[j] == actualLetter) {
                        isMisplacedLetter = false;
                        break;
                    }
                }
            }
            if (differenceOfCoincidences == 0 && this.pickedWord[i] == this.actualWord[i]) {
                isMisplacedLetter = false;
            }
            if (numberOfCoincidencesPickedWord > 0 && isMisplacedLetter) this.interface.changeBackgroundPosition(this.turn, i, "misplacedLetter");

        }
    }

    checkWrongLetters = (): void => {
        let actualLetter = "";
        let pattern: RegExp;
        let numberOfCoincidencesPickedWord = 0;
        for (let i = 0; i < MAX_WORD_SIZE; i++) {
            actualLetter = this.actualWord[i];
            pattern = new RegExp(actualLetter, "g");
            numberOfCoincidencesPickedWord = (this.pickedWord.match(pattern) || []).length;
            if (numberOfCoincidencesPickedWord == 0) this.interface.changeBackgroundPosition(this.turn, i, "wrongLetter");
        }
    }

    updateAfterANewWord = (): void => {
        this.checkRightLetters();
        this.checkMisplacedLetters();
        this.checkWrongLetters();
        this.turn = this.turn + 1;
        this.actualPosition = 0;
        this.actualWord = "";
    }

    checkGameIsOver(): void {
        if (this.turn == MAX_ATTEMPTS && this.actualWord != this.pickedWord) {
            location.assign("/loser");
        }
    }

    enterPressed(): void {
        if (this.actualWord.length == MAX_WORD_SIZE) {
            this.checkWordIsRight();
            this.checkGameIsOver();
            this.updateAfterANewWord();
        }
    }

    backspacePressed(): void {
        if (this.actualPosition > 0) {
            this.actualPosition -= 1;
            this.actualWord = this.actualWord.slice(0, this.actualWord.length - 1);
            this.interface.deleteLetter(this.turn, this.actualPosition);
        }
    }

    newKeyPressed(code: string): void {
        if (this.isValidLetter(code)) this.newLetter(code);
        if (this.isEnterKey(code)) this.enterPressed();
        if (this.isBackspaceKey(code)) this.backspacePressed();
        this.interface.changeBackgroundKey(code);
    }
}