(()=> {
   
    const fullname = ( firstname:string, lastname?:string, upper:boolean = false): string => { //Parametros por defectos por defecto

        if(upper){    
            return `${firstname} ${lastname || '----'}`.toUpperCase();
        } else{
            return `${firstname} ${lastname || '----'}`;
        }
    }

    
    var name = fullname('Tony', 'Stark', true);
    console.log({name});
})() 