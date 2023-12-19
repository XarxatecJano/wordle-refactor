import { Game } from "./Game.js";
import { MAX_WORD_SIZE, MAX_ATTEMPTS } from "./env.js";
export class WordleGame extends Game {
    constructor() {
        super(...arguments);
        this.checkRightLetters = () => {
            for (let i = 0; i < MAX_WORD_SIZE; i++) {
                if (this.pickedWord[i] == this.actualWord[i]) {
                    this.interface.changeBackgroundPosition(this.turn, i, "rightLetter");
                }
            }
        };
        this.checkMisplacedLetters = () => {
            let actualLetter = "";
            let pattern;
            let numberOfCoincidencesPickedWord = 0;
            let numberOfCoincidencesActualWord = 0;
            let differenceOfCoincidences = 0;
            let isMisplacedLetter = true;
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
                if (numberOfCoincidencesPickedWord > 0 && isMisplacedLetter)
                    this.interface.changeBackgroundPosition(this.turn, i, "misplacedLetter");
            }
        };
        this.checkWrongLetters = () => {
            let actualLetter = "";
            let pattern;
            let numberOfCoincidencesPickedWord = 0;
            for (let i = 0; i < MAX_WORD_SIZE; i++) {
                actualLetter = this.actualWord[i];
                pattern = new RegExp(actualLetter, "g");
                numberOfCoincidencesPickedWord = (this.pickedWord.match(pattern) || []).length;
                if (numberOfCoincidencesPickedWord == 0)
                    this.interface.changeBackgroundPosition(this.turn, i, "wrongLetter");
            }
        };
        this.updateAfterANewWord = () => {
            this.checkRightLetters();
            this.checkMisplacedLetters();
            this.checkWrongLetters();
            this.turn = this.turn + 1;
            this.actualPosition = 0;
            this.actualWord = "";
        };
    }
    isValidLetter(code) {
        return this.validLetterCodes.includes(code) && this.actualPosition < MAX_WORD_SIZE;
    }
    isEnterKey(code) {
        return code == "Enter";
    }
    isBackspaceKey(code) {
        return code == "Backspace";
    }
    transformCodeToLetter(code) {
        let letter = "";
        if (code == "Semicolon")
            letter = "Ñ";
        else
            letter = code.split("y")[1];
        return letter;
    }
    newLetter(code) {
        let letter = this.transformCodeToLetter(code);
        this.interface.setNewLetter(this.turn, this.actualPosition, letter);
        this.actualPosition = this.actualPosition + 1;
        this.actualWord += letter;
    }
    checkWordIsRight() {
        if (this.actualWord == this.pickedWord) {
            location.assign("/winner");
        }
    }
    checkGameIsOver() {
        if (this.turn == MAX_ATTEMPTS && this.actualWord != this.pickedWord) {
            location.assign("/loser");
        }
    }
    enterPressed() {
        if (this.actualWord.length == MAX_WORD_SIZE) {
            this.checkWordIsRight();
            this.checkGameIsOver();
            this.updateAfterANewWord();
        }
    }
    backspacePressed() {
        if (this.actualPosition > 0) {
            this.actualPosition -= 1;
            this.actualWord = this.actualWord.slice(0, this.actualWord.length - 1);
            this.interface.deleteLetter(this.turn, this.actualPosition);
        }
    }
    newKeyPressed(code) {
        if (this.isValidLetter(code))
            this.newLetter(code);
        if (this.isEnterKey(code))
            this.enterPressed();
        if (this.isBackspaceKey(code))
            this.backspacePressed();
        this.interface.changeBackgroundKey(code);
    }
}
