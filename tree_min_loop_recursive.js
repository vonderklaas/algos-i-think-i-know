import a from "./utils/int_nodes.js";

const treeMinValueRecursive = (root) => {
    if (!root) {
        return Infinity
    }

    const leftMin = treeMinValueRecursive(root.left)
    const rightMin = treeMinValueRecursive(root.right)

    return Math.min(root.val, leftMin, rightMin)
};

const min = treeMinValueRecursive(a);
console.log(`min:`, min);
