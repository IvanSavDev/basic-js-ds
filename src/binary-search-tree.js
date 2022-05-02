const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(data) {
    function addNode(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (node.data < data) {
        node.right = addNode(node.right, data);
      } else {
        node.left = addNode(node.left, data);
      }

      return node;
    }

    this._root = addNode(this._root, data);
  }

  has(data) {
    function hasNode(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      return data < node.data ?
        hasNode(node.left, data) :
        hasNode(node.right, data);
    }

    return hasNode(this._root, data);
  }

  find(data) {
    function findNode(node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      return node.data < data ?
        findNode(node.right, data) :
        findNode(node.left, data);
    }

    return findNode(this._root, data);
  }

  remove(data) {
    this._root = removeNode(this._root, data);
    
    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else if (node.data > data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        if (!node.right && !node.left) {
          return null;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;

        node.right = removeNode(node.right, minFromRight.data);

        return node;
      }
    }
  }

  min() {
    if (!this._root) {
      return null;
    }

    let currentNode = this._root;
    while(currentNode.left) {
      currentNode = currentNode.left;
    }

    return currentNode.data;
  }

  max() {
    if (!this._root) {
      return null;
    }

    let currentNode = this._root;
    while(currentNode.right) {
      currentNode = currentNode.right;
    }

    return currentNode.data;
  }
}


module.exports = {
  BinarySearchTree
};