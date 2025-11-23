/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowel = s.match(/[aiueo]/gi)
    if (!vowel) return s;
    vowel.reverse()
    let chars = s.split("");
    
    for (let i = 0; i < chars.length; i++) {
        if ("aeiouAEIOU".includes(chars[i])) {
            chars[i] = vowel[0];
            vowel.shift();
        }
    }
    
    return chars.join("");

    

    
};