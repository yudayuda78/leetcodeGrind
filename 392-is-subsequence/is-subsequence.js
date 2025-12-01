/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    i = 0
    j = 0
    let result = []
    while(i < s.length && j < t.length){
      
        if(s[i] === t[j]){
            result.push(t[j])
            i++
        }
        j++
      
    }
    result2 = result.join('')
    if(result2 === s){
        return true
    }else{
        return false
    }
};