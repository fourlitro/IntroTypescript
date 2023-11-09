(() => {

    interface Client {
        name: string;
        age?: number;
        address: Address

        //METODOS EN LA INTERFACE
        getFullAddress( id: number ): string;
    }

    interface Address {
        id: number;
        zip: string;
        city: string;
    }

    const client: Client = {
        name: "aldair",
        age: 22,
        address: {
            id: 125,
            zip: 'ASDKA',
            city: "Ottawa"
        },

        getFullAddress(id: number) {
            return this.address.city;
        }
    }

    const client2: Client = {
        name: "melissa",
        age: 22,
        address: {
            city: "Toronto",
            id: 126,
            zip: "XASDAS"
        },
        getFullAddress(id: number) {
            return this.address.city;
        }
    }

})()