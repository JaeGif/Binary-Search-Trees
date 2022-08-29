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
  buildTree(nodeArr) {}
}

/* 1: Initialize start = 0, end = length of the array – 1
2: mid = (start+end)/2
3: Create a tree node with mid as root (lets call it A).
4: Recursively do following steps:
5: Calculate mid of left subarray and make it root of left subtree of A.
6: Calculate mid of right subarray and make it root of right subtree of A. */

function binarySearch(arr, val) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === val) {
      return mid;
    }

    if (val < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}
function removeDuplicateNodes(nodeArr) {
  let nodeSet = [...new Set(nodeArr)];

  console.log(nodeSet);
}
const prettyPrint = (node, prefix = '', isLeft = true) => {
  // visualize the binary tree
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
};

removeDuplicateNodes([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);

let treeInstance = new Tree();
