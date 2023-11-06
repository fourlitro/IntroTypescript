"use strict";
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `hola ${name} `;
    const saveTheWorld = () => `El mundo está salvado!`;
    let myFunction;
    //* myFunction = 10;
    //* console.log(myFunction);
    // myFunction = addNumbers;
    // console.log(myFunction(10, 12));
    // myFunction = greet;
    // console.log(myFunction( 'cuatrolitro'));
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
