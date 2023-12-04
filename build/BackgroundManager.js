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
var _BackgroundManager_state, _BackgroundManager_position;
export class BackgroundManager {
    constructor() {
        _BackgroundManager_state.set(this, void 0);
        _BackgroundManager_position.set(this, void 0);
        __classPrivateFieldSet(this, _BackgroundManager_position, 0, "f");
        __classPrivateFieldSet(this, _BackgroundManager_state, "", "f");
    }
    get position() {
        return __classPrivateFieldGet(this, _BackgroundManager_position, "f");
    }
    set position(newPosition) {
        __classPrivateFieldSet(this, _BackgroundManager_position, newPosition, "f");
    }
    get state() {
        return __classPrivateFieldGet(this, _BackgroundManager_state, "f");
    }
    set state(newState) {
        __classPrivateFieldSet(this, _BackgroundManager_state, newState, "f");
    }
    changeBackgroundPosition(turn, position, state) {
        let positionClass = "cell-grey";
        if (state == "rightLetter")
            positionClass = "cell-green";
        if (state == "misplacedLetter")
            positionClass = "cell-orange";
        Array.from(document.getElementById(`row_${turn}`).children)[position].classList.add(positionClass);
    }
    changeBackgroundKey(code) {
        const keys = document.getElementsByClassName("key");
        for (let key of keys) {
            if (key.value == code && code !== "Enter" && code !== "Backspace") {
                key.classList.add("keyPressed");
            }
        }
    }
}
_BackgroundManager_state = new WeakMap(), _BackgroundManager_position = new WeakMap();
