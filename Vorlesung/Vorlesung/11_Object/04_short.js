const name = "Michael";
const hobby = "Wandern";

console.log({name: name, hobby: hobby});  // { name: 'Michael', hobby: 'Wandern' }
console.log({name, hobby}); // { name: 'Michael', hobby: 'Wandern' }

// use value as key with []
console.log({[name]: name, [1 + 1]: hobby}); // { '2': 'Wandern', Michael: 'Michael' }
