/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
   // Esta función recibe un nombre (string).
   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
   // [Ejemplo]: "mario" ----> "Mario".
   // Tu código:
   var primerLetra = nombre.charAt(0);
   var cambio = primerLetra.toUpperCase();
   var nuevoNombre = nombre.replace(primerLetra, cambio);
   return nuevoNombre;

   //********** */
   return nombre[0].toUpperCase()+ nombre.slice(1);
   //Lo que se hace aquí es cambiar la primer letra [0] a mayúscula y adosar el resto del nombre (desde la posición [1]), tal y como estaba en el original.
   //********** */
}

function invocarCallback(cb) {
   // Invoca/ejecuta el callback `cb`.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   return cb();
}

function operacionMatematica(num1, num2, cb) {
   // En este ejercicio recibirás dos números y un callback.
   // El callback realiza una operación matemática, por lo que necesita de los dos números.
   // Retorna el resultado del callback pasándole como parámetros los números.
   // Tu código:
   return cb(num1, num2);
}

function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   var suma = 0;
   for (let i = 0; i<arrayOfNumbers.length; i++){
      suma = suma + arrayOfNumbers[i];
   }
   cb(suma);
}

function forEach(array, cb) {
   // Recibes un arreglo y un callback.
   // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
   // Debes pasarle el elemento como argumento al callback.
   // Tu código:
   array.forEach( (num) =>{
      cb(num);
   });
}

function map(array, cb) {
   // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
   // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
   // Retorna el nuevo arreglo.
   // Tu código:
   var nuevoArray = [];
   array.map((num) => {
      var nuevoValor = cb(num);
      nuevoArray.push(nuevoValor);
   });
   return (nuevoArray);

   //*********** */
   return array.map( (elemento) => cb(elemento));
   //La función .map ya devuelve un arreglo, no hace falta decalararlo.
   //*********** */
}

function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   var nuevoArray = [];
   for (let i = 0; i<arrayOfStrings.length; i++){
      if(arrayOfStrings[i][0] === 'a'){
         nuevoArray.push(arrayOfStrings[i]);     
      };
   };
   return (nuevoArray);

   //********* */
   return arrayOfStrings.filter((elemento) => elemento[0] === 'a');

   //En el caso de utilizar el bucle for, puedo usar el siguiente condicional: 
         //if (arrayOfStrings[i][0].toLowerCase() === 'a')
   //Esto me sirve en el caso de que no se haya aclarado si la letra de interés debe ser sólo minúscula o si se permite mayúscula también. Puedo preguntarlo en el examen.
   //********** */
};

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   mayuscula,
   invocarCallback,
   operacionMatematica,
   sumarArray,
   forEach,
   map,
   filter,
};
