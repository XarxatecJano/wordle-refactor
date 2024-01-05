import { solutionWord } from "../manageWords/solutionWord.js";

export async function getRandomWord(): Promise<string> {
    const wordInstance = new solutionWord();
    return await wordInstance.getRandomWordAPI();
}