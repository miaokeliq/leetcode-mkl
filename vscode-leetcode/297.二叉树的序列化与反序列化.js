/*
 * @lc app=leetcode.cn id=297 lang=javascript
 *
 * [297] 二叉树的序列化与反序列化
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  return rserialize(root, "");
};

function rserialize(root, str) {
  // Implement
  if (root === null) {
    str += "none,";
  } else {
    str += root.val + ",";
    str = rserialize(root.left, str);
    str = rserialize(root.right, str);
  }
  return str;
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  let dataArray = data.split(",");
  return rdeserialize(dataArray);
};

function rdeserialize(dataArray) {
  // Implement
  if (dataArray[0] === "none") {
    dataArray.shift();
    return null;
  }
  let root = new TreeNode(parseInt(dataArray[0]));
  dataArray.shift();
  root.left = rdeserialize(dataArray);
  root.right = rdeserialize(dataArray);

  return root;
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end
