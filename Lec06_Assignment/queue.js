
// Implement class Queue
let count = 0;

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.back = null;
    }
    
    //should add a new node to end of the queue and return the new length of the queue
    enqueue(val) {
        
        let node = new Node(val);
        if (count === 0) {
            this.front = node;
            this.back = node;
        } else if (count > 0) {
            this.back.next = node;
            this.back = node;
        }
        count++;
        return count;
    }

    //should remove the front node and return the node's value
    dequeue() {
        if (this.front === null && this.back === null) {
            return console.log('Nothing to dequeue');
        } 
        let remove = this.front;
        if (this.front === this.back) {
            this.back = null;
            this.front = null;
        } else {
            this.front = this.front.next;
            count--;
            console.log(remove)
        }
        // if (count > 0) {
        //     let remove = this.back.next;
        //     console.log(remove.next);
        //     // this.front = this.back.next;
        //     // this.front.next = null;
 
        
        return count, remove;
    }

    size() {
        return count;
    }
   
}

let queue = new Queue();

// Test cases 
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue();


console.log(queue.size());
console.log(queue);