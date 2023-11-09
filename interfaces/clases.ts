(()=> {
    interface Xmen { //como implementar interfaces en las clases
        name: string;
        realName: string;

        mutantPower(id: number):string;
    }

    interface Human{
        age: number;
    }

    class Mutant implements Xmen, Human {
        public age: number = 10;
        public name: string = "xd";
        public realName: string = "logan";

        mutantPower(id: number): string {
            return this.age +" "+this.name +" "+this.realName;
        }
    }

    const wolverine = new Mutant();
    wolverine.age = 100;
    wolverine.name = "Wolverine";
    wolverine.realName = "Logan";

    console.log(wolverine.mutantPower(1));
})()