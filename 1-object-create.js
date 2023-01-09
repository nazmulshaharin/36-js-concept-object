//1 using object literal
const student = {name: 'jahid', job: 'cricketer'};
// constructor
const person = new Object();
//2
console.log(person)
//3
//const  human = Object.create(null);
const  human = Object.create(student);
console.log(human.job);
//4
class people {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
}
const peo = new people('manush', 12);
console.log(peo);

//function
function manush(name){
  this.name = name;
}
const man = new manush('shaharin');
console.log(man);