(() => {


    //forma tradicional de crear clases

    class Avanger {

        //private name: string;
        //public team: string;
        //public realName ?: string;
        static avgAge: number = 35;

        constructor(
            private name: string, 
            private team: string, 
            public realName?: string,
        ) {}

        
    }

    const antman: Avanger = new Avanger("antman!!", "capitan");
    //console.log(antman);

})()