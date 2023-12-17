import { formatText } from "../interfaces/FormatText.js";

export class addItem implements formatText {
    constructor (
        readonly type: "start" | "pending" | "done",
        readonly name:string,
        private amount: number
    ){}
    format(): string {
        switch(this.type) {
            case "start":
                return `${this.name}${this.amount > 1 ? "'s": ""} (${this.amount}).`
            case "pending":
                return `${this.name}${this.amount > 1 ? "'s": ""} (${this.amount}).`
            case "done":
                return `${this.name}${this.amount > 1 ? "'s": ""} (${this.amount}).`
        }
    }
}