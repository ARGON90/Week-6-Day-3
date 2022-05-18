const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST(rootNode) {

  // Put the starting node in a queue
  const queue = [];
  queue.push(rootNode);
  let currentMin = rootNode.val

  // While the queue is not empty
  while (queue.length > 0) {

    // Dequeue a node and print it
    let node = queue.shift();
    if (node.val < currentMin) {
      currentMin = node.val
    }

    // Put all of the node's children in the back of the queue
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }
  return currentMin
}

function findMaxBST(rootNode) {
  // Put the starting node in a queue
  const queue = [];
  queue.push(rootNode);
  let currentMax = rootNode.val

  // While the queue is not empty
  while (queue.length > 0) {

    // Dequeue a node and print it
    let node = queue.shift();
    if (node.val > currentMax) {
      currentMax = node.val
    }

    // Put all of the node's children in the back of the queue
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }
  return currentMax
}

function findMinBT(rootNode) {
  // Put the starting node in a queue
  const queue = [];
  queue.push(rootNode);
  let currentMin = rootNode.val

  // While the queue is not empty
  while (queue.length > 0) {

    // Dequeue a node and print it
    let node = queue.shift();
    if (node.val < currentMin) {
      currentMin = node.val
    }

    // Put all of the node's children in the back of the queue
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }
  return currentMin
}

function findMaxBT(rootNode) {
  // Put the starting node in a queue
  const queue = [];
  queue.push(rootNode);
  let currentMax = rootNode.val

  // While the queue is not empty
  while (queue.length > 0) {

    // Dequeue a node and print it
    let node = queue.shift();
    if (node.val > currentMax) {
      currentMax = node.val
    }

    // Put all of the node's children in the back of the queue
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }
  return currentMax
}

function getHeight(rootNode) {
  const queue = [];
  queue.push(rootNode);
  let count = 0

  while (queue.length > 0) {
    for (let i = 0; i < queue.length; i++) {
      let node = queue.shift();

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }
    count++
  }
  return count - 1
}


function countNodes(rootNode) {
  const queue = [];
  queue.push(rootNode);
  let count = 1

  while (queue.length > 0) {

    let node = queue.shift();

    if (node.left) {
      queue.push(node.left);
      count++
    }

    if (node.right) {
      queue.push(node.right);
      count++
    }

  }
  return count
}

function balancedTree(rootNode) {


  //return Math.log2(countNodes(rootNode)) >= (getHeight(rootNode))
  
 if ((!rootNode.left && !rootNode.right) || !rootNode) {
  return true
}
  else if (!rootNode.left && getHeight(rootNode.right) > 1) {
    return false
  } else if (!rootNode.right && getHeight(rootNode.left) > 1) {
    return false
  } else return (Math.abs(getHeight(rootNode.left) - getHeight(rootNode.right))) < 1

}

function getParentNode(rootNode, target) {
  // Your code here
}

function inOrderPredecessor(rootNode, target) {
  // Your code here
}


function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent

  // Undefined if the target cannot be found

  // Set target based on parent

  // Case 0: Zero children and no parent:
  //   return null

  // Case 1: Zero children:
  //   set the parent that points to it to null

  // Case 2: Two children:
  //   set the value to its in-order predecessor, then delete the predecessor

  // Case 3: One child:
  //   Make the parent point to the child

}

module.exports = {
  findMinBST,
  findMaxBST,
  findMinBT,
  findMaxBT,
  getHeight,
  countNodes,
  balancedTree,
  getParentNode,
  inOrderPredecessor,
  deleteNodeBST
}
