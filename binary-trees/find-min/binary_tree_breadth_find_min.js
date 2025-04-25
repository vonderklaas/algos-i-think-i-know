import a from "./utils/int_nodes.js";

const binaryTreeBreadthFindMind = (root) => {
  let minValue = Infinity;
  const queue = [root];

  while (queue.length > 0) {
    const current = queue.shift();

    if (current.val < minValue) {
      minValue = current.val;
    }

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }

  return minValue;
};

const min = binaryTreeBreadthFindMind(a);
console.log(`min:`, min);
