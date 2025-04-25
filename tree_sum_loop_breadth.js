import a from "./utils/nodes.js";

const treeSum = (root) => {
  if (!root) return 0;

  let totalSum = 0;
  const queue = [root];

  while (queue.length > 0) {
    const current = queue.shift();
    totalSum += current.val;

    if (current.left) {
      queue.push(current.left);
    }

    if (current.right) {
      queue.push(current.right);
    }
  }

  return totalSum;
};

const sum = treeSum(a);
console.log(`sum:`, sum);