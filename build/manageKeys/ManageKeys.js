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
var _ManageKeys_word, _ManageKeys_game;
import { Game } from "../Game.js";
export class ManageKeys {
    constructor() {
        _ManageKeys_word.set(this, void 0);
        _ManageKeys_game.set(this, void 0);
        __classPrivateFieldSet(this, _ManageKeys_word, "", "f");
        __classPrivateFieldSet(this, _ManageKeys_game, new Game(""), "f");
    }
    get word() {
        return __classPrivateFieldGet(this, _ManageKeys_word, "f");
    }
    set word(newWord) {
        __classPrivateFieldSet(this, _ManageKeys_word, newWord, "f");
    }
    get game() {
        return __classPrivateFieldGet(this, _ManageKeys_game, "f");
    }
    set game(newGame) {
        __classPrivateFieldSet(this, _ManageKeys_game, newGame, "f");
    }
    setupClickListeners(game) {
        const keys = document.getElementsByClassName("key");
        Array.from(keys).forEach(element => {
            element.addEventListener("click", (e) => {
                this.handleKeyClick(game, e);
            });
        });
    }
    setupKeyDownListener(game) {
        document.addEventListener("keydown", (e) => {
            this.handleKeyDown(game, e);
        });
    }
    setupGameWithListeners(word) {
        const gameInstance = new Game(word);
        this.setupClickListeners(gameInstance);
        this.setupKeyDownListener(gameInstance);
    }
    handleKeyClick(game, e) {
        const target = e.target;
        if (target) {
            game.newKeyPressed(target.value);
        }
    }
    handleKeyDown(game, e) {
        game.newKeyPressed(e.code);
    }
}
_ManageKeys_word = new WeakMap(), _ManageKeys_game = new WeakMap();
