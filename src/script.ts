import {Word} from "./Word.js";
import {Game} from "./Game.js";


const wordsCollection: Word = new Word(["JUEGO", "TALAR", "BAILE", "ANDAR", "MONTE", "PLAYA", "PLATA", "ARBOL", "QUESO", "MESA", "PAPEL", "HOJAS", "CASAS", "FLORA", "GATOS",
"PERRO", "MANOS", "FUEGO", "NIEVE", "MIEDO", "RISAS", "LUCES", "SILLA", "PIZZA", "MUSGO", "NUBES", "RAYOS", "LAGOS", "CIELO", "SALTO", "DULCE", "CAMPO", "ROCAS", "DEDOS",
"AZOTE", "SAPOS", "TRAGO", "LUNAR", "BROMA", "CARRO", "LIMON", "LINEA", "VELAS", "BOTON", "CABLE", "PIANO", "LLAMA", "GRANO", "VASOS", "CORAL", "CASCO", "BARCO", "RONDA", "DUNAS", "GRANO", "CEJAS", "ARROZ", "DEDOS",
"PUNTO", "HIGOS", "COPAS", "ARENA", "NIÑOS", "NARIZ", "CABRA", "RISCO", "FUEGO", "FLUIR", "ROSAS", "VOLAR", "LOBOS"]);

const pickedWord: string = wordsCollection.getRandomWord();
console.log(pickedWord);

const game: Game = new Game(pickedWord);


Array.from(document.getElementsByClassName("key")).forEach(element => element.addEventListener("click", (e)=>{
    game.newKeyPressed((<HTMLButtonElement>e.target).value);
}));

document.addEventListener("keydown", (e)=>{
    game.newKeyPressed(e.code);
});