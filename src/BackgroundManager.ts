import { IBackgroundManagerInterface } from "./IBackgroundManagerInterfaz";

    export class BackgroundManager implements IBackgroundManagerInterface {
    #state: string;
    #position: number;

    constructor() {
        this.#position = 0;
        this.#state = "";
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
    

    changeBackgroundPosition(turn: number, position: number, state: string): void {
        let positionClass = "cell-grey";
        if (state=="rightLetter") positionClass = "cell-green";
        if (state=="misplacedLetter") positionClass = "cell-orange";
        Array.from(document.getElementById(`row_${turn}`)!.children)[position].classList.add(positionClass);
    }

    changeBackgroundKey(code: string): void {
        const keys: any = document.getElementsByClassName("key");
       for (let key of keys) {
            if (key.value == code && code !== "Enter" && code !=="Backspace"){
                key.classList.add("keyPressed");
            }
       }
    }
}
