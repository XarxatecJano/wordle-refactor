import {MAX_WORD_SIZE, MAX_ATTEMPTS} from "./env.js";
import { BackgroundManager } from "./userInterface/BackgroundManager.js";
import { LetterManager } from "./userInterface/LetterManager.js";

export class Game{
    #pickedWord: string;
    #actualWord: string;
    #turn: number;
    #actualPosition: number;
    #validLetterCodes: string[];
    #letterManager: LetterManager;
    #backgroundManager: BackgroundManager;
    
    constructor(pickedWord: string){
        this.#pickedWord = pickedWord;
        this.#actualWord = "";
        this.#turn = 1;
        this.#actualPosition = 0;
        this.#validLetterCodes = ["KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Semicolon"];
        this.#letterManager = new LetterManager();
        this.#backgroundManager = new BackgroundManager();
    }

    get pickedWord(){
        return this.#pickedWord;
    }
    set pickedWord(word){
        this.#pickedWord = word;
    }

    get actualWord(){
        return this.#actualWord;
    }
    set actualWord(word){
        this.#actualWord = word;
    }

    get turn(){
        return this.#turn;
    }
    set turn(num){
        this.#turn = num;
    }

    get actualPosition(){
        return this.#actualPosition;
    }
    set actualPosition(num){
        this.#actualPosition = num;
    }

    /* get validLetterCodes() {
        return this.#validLetterCodes
    }
    set validLetterCodes(letters) {
        this.#validLetterCodes = letters;
    } */
    get letterManager() {
        return this.#letterManager;
    }
    set letterManager(i) {
        this.#letterManager = i;
    }
    get backgroundManager() {
        return this.#backgroundManager;
    }
    set backgroundManager(i) {
        this.#backgroundManager = i;
    }

    transformCodeToLetter(code: string):string{
        let letter: string = "";
        if (code=="Semicolon") letter = "Ñ";
        else letter = code.split("y")[1];
        return letter;
    }

    newLetter(code: string):void{
        let letter: string = this.transformCodeToLetter(code);
        // this.#userInterface.setNewLetter(this.turn, this.actualPosition, letter);
        this.#letterManager.setNewLetter(this.turn, this.actualPosition, letter);
        this.#actualPosition = this.#actualPosition + 1;
        this.#actualWord += letter;
        // console.log(letter);
    }

    checkWordIsRight():void{
        if (this.#actualWord == this.#pickedWord){
            location.assign("/winner");
        }
    }

    checkRightLetters = ():void=>{
        for(let i=0; i<MAX_WORD_SIZE; i++){
            if (this.#pickedWord[i]==this.#actualWord[i]){
                this.#backgroundManager.changeCellBackground(this.#turn, i, "rightLetter");
            }
        }
    }

    checkMisplacedLetters = ():void=> {
        let actualLetter: string = "";
        let pattern: RegExp;
        let numberOfCoincidencesPickedWord: number = 0;
        let numberOfCoincidencesActualWord: number = 0;
        let differenceOfCoincidences: number = 0;
        let isMisplacedLetter: boolean = true;
        for (let i=0; i<MAX_WORD_SIZE; i++){
            isMisplacedLetter = true;
            actualLetter = this.#actualWord[i];
            pattern = new RegExp(actualLetter,"g");
            numberOfCoincidencesPickedWord = (this.#pickedWord.match(pattern)||[]).length;
            numberOfCoincidencesActualWord = (this.#actualWord.match(pattern)||[]).length;
            differenceOfCoincidences = Math.abs(numberOfCoincidencesActualWord - numberOfCoincidencesPickedWord);
          
            if (numberOfCoincidencesPickedWord > 0) {

             if (this.#pickedWord[i] === actualLetter) {
                 
            } else {
                  this.#backgroundManager.changeCellBackground(this.#turn, i, "misplacedLetter");
            }
        }         
        }
    }

    checkWrongLetters = ():void=>{
        let actualLetter = "";
        let pattern:RegExp;
        let numberOfCoincidencesPickedWord = 0;
        for (let i=0; i<MAX_WORD_SIZE; i++){
            actualLetter = this.#actualWord[i];
            pattern = new RegExp(actualLetter,"g");
            numberOfCoincidencesPickedWord = (this.#pickedWord.match(pattern)||[]).length;
            if (numberOfCoincidencesPickedWord==0) this.#backgroundManager.changeCellBackground(this.#turn, i, "wrongLetter");
        }
    }

    updateAfterANewWord = ():void=>{
        this.checkRightLetters();
        this.checkMisplacedLetters();
        this.checkWrongLetters();
        this.#turn = this.#turn + 1;
        this.#actualPosition = 0;
        this.#actualWord = "";
    }

    checkGameIsOver():void{
        if (this.turn == MAX_ATTEMPTS){
            location.assign("/loser");
        }
    }
}