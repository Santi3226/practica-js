/*
Ranking de empleados por ventas
Una empresa tiene varios vendedores, cada uno con múltiples ventas registradas. Dado un listado de 
registros en el formato vendedor,monto, escribí un programa que calcule el total vendido por cada persona y
muestre un ranking de mayor a menor.
El mismo vendedor puede aparecer varias veces (una por cada venta). Al final, también debe indicar quién vendió
 más y cuál fue el promedio general de ventas. 
Ingresá ventas (o "fin" para terminar):
> ana,15000
> carlos,8000
> ana,22000
> maria,31000
> carlos,11000
> maria,5000
> fin
 */

import {createInterface} from 'readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

let ventas = {};
var pedirVendedor = function(){
rl.question("Vendedor: ", (vendedor)=>
{
  if(vendedor=="fin"||vendedor==undefined||vendedor=="")
  {
    fin();
    return;
  }
  else if(!ventas[vendedor])
  {
    ventas[vendedor]={cantidad:0};
  }
  pedirCantidad(vendedor);
});
}

var pedirCantidad = function(vendedor){
  rl.question("Cantidad: ", (cantidad)=>
  {
    cantidad=parseInt(cantidad,10);
    if(cantidad<=0 || isNaN(cantidad))
    {
    console.log("Cantidad invalido");
    pedirCantidad(vendedor);
    return;
    }
    else{
    ventas[vendedor].cantidad+=cantidad;
    console.log(ventas);
    pedirVendedor();
  }})
}

var fin = function(){
  rl.close();
  ventas = Object.entries(ventas).sort((a,b) => b[1].cantidad - a[1].cantidad);
  console.log(ventas);
  console.log("----- Ventas -----");
  let tot=0; let i=0;
  ventas.forEach(r => {
    console.log(r[0]," -- ",r[1].cantidad)
    tot+=r[1].cantidad;
    i++;
  });
  console.log("Promedio: ",tot/i,"Total: ", tot );
}

pedirVendedor();