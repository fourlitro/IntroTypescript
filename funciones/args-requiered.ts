(()=> {
   
    const fullname = ( firstname:string, lastname:(string | boolean )): string => {


        return `${firstname} ${lastname}`;
    }

    
    var name = fullname('tony', 'stark');
    console.log({name});
})() 