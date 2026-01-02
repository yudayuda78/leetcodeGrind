/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let al = [0]
    for(i = 0; i < gain.length; i++){
        let jumlah = gain[i] + al[i]
        al.push(jumlah)

    }
    let max = Math.max(...al)
    return max
};