(()=> {
   
    const fullname = ( firstname:string, lastname?:string): string => {


        return `${firstname} ${lastname || '---'}`;
    }

    
    var name = fullname('tony');
    console.log({name});
})() 