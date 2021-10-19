"use strict";
// boolean
let isOpen;
isOpen = true;
// string ('foo', "foo", `foo`)
let message;
message = `foo ${isOpen}`;
// number
let total;
total = 0xff0;
// array (type[])
let items;
items = [1, 2, 3];
let totalArr;
totalArr = ['1', '2', '3'];
// tuple
let title;
title = [1, '2', { tempo: 'bom' }, true];
// enum
var Colors;
(function (Colors) {
    Colors["white"] = "#fff";
    Colors["black"] = "#000";
})(Colors || (Colors = {}));
// any NÃO É LEGAL
let coisa;
coisa = 1;
coisa = '1';
coisa = { qualquer: 'coisa' };
coisa = [1, 2, 3, 4];
// void (vazio)
function logger() {
    console.log('foo');
}
// never
function error() {
    throw new Error('error');
}
// object
let cart;
cart = {
    pneus: 'novos',
    potenciaMotor: 500,
};
