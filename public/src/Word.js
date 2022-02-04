export default class Word {
    constructor(wordsArray){
        this.words = wordsArray;
    }

    get words(){
        return this._words;
    }
    set words(wordsArray){
        this._words = wordsArray;
    }

    getRandomWord() {
        const min = 0;
        const max = this.words.length-1;
        return this._words[Math.trunc(Math.random() * (max - min + 1))]
    }
}