(() => {

    class Avanger {

        constructor(
            public name: string, 
            public realName: string,
        ) {
            console.log("Constructor Avanger llamado!")
        }

        protected getFullname () { //protected permite su acceso a clases que extienda a la clase padre
            return `${this.name} (${this.realName})`;
        }
    }

    //extends

    class Xmen extends Avanger {
        constructor(
            name: string, 
            realName: string,
            public isMutant:boolean,
        ) {
            super( name, realName) //tiene que llamarse siempre al inicio
            //console.log("constructor Xmen llamado");
        }

        /*!!! getters y setters */
        get fullName(){
            return `${this.name} (${this.realName})`
        }

        set fullName(name: string){

            if ( name.length < 3) {
                throw new Error('El nombre debe de ser mayor de 3 letras')
            }
            this.name = name;
        }

        getFullnameDesdeXmen () {
            //console.log( super.getFullname() ); //no se puede acceder a este metodo de la clase avanger a menos de que sea protected 
        }
    }
    

    const wolverine = new Xmen("Wolverine", "Logan", true);

   //console.log(wolverine.fullName);  //retorna el Get 

    wolverine.fullName = "Alexis";   //set

    //console.log(wolverine.fullName)

    //wolverine.getFullnameDesdeXmen;
    
})()