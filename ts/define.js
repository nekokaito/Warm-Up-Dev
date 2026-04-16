"use strict";
const cat = {
    name: "Piku",
    age: 21,
    gender: "male",
    ownerInfo: {
        name: "kudus",
        phone: "016308283289",
    },
    run: (i) => {
        return i * i;
    },
};
console.log(cat.run?.(8));
