"use strict";
(() => {
    const fullname = (firstname, lastname) => {
        return `${firstname} ${lastname || '---'}`;
    };
    var name = fullname('tony');
    console.log({ name });
})();
