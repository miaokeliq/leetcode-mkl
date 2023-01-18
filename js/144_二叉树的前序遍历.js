/*
* 给你二叉树的根节点 root ，返回它节点值的 前序 遍历。

*
*/

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
 *  递归法
 */
var preorderTraversal1 = function (root) {
  let res = [];
  // dfs = 深度优先搜索 ，遇到最后空结点(null)就返回
  const dfs = function (root) {
    if (root === null) return;
    res.push(root.val);
    dfs(root.left);
    dfs(root.right);
  };

  dfs(root);
  return res;
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 *  迭代法
 */
var preorderTraversal2 = function (root) {
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
    stack.push(cur.right);
    stack.push(cur.left);
  }
  return res;
};
