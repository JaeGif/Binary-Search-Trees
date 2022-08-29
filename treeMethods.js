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
  buildTree(nodeArr) {
    let start = 0;
    let end = nodeArr.length - 1;
    let mid = Math.floor((start + end) / 2); // in case the input array had no defined midpoint
    console.log(mid);
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
console.log(inputNodes);
