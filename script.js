/*
const edad = Number(prompt("INGRESE SU EDAD"));

if (edad > 18) {
    alert("Es mayor de edad");
}
if (edad > 0){
    alert("Es menor de edad");
}
else {
    alert("Valor incorrecto");
}
const cantidad = Number(prompt("Cuantos numeros desea sumar"));

let sumatoria = 0;

for (let index = 1; index <= cantidad; index++)
{
    const numeroAsumar = Number(prompt("Ingrese un numero a sumar"));
    sumatoria = sumatoria + numeroAsumar;
}
console.log(sumatoria);
*/

let totalApagar = 0;
const cantidad = Number(prompt("¿Cuántos productos desea llevar?"));

for (let index = 1; index <= cantidad; index++) {
    const nombre = prompt("¿Qué producto desea llevar?");
    const unidades = Number(prompt(`¿Cuántas unidades de ${nombre}?`));
    const precio = Number(prompt(`¿Cuánto cuesta cada unidad de ${nombre}?`));
    const subtotal = unidades * precio;
    totalApagar += subtotal;
}

console.log(`El total a pagar es: ${totalApagar}`);
  