import { Item } from "../interfaces/FormatText.js";

export class ListItems {
    constructor(
        private tasksList: HTMLUListElement,
        private itemsArray: (Item)[]
    ) { }

    add(): void {
        const item = this.itemsArray[this.itemsArray.length - 1];
        const LiElement = document.createElement("li");
        LiElement.id = item.uid;
        LiElement.draggable = true;
        const { heading, container, amount } = item.payload;

        LiElement.classList.add(heading);
        const H4 = document.createElement("h4");
        H4.innerText = heading;
        LiElement.append(H4);

        const spanElementText = document.createElement("span");
        spanElementText.innerText = container;
        LiElement.append(spanElementText);

        const spanAmount = document.createElement("span");
        spanAmount.innerText = String(amount);
        LiElement.append(spanAmount);


        this.tasksList.append(LiElement);
        LiElement.addEventListener("click", () => {
            this.updateStatus(LiElement);
        });
        const trashCan = document.querySelector(".trash") as HTMLDivElement;

        const removeDragOverClass = () => {
            trashCan.classList.remove("dragOver");
        };

        const cleanupAfterDrag = () => {
            trashCan.removeEventListener("dragleave", removeDragOverClass);
            LiElement.removeEventListener("dragend", handleDragEnd);
        };

        const handleDragEnd = () => {
            removeFunc();
            cleanupAfterDrag();
            trashCan.classList.remove("dragOver");
        };

        trashCan.addEventListener("dragenter", () => {
            trashCan.classList.add("dragOver");
            LiElement.addEventListener("dragend", handleDragEnd);
        });

        const removeFunc = () => this.remove(LiElement);



        
    }
    remove(LiToRemove: HTMLElement): void {
        this.tasksList.removeChild(LiToRemove)
    }

    updateStatus(ele: HTMLElement): void {
        ele.classList.toggle("pending");
        if (ele.classList.contains("start")) {
            ele.classList.remove("start");
        } else {
            ele.classList.toggle("done");
        }
        const childH4 = ele.children[0];
        const val = ele.classList.value;
        childH4.innerHTML = val;
    }
}