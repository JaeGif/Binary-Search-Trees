import { prettyPrint, sortNodes } from './utilities.js';

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
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

/* 1: Initialize start = 0, end = length of the array – 1
2: mid = (start+end)/2
3: Create a tree node with mid as root (lets call it A).
4: Recursively do following steps:
5: Calculate mid of left subarray and make it root of left subtree of A.
6: Calculate mid of right subarray and make it root of right subtree of A. */

let inputNodes = sortNodes([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 324]);
let treeInstance = new Tree(inputNodes);
prettyPrint(treeInstance.root);

treeInstance.remove(treeInstance.root, 2);
prettyPrint(treeInstance.root);
