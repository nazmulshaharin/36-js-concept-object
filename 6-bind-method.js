const kibriya = {
  id: 101,
  money: 5000,
  name: 'RJ Kibriya',
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
  const shaharin = {
    id: 103,
    money: 8000,
    name: 'shaharin',

  }
  kibriya.treatDey(100);

  const heroTreatDe = kibriya.treatDey.bind(heroBalam);
  const shahrinTreatde = kibriya.treatDey.bind(shaharin)
  heroTreatDe(500);
  heroTreatDe(300);
  shahrinTreatde(2000);
  kibriya.treatDey(300);
  