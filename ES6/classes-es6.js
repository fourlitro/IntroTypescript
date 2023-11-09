(() =>{
    class Avanger{
        name;
        power;

        constructor(name ='No name', power = 0){ //datos por defecto
            this.name = name;
            this.power = power;
        }
    }

    

    class FlyingAvenger extends Avanger {
        flying;

        constructor(name, power){
            super(name, power); //llama los datos por defectos 
            this.flying = true;
        }
    }

    const hulk = new Avanger('Hulk', 9001);
    const falco = new FlyingAvenger('Falco', 50); //tira error si se deja vacio para eso ocupamos usar el metodo super

    console.log(hulk);
    console.log(falco);


})()