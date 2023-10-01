/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var arreglo =[];
   for (const key in objeto) {

     var arr = [];
     arr.push(key);
     arr.push(objeto[key]);
     arreglo.push(arr); 
   } 
   return arreglo;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var obj = {};

   for (let i = 0; i < string.length; i++) {

      var letra = string[i];
      
      if(!obj.hasOwnProperty(letra)) {
         obj[letra] = 1
      }
      else {
         obj[letra] = obj[letra] + 1
      } 
   }
   return obj;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:

var mayusculas = "";
var minusculas = "";


for (let i = 0; i < string.length; i++) {
   
   var letra = string[i];
   var letraMayus = letra.toUpperCase();

   if(letraMayus === letra){
      mayusculas = mayusculas + letra
   }
   else {
      minusculas = minusculas + letra
   }  
}
var newString = mayusculas + minusculas;
return newString;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var espejo = '';
   for(let i = frase.length -1; i >= 0; i--) {
     espejo = espejo + frase[i];
   };
  return espejo.split(' ').reverse().join(' ');

  //var newStr = frase.split('').reverse().join('');
  //return newStr.split(' ').reverse().join(' ');
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:

   numero = numero.toString()
   var reverso = numero.split("").reverse().join("");

   if(numero === reverso) {
      return "Es capicua"
   }
   else {
      return "No es capicua"
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   return string.split("").filter(function(elem){
      if(elem.toLowerCase() !== "a" && elem.toLowerCase() !== "b" && elem.toLowerCase() !== "c")
      return elem
   }).join("")
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:

  return  arrayOfStrings.sort(function(a,b){
   return a.length - b.length;    
   })
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var arr = [];

   for (var i = 0; i < array1.length; i ++){

      if(array2.includes(array1[i])){
         arr.push(array1[i])  
      }
   }
   return arr
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
