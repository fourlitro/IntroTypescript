(() => {


    //forma tradicional de crear clases

    class Avanger {

        //private name: string;
        //public team: string;
        //public realName ?: string;
        static avgAge: number = 35;
        static getAvgAge() {
            return this.name;
        }

        constructor(
            private name: string, 
            private team: string, 
            public realName?: string,
        ) {}

        /* Metodos publicos */

        public bio(){
            return `${this.name} (${this.team}) !!!`;
        }
    }

    const antman: Avanger = new Avanger("antman!!", "capitan");
    //console.log(antman);


    //console.log(antman.bio());

    //console.log(Avanger.getAvgAge());





})()