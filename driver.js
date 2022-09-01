// this file just shows that the tree is able to rebalance when new nodes are inserted.
import { Tree, Node } from './treeMethods.js';
import { prettyPrint, sortNodes } from './utilities.js';

let inputNodes = sortNodes([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 324]);
let treeInstance = new Tree(inputNodes);
console.log(treeInstance.isBalanced());
console.log('level', treeInstance.levelOrder());
treeInstance.inorder();
treeInstance.preorder();
treeInstance.postorder();
console.log(
  'in',
  treeInstance.inorderArr,
  'pre',
  treeInstance.preorderArr,
  'post',
  treeInstance.postorderArr
);

treeInstance.insert(2);
treeInstance.insert(205);
treeInstance.insert(1000);

prettyPrint(treeInstance.root);
console.log(treeInstance.isBalanced());

treeInstance.rebalance();
console.log(treeInstance.isBalanced());

prettyPrint(treeInstance.root);

console.log('level', treeInstance.levelOrder());
treeInstance.inorder();
treeInstance.preorder();
treeInstance.postorder();

console.log(
  'in',
  treeInstance.inorderArr,
  'pre',
  treeInstance.preorderArr,
  'post',
  treeInstance.postorderArr
);
