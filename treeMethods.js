import { prettyPrint, sortNodes } from './utilities.js';

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  inorderArr = [];
  preorderArr = [];
  postorderArr = [];

  constructor(dataArr) {
    this.root = this.buildTree(dataArr);
  }
  buildTree(dataArr) {
    if (dataArr.length === 0) return null;
    const mid = parseInt(dataArr.length / 2);
    const root = new Node(dataArr[mid]);
    root.left = this.buildTree(dataArr.slice(0, mid));
    root.right = this.buildTree(dataArr.slice(mid + 1));
    return root;
  }
  insert(data) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      const searchTree = function (node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }
  remove(root, key) {
    if (root === null) {
      // case: tree undefined
      return root;
    }
    if (root.data < key) {
      // traverse to the target node in right direction
      root.right = this.remove(root.right, key);
    } else if (root.data > key) {
      // traverse to the target node in the left direction
      root.left = this.remove(root.left, key);
    } else if (root.left) {
      // case: target node has a leftward child
      root.data = this.#predecessor(root);
      root.left = this.remove(root.left, root.data);
    } else if (root.right) {
      // case: target node has a rightward child
      root.data = this.#successor(root);
      root.right = this.remove(root.right, root.data);
    } else {
      // case: target node is a leaf
      root = null;
    }
    return root;
  }
  find(data, root = this.root) {
    if (root === null) return null;

    if (root.data === data) return root;

    if (root.data > data) {
      // if the current node is bigger, go left as left children are smaller
      return this.find(data, root.left);
    } else if (root.data < data) {
      // if the current node is smaller go right as the right children are bigger
      return this.find(data, root.right);
    }
    return root;
  }
  levelOrder(root = this.root) {
    let queue = [];
    let levelOrderArr = [];
    if (root === null) return null;
    let currentNode = root;
    queue.push(currentNode);

    while (queue.length !== 0) {
      currentNode = queue.shift();
      levelOrderArr.push(currentNode.data);
      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }
      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }
    return levelOrderArr;
  }
  inorder(root = this.root) {
    if (root === null) return; // guard clause

    if (root.left !== null) {
      this.inorder(root.left);
    }
    if (root.data !== undefined) {
      this.inorderArr.push(root.data);
    }
    if (root.right !== null) {
      this.inorder(root.right);
    }
  }
  preorder(root = this.root) {
    if (root === null) return;

    if (root.data !== undefined) {
      this.preorderArr.push(root.data);
    }
    if (root.left !== null) {
      this.preorder(root.left);
    }
    if (root.right !== null) {
      this.preorder(root.right);
    }
  }
  postorder(root = this.root) {
    if (root === null) return;

    if (root.left !== null) {
      this.postorder(root.left);
    }
    if (root.right !== null) {
      this.postorder(root.right);
    }
    if (root.data !== undefined) {
      this.postorderArr.push(root.data);
    }
  }
  height(root = this.root) {
    // height of a binary tree is NOT the number of nodes in a depth but rather the number of BRANCHES to the bottom.
    // the number of branches is equal to the number of nodes -1. Therefore the base case needs to subtract 1 from the final count
    // of nodes. Hence return -1 rather than return null.
    if (root === null) {
      return -1;
    }
    let left = this.height(root.left);
    let right = this.height(root.right);
    return Math.max(left, right) + 1;
  }

  #successor(node) {
    node = node.right;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }
  #predecessor(node) {
    node = node.left;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

let inputNodes = sortNodes([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 324]);
let treeInstance = new Tree(inputNodes);
prettyPrint(treeInstance.root);

console.log(treeInstance.height());
