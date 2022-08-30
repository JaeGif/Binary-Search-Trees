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
function sortNodes(nodeArr) {
  // removes duplicate elements of an input array and returns a sorted array
  if (typeof nodeArr[0] === 'string') {
    let nodeSet = [...new Set(nodeArr)];
    let sortedNodes = nodeSet.sort();
    return sortedNodes;
  }
  if (typeof nodeArr[0] === 'number') {
    let nodeSet = [...new Set(nodeArr)];
    // sort only works on strings with no args passed. Passing the comparison function to sort numbers
    let sortedNodes = nodeSet.sort(function (a, b) {
      return a - b;
    });
    return sortedNodes;
  }
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

export { sortNodes, prettyPrint };
