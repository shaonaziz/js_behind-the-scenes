'use strict';

//Primitive Type
let age=30;
let oldAge=age;
age=31;
console.log(age);
console.log(oldAge);


//Reference type
const me={
    name:'shaon',
    age:25,
    family:['forhad','poly']
}

// const friend=me;
// friend.age=24;
// console.log('me:',me);
// console.log('friends:',friend);
//Both object age is 27 because new friend object also point the same adrress in the heap


//if want the same object copy then change the attribute of that particular object then we can use object.assign() method

const copyMe=Object.assign({},me);
copyMe.age=24;
copyMe.family.push('x');
copyMe.family.push('y');
console.log('Me:',me);
console.log('Copyme:',copyMe);

//But there is problem with object inside a object it can be solved with object.assign() method, so for deep cloning we have to use external Js library.

