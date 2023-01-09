const bottle = {color: 'yellow', hold: 'water', price: 50, isCleaned: true};
const keys = Object.keys(bottle);
const values = Object.values(bottle);
const pairs = Object.entries(bottle);
console.log(keys);
console.log(values);
console.log(pairs);

//for delete and seal
//Object.seal(bottle);
Object.freeze(bottle);
bottle.price = 100;
delete bottle.isCleaned;
console.log(bottle);