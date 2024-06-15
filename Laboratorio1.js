function esPrimo(valor){
    
    var ndivisores=2;

if(valor >2 && Number.isInteger(valor)){
    for(var i=3;i<=(valor+100);i++){
    
    if(valor != i && Number.isInteger(valor/i)){
        ndivisores++;
    }
    }

    if(ndivisores==2){
        console.log("El número introducido si es primo");
    }else{
        console.log("El número introducido no es primo");   
    }

}else{
   console.log("El número introducido no es primo! :D");
   return false; 
}

}
esPrimo(12);
esPrimo(3);


function palindormo(frase){

var myArray=frase.split(""); 
var myArrayReversed=[...myArray];
 myArrayReversed=myArrayReversed.reverse();

 myArray=myArray.join("");
 myArrayReversed=myArrayReversed.join("");

    if(myArray === myArrayReversed){
        console.log(frase+" Es un palíndromo");
    }else{
        console.log(frase+" No es un palíndormo");
    }
   
}
palindormo("LOL");
palindormo("Hola");




function squareNumber(aNumber){
var numberInLine=[];
for(var j=aNumber;j>0;j--){  
 for(var i=0;i<=aNumber-1;i++){
    numberInLine.push(j);
   }
   numberInLine.push("\n");
}

console.log(numberInLine.join(""));

}

squareNumber(9);

function bubbleSort(anArray){
//var flag=true;

for(var i=0;i<anArray.length;i++){
   for(var j = 0; j < (anArray.length-i-1);j++){
        if(anArray[j] > anArray[j+1]){
            
            var buffer_value=anArray[j+1];
            anArray[j+1]=anArray[j];
            anArray[j]=buffer_value;
        //flag=false;    
        }
   
    }
}


    console.log(anArray);
}
var testArray =[9,4,8,1,3];
bubbleSort(testArray);




