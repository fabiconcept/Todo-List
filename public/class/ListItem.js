export class ListItem {
    constructor(ulContainer) {
        this.ulContainer = ulContainer;
    }
    render(container, heading, amount) {
        const liUID = this.createUID();
        let LiPayload = {
            container: container.format(),
            heading,
            amount
        };
        this.ulContainer.push({ uid: liUID, payload: LiPayload });
    }
    createUID() {
        const randomNum = Math.floor(Math.random() * 9999);
        const randomStr = [...Array(3)].map(() => Math.random().toString(36)[2]).join("").toUpperCase();
        return `${randomStr}-${randomNum}`;
    }
}
