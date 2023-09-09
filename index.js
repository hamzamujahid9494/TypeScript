"use strict";
var car = [{ company: "toyota",
        isusedcar: false,
        year: 2020 },
    { company: "mercedez",
        isusedcar: false,
        year: 2024 },
    { company: "kia",
        isusedcar: false,
        year: 2023 }
];
//item array ka andr da de
for (let i = 0; i < car.length; i++) {
    const element = car[i];
    console.log(element.company);
}
car.map((item) => (console.log(item.company)));
//learweb3.io
