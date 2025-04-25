import a from "./nodes.js";

const breadthFirstSearch = (root, target) => {
  if (!root) return false;

  const queue = [root];

  while (queue.length > 0) {
    const current = queue.shift();
    if (current.val == target) {
      return true;
    }

    if (current.left) {
      queue.push(current.left);
    }
    if (current.right) {
      queue.push(current.right);
    }
  }

  return false;
};

const values = breadthFirstSearch(a, "E");
console.log(`tree includes:`, values);
