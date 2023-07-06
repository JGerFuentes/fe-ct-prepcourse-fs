/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var nuevoArray = [];
   for (var prop in objeto){
      var subArreglo = [prop, objeto[prop]];
      nuevoArray.push(subArreglo);
   }
   return nuevoArray;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var objeto = {};
   var arregloDelString = string.split('');
   arregloDelString.sort();
   
   for (let i = 0; i < arregloDelString.length; i++){
      var letra = arregloDelString[i];
      if (objeto[letra]){
         objeto[letra] = objeto[letra] + 1; //Si la propiedad existía, le suma 1 a su valor previo.
      } else{
         objeto[letra] = 1; //Si la propiedad no existe, la crea con un valor igual a 1.
      }
   }
   return objeto;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var arregloMayusc = [];
   var arregloMin = [];
   var nuevoArreglo = string.split('');

   for (let i = 0; i < nuevoArreglo.length; i++){
      if (nuevoArreglo[i] === nuevoArreglo[i].toUpperCase()){
         arregloMayusc.push(nuevoArreglo[i]);
      } else{
         arregloMin.push(nuevoArreglo[i]);
      }
   }
   var resultado = arregloMayusc.concat(arregloMin);
   return (resultado.join(''));
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var resultado = [];
   var palabras = frase.split(' ');
   for (let i = 0; i< palabras.length; i++){
      var palabraInvertida = palabras[i].split('').reverse().join('');
      resultado.push(palabraInvertida);
   };
   return(resultado.join(' '));
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var num = numero.toString();
   // var cambio = num.split('').reverse();
   var control= num.split('').reverse().join('');
   if (num === control){
      return ('Es capicua');
   }else{
      return ('No es capicua');
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var arreglo = string.split('');
   for (let i = 0; i < arreglo.length; i++){
      if (arreglo[i] === 'a' || arreglo[i] === 'b' || arreglo[i] === 'c'){
         delete(arreglo[i]);
      }
   }
   return arreglo.join('');

      // var resultado = string.replace(/a/b/c/g, '');
      // return resultado;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   var arrayOrdenado = [];
   
   for (let i = 0; i < arrayOfStrings.length; i++){
      let minimo = Infinity;
      let aux = 0;

      for (let j = 0; j < arrayOfStrings.length; j++){
         if (arrayOfStrings[j].length < minimo && !arrayOrdenado.includes(arrayOfStrings[j])) {
            minimo = arrayOfStrings[j]. length;
            aux = j;
         }
      }

      arrayOrdenado.push(arrayOfStrings[aux]);
   }
   return arrayOrdenado;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var arrayInterseccion = [];
   for (let i = 0; i < array1.length; i++){

      for (let j = 0; j < array2.length; j++){
         if (array2[j] === array1[i]){
            arrayInterseccion.push(array2[j]);
         }
      }
   }
   return arrayInterseccion;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
