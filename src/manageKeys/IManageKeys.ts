import { Game } from "../Game.js";
export interface IManageKeys {
    word: string;
    game: Game;

    setupGameWithListeners(word: string): void;
    setupClickListeners(game: Game): void;
    setupKeyDownListener(game: Game): void;
    handleKeyClick(game: Game, e: Event): void;
    handleKeyDown(game: Game, e: KeyboardEvent): void;
}



