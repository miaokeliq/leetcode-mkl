/*
* 给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。

返回 滑动窗口中的最大值 。

 

示例 1：

输入：nums = [1,3,-1,-3,5,3,6,7], k = 3
输出：[3,3,5,5,6,7]
解释：
滑动窗口的位置                最大值
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
示例 2：

输入：nums = [1], k = 1
输出：[1]*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  class MonoQueue {
    queue; // 这里的队列用数组来实现
    constructor() {
      this.queue = [];
    }
    // 单调队列 push 元素
    enqueue(value) {
      let back = this.queue[this.queue.length - 1]; //获取队列入口处的元素
      while (this.queue.length != 0 && back < value) {
        //首先判断队列是否为空，再判断要加入的元素是否大于队尾的元素。
        this.queue.pop(); // pop()是弹出队尾的元素
        back = this.queue[this.queue.length - 1];
      }
      this.queue.push(value);
    }
    // 每次弹出的时候，比较当前要弹出的数值是否等于队列出口元素的数值，如果相等则弹出
    // 同时pop之前判断队列当前是否为空。
    dequeue(value) {
      let front = this.front(); // 获取队列头部元素
      if (front === value) {
        this.queue.shift(); // 弹出队列头部元素
      }
    }
    front() {
      return this.queue[0];
    }
  }

  let helperQueue = new MonoQueue(); //创建单调队列
  let i = 0,
    j = 0;
  let resArr = []; //存取最大值结果的数组;
  while (j < k) {
    // 先加入前k个数据进入单调队列
    helperQueue.enqueue(nums[j++]);
  }
  resArr.push(helperQueue.front()); // 此时单调队列头部的元素就是最大值
  while (j < nums.length) {
    helperQueue.enqueue(nums[j]); // j指向要加入滑动窗口的元素
    helperQueue.dequeue(nums[i]); // i指向要弹出滑动窗口的元素
    resArr.push(helperQueue.front()); // 返回单调队列头部的元素，加入到结果数组
    i++, j++;
  }
  return resArr;
};

console.log(maxSlidingWindow(nums, k));
