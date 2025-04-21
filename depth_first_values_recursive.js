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

const depthFirstValues = (root) => {

    if (!root) return []

    const leftValues = depthFirstValues(root.left)
    const rightValues = depthFirstValues(root.right)

    return [root.val, ...leftValues, ...rightValues]

}

const values = depthFirstValues(a)
console.log(`values:`, values)