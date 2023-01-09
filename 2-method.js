const student = {
  id: 101,
  name: 'RJ Kibriya',
  major: 'mathmatics',
  money: 5000,
  isRich: false,
  subject: ['english', 'ecconomics', 'math'],
  bestFriend: {
    name: 'shahed',
    major: 'mathmatics'
  },
takeExam: function () {
  console.log(this.name, 'taking exam')
},
treatDey: function(expenses, boksis){
  this.money = this.money - expenses - boksis;
  return this.money;
}
}
student.takeExam();

const remaining = student.treatDey(300, 50);
console.log(remaining);