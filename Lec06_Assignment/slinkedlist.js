let current, count = 0;
let currentN, prevNode;;

class Node {
    constructor(val) {
    this.val = val;
    this.next = null;
    }
 }

class singlyLinkedList {
    constructor(head) {
        this.head = head;
    }
    // should add a new node to the end of the linked list
    append(val) {
        
        let node = new Node(val);
        let currentN = this.head;
        if( !currentN ) {
			this.head = node;
			count++;
			return node;
		}

        // if (count === 1) {
        //     this.head = node;
        //     return node;
        // }
        while( currentN.next ) {
			currentN = currentN.next;
		}

		currentN.next = node;
		count++;

		return node;
      
        }


    

    // should add a new node to the beginning of the linked list
    prepend(val) {
        let node = new Node(val);
        this.head = node;
        // while (currentN.next) {
        //     currentN = currentN.next;
        // }
        // currentN = node;
        // return currentN;
    }

    // should insert a new node at a given position
    insert(val, position) {

        let node = new Node(val);

        if (count === 0) {
            this.head = node;
        } else if (position === 0) {
            const start = this.head;
            this.head = node;
            node.next = start;
        } else {
            let currentN = this.head;
            let positionCounter = 0;
            while (positionCounter < position) {
                prevNode = currentN;
                currentN = prevNode.next;

                positionCounter++;
            }
            prevNode.next = node;
            node.next = null;
            if (currentN) {
                node.next = currentN;
            }
        }
        count++;
    }

    // should remove the node with the given value from the list
    remove(val) {
   


    }

    // should return the length of the linked list
    size() {
        return count;
    }

    // should return the node at the given position; if not found, return -1
    nodeAtposition(idx) {
        
        let currentN = this.head;
        let counter = 0;
 
        while (counter < idx) {
            currentN = currentN.next;
            counter++;
        }
        return currentN;
    }
    // should print the list in this format:
    // `${head node value} => ${node value} … => ${tail node value}`
    printList() {
        let currentN = this.head;
        while (currentN) {
            console.log(`=> ${currentN.val} `);
            currentN = currentN.next;
        }
        // console.log(`${this.head.value} => ${this.head.value}`);
    }
}
const list = new singlyLinkedList();
// list.append(2);
// list.append(3);

list.append(3);
list.append(2);
// list.prepend(5);
// list.append(2);
list.insert(5, 0);

// list.append(5);
// console.log(list.prepend(5));
list.printList();
console.log(list.nodeAtposition(0));

console.log(list);

    