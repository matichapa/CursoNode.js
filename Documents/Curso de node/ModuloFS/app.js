//TRABAJANDO CON ARCHIVOS 
//SUPONGAMOS QUE QUIERO LEER EL INDEX.html

//Primero hay que incluir el modulo fs 
const { error } = require("console");
const fs=require("fs");

//Asi lo leo con este metodo,
//Necesita que le pase la ubicación, como esta en la misma carpeta que este archivo con solo pasarle el nombre alcanza
//Sigue por pasarle como esta codificado el archivo
//osea fs.readFile(ruta o nombre del archivo, tipo de codificación)
// fs.readFileSync("ModuloFS\\index.html","utf-8",(err, contenido)=>{

//     //Aca si ocurrio un error err lo va a contener y sino el contenido va a estar en contenido
//     if(err){
//         //si entro aca entonces hubo un error
//         throw err; //Si uso este tipo la línea de BANDERA no se va a ejecutar, cuando se ejecuta el throw se detiene la funcion

//         console.log(err); //si uso este tipo la línea BANDERA si se va a ejecutar, porque no detiene la ejecución de la función
//     }else{
//         console.log(contenido);
//     }

//     console.log("bandera");

// });




//COMO CAMBIAR EL NOMBRE DE UN ARCHIVO con rename
//la funcion recibe fs.rename(nombre o ubicacion del archivo a cambiar,nuevo nombre del archivo, otrafuncion)


// fs.renameSync("ModuloFS\\indexParaCambiar.html","ModuloFS\\main.html",(err)=>{
//     if(err){
//         throw err;
//     }
//     console.log("nombre cambiado exitosamente");
// });









//AGREGAR CONTENIDO AL FINAL DE UN ARCHIVO (desp del ultimo caracter)
//fs.appendFile(nombre o ubicacion, contenido a agregar, funcion flecha que se ejecuta cuando se complete todo)

// fs.appendFileSync("ModuloFS\\index.html","<p>FINAL</p>",(err)=>{
//     if(err){
//         throw err;
//     }
    
//     //Aca muestro el html en la terminal para que se vea el cambio que hice 
//     fs.readFileSync("ModuloFS\\index.html","utf-8",(err, contenido)=>{

//         //Aca si ocurrio un error err lo va a contener y sino el contenido va a estar en contenido
//         if(err){
//             //si entro aca entonces hubo un error
//             throw err; //Si uso este tipo la línea de BANDERA no se va a ejecutar, cuando se ejecuta el throw se detiene la funcion
    
//             console.log(err); //si uso este tipo la línea BANDERA si se va a ejecutar, porque no detiene la ejecución de la función
//         }else{
//             console.log(contenido);
//         }
    
//       //  console.log("bandera");
    
//     });})





//REEMPLAZAR UN ARCHIVO COMPLETO
//fs.writeFile(ubicacion, contenido a asignar)

// fs.writeFileSync("ModuloFS\\indexParaCambiar.html","Nuevo contenido",(err)=>{
//     if(err){
//         throw err;
//     }

//     //Llamo al metodo que me hace la lectura del archivo para mostrarlo en la terminal
//     fs.readFileSync("ModuloFS\\indexParaCambiar.html","utf-8",(err, contenido)=>{

//         //Aca si ocurrio un error err lo va a contener y sino el contenido va a estar en contenido
//         if(err){
//             //si entro aca entonces hubo un error
//             throw err; //Si uso este tipo la línea de BANDERA no se va a ejecutar, cuando se ejecuta el throw se detiene la funcion
    
//             console.log(err); //si uso este tipo la línea BANDERA si se va a ejecutar, porque no detiene la ejecución de la función
//         }else{
//             console.log(contenido);
//         }
    
    
//     });
// });







//ELIMINAR UN ARCHIVO
//fs.unlink(ubicacion, funcion flecha para err)
fs.unlinkSync("ModuloFS\\archivoEliminable.html",(err)=>{
    if(err){
        throw err
    }
    console.log("archivo eliminado");
})
