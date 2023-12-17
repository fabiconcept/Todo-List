export interface formatText {
    format():string;
}

export interface Item {
    uid: string;
    payload: payload
}

export type payload = {
    heading: string,
    container:string,
    amount: number
}