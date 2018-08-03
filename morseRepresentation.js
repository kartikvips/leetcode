var uniqueMorseRepresentations = function (words) {
    let inMorse = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];

    let res = [];
    for (let i = 0; i < words.length; i++) {
        let coded = "";
        let word = words[i];
        for (let i = 0; i < word.length; i++) {
            let code = word.charCodeAt(i);
            coded += inMorse[code - 97];
        }
        if (res.indexOf(coded) === -1) {
            res.push(coded);
        }
    }
    return res.length;
};
