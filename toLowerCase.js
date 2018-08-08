var toLowerCase = function (str) {

    let out = [];
    for (let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i);
        if (code < 91 && code >= 65) {
            out.push(String.fromCharCode(code + 32));
        } else {
            out.push(str[i]);
        }
    }
    return out.join("");

};