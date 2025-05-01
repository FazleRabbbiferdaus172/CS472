"use strict";
let user = { name: "John", years: 30 };
let {name:name, years:age, isAdmin:isAdmin=false} = user;
console.log(name, age, isAdmin);
