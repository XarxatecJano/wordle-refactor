export interface IBackgroundManagerInterface {
    position: number;
    state: string;
  
    changeBackgroundPosition(turn: number, position: number, state: string): void;
    changeBackgroundKey(code: string): void;
  }