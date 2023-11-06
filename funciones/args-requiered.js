"use strict";
(() => {
    const fullname = (firstname, lastname) => {
        return `${firstname} ${lastname}`;
    };
    var name = fullname('tony', 'stark');
    console.log({ name });
})();
