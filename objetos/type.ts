"use strict";
(() => {

    type Hero ={
        name: string;
        age?: number;
        powers: number[];
        getName?: () => string; //metodos dentro de objetos
    }



    let flash:Hero ={ //objetos con tipos especificos 
        name: 'Barry Allen',                                   
        age: 24,
        powers: [1,2],
        
    }

    let superman: Hero ={ //objetos con tipos especificos 
        name: 'Clark Kent',                                   
        age: 60,
        powers: [1],
        getName(){
            return this.name;
        }
        
    }

})();