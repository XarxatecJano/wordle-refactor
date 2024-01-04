import {MAX_WORD_SIZE, MAX_ATTEMPTS} from "./env.js";
// import {UIChanger} from "./UIChanger.js";
import { BackgroundManager } from "./userInterface/BackgroundManager.js";
import { LetterManager } from "./userInterface/LetterManager.js";

export class Game{
    #pickedWord: string;
    #actualWord: string;
    #turn: number;
    #actualPosition: number;
    #validLetterCodes: string[];
    // #userInterface: UIChanger;
    #letterManager: LetterManager;
    #backgroundManager: BackgroundManager;
    
    constructor(pickedWord: string){
        this.#pickedWord = pickedWord;
        this.#actualWord = "";
        this.#turn = 1;
        this.#actualPosition = 0;
        this.#validLetterCodes = ["KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Semicolon"];
        // this.#userInterface = new UIChanger();
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

    get validLetterCodes() {
        return this.#validLetterCodes
    }
    set validLetterCodes(letters) {
        this.#validLetterCodes = letters;
    }

    // get userInterface() {
    //     return this.#userInterface;
    // }
    // set userInterface(i) {
    //     this.#userInterface = i;
    // }
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

    
    isValidLetter(code: string):boolean {
        return  this.#validLetterCodes.includes(code) && this.#actualPosition < MAX_WORD_SIZE; // aquí se podría quitar la segunda parte de la comprobación
    }

    isEnterKey(code: string):boolean {
        return code=="Enter";
    }

    isBackspaceKey(code: string):boolean{
        return code=="Backspace";
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
           // ========= NUEVO - colorea letras repetidas =========
              // Verificar si la letra está en la palabra elegida
            if (numberOfCoincidencesPickedWord > 0) {

            // Verificar si la letra está en la posición correcta
            if (this.#pickedWord[i] === actualLetter) {
                // La letra está en la posición correcta, no hacer nada
                
            } else {
                // La letra está en la palabra pero en la posición equivocada        
                 this.#backgroundManager.changeCellBackground(this.#turn, i, "misplacedLetter");
            }
        }

            /* ======== ORIGINAL - No colorea letras repetidas ===========
            if (differenceOfCoincidences==1){
                for (let j=0; j<MAX_WORD_SIZE; j++){
                    if(this.#pickedWord[j]==actualLetter) {
                        isMisplacedLetter = false;
                        break;
                    }
                }
            }
            if (differenceOfCoincidences==0 && this.#pickedWord[i]==this.#actualWord[i]){
                isMisplacedLetter=false;
            }
            if (numberOfCoincidencesPickedWord>0 && isMisplacedLetter) this.#backgroundManager.changeCellBackground(this.#turn, i, "misplacedLetter");
            */
            
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

    // PASAR A MANAGE KEYS LAS 3 FUNCIONES
    enterPressed():void{
        if (this.#actualWord.length == MAX_WORD_SIZE){
            this.checkWordIsRight();
            this.checkGameIsOver();
            this.updateAfterANewWord();
        }
    }

    backspacePressed():void{
        // console.log(this.#actualPosition)
        if (this.#actualPosition > 0) {
            this.#actualPosition -= 1;
            this.#letterManager.deleteLetter(this.#turn, this.#actualPosition);
            this.#actualWord = this.#actualWord.slice(0, -1);
        }
        // console.log(this.#actualPosition)
        // console.log(this.#actualWord)
    }

    newKeyPressed(code: string):void{ 
        if (this.#actualPosition < MAX_WORD_SIZE) { // Creo que hay que colocar esto aquí y no dentro de isValidLetter porque antes de permitir meter más letras hay que comprobarlo
            if (this.isValidLetter(code)) this.newLetter(code);
        }
        if (this.isEnterKey(code)) this.enterPressed();
        if (this.isBackspaceKey(code)) this.backspacePressed();
        this.#backgroundManager.changeKeyBackground(code);
        //console.log(this.#actualPosition)
        console.log(this.#actualWord)
    }


}