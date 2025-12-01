/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let i = 0
    let j = height.length - 1
    let high = 0
    while (i < j){
        let minimal = Math.min(height[i], height[j])
        let distance = j - i
        let max = minimal * distance
        if(max > high){
            high = max
        }

        if (height[i] < height[j]) {
            i++
        } else {
            j--
        }
    }

    return high
};