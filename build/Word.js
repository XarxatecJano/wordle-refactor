var Word = /** @class */ (function () {
    function Word(wordsArray) {
        this._words = wordsArray;
    }
    Object.defineProperty(Word.prototype, "Words", {
        get: function () {
            return this._words;
        },
        set: function (wordsArray) {
            this._words = wordsArray;
        },
        enumerable: false,
        configurable: true
    });
    Word.prototype.getRandomWord = function () {
        var min = 0;
        var max = this._words.length - 1;
        return this._words[Math.trunc(Math.random() * (max - min + 1))];
    };
    return Word;
}());
export { Word };
