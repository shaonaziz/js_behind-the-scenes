"use strict";
// ----SCOPING----
function calcAge(birthYear) {
  const age = 2021 - birthYear;
  function printAge() {
    let output = `${firstName},you are ${age} year old and born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1992 && birthYear <= 2001) {
      const str = `oh! you are selected!`;
      const haveLicense = true;
      const firstName = "Shaon";
      console.log(`${str},${firstName}`); // here Two FirstName variable but 1st it will search in the if block statement then it will lookup in parent scope so on...

      function add(n1, n2) {
        return n1 + n2;
      }
      const output = "New outPut";//Reassigning the variable
    }
    console.log(add(43,12)); // it will not work cz now in 'strict' mode this function is behave like block scoped but if 'strict' mode is off then it will work the same.

    console.log(output);
  }

  console.log(haveLicense);//doesn't work cz block scoped if haveLicense variable with word 'var' then it will work.

  printAge();
  return age;
}

const firstName = "Aziz";
calcAge(1995);

 console.log(age); // it doesn't work because it's functional scoped variable.
printAge(); //it doesn't work because it's functional scoped function.








//--------------------------------------------------------------------------------------------//








// Hoisting and Temporal Dead Zone(TDZ)
// Variable Environment

//With variable
console.log(firstName); // var would be undefined if its used before declaration
console.log(job); // let get's some error if its used before declaration it will stay in temporal dead zone
console.log(hobby); // const would be same as let

// var firstName = "something";
// let job = "Teaching";
// const hobby = "Tv series";

//With functions
console.log(addDecla(2, 3)); // it will work
console.log(addArrow(4, 5)); // it doesn't cz consists with 'const' so it will be in TDZ
console.log(addExp(3, 2)); // it doesn't cz consists with 'const' so it will be in TDZ

function addDecla(a, b) {
  return a + b;
}

const addExp = function (a, b) {
  // if inspite of const , use var then it will say thats particular is not a function because 'var' before declaration it has 'undefined' format.
  return a + b;
};

const addArrow = () => a + b;

//USING 'VAR' IS NOT COMFORTABLE
//#example,

if (!numProduct) allProductDeleted(); //it will work because of hoisting here 'var numProduct=10' in a hoisting it is undefined so in the if block it will contain as undefined so the block executed, so using var might be uncomfortable.

var numProduct = 10;
function allProductDeleted() {
  console.log("All Product Deleted!");
}


//--------------------------------------------------------------------------------------------------//





//'this' keyword

console.log(this); // in the window object

//In simple function 'this' keyword is 'undefined' in the 'strict' mode otherwise it will be the window global object

const calcAge = function (birthYear) {
  console.log(this);
  console.log(2021 - birthYear);
};
calcAge(1999);

//In the Arrow function 'this'keyword don't get its own,so it will point out the parent function scoped or global object like window objec.
const calcBoyosh = (birthYear) => {
  console.log(2021 - birthYear);
  console.log(this);
};
calcBoyosh(1991);

//here 'this' keyword point the shoan object so it can be said that 'this' keyword (object that is calling the method)
const shoan = {
  year: 1991,
  calcAge: function (birthYear) {
    console.log(this);
    console.log(2021 - this.year);
  },
};
shoan.calcAge();

const aziz = {
  year: 1999,
};

aziz.calcAge=shoan.calcAge;// method borrowed from shaon object to aziz object

aziz.calcAge(); // calcAge method works like the same for aziz object with it attribute(year) because this.yaer point aziz


const abc=shoan.calcAge;
abc();  // it will show that 'keyword' is undefined bcz like simple function abc function also doesn't have any owner. And this.year from calcAge doesn't find anything in the abc() function.