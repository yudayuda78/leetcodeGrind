/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let i = 0
    let j = needle.length

    while(j <= haystack.length){
        let huruf = haystack.slice(i, j)
        if(huruf === needle){
            return i
        }else{
            i++
            j++
        }
    }

    return -1
};