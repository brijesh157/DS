const obj = {
    name: 'Brijesh',
    age: 25,
    "key-three": false,
    sayMyName: function () {
        //Here this refers to current object
        console.log(this.name);
    }
}

obj.hobby = 'football';
obj['check'] = 'mate';

console.log(obj.name);
console.log(obj['age']);
//Square brackets are used when key contains space or dash.
console.log(obj['key-three']);
console.log(obj);
obj.sayMyName();

//Here delete is used to delete the key from object.
delete obj.hobby;


//Object.keys()  .values()  .entries() 
