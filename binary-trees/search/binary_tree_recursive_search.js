import a from "../utils/char_nodes";

const binaryTreeRecursiveSearch = (root, target) => {
  if (!root) return false;
  if (root.val == target) return true;
  return (
    binaryTreeRecursiveSearch(root.left, target) ||
    binaryTreeRecursiveSearch(root.right, target)
  );
};

const values = binaryTreeRecursiveSearch(a, "E");
console.log(`tree includes:`, values);
