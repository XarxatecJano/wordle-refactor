import { IManageKeys } from "./IManageKeys";
import { Game } from "../Game.js";
import { PressedKeys } from "../pressedKeys/pressedKeys.js";

export class ManageKeys extends PressedKeys implements IManageKeys{
    #word: string;
    #game: Game;
    #pressedKeys: PressedKeys;
    
    constructor(gameInstance: Game) {
        super(gameInstance);
        this.#word = ""; 
        this.#game = gameInstance;
        this.#pressedKeys = new PressedKeys(gameInstance); 
    }

    get word(): string {
        return this.#word;
    }
    set word(newWord: string) {
        this.#word = newWord;
    }
    get game(): Game {
        return this.#game;
    }
    set game(newGame: Game) {
        this.#game = newGame;
    }
    
    setupClickListeners(game: Game): void {
        const keys = document.getElementsByClassName("key");
        Array.from(keys).forEach(element => {
            element.addEventListener("click", (e) => {
                this.handleKeyClick(game, e);
            });
        });
    }

    setupKeyDownListener(game: Game): void {
        document.addEventListener("keydown", (e) => {
            this.handleKeyDown(game, e);
        });
    }

    setupGameWithListeners(word: string): void {
        const gameInstance = new Game(word);
        this.#pressedKeys = new PressedKeys(gameInstance); 
        this.setupClickListeners(gameInstance);
        this.setupKeyDownListener(gameInstance);
    }

    handleKeyClick(game: Game, e: Event): void {
        const target = e.target as HTMLButtonElement;
        if (target) {
            this.#pressedKeys.newKeyPressed(target.value);
        }
    }

    handleKeyDown(game: Game, e: KeyboardEvent): void {
        this.#pressedKeys.newKeyPressed(e.code);
    }
}
