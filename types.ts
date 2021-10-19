// boolean
let isOpen: boolean;
isOpen = true;

// string ('foo', "foo", `foo`)
let message: string;
message = `foo ${isOpen}`

// number
let total: number;
total = 0xff0;

// array (type[])
let items: number[];
items = [1, 2, 3];

let totalArr: Array<string>;
totalArr = ['1', '2', '3'];

// tuple
let title: [number, string, object, boolean]
title = [1, '2', { tempo: 'bom' }, true];

// enum
enum Colors {
  white = '#fff',
  black = '#000'
}

// any NÃO É LEGAL
let coisa: any;
coisa = 1;
coisa = '1';
coisa = { qualquer: 'coisa' };
coisa = [1, 2, 3, 4];

// void (vazio)
function logger():void {
  console.log('foo');
}

// null || undefined
type Bla = string | undefined;

// never
function error(): never {
  throw new Error('error');
}

// object
let cart: object;
cart = {
  pneus: 'novos',
  potenciaMotor: 500,
}
