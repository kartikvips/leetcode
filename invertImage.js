var flipAndInvertImage = function (A) {
    let res = [];
    for (let i = 0; i < A.length; i++) {
        let curr = A[i];
        let flipt = [];
        for (let j = curr.length - 1; j >= 0; j--) {
            if (curr[j] === 1) {
                flipt.push(0);
            } else {
                flipt.push(1);
            }

        }
        res.push(flipt);
    }
    return res;
};
