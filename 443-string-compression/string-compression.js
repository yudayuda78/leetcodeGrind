/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let result = []
    let i = 0
    let writeIndex = 0
    while(i < chars.length){
        read = 0
        write = chars[i]
        while(chars[i] === write){
            read++
            i++
        }

        const stringRead = String(read)

        chars[writeIndex] = write
        writeIndex++

        if (read > 1) {
            for (let digit of stringRead) {
                chars[writeIndex] = digit
                writeIndex++
            }
        }

        
    }
    return writeIndex
};