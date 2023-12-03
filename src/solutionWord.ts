import { MAX_WORD_SIZE, API_KEY } from "./env.js";

export class solutionWord{
    async getRandomWordAPI(): Promise<any> {
        const url = `https://random-word-api.p.rapidapi.com/L/${MAX_WORD_SIZE}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': API_KEY,
                'X-RapidAPI-Host': 'random-word-api.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();
            console.log(result);
            return result;
        } catch (error) {
            console.error(error);
            return error;
        }
    }
}
