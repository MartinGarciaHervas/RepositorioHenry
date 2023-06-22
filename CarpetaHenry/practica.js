var jamon = ["juancarlo", "pepe", "alma", "roberto", "angela", "lechuga", "andalaconcha"];


function filter(arrayOfStrings) {
   // Debes identificar todos los elementos del arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   var newArray = [];

   for(var i = 0; i < arrayOfStrings.length; i ++){
      if((arrayOfStrings[i].split(""))[0] === "a"){
         newArray.push(arrayOfStrings[i]);
      };
   }

   return newArray;
}

console.log(filter(jamon));