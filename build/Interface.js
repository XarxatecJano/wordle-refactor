var Interface = /** @class */ (function () {
    function Interface() {
    }
    Interface.prototype.setNewLetter = function (turn, position, letter) {
        Array.from(document.getElementById("row_".concat(turn)).children)[position].textContent = letter;
    };
    Interface.prototype.deleteLetter = function (turn, position) {
        Array.from(document.getElementById("row_".concat(turn)).children)[position].textContent = "";
    };
    Interface.prototype.changeBackgroundPosition = function (turn, position, state) {
        var positionClass = "cell-grey";
        if (state == "rightLetter")
            positionClass = "cell-green";
        if (state == "misplacedLetter")
            positionClass = "cell-orange";
        Array.from(document.getElementById("row_".concat(turn)).children)[position].classList.add(positionClass);
    };
    Interface.prototype.changeBackgroundKey = function (code) {
        var keys = document.getElementsByClassName("key");
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            if (key.value == code && code !== "Enter" && code !== "Backspace") {
                key.classList.add("keyPressed");
            }
        }
    };
    return Interface;
}());
export { Interface };
