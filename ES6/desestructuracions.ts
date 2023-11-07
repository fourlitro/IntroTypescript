(() => {

    type Avangers = {
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;
    }

    const avengers: Avangers = {
        nick: "Samuel L. Jackson",
        ironman: "Robert Downey Jr.",
        vision: "Paul Bettany",
        activo: true,
        poder: 1500.2525252
    }
    //Desestructurando tradicuonal de un Obj
    // const {poder, vision} = avengers;

    // console.log( poder.toFixed(2), vision.toUpperCase());

    const printAvanger = ( { ironman, ...resto}: Avangers) => {
        console.log(ironman, resto);
    }

    printAvanger(avengers);
});