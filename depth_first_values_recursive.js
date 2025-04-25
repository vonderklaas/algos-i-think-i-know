import a from "./nodes.js";

const depthFirstValues = (root) => {
  if (!root) return [];

  const leftValues = depthFirstValues(root.left);
  const rightValues = depthFirstValues(root.right);

  return [root.val, ...leftValues, ...rightValues];
};

const values = depthFirstValues(a);
console.log(`values:`, values);
