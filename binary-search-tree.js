// Do not change this
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val, currentNode = this.root) {
        if (this.root === null) {
            this.root = new TreeNode(val);
            return;
        } else {
            if (val < currentNode.val) {
                if (!currentNode.left) currentNode.left = new TreeNode(val)
                else this.insert(val, currentNode.left)
            } else {
                if (!currentNode.right) currentNode.right = new TreeNode(val)
                else {
                    this.insert(val, currentNode.right)
                }
            }
        }
    }

    search(val) {
        let currentNode = this.root
        while (currentNode) {
            if (val < currentNode.val) {
                currentNode = currentNode.left;
            } else if (val > currentNode.val) {
                currentNode = currentNode.right
            } else {
                return true;
            }
        }
        return false;
    }


    preOrderTraversal(currentNode = this.root) {
        if (currentNode === null) return //basecase

        console.log(currentNode.val) //print first

        this.preOrderTraversal(currentNode.left)
        this.preOrderTraversal(currentNode.right)

    }


    inOrderTraversal(currentNode = this.root) {
        if (currentNode === null) return

        this.inOrderTraversal(currentNode.left)

        console.log(currentNode.val) //print middle

        this.inOrderTraversal(currentNode.right)

    }


    postOrderTraversal(currentNode = this.root) {
        if (currentNode === null) return

        this.postOrderTraversal(currentNode.left)
        this.postOrderTraversal(currentNode.right)

        console.log(currentNode.val) //print last


    }

    // Breadth First Traversal - Iterative
    breadthFirstTraversal() {


        // Put the starting node in a queue
        const queue = [];
        queue.push(this.root);

        // While the queue is not empty
        while (queue.length > 0) {

            // Dequeue a node and print it
            let node = queue.shift();
            console.log(node.val);

            // Put all of the node's children in the back of the queue
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
    }


    // Depth First Traversal - Iterative
    depthFirstTraversal() {



        // Put the starting node in a queue
        const queue = [this.root];

        // While the queue is not empty
        while (queue.length > 0) {

            // Dequeue a node and print it
            let node = queue.pop();
            console.log(node.val);

            // Put all of the node's children in the back of the queue
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
    }
}

module.exports = { BinarySearchTree, TreeNode };
