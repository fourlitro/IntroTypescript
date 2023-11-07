"use strict";
(() => {

    type Hero ={
        name: string;
        age?: number;
        powers: number[];
        getName?: () => string; //metodos dentro de objetos
    }

    let myCustomVariable: (string | number | Hero) = 'Aldair' ;
    console.log(typeof myCustomVariable);

    myCustomVariable = 20
    console.log(typeof myCustomVariable);

    myCustomVariable = {
        name: "bruno Diaz",
        age: 43,
        powers: [1]
    }
    console.log(typeof myCustomVariable);


})();