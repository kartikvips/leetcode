function pingPongFilter(arr) {

    if (arr.length === 1) {
        return arr;
    }

    let res = [];

    for (var i = 0; i < arr.length; i++) {
        var el = arr[i];
        if (i % 2 !== 0) {
            res.unshift(el);
        }
    }

    return pingPongFilter(res);


}
console.log(pingPongFilter([1, 2, 3, 4, 5, 6, 7, 8]));

