class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

// Create nodes
const a = new Node(3)
const b = new Node(11)
const c = new Node(4)
const d = new Node(4)
const e = new Node(2)
const f = new Node(1)

// Connections
a.left = b
a.right = c
b.left = d
b.right = e
c.right = f

/**
 * Strategy: Dive as deep as possible down one branch before backtracking.
 * Data Structure Used: Stack (LIFO) — either explicitly like in your code, or implicitly via recursion.
 */

const treeSum = (root) => {

    if (!root) return 0;

    return root.val + treeSum(root.left) + treeSum(root.right);
}

const sum = treeSum(a)
console.log(`sum:`, sum)