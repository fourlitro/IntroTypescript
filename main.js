"use strict";
const conducirBatimovil = (auto) => {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelerar();
};
const batimovil = {
    encender: false,
    velocidadMaxima: 0,
    acelerar() {
        console.log("...... gogogo!!!");
    }
};
const guason = {
    reir: true,
    comer: true,
    llorar: false
};
const reir = (guason) => {
    if (guason.reir) {
        console.log("JAJAJAJA");
    }
};
const ciudadGotica = (ciudadanos) => {
    return ciudadanos.length;
};
class Persona {
    constructor() {
        this.edad = 21;
        this.estadoCivil = "xd";
        this.nombre = "xd";
        this.sexo = "xd";
    }
    imprimirBio() {
        console.log("JAJAJAJA");
    }
}
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: [1, 2],
    };
    let superman = {
        name: 'Clark Kent',
        age: 60,
        powers: [1],
        getName() {
            return this.name;
        }
    };
})();
(() => {
    class Mutant {
        constructor() {
            this.age = 10;
            this.name = "xd";
            this.realName = "logan";
        }
        mutantPower(id) {
            return this.age + " " + this.name + " " + this.realName;
        }
    }
    const wolverine = new Mutant();
    wolverine.age = 100;
    wolverine.name = "Wolverine";
    wolverine.realName = "Logan";
    console.log(wolverine.mutantPower(1));
})();
(() => {
    const client = {
        name: "aldair",
        age: 22,
        address: {
            id: 125,
            zip: 'ASDKA',
            city: "Ottawa"
        },
        getFullAddress(id) {
            return this.address.city;
        }
    };
    const client2 = {
        name: "melissa",
        age: 22,
        address: {
            city: "Toronto",
            id: 126,
            zip: "XASDAS"
        },
        getFullAddress(id) {
            return this.address.city;
        }
    };
})();
(() => {
    let sumar;
    sumar = (a, b) => {
        return a + b;
    };
})();
//# sourceMappingURL=main.js.map