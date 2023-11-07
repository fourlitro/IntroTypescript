"use strict";
(() => {

    let flash: { name: string, age?: number, powers: string[], getName?: () => string } ={ //objetos con tipos especificos 
        name: 'Barry Allen',                                   //metodos dentro de objetos
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo'],
        
    }

    flash = {
        name: 'Clark Kent',
        // age: 50,
        powers: ['Super fuerza'],
        getName(){
            return this.name;
        }
    }

    console.log(flash)

})();
