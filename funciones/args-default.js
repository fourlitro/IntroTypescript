"use strict";
(() => {
    const fullname = (firstname, lastname, upper = false) => {
        if (upper) {
            return `${firstname} ${lastname || '----'}`.toUpperCase();
        }
        else {
            return `${firstname} ${lastname || '----'}`;
        }
    };
    var name = fullname('Tony', 'Stark', true);
    console.log({ name });
})();
