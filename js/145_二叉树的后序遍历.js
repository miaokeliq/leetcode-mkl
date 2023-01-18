/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 * 递归法
 */
var postorderTraversal = function (root) {
  let res = [];
  const dfs = function (root) {
    if (root === null) return;
    dfs(root.left);
    dfs(root.right);
    res.push(root.val);
  };

  dfs(root);
  return res;
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 * 迭代法
 */
var postorderTraversal = function (root) {
  let res = [];
  if (!root) return res;
  let stack = [];
  stack.push(root);
  let cur = null;
  while (stack.length) {
    cur = stack.pop();
    if (cur != null) {
      res.push(cur.val);
    } else {
      continue;
    }
    stack.push(cur.left);
    stack.push(cur.right);
  }
  return res.reverse();
};
