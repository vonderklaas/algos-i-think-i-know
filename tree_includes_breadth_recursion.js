class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

// Create nodes
const a = new Node("A")
const b = new Node("B")
const c = new Node("C")
const d = new Node("D")
const e = new Node("E")
const f = new Node("F")

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

const breadthFirstSearch = (root, target) => {
    if (!root) return false
    if (root.val == target) return true
    return breadthFirstSearch(root.left, target) || breadthFirstSearch(root.right, target)
}

const values = breadthFirstSearch(a, "E")
console.log(`tree includes:`, values)