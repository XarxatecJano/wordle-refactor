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
var _LetterManager_turn, _LetterManager_position, _LetterManager_letter;
export class LetterManager {
    constructor() {
        _LetterManager_turn.set(this, void 0);
        _LetterManager_position.set(this, void 0);
        _LetterManager_letter.set(this, void 0);
        __classPrivateFieldSet(this, _LetterManager_turn, 0, "f");
        __classPrivateFieldSet(this, _LetterManager_position, 0, "f");
        __classPrivateFieldSet(this, _LetterManager_letter, "", "f");
    }
    get position() {
        return __classPrivateFieldGet(this, _LetterManager_position, "f");
    }
    set position(newPosition) {
        __classPrivateFieldSet(this, _LetterManager_position, newPosition, "f");
    }
    get turn() {
        return __classPrivateFieldGet(this, _LetterManager_turn, "f");
    }
    set turn(newTurn) {
        __classPrivateFieldSet(this, _LetterManager_turn, newTurn, "f");
    }
    get letter() {
        return __classPrivateFieldGet(this, _LetterManager_letter, "f");
    }
    setNewLetter(turn, position, letter) {
        Array.from(document.getElementById(`row_${turn}`).children)[position].textContent = letter;
    }
    deleteLetter(turn, position) {
        Array.from(document.getElementById(`row_${turn}`).children)[position].textContent = "";
    }
}
_LetterManager_turn = new WeakMap(), _LetterManager_position = new WeakMap(), _LetterManager_letter = new WeakMap();
