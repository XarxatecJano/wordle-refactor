export interface IUserInterface {
    setNewLetter(turn: number, position: number, letter: string): void;
    deleteLetter(turn: number, position: number): void;
    changeBackgroundPosition(turn: number, position: number, state: string): void;
    changeBackgroundKey(code: string): void;
}