"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const avengers = {
        nick: "Samuel L. Jackson",
        ironman: "Robert Downey Jr.",
        vision: "Paul Bettany",
        activo: true,
        poder: 1500.2525252
    };
    const printAvanger = (_a) => {
        var { ironman } = _a, resto = __rest(_a, ["ironman"]);
    };
    const avangersArr = ['Cap. America', true, 150.15];
    const [capitan, ironman, seriaUnNumero] = avangersArr;
});
(() => {
    const ironman = {
        name: 'Tonystark',
        weapon: 'Armorsuit'
    };
    const capitanAmerica = {
        name: 'Capitan America',
        weapon: 'Escudo'
    };
    const thor = {
        name: 'Thor',
        weapon: 'Mjolnir'
    };
    const avangers = [ironman, thor, capitanAmerica];
    for (const avanger of avangers) {
        console.log(avanger.name, avanger.weapon);
    }
})();
(() => {
    const NOMBRE = "Aldair";
    const getName = () => {
    };
})();
//# sourceMappingURL=main.js.map