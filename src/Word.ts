export class Word {

    private _words: string[];
    constructor(wordsArray: string[]){
        this._words = wordsArray;
    }

    get Words(){
        return this._words;
    }
    set Words(wordsArray: string[]){
        this._words = wordsArray;
    }

    getRandomWord():string {
        const min = 0;
        const max = this._words.length-1;
        return this._words[Math.trunc(Math.random() * (max - min + 1))]
    }
}