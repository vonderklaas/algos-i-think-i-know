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

const breadthFirstValues = (root) => {

    if (!root) return [];

    const values = []
    const queue = [root]

    while (queue.length > 0) {
        const current = queue.shift()
        values.push(current.val)

        if (current.left) {
            queue.push(current.left)
        }

        if (current.right) {
            queue.push(current.right)
        }
    }

    return values

}

const values = breadthFirstValues(a)
console.log(`values:`, values)