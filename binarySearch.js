class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BSTree {
  constructor() {
    this.root = null;
  }

  // insert Value
  insert(value) {
    let newNode = new Node(value);
    // check root node is present or not
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    // if root node is present
    let currentRootNode = this.root;
    while (true) {
      // if same value is added
      if (value === currentRootNode.value) {
        return null;
      }

      // check if value is less than current node(parent node) value
      if (value < currentRootNode.value) {
        if (currentRootNode.left === null) {
          currentRootNode.left = newNode;
          return this;
        } else {
          currentRootNode = currentRootNode.left;
        }
      } else if (value > currentRootNode.value) {
        if (currentRootNode.right === null) {
          currentRootNode.right = newNode;
          return this;
        } else {
          currentRootNode = currentRootNode.right;
        }
      }
    }
  }

  //find value
  find(value) {
    if (this.root === null) {
      return false;
    }
    let currentNode = this.root;
    let found = false;

    while (!found && currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        found = true;
      }
    }
    return currentNode;
  }
}

let tree = new BSTree();
tree.insert(10);
tree.insert(4);
tree.insert(2);
tree.insert(13);
tree.insert(13);
console.log(tree);

console.log(tree.find(2));
