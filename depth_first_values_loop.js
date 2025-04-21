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

const depthFirstValues = (root) => {

    if (!root) return []

    const result = []
    const stack = [root]

    while (stack.length > 0) {
        const current = stack.pop()
        result.push(current.val)

        if (current.right) {
            stack.push(current.right)
        }
        if (current.left) {
            stack.push(current.left)
        }
    }

    return result;
}

const values = depthFirstValues(a)
console.log(`values:`, values)