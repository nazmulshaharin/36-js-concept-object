console.log(this);
const kibriya = {
  id: 101,
  money: 5000,
  name: 'RJ Kibriya',
  treatDeyArrow: () => {
   console.log(this);
  },
  treatDeyInside: function(){
  const myArrow = () => console.log(this);
  myArrow();
  },
  treatDey: function(expenses){
    this.money = this.money - expenses;
    console.log(this);
    return this.money;
  }
  }
  const heroBalam = {
    id: 102,
    money: 6000,
    name: 'Hero Balam',

  }

  function add(){
    console.log(this);
  }

  //this  regular execution context
  //regular method বাম পাশে যা আছে সেটাকে context হবে
  //arrow function হলে উপরের লেভেল অনুসারে context হবে
  //কোনো dom এ element এ ক্লিক করলে ,সেই event টা this বুঝাবে
  //dom এর element এর event টা কোনো event handler হলে(যেটা পরে execute হবে), তাহলে function টা calling উপর this নির্ভর করবে