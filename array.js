const arr = [1, 2, 3, 4, 'Brijesh'];

arr.shift(); // To remove element from the begining

arr.unshift(0); // To insert element in the begining

arr.push(5); // To insert element in the end

arr.pop(); // To remove element from the end

//To iterate over the array
for (const items of arr) {
    console.log(items);
}
