// push, pop, unshift, shift cannot use.
// Implement the class Stack.
class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}
let count = 0;
let prevNode;
class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
       
    }
    // should add a new node to the top of the stack and return the stack's
    // new length.
    push(val) {
        
        let node = new Node(val);
        if (count === 0) {
            this.top = node;
            this.bottom = node;
            count++;
        } else if (count > 0) {
            // prevNode = 5;
            prevNode = this.top;
            // newNode(6)
            this.top = node;
            // 5 = prevNode
            node.next = prevNode;
            count++;
        }
        return count;
    }
    // should remove top node, shorten length and return removed node value
    pop() {
        let remove = this.top;
        if (count === 0) {
            return console.log('Nothing to pop');
        } 
        else if (this.top === this.bottom) {
            this.bottom = null;
            this.top = null;
        }
        this.top = remove.next;
        --count;
        // return the remove node value (1)
        console.log(remove.value);
        return remove.value, count;
    }

    // should return length of the stack
    size() {
        return count;
    }
}
let stack = new Stack();
// test cases for stack
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
// stack.pop();
console.log(stack);





