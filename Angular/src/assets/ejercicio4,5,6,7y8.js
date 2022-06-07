// Ejercicio 4: Escribe un programa que declare 3 objetos de cada modelo de datos considerado: gestor,  cliente, mensaje y transferencia. Los valores de las propiedades de los objetos pueden ser  arbitrarios.

const objeto1 = {
    gestor:"Banco CaixaBank",
    cliente:"Alison",
    mensaje:"Buenos días",
    transferencia:"Realizada correctamente",
}
console.log(objeto1.mensaje)
console.log(objeto1.gestor)

const objeto2 = {
    gestor:"Banco BBVA",
    cliente: "Emma",
    mensaje() {
        console.log( "Hola" + "" + this.cliente);
    },
    transferencia() {
        console.log("La transferencia de " + this.gestor +  " se ha realizado correctamente");
    }
}
objeto2.mensaje();
objeto2.transferencia();

const objeto3= {}
objeto3.gestor="Banco Sabadell",
objeto3.cliente="Angela",
objeto3.mensaje=()=> {
    console.log("Buenas noches");
};
objeto3.transferencia=()=> {
    console.log("la transferencia ha sido rechazada")
};
objeto3.transferencia();

// Ejercicio 5: Escribe un programa que almacene los objetos creados en el ejercicio anterior del proyecto  dentro de un array (un array por cada modelo de datos). A continuación, recorre cada uno  de los arrays y muestra todas sus propiedades.

console.log(Object.keys(objeto1));

console.log(Object.keys(objeto2));

console.log(Object.keys(objeto3));

// Ejercicio 6: Escribe un programa que realice la conversión a JSON  del array (y viceversa) creado en el  ejercicio anterior del proyecto.
JSON.stringify(Object.keys(objeto1));

// Ejercicio 7: Escribe un programa que haga uso del servicio web del banco y realice una petición con  AJAX  a la url: http://localhost:8085/ok... Este no entiendo como hacerlo.
setTimeout(() => {
    console.log(objeto1)
}, 5000);
// Ejercicio 8: Crea una función en JavaScript que obtenga todos los gestores de forma periódica cada 5  segundos.
setInterval(() => {
    console.log(objeto1);
    console.log(objeto2);
    console.log(objeto3);
}, 5000);

// 