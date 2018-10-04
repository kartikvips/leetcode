var reverseString = function (s) {
    // return s.split("").reverse().join("");
    let ret = "";
    for (let i = s.length - 1; i >= 0; i--) {
        ret += s[i];
    }
    return ret;
};