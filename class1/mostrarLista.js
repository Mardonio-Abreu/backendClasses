//Hands on lab 
/*
Definiremos la función “mostrarLista”, la cual recibirá un arreglo con elementos como parámetro.

Si la lista está vacía, devolver un mensaje indicando “Lista vacía”.
Si la lista cuenta con elementos, mostrarlos 1 por 1 en consola. Finalizar el proceso devolviendo la longitud de la lista (Utilizar template strings)
Invocar la función con los casos de prueba.
*/

const mostrarLista = (array) =>  {
   if(array.length != 0){
    array.map( item => console.log(item));
   } else{
    console.log("Empty list");
   }
}

//Tests

array = [];

mostrarLista(array);

array = [0, 1, 2, 3];

mostrarLista(array);
