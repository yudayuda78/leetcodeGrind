/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
 let write = 0;
    let read = 0;

    while (read < chars.length) {
        let char = chars[read];
        let count = 0;

        // hitung consecutive chars
        while (read < chars.length && chars[read] === char) {
            read++;
            count++;
        }

        // tulis karakter
        chars[write++] = char;

        // kalau lebih dari 1, tulis angkanya per digit
        if (count > 1) {
            for (let c of String(count)) {
                chars[write++] = c;
            }
        }
    }

    return write; 
};