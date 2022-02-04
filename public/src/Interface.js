export default class Interface {
    setNewLetter(turn,position, letter) {
        Array.from(document.getElementById(`row_${turn}`).children)[position].textContent = letter;
    }
    deleteLetter(turn, position) {
        Array.from(document.getElementById(`row_${turn}`).children)[position].textContent = "";
    }
}