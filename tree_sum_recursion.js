import a from "./nodes.js";

const treeSum = (root) => {
  if (!root) return 0;

  return root.val + treeSum(root.left) + treeSum(root.right);
};

const sum = treeSum(a);
console.log(`sum:`, sum);
