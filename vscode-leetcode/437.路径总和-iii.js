/*
 * @lc app=leetcode.cn id=437 lang=javascript
 *
 * [437] 路径总和 III
 */

// @lc code=start
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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
  if (root === null) {
    return 0;
  }
  let count = 0;

  const dfs = (root, targetSum) => {
    if (!root) {
      return 0;
    }

    let count = 0;

    if (targetSum === root.val) {
      count++;
    }

    count += dfs(root.left, targetSum - root.val);
    count += dfs(root.right, targetSum - root.val);

    return count;
  };
  count += dfs(root, targetSum);
  count += pathSum(root.left, targetSum);
  count += pathSum(root.right, targetSum);
  return count;
};
// @lc code=end
