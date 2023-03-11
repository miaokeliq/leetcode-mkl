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
 * @return {number[]} 递归法
 */
var inorderTraversal = function (root) {
  let res = [];
  const dfs = function (root) {
    if (root === null) return;
    dfs(root.left);
    res.push(root.val);
    dfs(root.right);
  };

  dfs(root);
  return res;
};

/**
 * @param {TreeNode} root
 * @return {number[]} 迭代法
 */
var inorderTraversal = function (root) {
  let res = [];
  let stack = [];
  let cur = root;
  while (cur != null || stack.length != 0) {
    //因为只有同时为空才结束，所以这里while判断应该是或
    if (cur != null) {
      stack.push(cur);
      cur = cur.left;
    } else {
      cur = stack.pop();
      res.push(cur.val);
      cur = cur.right;
    }
  }
  return res;
};
