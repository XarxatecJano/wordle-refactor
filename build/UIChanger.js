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
var _UIChanger_letterManager, _UIChanger_backgroundManager;
import { LetterManager } from './LetterManager.js';
import { BackgroundManager } from './BackgroundManager.js';
export class UIChanger {
    constructor() {
        _UIChanger_letterManager.set(this, void 0);
        _UIChanger_backgroundManager.set(this, void 0);
        __classPrivateFieldSet(this, _UIChanger_letterManager, new LetterManager(), "f");
        __classPrivateFieldSet(this, _UIChanger_backgroundManager, new BackgroundManager(), "f");
    }
    setNewLetter(turn, position, letter) {
        __classPrivateFieldGet(this, _UIChanger_letterManager, "f").setNewLetter(turn, position, letter);
    }
    deleteLetter(turn, position) {
        __classPrivateFieldGet(this, _UIChanger_letterManager, "f").deleteLetter(turn, position);
    }
    changeBackgroundPosition(turn, position, state) {
        __classPrivateFieldGet(this, _UIChanger_backgroundManager, "f").changeBackgroundPosition(turn, position, state);
    }
    changeBackgroundKey(code) {
        __classPrivateFieldGet(this, _UIChanger_backgroundManager, "f").changeBackgroundKey(code);
    }
}
_UIChanger_letterManager = new WeakMap(), _UIChanger_backgroundManager = new WeakMap();
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
