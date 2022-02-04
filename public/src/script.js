import Word from "./Word.js";
import Game from "./Game.js";


const wordsCollection = new Word(["JUEGO", "TALAR", "BAILE", "ANDAR", "MONTE", "PLAYA", "PLATA", "ARBOL", "QUESO"]);
const pickedWord = wordsCollection.getRandomWord();
console.log(pickedWord);

const game = new Game(pickedWord);


Array.from(document.getElementsByClassName("key")).forEach(element => element.addEventListener("click", (e)=>{
    game.newKeyPressed(e.target.value);
}));

document.addEventListener("keydown", (e)=>{
    game.newKeyPressed(e.code);
});

/*

let prompt_word;

do {
    word_check = false;
    prompt_word = prompt("Introduce una palabra de 5 letras");
    
    if ((prompt_word.toUpperCase() != prompt_word.toLowerCase()) && (prompt_word.length == 5)) word_check = true;

    played_word = prompt_word.toUpperCase();

} while (word_check == false);

console.log(played_word);



let correctLetters = 0;


let ignoredLetters = [];
const ignoreLetter = (e) => {
    ignoredLetters.push(e);
    return ignoredLetters;
}
const checkWords = (player_word, cpu_word) => {
    for (i = 0; i <player_word.length; i++) {
        console.log(`player = ${player_word.charAt(i)} // cpu = ${cpu_word.charAt(i)}`);

        if (player_word.charAt(i) == cpu_word.charAt(i)) {
            console.log("Pintar letra")
            ignoreLetter(player_word.charAt(i));
            console.log(ignoredLetters);
            correctLetters++;}
            if ((player_word.includes(cpu_word.charAt(i))) && player_word.charAt(i) != cpu_word.charAt(i)) console.log("bien letra mal posicion")
        }
        
        if (correctLetters == 5) console.log("¡Has acertado la palabra!");
    }

checkWords(played_word, picked_word);



let letter_array = [];

let col_position = 0;


const getKeyValue= (e) => {
    let value = e.target.textContent;
    document.querySelector(".box").textContent = `${value}`;
    return value;
}

const keyToBox = (e) => {
    getKeyValue(e);
    pushLetter(e);
    console.log(col_position);
}

let key = document.querySelectorAll(".key").forEach(key =>  key.addEventListener('click', keyToBox));
let box = document.querySelector(".box");

const pushLetter = (e) => {
    letter_array.push(getKeyValue(e));
    console.log(letter_array);
    col_position++;
    return letter_array;
}





const paintBoxGreen = (e) => {
    e.classList.add("box-green");
}

const paintBoxGrey = (e) => {
    e.classList.add("box-grey");
}

const paintBoxOrange = (e) => {
    e.classList.add("box-orange");
}

const changeBox = (e, col_position) => {
    e.classList.add(`col${col_position}`);
}
*/