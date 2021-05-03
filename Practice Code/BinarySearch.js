class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);

    // check for root node
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let currentNode = this.root;

    while (true) {
      if (value === currentNode.value) {
        return null;
      }

      if (value < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          return this;
        } else {
          currentNode = currentNode.left;
        }
      } else if (value > currentNode.value) {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          return this;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
  }
}

let node1 = new BST();
node1.insert(100);
node1.insert(50);
node1.insert(102);
node1.insert(25);
node1.insert(25);
console.log(node1);
