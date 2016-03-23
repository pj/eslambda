Array.prototype.then = function (func) {
    let result = [];
    for (let x of this) {
        let y = func(x);
        for (let z of y) {
            result.push(z);
        }
    }
    return result;
}
