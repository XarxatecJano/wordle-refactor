export class UIChanger {
    setNewLetter(turn, position, letter) {
        Array.from(document.getElementById(`row_${turn}`).children)[position].textContent = letter;
    }
    deleteLetter(turn, position) {
        Array.from(document.getElementById(`row_${turn}`).children)[position].textContent = "";
    }
    changeBackgroundPosition(turn, position, state, letter) {
        let positionClass = "cell-grey";
        if (state == "wrongLetter")
            positionClass = "cell-grey";
        if (state == "rightLetter")
            positionClass = "cell-green";
        if (state == "misplacedLetter")
            positionClass = "cell-orange";
        Array.from(document.getElementById(`row_${turn}`).children)[position].classList.add(positionClass);
        let botonPorLetra = document.querySelector('button[value="Key' + letter + '"]'); //to select also the button and change the background        
        if (botonPorLetra)
            botonPorLetra.classList.add(positionClass);
    }
    changeBackgroundKey(code, backgroundToRemove) {
        const keys = document.getElementsByClassName("key");
        for (let key of keys) {
            if (key.value === code && code !== "Enter" && code !== "Backspace") {
                key.classList.add("keyPressed");
            }
            if (key.value == backgroundToRemove && code == "Backspace") {
                key.classList.remove("keyPressed"); //remove the background of key pressed
            }
        }
    }
}
