//------- Regular Function Vs. Arrow Function---------//

// var firstName='Amir' , var variable added in the global window obeject so  the arrow function inherits the 'this' keyword from global window object
"use strict";
const shaon = {
  firstName: "shaon",
  year: 1991,
  calcAge: function (birthYear) {
    // console.log(this);
    console.log(2021 - this.year);
    // SOLUTION 1: which is previous Es solution
    // const self =this; // self or that // that 'this' keyword refered to the jonas object

    // const isAvailable=function(){
    //     console.log(self);
    //     console.log(self.year>=1988 && self.year<=1995);
    // }

    // isAvailable(); // here its regular  function so 'this' also would be undefined so solution 1/2 is given.

    //SOLUTION 2: --> By using Arrow function
    // As arrow func doesn't have any this so it inherits from parents scope here is calcAge which this referes the shaon object.
    const isAvailable = () => {
      console.log(this);
      console.log(this.year >= 1988 && this.year <= 1995);
    };

    isAvailable();
  },
  greet: () => {
    console.log(this); // dont have own this so inherits from global window object;
    console.log(`Hey , ${this.firstName}!`);
  },
};

// shaon.greet();
shaon.calcAge();

//arguments keyword

//Regula function we can use arguments keyword as many argument we can pass through the function.
const addExp = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExp(2, 3);
addExp(2, 3, 23, 23, 25, 2, 67);


//Arrow doesn't support arguments keyword.
const addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

addArrow(2,5);