module.exports = (function() {
  const ListNode = require('./ListNode');

  let head = null;
  let tail = null;

  const insertNodeToHead = dataItem => {
    const node = ListNode();
    node.data = dataItem;

    // if List is empty
    if (head === null && tail === null) {
      head = node;
      tail = head;
      return;
    }

    if (head !== null) {
      node.nextNode = head;
      head = node;
      return;
    }
  };

  const insertNodeToTail = dataItem => {
    const node = ListNode();
    node.data = dataItem;

    // if List is empty
    if (head === null && tail === null) {
      head = node;
      tail = head;
      return;
    }

    if (tail !== null) {
      console.log('node : ' + JSON.stringify(node));
      console.log('tail : ' + JSON.stringify(tail));
      tail.nextNode = node;
      tail = node;
      return;
    }
  };

  const insertNodeToIndex = (dataItem, index) => {
    const node = ListNode();
    node.data = dataItem;

    // if List is empty
    if (head === null && tail === null) {
      head = node;
      tail = head;
      console.log('List is empty, so ignoring the index');
      return;
    }
    let tempNode = head;
    for (let i = 1; i <= index; i++) {
      tempNode = tempNode.nextNode;
    }
    node.nextNode = tempNode.nextNode;
    tempNode.next = node;
    return;
  };

  const inserNode = (dataItem, index) => {
    if (index) {
      insertNodeToIndex(dataItem, index);
    } else {
      insertNodeToTail(dataItem);
    }
  };

  const createList = dataItems => {
    dataItems.forEach(dataItem => {
      console.log('Data Item : ' + dataItem);
      inserNode(dataItem);
    });
  };

  const printList = () => {
    if (head === null) {
      console.log('List is empty');
      return;
    }

    let tempNode = head;
    let printString = '[';
    while (tempNode !== null) {
      printString += tempNode.data;
      tempNode.nextNode !== null ? (printString += ',') : null;
      tempNode = tempNode.nextNode;
    }
    printString += ' ]';
    console.log(printString);
  };

  return {
    printList,
    createList,
    inserNode
  };
})();
