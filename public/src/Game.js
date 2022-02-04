import {MAX_WORD_SIZE, MAX_ATTEMPTS} from "./env.js";
import Interface from "./Interface.js";
//import Key from "./Key.js";

export default class Game {
    constructor(pickedWord){
        this.pickedWord = pickedWord;
        this.actualWord = "";
        this.turn = 1;
        this.actualPosition = 0;
        this.validLetterCodes = ["KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Semicolon"];
        this.interface = new Interface();
    }

    get pickedWord(){
        return this._pickedWord;
    }
    set pickedWord(word){
        this._pickedWord = word;
    }

    get actualWord(){
        return this._actualWord;
    }
    set actualWord(word){
        this._actualWord = word;
    }

    get turn(){
        return this._turn;
    }
    set turn(num){
        this._turn = num;
    }

    get actualPosition(){
        return this._actualPosition;
    }
    set actualPosition(num){
        this._actualPosition = num;
    }

    get validLetterCodes() {
        return this._validLetterCodes
    }
    set validLetterCodes(letters) {
        this._validLetterCodes = letters;
    }

    get interface() {
        return this._interface;
    }
    set interface(i) {
        this._interface = i;
    }
    
    isValidLetter(code) {
        
        return  this._validLetterCodes.includes(code) && this._actualPosition < MAX_WORD_SIZE;
     }

    isEnterKey(code) {
        return code=="Enter";
    }

    isBackspaceKey(code){
        return code=="Backspace";
    }

    transformCodeToLetter(code){
        let letter = "";
        if (code=="Semicolon") letter = "Ñ";
        else letter = code.split("y")[1];
        return letter;
    }

    newLetter(code){
        let letter = this.transformCodeToLetter(code);
        this._interface.setNewLetter(this.turn, this.actualPosition, letter);
        this._actualPosition = this._actualPosition + 1;
        this._actualWord += letter;
    }

    checkWordIsRight(){
        if (this._actualWord == this._pickedWord){
            location.assign("./winner.html");
        }
    }

    updateAfterANewWord = ()=>{
        this._turn += 1;
        this._actualPosition = 0;
        this._actualWord = "";
    }

    checkGameIsOver(){
        if (this.turn == MAX_ATTEMPTS){
            location.assign("./loser.html");
        }
    }

    enterPressed(){
        if (this._actualWord.length == MAX_WORD_SIZE){
            this.checkWordIsRight();
            this.checkGameIsOver();
            this.updateAfterANewWord();
        }
    }

    backspacePressed(code){
        if (this._actualPosition > 0) {
            this._actualPosition -= 1;
            this._interface.deleteLetter(this._turn, this._actualPosition);
        }
    }

    newKeyPressed(code){ 
        //const key = new Key(code);
        if (this.isValidLetter(code)) this.newLetter(code);
        if (this.isEnterKey(code)) this.enterPressed();
        if (this.isBackspaceKey(code)) this.backspacePressed();
    }

    
}