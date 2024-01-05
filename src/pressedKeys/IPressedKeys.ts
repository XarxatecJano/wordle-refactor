import { Game } from "../Game.js";

export interface IPressedKeys {
    code: string;
    game: Game;

    enterPressed(): void;
    backspacePressed(): void;
    newKeyPressed(code: string): void;
    isEnterKey(code: string):boolean;
    isBackspaceKey(code: string):boolean;
}