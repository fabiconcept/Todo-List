import { Item, formatText, payload } from "../interfaces/FormatText.js";

export class ListItem {
    constructor(
        private ulContainer: (Item)[]
    ){}

    render(container: formatText, heading: string, amount: number): void {
        const liUID = this.createUID();
        

        let LiPayload: payload = {
            container: container.format(),
            heading,
            amount
        }

        this.ulContainer.push({uid: liUID, payload: LiPayload});
    }

    private createUID():string {
        const randomNum: number = Math.floor(Math.random() * 9999);
        const randomStr: string = [...Array(3)].map(()=>Math.random().toString(36)[2]).join("").toUpperCase();

        return `${randomStr}-${randomNum}`;
    }
}