export interface IBackgroundManagerInterface {
  turn: number;  
  position: number;
  state: string;
  code: string;

  changeCellBackground(turn: number, position: number, state: string): void;
  changeKeyBackground(code: string): void;
}