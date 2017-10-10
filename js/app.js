//SE CREA DOS FUNCIONES
function cipher(){//PRIMERA FUNCION QUE CIFRE
//MEDIO DE UN PROMPT EL USUARIO DARA SU FRASE
var sentence=prompt("Ingrese la frase que desea encriptar ")

//CONVERTIMOS A MAYUSCULAS
var encryptSentence=sentence.toUpperCase()
//LA FRASE  Y SEPARAMOS POR CADA CARACTER
var convertEncrypt=encryptSentence.split('');
//AGREGARE UN ARRAY VACIO PARA QUE ENTRE LOS CARACTERES ENCRIPTADOS
var PushEnncrypt=[];
//ENCRIPTAR UNO POR UNO MEDIANTE UN FOR
for(var i=0; i< newToUpperCase.length;i++){
 

     var newcharacterPosition= newToUpperCase[i].charCodeAt();
  var characterPosition = ((newcharacterPosition-65+33)%26+65);//utilizamos la formula para encriptar
  var pushPosition=characterPosition.String.fromCharCode();
 var
}
pushPosition.push

}

cipher()
