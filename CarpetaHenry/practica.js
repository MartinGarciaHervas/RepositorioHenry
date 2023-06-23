var jamon = ["acemeunptptpt", "juancarlo", "pepe", "alma", "roberto", "angela", "lechuga", "andalaconcha"];

var objeto1 = {
   nombre: "martin",
   apellido: "garcia"
};

var prueba = ["You", "are", "beautiful", "looking"];


function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   return arrayOfStrings.sort((a, b) => a.length - b.length)
}

console.log(sortArray(prueba));