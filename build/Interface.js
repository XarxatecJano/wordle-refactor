var Interface = /** @class */ (function () {
    function Interface() {
    }
    Interface.prototype.setNewLetter = function (turn, position, letter) {
        Array.from(document.getElementById("row_" + turn).children)[position].textContent = letter;
    };
    Interface.prototype.deleteLetter = function (turn, position) {
        Array.from(document.getElementById("row_" + turn).children)[position].textContent = "";
    };
    return Interface;
}());
export { Interface };
