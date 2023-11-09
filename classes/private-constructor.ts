(() => {

    //se usa para controlar la manera en la que sus instacias son ejecutdas
    //para manejar singleton: una unica instancia a travez de toda mi app
    //en otras palabras si yo despues necesito acceso a la instacia previamente creada


    class Apocalipsis {

        static instance: Apocalipsis;

        private constructor( public name:string) {

        }

        static callApocalipsis(): Apocalipsis{
            if ( !Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis("Soy Apocalipsis el unico");
            }

            return Apocalipsis.instance
        }

        changeName( newName: string):void {
            this.name = newName;
        }
    }

    const apocalipsis1 = Apocalipsis.callApocalipsis();
    const apocalipsis2 = Apocalipsis.callApocalipsis();
    const apocalipsis3 = Apocalipsis.callApocalipsis();

    apocalipsis1.changeName("Xavier");
    

    console.log(apocalipsis1, apocalipsis2, apocalipsis3);

})()