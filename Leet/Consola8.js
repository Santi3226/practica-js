/*
Una biblioteca registra préstamos de libros. Cada libro puede estar prestado a una sola persona a la vez. 
Modelá el sistema.
Comportamiento esperado
> registrar libro El Principito
Libro "El Principito" registrado.
> registrar libro 1984
Libro "1984" registrado.
> prestar El Principito a Juan
Préstamo registrado. Juan tiene "El Principito" hasta el 07/04/2026.
> prestar El Principito a Maria
Error: "El Principito" ya está prestado a Juan.
> devolver El Principito
"El Principito" devuelto por Juan.
> historial El Principito
Historial de "El Principito":
  1. Juan — 24/03/2026 al 07/04/2026
> prestamos Juan
Préstamos activos de Juan: ninguno.
> prestamos Maria
Préstamos activos de Maria: ninguno.
> siguiente
Error: comando no reconocido.
Las fechas podés simularlas con la fecha actual + 14 días. No hace falta persistencia, todo vive en memoria. 
*/

import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

let clientes={};
let libros={};
let prestamos={};


var menu = function(){
rl.question("Inserte opcion: \n1- Nuevo cliente\n2- Nuevo libro\n3- Nuevo prestamo\n4- Nueva devolucion\n5- Salir\n",
  (choice)=>{
    if(choice=="1")newCliente();
    else if(choice=="2")newLibro();
    else if(choice=="3")newPrestamo();
    else if(choice=="4")verPrestamo();
    else if(choice=="5")newDevolucion();
    else if(choice=="5")salir();
    else
      {
        console.log("Inserte un numero correcto (1,2,3,4,5)\n");
        menu();
        return;
      }
  }
)
};

var newCliente = function(){
rl.question("Inserte nombre del usuario: ",
(nombre)=>{
  if(!clientes[nombre])
  {
    clientes[nombre]={prestamos:[]};
  }
  console.log(nombre, " añadido correctamente");
  menu();
  return;  
}  
)};


var newLibro = function(){
rl.question("Inserte nombre del libro: ",
(nombre)=>{
  if(!libros[nombre])
  {
    libros[nombre]={estado:"Disponible"};
  }
  console.log(nombre, " añadido correctamente");
  menu();
  return;  
}  
)};

var newPrestamo = function(){
rl.question("Inserte nombre del cliente: ",
(nombre)=>{
  if(!clientes[nombre])
  {
    menu();
    return;
  }
  rl.question("Inserte nombre del libro: ",
  (libro)=>{
    if(!libros[libro] || libros[libro].estado=="Prestado")
    {
    menu();
    return;
    }
    prestamos[Date.now]  = {libro: libro, cliente:nombre, estado:"Pendiente"}
    clientes[nombre].prestamos.push(prestamos[Date.now]);
    console.log(prestamos);
    menu();
    return;  
  })  
}  
)};

var verPrestamo = function(){
rl.question("Inserte nombre del cliente: ",
(nombre)=>{
  if(!clientes[nombre] || clientes[nombre].prestamos.length==0)
  {
    menu();
    return;
  }
  console.log(clientes[nombre].prestamos)
})}

var newDevolucion = function(){
rl.question("Inserte nombre del cliente: ",
(nombre)=>{
  if(!clientes[nombre] || clientes[nombre].prestamos.length==0)
  {
    menu();
    return;
  }
  rl.question("Inserte nombre del libro: ",
  (libro)=>{
    if(!libros[libro] || clientes[nombre].prestamos.includes(libro)) //kinda
    {
    menu();
    return;
    }
    clientes[nombre].prestamos.estado="Devuelto";
    libros[libro].estado="Disponible";
    console.log(prestamos);
    menu();
    return;  
  })  
}  
)};

var salir = function()
{
  rl.close();
  return;
}

menu();