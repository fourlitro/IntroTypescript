"use strict";
(() => {
    const fullname = (firstname, ...restArgs) => {
        return `${firstname} ${restArgs.join(" ")}`;
    };
    const superman = fullname("Clark", "Joseph", "Kent", "Batman");
    console.log({ superman });
})();
