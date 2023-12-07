import { IBackgroundManagerInterface } from "./IBackgroundManagerInterface";

export class BackgroundManager implements IBackgroundManagerInterface {
    #state: string;
    #position: number;
    #turn: number;
    #code: string;

    constructor() {
        this.#position = 0;
        this.#state = "";
        this.#turn = 0;
        this.#code = "";
    }
    get position(): number {
        return this.#position;
    }
    set position(newPosition: number) {
        this.#position = newPosition;
    }
    get state(): string {
        return this.#state;
    }
    set state(newState: string) {
        this.#state = newState;
    }
    get turn(): number {
        return this.#turn;
    }
    set turn(newTurn: number) {
        this.#turn = newTurn;
    }
    get code(): string {
        return this.#code;
    }
    set code(newCode: string) {
        this.#code = newCode;
    }

    changeCellBackground(turn: number, position: number, state: string): void {
        let positionClass = "cell-grey";
        if (state=="rightLetter") positionClass = "cell-green";
        if (state=="misplacedLetter") positionClass = "cell-orange";
        Array.from(document.getElementById(`row_${turn}`)!.children)[position].classList.add(positionClass);
    }

    changeKeyBackground(code: string): void {
        const keys: any = document.getElementsByClassName("key");
        for (let key of keys) {
            if (key.value == code && code !== "Enter" && code !=="Backspace"){
                key.classList.add("keyPressed");
            }
        }
    }
}
