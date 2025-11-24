/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let array = s.split(" ")
    array.reverse()

    for(let i = 0; i< array.length; i++){
        if(array[0] === ""){
            array.shift()
            i--
        }

        if(array[array.length-1] === ""){
            array.pop()
            i--
        }

        if(array[i] === ""){
            array.splice(i, 1)
            i--
        }
    }
    console.log(array)
    let result = array.join(" ")
    return result
};