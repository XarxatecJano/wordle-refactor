export interface ILetterManagerInterface {
    turn: number;
    position: number;
    letter: string;
    code: string;
    validLetterCodes: string[];
    actualPosition: number;
    
    setNewLetter(turn: number, position: number, letter: string): void;
    deleteLetter(turn: number, position: number): void;
    isValidLetter(code: string):boolean;
  }