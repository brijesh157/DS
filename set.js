// Creating set using set constructor
const set = new Set([1, 2, 3]);

// to add an element to set
set.add(4);

// to delete an element from set
set.delete(3);

//To check the element is present or not
console.log(set.has(4));

console.log(set.size);

for (const items of set) {
    console.log(items);
}

set.clear();

