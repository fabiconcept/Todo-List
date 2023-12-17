import { ListItem } from "./class/ListItem.js";
import { ListItems } from "./class/ListItems.js";
import { addItem } from "./class/addItem.js";
import { Item } from "./interfaces/FormatText.js";

// Typescript here
const formElemnt = document.querySelector(".form") as HTMLFormElement;
const taskType = document.querySelector("select") as HTMLSelectElement;
const taskName = document.querySelector(".name") as HTMLInputElement;
const taskAmount = document.querySelector(".amount") as HTMLInputElement;

const listContainer = document.querySelector("ul") as HTMLUListElement;
const ulContainer:(Item)[] = []
const list = new ListItem(ulContainer);
const ListItemsContainer = new ListItems(listContainer, ulContainer);

formElemnt.addEventListener("submit", (e: Event)=> {
    e.preventDefault();
    let taskTypeValue: "start" | "pending" | "done";

    switch (taskType.value) {
        case 'start':
            taskTypeValue = "start";
            break;
        case 'pending':
            taskTypeValue = "pending";
            break;
        case 'done':
            taskTypeValue = "done";
            break;
    
        default:
            taskTypeValue = "start";
            break;
    }

    const taskNameValue = taskName.value;
    let taskAmountValue: number | 0 = taskAmount.valueAsNumber ? taskAmount.valueAsNumber : 0;
    if (taskNameValue.length < 1 || taskTypeValue.length < 1) {
        return;
    }
    const newItem = new addItem(taskTypeValue, taskNameValue, taskAmountValue);
    list.render(newItem, taskTypeValue, taskAmountValue);
    ListItemsContainer.add();
    
    
});
