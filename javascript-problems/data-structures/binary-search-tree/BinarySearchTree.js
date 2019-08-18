module.exports = (function() {
  const TreeNode = require('./TreeNode');
  let root = null;

  const addNode = data => {
    const node = TreeNode();
    node.data = data;
    // console.log('AddNode -> Node: ' + JSON.stringify(node));

    //root is empty
    if (root === null) {
      root = node;
      return;
    } else {
      addNodeToTree(root, data);
    }
  };

  const addNodeToTree = (rootNode, data) => {
    // console.log('addNodeToTree -> rootNode: ' + JSON.stringify(rootNode));
    if (data <= rootNode.data) {
      if (rootNode.left === null) {
        const node = TreeNode();
        node.data = data;
        rootNode.left = node;
        return;
      } else {
        return addNodeToTree(rootNode.left, data);
      }
    } else {
      if (rootNode.right === null) {
        const node = TreeNode();
        node.data = data;
        return (rootNode.right = node);
      } else {
        return addNodeToTree(rootNode.right, data);
      }
    }
  };

  const printTree = order => {
    printString = '';
    switch (order) {
      case 'IN_ORDER':
        printInOrderTraversal(root);
        console.log(`IN_ORDER TRAVERSAL: [${printString} ]`);
        break;
      case 'PRE_ORDER':
        printPreOrderTraversal(root);
        console.log(`PRE_ORDER TRAVERSAL: [${printString} ]`);
        break;
      case 'POST_ORDER':
        printPostOrderTraversal(root);
        console.log(`POST_ORDER TRAVERSAL: [${printString} ]`);
        break;
      case 'printInOrderTraversalReverse':
        printInOrderTraversalReverse(root);
        console.log(`PRINTING IN DESCENDING ORDER: [${printString} ]`);
        break;

      default:
        console.log('Proper Order is not provided, so processing inorder');
        printInOrderTraversal(root);
        console.log(`PRINTING IN DESCENDING ORDER: [${printString} ]`);
        break;
    }
  };
  let printString = '';
  const printInOrderTraversal = currentNode => {
    if (!currentNode || currentNode === null) {
      return;
    }
    // console.log(
    //   'printInOrderTraversal -> Current Node: ' + JSON.stringify(currentNode)
    // );
    printInOrderTraversal(currentNode.left);
    //console.log(currentNode.data + ', ');
    printString += currentNode.data + ', ';
    printInOrderTraversal(currentNode.right);
  };

  const printInOrderTraversalReverse = currentNode => {
    if (!currentNode || currentNode === null) {
      return;
    }
    // console.log(
    //   'printInOrderTraversal -> Current Node: ' + JSON.stringify(currentNode)
    // );
    printInOrderTraversal(currentNode.right);
    //console.log(currentNode.data + ', ');
    printString += currentNode.data + ', ';
    printInOrderTraversal(currentNode.left);
  };

  const printPreOrderTraversal = currentNode => {
    if (!currentNode || currentNode === null) {
      return;
    }
    // console.log(
    //   'printPreOrderTraversal -> Current Node: ' + JSON.stringify(currentNode)
    // );
    //console.log(currentNode.data + ' ');
    printString += currentNode.data + ', ';
    printPreOrderTraversal(currentNode.left);
    printPreOrderTraversal(currentNode.right);
  };

  const printPostOrderTraversal = currentNode => {
    if (!currentNode || currentNode === null) {
      return;
    }
    // console.log(
    //   'printPostOrderTraversal -> Current Node: ' + JSON.stringify(currentNode)
    // );
    printPostOrderTraversal(currentNode.left);
    printPostOrderTraversal(currentNode.right);
    //console.log(currentNode.data + ' ');
    printString += currentNode.data + ', ';
  };

  const createBinarySearchTree = async dataItems => {
    dataItems.forEach(dataItem => {
      addNode(dataItem);
    });
    return;
  };

  return {
    addNode,
    createBinarySearchTree,
    printTree,
    printInOrderTraversal,
    printPreOrderTraversal,
    printPostOrderTraversal
  };
})();
