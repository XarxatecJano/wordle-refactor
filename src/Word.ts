export class Word {

    #words: string[];
    constructor(wordsArray: string[]){
        this.#words = wordsArray;
    }

    get words(){
        return this.#words;
    }
    set words(wordsArray: string[]){
        this.#words = wordsArray;
    }

    getRandomWord():string {
        const min = 0;
        const max = this.#words.length-1;
        return this.#words[Math.trunc(Math.random() * (max - min + 1))]
    }
}