(() => {
    

    //forma tradicional de crear clases
    
    class Avanger {
       
        private name: string;
        public team: string;
        public realName ?: string;
        static avgAge: number = 35;

        constructor(name: string, team: string, realName ?: string){
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
    }

    const antman: Avanger = new Avanger("antman", "capitan");
    //console.log(antman);




})()