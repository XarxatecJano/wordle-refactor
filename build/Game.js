var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Game_pickedWord, _Game_actualWord, _Game_turn, _Game_actualPosition, _Game_validLetterCodes, _Game_letterManager, _Game_backgroundManager;
import { MAX_WORD_SIZE, MAX_ATTEMPTS } from "./env.js";
import { BackgroundManager } from "./userInterface/BackgroundManager.js";
import { LetterManager } from "./userInterface/LetterManager.js";
export class Game {
    constructor(pickedWord) {
        _Game_pickedWord.set(this, void 0);
        _Game_actualWord.set(this, void 0);
        _Game_turn.set(this, void 0);
        _Game_actualPosition.set(this, void 0);
        _Game_validLetterCodes.set(this, void 0);
        _Game_letterManager.set(this, void 0);
        _Game_backgroundManager.set(this, void 0);
        this.checkRightLetters = () => {
            for (let i = 0; i < MAX_WORD_SIZE; i++) {
                if (__classPrivateFieldGet(this, _Game_pickedWord, "f")[i] == __classPrivateFieldGet(this, _Game_actualWord, "f")[i]) {
                    __classPrivateFieldGet(this, _Game_backgroundManager, "f").changeCellBackground(__classPrivateFieldGet(this, _Game_turn, "f"), i, "rightLetter");
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
                actualLetter = __classPrivateFieldGet(this, _Game_actualWord, "f")[i];
                pattern = new RegExp(actualLetter, "g");
                numberOfCoincidencesPickedWord = (__classPrivateFieldGet(this, _Game_pickedWord, "f").match(pattern) || []).length;
                numberOfCoincidencesActualWord = (__classPrivateFieldGet(this, _Game_actualWord, "f").match(pattern) || []).length;
                differenceOfCoincidences = Math.abs(numberOfCoincidencesActualWord - numberOfCoincidencesPickedWord);
                if (numberOfCoincidencesPickedWord > 0) {
                    if (__classPrivateFieldGet(this, _Game_pickedWord, "f")[i] === actualLetter) {
                    }
                    else {
                        __classPrivateFieldGet(this, _Game_backgroundManager, "f").changeCellBackground(__classPrivateFieldGet(this, _Game_turn, "f"), i, "misplacedLetter");
                    }
                }
            }
        };
        this.checkWrongLetters = () => {
            let actualLetter = "";
            let pattern;
            let numberOfCoincidencesPickedWord = 0;
            for (let i = 0; i < MAX_WORD_SIZE; i++) {
                actualLetter = __classPrivateFieldGet(this, _Game_actualWord, "f")[i];
                pattern = new RegExp(actualLetter, "g");
                numberOfCoincidencesPickedWord = (__classPrivateFieldGet(this, _Game_pickedWord, "f").match(pattern) || []).length;
                if (numberOfCoincidencesPickedWord == 0)
                    __classPrivateFieldGet(this, _Game_backgroundManager, "f").changeCellBackground(__classPrivateFieldGet(this, _Game_turn, "f"), i, "wrongLetter");
            }
        };
        this.updateAfterANewWord = () => {
            this.checkRightLetters();
            this.checkMisplacedLetters();
            this.checkWrongLetters();
            __classPrivateFieldSet(this, _Game_turn, __classPrivateFieldGet(this, _Game_turn, "f") + 1, "f");
            __classPrivateFieldSet(this, _Game_actualPosition, 0, "f");
            __classPrivateFieldSet(this, _Game_actualWord, "", "f");
        };
        __classPrivateFieldSet(this, _Game_pickedWord, pickedWord, "f");
        __classPrivateFieldSet(this, _Game_actualWord, "", "f");
        __classPrivateFieldSet(this, _Game_turn, 1, "f");
        __classPrivateFieldSet(this, _Game_actualPosition, 0, "f");
        __classPrivateFieldSet(this, _Game_validLetterCodes, ["KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Semicolon"], "f");
        __classPrivateFieldSet(this, _Game_letterManager, new LetterManager(), "f");
        __classPrivateFieldSet(this, _Game_backgroundManager, new BackgroundManager(), "f");
    }
    get pickedWord() {
        return __classPrivateFieldGet(this, _Game_pickedWord, "f");
    }
    set pickedWord(word) {
        __classPrivateFieldSet(this, _Game_pickedWord, word, "f");
    }
    get actualWord() {
        return __classPrivateFieldGet(this, _Game_actualWord, "f");
    }
    set actualWord(word) {
        __classPrivateFieldSet(this, _Game_actualWord, word, "f");
    }
    get turn() {
        return __classPrivateFieldGet(this, _Game_turn, "f");
    }
    set turn(num) {
        __classPrivateFieldSet(this, _Game_turn, num, "f");
    }
    get actualPosition() {
        return __classPrivateFieldGet(this, _Game_actualPosition, "f");
    }
    set actualPosition(num) {
        __classPrivateFieldSet(this, _Game_actualPosition, num, "f");
    }
    /* get validLetterCodes() {
        return this.#validLetterCodes
    }
    set validLetterCodes(letters) {
        this.#validLetterCodes = letters;
    } */
    get letterManager() {
        return __classPrivateFieldGet(this, _Game_letterManager, "f");
    }
    set letterManager(i) {
        __classPrivateFieldSet(this, _Game_letterManager, i, "f");
    }
    get backgroundManager() {
        return __classPrivateFieldGet(this, _Game_backgroundManager, "f");
    }
    set backgroundManager(i) {
        __classPrivateFieldSet(this, _Game_backgroundManager, i, "f");
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
        // this.#userInterface.setNewLetter(this.turn, this.actualPosition, letter);
        __classPrivateFieldGet(this, _Game_letterManager, "f").setNewLetter(this.turn, this.actualPosition, letter);
        __classPrivateFieldSet(this, _Game_actualPosition, __classPrivateFieldGet(this, _Game_actualPosition, "f") + 1, "f");
        __classPrivateFieldSet(this, _Game_actualWord, __classPrivateFieldGet(this, _Game_actualWord, "f") + letter, "f");
        // console.log(letter);
    }
    checkWordIsRight() {
        if (__classPrivateFieldGet(this, _Game_actualWord, "f") == __classPrivateFieldGet(this, _Game_pickedWord, "f")) {
            location.assign("/winner");
        }
    }
    checkGameIsOver() {
        if (this.turn == MAX_ATTEMPTS) {
            location.assign("/loser");
        }
    }
}
_Game_pickedWord = new WeakMap(), _Game_actualWord = new WeakMap(), _Game_turn = new WeakMap(), _Game_actualPosition = new WeakMap(), _Game_validLetterCodes = new WeakMap(), _Game_letterManager = new WeakMap(), _Game_backgroundManager = new WeakMap();
