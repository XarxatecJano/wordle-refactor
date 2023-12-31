import {MAX_WORD_SIZE, MAX_ATTEMPTS} from "./env.js";
import {UIChanger} from "./UIChanger.js";

export class Game {
    #pickedWord: string
    #actualWord: string
    #lettersPicked: string  //to storage letters picked and remove the background
    #turn: number
    #actualPosition: number
    #validLetterCodes: string[]
    #userInterface: UIChanger
    constructor(pickedWord: string){
        this.#pickedWord = pickedWord;
        this.#actualWord = "";
        this.#turn = 1;
        this.#actualPosition = 0;
        this.#validLetterCodes = ["KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Semicolon"];
        this.#userInterface = new UIChanger();
        this.#lettersPicked="";
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

    get lettersPicked(){
        return this.#lettersPicked;
    }
    set lettersPicked(letterspicked){
        this.#lettersPicked = letterspicked;
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

    get interface() {
        return this.#userInterface;
    }
    set interface(i) {
        this.#userInterface = i;
    }
    
    isValidLetter(code: string):boolean {
        
        return  this.#validLetterCodes.includes(code) && this.#actualPosition < MAX_WORD_SIZE;
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
        this.#userInterface.setNewLetter(this.turn, this.actualPosition, letter);
        this.#actualPosition = this.#actualPosition + 1;
        this.#actualWord += letter;
    }

    checkWordIsRight():void{
        if (this.#actualWord == this.#pickedWord){
            location.assign("/winner");
        }
    }

    checkRightLetters = ():void=>{
        let actualLetter="";
        for(let i=0; i<MAX_WORD_SIZE; i++){
            if (this.#pickedWord[i]==this.#actualWord[i]){
                actualLetter=this.#actualWord[i];
                this.#userInterface.changeBackgroundPosition(this.#turn, i, "rightLetter", actualLetter);
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
            if (numberOfCoincidencesPickedWord>0 && isMisplacedLetter) this.#userInterface.changeBackgroundPosition(this.#turn, i, "misplacedLetter", actualLetter);
            
        }
    }

    checkWrongLetters = ():void=>{
        let dummiVar=""; //to keep the grey color of buttons
        let actualLetter = "";
        let pattern:RegExp;
        let numberOfCoincidencesPickedWord = 0;
        for (let i=0; i<MAX_WORD_SIZE; i++){
            actualLetter = this.#actualWord[i];
            pattern = new RegExp(actualLetter,"g");
            numberOfCoincidencesPickedWord = (this.#pickedWord.match(pattern)||[]).length;
            if (numberOfCoincidencesPickedWord==0) this.#userInterface.changeBackgroundPosition(this.#turn, i, "wrongLetter",dummiVar);
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

    checkGameIsOver():void{ //fix, last attempt correct was an has palmado
        if (this.turn == MAX_ATTEMPTS && this.#actualWord == this.#pickedWord){
            location.assign("/winner");       
        }
        if (this.turn == MAX_ATTEMPTS && this.#actualWord !== this.#pickedWord){
            location.assign("/loser");       
        }
    }

    enterPressed():void{
        if (this.#actualWord.length == MAX_WORD_SIZE){
            this.checkWordIsRight();
            this.checkGameIsOver();
            this.updateAfterANewWord();
        }
    }

    backspacePressed(code: string):void{
        let backgroundToRemove;  //to remove the background key as well as the letter
        backgroundToRemove=this.#lettersPicked.slice(-4)  //choice the last key
        this.#lettersPicked=this.#lettersPicked.slice(0, -4); //set the new array of keys pressed
        if (this.#actualPosition > 0) {
            this.#actualPosition -= 1;
            this.#userInterface.deleteLetter(this.#turn, this.#actualPosition);
            this.#actualWord = this.#actualWord.slice(0, this.#actualPosition);  //to remove properly the letter
            this.#userInterface.changeBackgroundKey(code,backgroundToRemove); // to remove the background
        }
    }

    newKeyPressed(code: string):void{ 
        if (this.isEnterKey(code)) this.enterPressed();
        if (this.isBackspaceKey(code)) this.backspacePressed(code);
        if(this.#actualPosition<MAX_WORD_SIZE){
        if (this.isValidLetter(code)){ this.newLetter(code);
        let letter: string = code;  // array to storage the pressed keys
        this.#lettersPicked+=letter;
        this.#userInterface.changeBackgroundKey(code,this.#lettersPicked);}
        }
    }

    
}