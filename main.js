"use strict";
(() => {
    class Mutante {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutante {
        salvarMundo() {
            return "Mundo salvado";
        }
    }
    class Villian extends Mutante {
        conquistarMundo() {
            return "Mundo conquistado";
        }
    }
    const wolverine = new Xmen("Wolverine", "Logan");
    const magneto = new Villian("Magneto", "Magnus");
    const printName = (character) => {
    };
    printName(wolverine);
})();
(() => {
    class Avanger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
    }
    Avanger.avgAge = 35;
    const antman = new Avanger("antman", "capitan");
})();
(() => {
    class Avanger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
    }
    Avanger.avgAge = 35;
    const antman = new Avanger("antman!!", "capitan");
})();
(() => {
    class Avanger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log("Constructor Avanger llamado!");
        }
        getFullname() {
            return `${this.name} (${this.realName})`;
        }
    }
    class Xmen extends Avanger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
        }
        get fullName() {
            return `${this.name} (${this.realName})`;
        }
        set fullName(name) {
            if (name.length < 3) {
                throw new Error('El nombre debe de ser mayor de 3 letras');
            }
            this.name = name;
        }
        getFullnameDesdeXmen() {
        }
    }
    const wolverine = new Xmen("Wolverine", "Logan", true);
    wolverine.fullName = "Alexis";
})();
(() => {
    class Avanger {
        static getAvgAge() {
            return this.name;
        }
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `${this.name} (${this.team}) !!!`;
        }
    }
    Avanger.avgAge = 35;
    const antman = new Avanger("antman!!", "capitan");
})();
(() => {
    class Apocalipsis {
        constructor(name) {
            this.name = name;
        }
        static callApocalipsis() {
            if (!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis("Soy Apocalipsis el unico");
            }
            return Apocalipsis.instance;
        }
        changeName(newName) {
            this.name = newName;
        }
    }
    const apocalipsis1 = Apocalipsis.callApocalipsis();
    const apocalipsis2 = Apocalipsis.callApocalipsis();
    const apocalipsis3 = Apocalipsis.callApocalipsis();
    apocalipsis1.changeName("Xavier");
    console.log(apocalipsis1, apocalipsis2, apocalipsis3);
})();
//# sourceMappingURL=main.js.map