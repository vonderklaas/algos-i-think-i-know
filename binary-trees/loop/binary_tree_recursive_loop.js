import a from "../utils/char_nodes";

const binaryTreeRecursiveLoop = (root) => {
  if (!root) return [];

  const leftValues = binaryTreeRecursiveLoop(root.left);
  const rightValues = binaryTreeRecursiveLoop(root.right);

  return [root.val, ...leftValues, ...rightValues];
};

const values = binaryTreeRecursiveLoop(a);
console.log(`values:`, values);
