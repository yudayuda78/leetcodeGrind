/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let arrword1 = word1.split("").join(" ").split("")
    let arrword2 = [" ", ...word2.split("").join(" ").split("")]
    

let w1 = arrword1.filter(ch => ch.trim() !== '');
let w2 = arrword2.filter(ch => ch.trim() !== '');

let result = '';

// gabungkan selang-seling
for (let i = 0; i < Math.max(w1.length, w2.length); i++) {
  if (w1[i]) result += w1[i];
  if (w2[i]) result += w2[i];
}

return result
};