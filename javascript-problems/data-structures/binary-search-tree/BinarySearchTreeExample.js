async function binarySearchTreeExample() {
  let binarySearchTree = require('./BinarySearchTree');

  const dataItems = [10, 1, 5, 11, 15, 16, 21, 22, 4, 8];
  let result = await binarySearchTree.createBinarySearchTree(dataItems);
  binarySearchTree.printTree('IN_ORDER');
  binarySearchTree.printTree('PRE_ORDER');
  binarySearchTree.printTree('POST_ORDER');
  binarySearchTree.printTree('DESCENDING');
}

binarySearchTreeExample();
