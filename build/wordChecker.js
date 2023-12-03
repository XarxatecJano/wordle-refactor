var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { WEBSTER_KEY } from "./env.js";
export class WordChecker {
    check(word) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${WEBSTER_KEY}`);
                const data = yield response.json();
                console.log(data);
                return data.length > 0;
            }
            catch (error) {
                console.error(error);
                return false;
            }
        });
    }
}
