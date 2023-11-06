(()=> {
   
    const addNumbers = (a: number, b:number) => a + b;

    const greet = (name:string) => `hola ${ name} `;

    const saveTheWorld = () => `El mundo está salvado!`;

    let myFunction: () => string

    //* myFunction = 10;

    //* console.log(myFunction);


    // myFunction = addNumbers;

    // console.log(myFunction(10, 12));
    

    // myFunction = greet;

    // console.log(myFunction( 'cuatrolitro'));

    myFunction = saveTheWorld;

    console.log(myFunction());
})() 