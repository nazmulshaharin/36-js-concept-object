const kibriya = {
  id: 101,
  money: 5000,
  name: 'RJ Kibriya',
  treatDey: function(expenses, boksis, tax){
    this.money = this.money - expenses - boksis - tax;
    console.log(this);
    return this.money;
  }
  }

  const heroBalam = {
    id: 102,
    money: 6000,
    name: 'Hero Balam',

  }
  const shaharin = {
    id: 103,
    money: 8000,
    name: 'shaharin',

  }
  //call
 // kibriya.treatDey.call(heroBalam, 500, 300, 20);
 // kibriya.treatDey.call(heroBalam, 700, 200, 20);

  //apply
  kibriya.treatDey.apply(heroBalam, [500, 100, 20]);
  kibriya.treatDey.apply(shaharin, [700, 200, 100])