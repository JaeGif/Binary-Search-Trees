import { prettyPrint, sortNodes } from './utilities.js';

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }
  buildTree(dataArr) {
    const start = 0;
    const end = dataArr.length - 1;
    const mid = Math.floor((start + end) / 2);

    this.root = new Node(dataArr[mid]);
    return this.root;
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
}

/* 1: Initialize start = 0, end = length of the array – 1
2: mid = (start+end)/2
3: Create a tree node with mid as root (lets call it A).
4: Recursively do following steps:
5: Calculate mid of left subarray and make it root of left subtree of A.
6: Calculate mid of right subarray and make it root of right subtree of A. */

let inputNodes = sortNodes([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
let treeInstance = new Tree();
treeInstance.buildTree(inputNodes);

prettyPrint(treeInstance.root);
