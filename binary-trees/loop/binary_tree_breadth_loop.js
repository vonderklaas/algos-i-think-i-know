import a from "../utils/char_nodes";

const binaryTreeBreadthLoop = (root) => {
  if (!root) return [];

  const values = [];
  const queue = [root];

  while (queue.length > 0) {
    const current = queue.shift();
    values.push(current.val);

    if (current.left) {
      queue.push(current.left);
    }

    if (current.right) {
      queue.push(current.right);
    }
  }

  return values;
};

const values = binaryTreeBreadthLoop(a);
console.log(`values:`, values);
