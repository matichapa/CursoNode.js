function mostrarTema(tema){
    console.log("Estoy aprendiendo "+tema);
}

//TIMER O CRONOMETRO
//CONTIENE FUNCIONES QUE EJECUTAN UN CODIGO LUEGO DE UN CIERTO PERIODO DE TIEMPO

//Funcion setTimeout
//ejecuta un codigo luego de un número especifico de milisegundos
//1 segundo= 1000 milisegundos
//como llamarla? setTimeout(funcion,retraso,argumento/s);
//EJ

setTimeout(mostrarTema,2000,"Node.js");

//En este caso espera 2 segundos para ejecutir la función

//Función setImmediate()
//Para ejecutar codigo asincrono en la proxima iteración de eventos
//Se ejecuta justo desp del codigo sincrono, osea, antes de cualquier funcion con algun tipo de retraso. Todo lo que no tengo retraso es sincrono
//como llamarla? setImmediate(funcion, argumento1,argumento2, argumento3)
//EJ

setImmediate(mostrarTema,"Java");

//Función setInterval()
//Se puede ejecutar un codigo cada cierto periodo de milisegundos que elijas todas las veces que quieras 
//basicamente hace que se repita un bucle o una funcion cada X cant de milisegundos

//COMO LLAMARLA? setInterval(funcion,intervalo,arg1,arg2)
//EJ
setInterval(mostrarTema,2000,"JavaScript");

//DATO: Control+c detiene la ejecución en la terminal para que no se me quede trabado

