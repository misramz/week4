import _ from 'lodash';

// console.log(_.VERSION);

var names = ['Tim', 'Boyzie', 'Benjie', 'Jeff', 'Nisa', 'Thomas'];

var people = [
  { name: 'Tim', age: 30 },
  { name: 'Bill', age: 50 },
  { name: 'Greg', age: 29 },
  { name: 'Lisa', age: 32 }
];

var bill = {
  name: 'Bill',
  location: 'Atlanta',
  age: 29,
  favorite_color: 'blue'
};

var first = _.first(people);
console.log("first", first);
