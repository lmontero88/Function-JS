const rapid= (palabra)=>{
    
    let vocales= ['a','e','i','o','u'];
    let palabraNueva= "";

    for(let i=0; i<palabra.length; i++){
        let caracter = palabra[i].toLowerCase();
        let esVocal = vocales.includes(caracter);
        if(esVocal===false){
            palabraNueva=palabraNueva+caracter.toUpperCase();
        }
    }
    return palabraNueva;
}
   // From this line up Do not change code below
   let str = "John";
   console.log(rapid(str));