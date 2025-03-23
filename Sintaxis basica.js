let a = 1; //let crea una variable sin definir y se le puede cambiar el valor
const b = 2; //const crea una variable fija y NO se le puede reasignar el valor

console.log(a);
console.log(b); //muestra en consola la variable

let arreglo = [1, true, 'story'];

console.log(`Contenido del arreglo ${arreglo}`);
console.log(`Primer elemento ${arreglo[0]}`);
console.log(`Segundo elemento ${arreglo.at(1)}`);
console.log(`Forma de escribir ultimo ${arreglo.at(-1)}`);
console.log(`Longitud ${arreglo.length}`);
console.log(`Excederse del largo genera: ${arreglo[3]}`);

/*

manejo de arrays 
at: devuelve el elemento en la posición indicada por el índice, los números positivos devuelven los elementos desde el inició y los negativos desde el final
push: agrega un elemento al final
pop: remueve el último elemento de un array
unshift: agrega un elemento al principio
shift: remueve primer elemento del array

find, findLast, findIndex, findLastIndex e indexOf: buscar elementos o sus posiciones en el array
filter: obtener un subconjunto de los elementos en base a una función
map: crea un nuevo array con el resultado de aplicar la función designada a cada elemento
reduce: permite calcular un resultado al aplicar una función de reducción al array
sort: ordenar los elementos del array
reverse: revertir el orden de los elementos del array
*/


