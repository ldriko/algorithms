type Node<T> = {
    val: T;
    next?: Node<T>;
};

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        const node = { val: item } as Node<T>;
        this.length++;

        if (!this.tail) {
            this.head = this.tail = node;
            return;
        }

        this.tail.next = node;
        this.tail = node;
    }

    deque(): T | undefined {
        if (!this.head) return undefined;

        this.length--;

        const h = this.head;
        this.head = this.head.next;
        h.next = undefined;

        if (this.length === 0) this.tail = undefined;

        return h.val;
    }

    peek(): T | undefined {
        return this.head?.val;
    }
}
