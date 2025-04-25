import a from "./utils/int_nodes.js";

const binaryTreeDepthFindMin = (root) => {
  let minValue = Infinity;
  const stack = [root];

  while (stack.length > 0) {
    const current = stack.pop();

    if (current.val < minValue) {
      minValue = current.val;
    }

    if (current.left) stack.push(current.left);
    if (current.right) stack.push(current.right);
  }

  return minValue;
};

const min = binaryTreeDepthFindMin(a);
console.log(`min:`, min);
