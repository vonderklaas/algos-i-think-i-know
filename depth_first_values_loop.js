import a from "./nodes.js";

const depthFirstValues = (root) => {
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

const values = depthFirstValues(a);
console.log(`values:`, values);
