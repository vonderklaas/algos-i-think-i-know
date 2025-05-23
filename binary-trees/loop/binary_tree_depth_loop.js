import a from "../utils/char_nodes";

const binaryTreeDepthLoop = (root) => {
  if (!root) return [];

  const values = [];
  const stack = [root];

  while (stack.length > 0) {
    const current = stack.pop();
    values.push(current.val);

    if (current.right) {
      stack.push(current.right);
    }
    if (current.left) {
      stack.push(current.left);
    }
  }

  return values;
};

const values = binaryTreeDepthLoop(a);
console.log(`values:`, values);
