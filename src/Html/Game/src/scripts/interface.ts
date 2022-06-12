export interface Items{
    id: number;
    tippgoals1: number;
    tippgoals2: number;
    tippwinner1: boolean;
    tippwinner2: boolean;
    realresultgoals1: number;
    realresultgoals2: number;
    realresultwinner: string;
    country1:string;
    country2:string;
}
export class HttpClient {
    private readonly baseUrl: string = "http://localhost:3000";
    private readonly scoreUrl: string = `${this.baseUrl}/Score`;

    public async getAllItems(): Promise<Items[]> {
        return <Items[]>await $.get(this.scoreUrl);
    }

    public async deleteAllItems(): Promise<void> {

        let items = <Items[]>await $.get(this.scoreUrl);
        console.log(items);
        for(let item of items){
            <Items[]>await $.ajax({url: this.scoreUrl + "/" + item.id, type: "DELETE"});
        }
    }

     public addOnJson(dataforjson): void {
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