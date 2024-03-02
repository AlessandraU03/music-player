import { Node } from "./Node.mjs";

export class DoublyLinkedList {
    #count;
    #head;
    #tail;

    constructor() {
        this.#count = 0;
        this.#head = undefined;
        this.#tail = undefined;
    }

    push(element) {
        const node = new Node(element);

        if (this.#head == null) {
            this.#head = node;
            this.#tail = node;
        } else {
            this.#tail.next = node;
            node.previous = this.#tail;
            this.#tail = node;
        }

        this.#count++;
    }

    getElementAt(index) {
        if (index >= 0 && index < this.#count) {
            let node = this.#head;
            for (let i = 0; i < index && node != null; i++) node = node.next;
            return node;
        }
        return undefined;
    }

    size() {
        return this.#count;
    }

    

   
}