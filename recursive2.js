const sum4 = (tableau) => {
    let sum = 0;
    for (let i = 0; i < tableau.length; i++) {
        sum += tableau[i];
    }
    return sum;
};

console.log(sum4([2, 5, 2]))

const sum5 = (arr) => {
    if (arr.length === 1) {
        return arr.pop();
    }
    else {
        return arr.shift() + sum5(arr)
    }
}
console.log(sum5([2, 5, 8]))

