const arr = [3, 5, 2, 3, 7, 5, 9];

let duplicate = [];

arr.forEach(item => {

    if (arr.indexOf(item) !== arr.lastIndexOf(item)) {
        if (!duplicate.includes(item)) {
            duplicate.push(item);
        }
    }
})

console.log(duplicate);