/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let i = 0
    let j = k -1
    let sum = 0

    for (let x = 0; x < k; x++) {
        sum += nums[x];
    }

    let max = sum;

    
    while (j < nums.length - 1) {
        sum = sum - nums[i] + nums[j + 1];
        i++;
        j++;
        max = Math.max(max, sum);
    }

    return max / k;
};