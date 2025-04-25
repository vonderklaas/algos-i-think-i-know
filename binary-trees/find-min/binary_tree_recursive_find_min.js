import a from "./utils/int_nodes.js";

const binaryTreeRecursiveFindMin = (root) => {
    if (!root) {
        return Infinity
    }

    const leftMin = binaryTreeRecursiveFindMin(root.left)
    const rightMin = binaryTreeRecursiveFindMin(root.right)

    return Math.min(root.val, leftMin, rightMin)
};

const min = binaryTreeRecursiveFindMin(a);
console.log(`min:`, min);
