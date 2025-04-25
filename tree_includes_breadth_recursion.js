import a from "./nodes.js";

const breadthFirstSearch = (root, target) => {
  if (!root) return false;
  if (root.val == target) return true;
  return (
    breadthFirstSearch(root.left, target) ||
    breadthFirstSearch(root.right, target)
  );
};

const values = breadthFirstSearch(a, "E");
console.log(`tree includes:`, values);
