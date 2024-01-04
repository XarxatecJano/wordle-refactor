var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { MAX_WORD_SIZE, API_KEY } from "../env.js";
export class solutionWord {
    getRandomWordAPI() {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `https://random-word-api.p.rapidapi.com/L/${MAX_WORD_SIZE}`;
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': API_KEY,
                    'X-RapidAPI-Host': 'random-word-api.p.rapidapi.com'
                }
            };
            try {
                const response = yield fetch(url, options);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = yield response.json();
                return result['word'].toUpperCase();
            }
            catch (error) {
                console.error(error);
                return error;
            }
        });
    }
}
