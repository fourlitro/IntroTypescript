(()=> {
   

    //el never no tiene que tener un punto alcanzable al finalizar la funcion
   const error = (message: string):(never | number) => {

        if(false) {
            throw new Error(message)
        }

        return 1
   } 

   error('Ayuda!!!');

})() 