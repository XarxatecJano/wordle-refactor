export interface ILetterManagerInterface {
    letter: string;
    turn: number;
    position: number;
    
    setNewLetter(turn: number, position: number, letter: string): void;
    deleteLetter(turn: number, position: number): void;
  }