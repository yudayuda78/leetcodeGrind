/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    n = nums.length
    let prefix = new Array(n);
    let result = new Array(n);

    prefix[0] = 1
    for(let i = 1; i < n; i++){
        prefix[i] = prefix[i - 1] * nums[i - 1]
    }

    let suffix = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] = prefix[i] * suffix;
        suffix *= nums[i];
    }

    return result
    
};