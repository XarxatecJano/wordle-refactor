export interface ILetterManagerInterface {
    letter: string;
    setNewLetter(turn: number, position: number, letter: string): void;
    deleteLetter(turn: number, position: number): void;
  }