export interface ILetterManagerInterface {
    turn: number;
    position: number;
    letter: string;
    
    setNewLetter(turn: number, position: number, letter: string): void;
    deleteLetter(turn: number, position: number): void;
  }