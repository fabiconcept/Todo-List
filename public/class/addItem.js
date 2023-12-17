export class addItem {
    constructor(type, name, amount) {
        this.type = type;
        this.name = name;
        this.amount = amount;
    }
    format() {
        switch (this.type) {
            case "start":
                return `${this.name}${this.amount > 1 ? "'s" : ""} (${this.amount}).`;
            case "pending":
                return `${this.name}${this.amount > 1 ? "'s" : ""} (${this.amount}).`;
            case "done":
                return `${this.name}${this.amount > 1 ? "'s" : ""} (${this.amount}).`;
        }
    }
}
