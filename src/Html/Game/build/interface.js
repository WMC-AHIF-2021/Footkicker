var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class HttpClient {
    constructor() {
        this.baseUrl = "http://localhost:3000";
        this.scoreUrl = `${this.baseUrl}/Score`;
    }
    getAllItems() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield $.get(this.scoreUrl);
        });
    }
    deleteAllItems() {
        return __awaiter(this, void 0, void 0, function* () {
            let items = yield $.get(this.scoreUrl);
            console.log(items);
            for (let item of items) {
                yield $.ajax({ url: this.scoreUrl + "/" + item.id, type: "DELETE" });
            }
        });
    }
    addOnJson(dataforjson) {
        console.log(dataforjson);
        $.ajax({
            url: this.scoreUrl,
            data: JSON.stringify(dataforjson),
            type: 'POST',
            contentType: 'application/json',
            success: _ => {
                console.log("added json");
            }
        });
    }
}
//# sourceMappingURL=interface.js.map