//Se ha solicitado ingresar 5 numeros ,realizar las siguientes operaciones con ellos


//Mostrar los cuatro arrays

//Crear un array con estos 5 numeros.
var numeros1=new Array(1,5,25,40,8);
console.log(numeros1); 

//Crear un array con el doble de mismos numeros.
console.log(Array.from([1,5,25,40,8], x => x + x));//CON ARRAY


/*var numeros2= [1,5,25,40,8]//SIN ARRAY
for (let i = 0; i < numeros2.length; i++) 
{console.log(numeros2[i]*2);}*/


//Crear un array donde los que son pares se vuelvan cero.
console.log(Array.from([1,5,25,40,8], numero =>numero%2==0 ));//CON ARRAY


/*var numeros2= [1,5,25,40,8]//SIN ARRAY
for (let i = 0; i < numeros2.length; i++) 
  {console.log(numeros2[i]%2==0);}*/










