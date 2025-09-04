const map = new Map([['a', 1], ['b', 2]]);

// To add a key-value pair into the map.
map.set('c', 3);

//To check the element is present or not
console.log(map.has('a'));

console.log(map.size);

for (const [key, value] of map) {
    console.log(`${key}: ${value}`);
}

// to delete an element from map
map.delete('c');

map.clear();
