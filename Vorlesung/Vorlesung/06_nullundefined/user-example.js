const userList = require('./user');
console.log(userList.get(0));
console.log(userList.update(0, {birthday: "19.05.1986"}));
console.log(userList.update(0, {name : undefined, birthday: "19.05.1986"}));
console.log(userList.update(0, {name : null, birthday: "19.05.1986"}));