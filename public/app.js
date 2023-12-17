import { ListItem } from "./class/ListItem.js";
import { ListItems } from "./class/ListItems.js";
import { addItem } from "./class/addItem.js";
// Typescript here
const formElemnt = document.querySelector(".form");
const taskType = document.querySelector("select");
const taskName = document.querySelector(".name");
const taskAmount = document.querySelector(".amount");
const listContainer = document.querySelector("ul");
const ulContainer = [];
const list = new ListItem(ulContainer);
const ListItemsContainer = new ListItems(listContainer, ulContainer);
formElemnt.addEventListener("submit", (e) => {
    e.preventDefault();
    let taskTypeValue;
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
    let taskAmountValue = taskAmount.valueAsNumber ? taskAmount.valueAsNumber : 0;
    if (taskNameValue.length < 1 || taskTypeValue.length < 1) {
        return;
    }
    const newItem = new addItem(taskTypeValue, taskNameValue, taskAmountValue);
    list.render(newItem, taskTypeValue, taskAmountValue);
    ListItemsContainer.add();
});
