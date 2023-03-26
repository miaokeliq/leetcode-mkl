/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
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
 * @return {number}
 */

var maxPathSum = function (root) {
  let maxVal = Number.MIN_SAFE_INTEGER;

  const dfs = (root) => {
    // Implement
    if (!root) {
      return 0;
    }
    let left = Math.max(0, dfs(root.left));
    let right = Math.max(0, dfs(root.right));
    let threeSum = left + right + root.val;
    let childSum = root.val + Math.max(left, right);
    let maxSum = Math.max(threeSum, childSum);

    maxVal = Math.max(maxVal, maxSum);
    return childSum;
  };

  dfs(root);
  return maxVal;
};

// @lc code=end
