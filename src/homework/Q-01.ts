(() => {

  /* NOMBRE CORRECTAMETE LAS SIGUIENTES VARIABLES 
     ADEMAS DE COMPROBAR SI USA LET O CONST,
    SE PUEDE REFACTORIZAR, ETC.
  */

  //lista de emails de usuarios de Meta-X
  const emailListMeta = [
    "email1@gmail.com", 
    "email1@gmail.com", 
    "email1@gmail.com"
  ];

  console.log(emailListMeta);

  //Lista de compras de un carrito
  const purchaseList = [
    {product: "switch"},
    {product: "X-box Controller"},
    {product: "steam-gift-card"},
  ];

  console.log(purchaseList);
  

  //funcion para sumar mas 3 a un numero y retornarlo
  let addThree = (add: number): number => {
    return add + 3;
  }

  console.log(addThree(2));
  
  
  //funcion para capitalizar una palabra pasara por params
  //idente o refactorice de ser necesario
  //el resultado no deberia cambiar
  function capitalize(word: string): string {
    word = word.toLowerCase();    
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  console.log(capitalize("capricorn"));
  
  //variable que alerta en caso de que algun evento suceda
  const isAlert: boolean = true;

  if(isAlert) console.log('event');

  //variable que se encarga de verificar 
  //si un usuario puede acceder o no
  const isAcced: boolean = true;

  if(isAcced) console.log('welcome');
  

  //variable para hallar el promedio de 3 numeros
  let averageThree: number = (1 + 2 + 3) / 3;

  console.log(averageThree);
  
  //variable que almacena el valor de PI
  const NUMBER_PI: number = 3.141592654;

  console.log(NUMBER_PI);
  

  //variabel que controla si un archivo es modificable 
  let canEdit: boolean = false;

  if(canEdit) console.log('edit this file?');
  
  //variable para almacenar el valor de e
  const NUMBER_E: number = 2.718281828; 
  console.log(NUMBER_E);

})();