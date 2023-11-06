(()=> {
   
    const fullname = ( firstname:string, ...restArgs: string[] ): string  => { //Parametros por defectos por defecto
        return `${firstname} ${ restArgs.join(" ") }`
    }

    const superman = fullname("Clark", "Joseph", "Kent", "Batman");

    console.log({ superman })
})() 