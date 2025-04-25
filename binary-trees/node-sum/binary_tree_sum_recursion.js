import a from "../utils/char_nodes";

const binaryTreeSumRecursion = (root) => {
  if (!root) return 0;

  return root.val + binaryTreeSumRecursion(root.left) + binaryTreeSumRecursion(root.right);
};

const sum = binaryTreeSumRecursion(a);
console.log(`sum:`, sum);
