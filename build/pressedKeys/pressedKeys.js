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
var _PressedKeys_code, _PressedKeys_game;
import { MAX_WORD_SIZE } from "../env.js";
export class PressedKeys {
    constructor(gameInstance) {
        _PressedKeys_code.set(this, void 0);
        _PressedKeys_game.set(this, void 0);
        __classPrivateFieldSet(this, _PressedKeys_code, "", "f");
        __classPrivateFieldSet(this, _PressedKeys_game, gameInstance, "f");
    }
    get code() {
        return __classPrivateFieldGet(this, _PressedKeys_code, "f");
    }
    set code(newCode) {
        __classPrivateFieldSet(this, _PressedKeys_code, newCode, "f");
    }
    get game() {
        return __classPrivateFieldGet(this, _PressedKeys_game, "f");
    }
    set game(newGame) {
        __classPrivateFieldSet(this, _PressedKeys_game, newGame, "f");
    }
    enterPressed() {
        if (this.game.actualWord.length == MAX_WORD_SIZE) {
            this.game.checkWordIsRight();
            this.game.checkGameIsOver();
            this.game.updateAfterANewWord();
        }
    }
    backspacePressed() {
        if (this.game.actualPosition > 0) {
            this.game.actualPosition -= 1;
            this.game.letterManager.deleteLetter(this.game.turn, this.game.actualPosition);
            this.game.actualWord = this.game.actualWord.slice(0, -1);
        }
    }
    newKeyPressed(code) {
        if (this.game.actualPosition < MAX_WORD_SIZE) {
            if (this.game.isValidLetter(code))
                this.game.newLetter(code);
        }
        if (this.isEnterKey(code))
            this.enterPressed();
        if (this.isBackspaceKey(code))
            this.backspacePressed();
        this.game.backgroundManager.changeKeyBackground(code);
        console.log(this.game.actualWord);
    }
    isEnterKey(code) {
        return code == "Enter";
    }
    isBackspaceKey(code) {
        return code == "Backspace";
    }
}
_PressedKeys_code = new WeakMap(), _PressedKeys_game = new WeakMap();
