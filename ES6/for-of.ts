(() => {
    type Avanger ={
        name: string;
        weapon: string;
    }

    const ironman: Avanger = {
        name: 'Tonystark',
        weapon: 'Armorsuit'
    }
    const capitanAmerica: Avanger = {
        name: 'Capitan America',
        weapon: 'Escudo'
    }
    const thor: Avanger = {
        name: 'Thor',
        weapon: 'Mjolnir'
    }

    const avangers: Avanger[] = [ ironman, thor ,capitanAmerica]

    for (const avanger of avangers) {
        console.log(avanger.name, avanger.weapon);
    }
    
})()