import { Game } from "../Game.js";
import { MAX_WORD_SIZE } from "../env.js";
import { IPressedKeys } from "./IPressedKeys.js";

export class PressedKeys implements IPressedKeys {
    #code: string;
    #game: Game;

    constructor(gameInstance: Game) {
        this.#code = ""; 
        this.#game = gameInstance;
    }

    get code(): string {
        return this.#code;
    }
    set code(newCode: string) {
        this.#code = newCode;
    }
    get game(): Game {
        return this.#game;
    }
    set game(newGame: Game) {
        this.#game = newGame;
    }

    enterPressed(): void {
        if (this.game.actualWord.length == MAX_WORD_SIZE) {
            this.game.checkWordIsRight();
            this.game.checkGameIsOver();
            this.game.updateAfterANewWord();
        }
    }

    backspacePressed(): void {
        if (this.game.actualPosition > 0) {
            this.game.actualPosition -= 1;
            this.game.letterManager.deleteLetter(this.game.turn, this.game.actualPosition);
            this.game.actualWord = this.game.actualWord.slice(0, -1);
        }
    }
    
    newKeyPressed(code: string): void {
        if (this.game.actualPosition < MAX_WORD_SIZE) {
            if (this.game.letterManager.isValidLetter(code)) this.game.newLetter(code);
        }
        if (this.isEnterKey(code)) this.enterPressed();
        if (this.isBackspaceKey(code)) this.backspacePressed();
        this.game.backgroundManager.changeKeyBackground(code);
    }

    isEnterKey(code: string):boolean {
        return code=="Enter";
    }

    isBackspaceKey(code: string):boolean{
        return code=="Backspace";
    }
}