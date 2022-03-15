import { MAX_WORD_SIZE, MAX_ATTEMPTS } from "./env.js";
import { Interface } from "./Interface.js";
var Game = /** @class */ (function () {
    function Game(pickedWord) {
        var _this = this;
        this.checkRightLetters = function () {
            for (var i = 0; i < MAX_WORD_SIZE; i++) {
                if (_this._pickedWord[i] == _this._actualWord[i]) {
                    _this._interface.changeBackgroundPosition(_this._turn, i, "rightLetter");
                }
            }
        };
        this.checkMisplacedLetters = function () {
            var actualLetter = "";
            var pattern;
            var numberOfCoincidencesPickedWord = 0;
            var numberOfCoincidencesActualWord = 0;
            var differenceOfCoincidences = 0;
            var isMisplacedLetter = true;
            for (var i = 0; i < MAX_WORD_SIZE; i++) {
                isMisplacedLetter = true;
                actualLetter = _this._actualWord[i];
                pattern = new RegExp(actualLetter, "g");
                numberOfCoincidencesPickedWord = (_this._pickedWord.match(pattern) || []).length;
                numberOfCoincidencesActualWord = (_this._actualWord.match(pattern) || []).length;
                differenceOfCoincidences = Math.abs(numberOfCoincidencesActualWord - numberOfCoincidencesPickedWord);
                if (differenceOfCoincidences == 1) {
                    for (var j = 0; j < MAX_WORD_SIZE; j++) {
                        if (_this._pickedWord[j] == actualLetter) {
                            isMisplacedLetter = false;
                            break;
                        }
                    }
                }
                if (differenceOfCoincidences == 0 && _this._pickedWord[i] == _this._actualWord[i]) {
                    isMisplacedLetter = false;
                }
                if (numberOfCoincidencesPickedWord > 0 && isMisplacedLetter)
                    _this._interface.changeBackgroundPosition(_this._turn, i, "misplacedLetter");
            }
        };
        this.checkWrongLetters = function () {
            var actualLetter = "";
            var pattern;
            var numberOfCoincidencesPickedWord = 0;
            for (var i = 0; i < MAX_WORD_SIZE; i++) {
                actualLetter = _this._actualWord[i];
                pattern = new RegExp(actualLetter, "g");
                numberOfCoincidencesPickedWord = (_this._pickedWord.match(pattern) || []).length;
                if (numberOfCoincidencesPickedWord == 0)
                    _this._interface.changeBackgroundPosition(_this._turn, i, "wrongLetter");
            }
        };
        this.updateAfterANewWord = function () {
            _this.checkRightLetters();
            _this.checkMisplacedLetters();
            _this.checkWrongLetters();
            _this._turn = _this._turn + 1;
            _this._actualPosition = 0;
            _this._actualWord = "";
        };
        this._pickedWord = pickedWord;
        this._actualWord = "";
        this._turn = 1;
        this._actualPosition = 0;
        this._validLetterCodes = ["KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Semicolon"];
        this._interface = new Interface();
    }
    Object.defineProperty(Game.prototype, "pickedWord", {
        get: function () {
            return this._pickedWord;
        },
        set: function (word) {
            this._pickedWord = word;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "actualWord", {
        get: function () {
            return this._actualWord;
        },
        set: function (word) {
            this._actualWord = word;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "turn", {
        get: function () {
            return this._turn;
        },
        set: function (num) {
            this._turn = num;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "actualPosition", {
        get: function () {
            return this._actualPosition;
        },
        set: function (num) {
            this._actualPosition = num;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "validLetterCodes", {
        get: function () {
            return this._validLetterCodes;
        },
        set: function (letters) {
            this._validLetterCodes = letters;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "interface", {
        get: function () {
            return this._interface;
        },
        set: function (i) {
            this._interface = i;
        },
        enumerable: false,
        configurable: true
    });
    Game.prototype.isValidLetter = function (code) {
        return this._validLetterCodes.includes(code) && this._actualPosition < MAX_WORD_SIZE;
    };
    Game.prototype.isEnterKey = function (code) {
        return code == "Enter";
    };
    Game.prototype.isBackspaceKey = function (code) {
        return code == "Backspace";
    };
    Game.prototype.transformCodeToLetter = function (code) {
        var letter = "";
        if (code == "Semicolon")
            letter = "Ñ";
        else
            letter = code.split("y")[1];
        return letter;
    };
    Game.prototype.newLetter = function (code) {
        var letter = this.transformCodeToLetter(code);
        this._interface.setNewLetter(this.turn, this.actualPosition, letter);
        this._actualPosition = this._actualPosition + 1;
        this._actualWord += letter;
    };
    Game.prototype.checkWordIsRight = function () {
        if (this._actualWord == this._pickedWord) {
            location.assign("/winner");
        }
    };
    Game.prototype.checkGameIsOver = function () {
        if (this.turn == MAX_ATTEMPTS) {
            location.assign("/loser");
        }
    };
    Game.prototype.enterPressed = function () {
        if (this._actualWord.length == MAX_WORD_SIZE) {
            this.checkWordIsRight();
            this.checkGameIsOver();
            this.updateAfterANewWord();
        }
    };
    Game.prototype.backspacePressed = function () {
        if (this._actualPosition > 0) {
            this._actualPosition -= 1;
            this._interface.deleteLetter(this._turn, this._actualPosition);
        }
    };
    Game.prototype.newKeyPressed = function (code) {
        if (this.isValidLetter(code))
            this.newLetter(code);
        if (this.isEnterKey(code))
            this.enterPressed();
        if (this.isBackspaceKey(code))
            this.backspacePressed();
        this._interface.changeBackgroundKey(code);
    };
    return Game;
}());
export { Game };
