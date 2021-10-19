const numero1 = document.getElementById('input1') as HTMLInputElement;
const numero2 = document.getElementById('input2') as HTMLInputElement;
const resultado = document.getElementById('resultado') as HTMLInputElement;
const buttonSomar = document.getElementById('buttonSomar')!;
const buttonSubtrair = document.getElementById('buttonSubtrair')!;
const buttonMultiplicar = document.getElementById('buttonMultiplicar')!;
const buttonDividir = document.getElementById('buttonDividir')!;

const sum= (num1: number, num2: number) => num1 + num2;
const subtract = (num1: number, num2: number) => num1 - num2;
const multiply = (num1: number, num2: number) => num1 * num2;
const share = (num1: number, num2: number) => num1 / num2;

buttonSomar.addEventListener("click", function () {
  return resultado.innerHTML = String(sum(Number(numero1.value), Number(numero2.value)));
})
buttonSubtrair.addEventListener("click", function () {
  return resultado.innerHTML = String(subtract(Number(numero1.value), Number(numero2.value)));
})
buttonMultiplicar.addEventListener("click", function () {
  return resultado.innerHTML = String(multiply(Number(numero1.value), Number(numero2.value)));
})
buttonDividir.addEventListener("click", function () {
  return resultado.innerHTML = String(share(Number(numero1.value), Number(numero2.value)));
})