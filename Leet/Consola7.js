/*
Sistema de turnos de un banco
Contexto
Un banco tiene dos tipos de clientes: comunes y preferenciales (adultos mayores, embarazadas, etc.). 
Los clientes sacan turno y son atendidos en orden, pero los preferenciales tienen prioridad: por cada 2 
preferenciales atendidos, se atiende 1 común. Si no hay preferenciales, se atienden los comunes normalmente.
Comandos del sistema

    nuevo común <nombre> — agrega un cliente común a la cola
    nuevo preferencial <nombre> — agrega un cliente preferencial
    siguiente — atiende al próximo cliente según la regla de prioridad
    estado — muestra cuántos hay en cada cola
    fin — cierra el sistema y muestra el resumen

Regla de prioridad
Llevá un contador interno. Cada vez que se llama siguiente: si el contador de preferenciales atendidos en la 
"ronda actual" es menor a 2 y hay preferenciales esperando, atendé un preferencial y sumá 1 al contador. Si el 
contador llega a 2 o no hay más preferenciales, atendé un común y reseteá el contador a 0. Si no hay nadie, 
avisá. 
*/
import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

const clientes = { };

//Supongo colas gestionadas de un sistema ajeno
let preferenciales = [];
let comunes = [];
let prioridad = 0;
let total=0;
let totalC=0;
let totalP=0;

var menu = function(){
rl.question("Inserte opcion: \n1- Nuevo comun\n2- Nuevo Preferencial\n3- Siguiente\n4- Estado\n5- Salir\n",
  (choice)=>{
    if(choice=="1")newCliente("Comun");
    else if(choice=="2")newCliente("Preferencial");
    else if(choice=="3")nextCliente();
    else if(choice=="4")verEstado();
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

var newCliente = function(caracter){
  rl.question("Inserte nombre del usuario comun: ",
  (nombre)=>{
    if(!clientes[nombre])
    {
      clientes[nombre]={caracter:caracter};
    }
    if(caracter=="Comun")comunes.push([nombre, clientes[nombre]]);
    else preferenciales.push([nombre, clientes[nombre]]);
    console.log(nombre, " añadido correctamente");
    menu();
    return;  
  }  
  )};

var nextCliente = function()
{
  let cliente;
  if(prioridad<2 || comunes.length==0)
    {
      cliente = preferenciales.shift();
      prioridad++;
      totalP++;
    }
  else if(prioridad>=2 || preferenciales.length==0)
    {
      cliente = comunes.shift();
      prioridad=0;
      totalC++;
    }
  total++;
  console.log(cliente[0], " - ",cliente[1].caracter);
  menu();
  return;
}

var verEstado = function()
{
  console.log("Preferenciales: ",preferenciales.length, " -  Comunes: ", comunes.length);
  if(prioridad<2)
    {
      console.log("Proximo preferencial");
    }
  else
    {
      console.log("Proximo comun");
    }
  menu();
  return;
}

var salir = function()
{
  rl.close();
  console.log("Resumen\nTotal atendidos: ", total,"\nTotal comunes: ", totalC, "\nTotal preferenciales: ",totalP);
  return;
}

menu();