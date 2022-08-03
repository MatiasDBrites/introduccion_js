# introduccion_js

6 / "3"        
 // 2  ( se convierte en numero )  
 
 "2" * "3"   
 // 6  ( se convierte en numero )  
 4 + 5 + "px"     
 // "9px" ( se convierte en string )  
 
 "$" + 4 + 5 
 // "$45" ( se convierte en string )  
 
 "4" - 2 
 // 2 ( se convierte en numero )  
 
 "4px" - 2 
 // NaN (Variable no numerica) 
 
 7 / 0 
 // Infinity ( Dividido / 0) 
 
 {}[0] 
 // [0]   Las llaves inician un bloque declarado en 0 entre corchetes 
 
 parseInt("09") 
 // 9 (Parse int lo convierte en entero) 
 
 5 && 2 
 // 2 ( regresa el ultimo operando que valida como true)  
 
 2 && 5 
 //  5 ( regresa el ultimo operando que valida como true)  
 
 5 || 0 
 // 5 ( regresa el primer operando que valida como true) 
 
 0 || 5 
 // 5 ( regresa el primer operando que valida como true , sin tomar el 0 Que es false) 
 
 [3]+[3]-[10] 
 // 23 ( 3 y 3 se concatena y se restan 10 como numero ) 
 
 3>2>1 
 // False ( True > 1 ) 
 
 [] == ![] 
 // True ( [0] == [false] el operador "!" fuerza a la derecha a ser un boleano) 
  
  
 var profesor = "Jhoswe"; 
 let teacher = "Jose"; 
 if (true) { 
     var profesor = "The Flash"; 
     let teacher = "Reverse Flash";
     
     console.log(profesor);       
     // The Flash  ( Se cambia la variable) 
     
     console.log(teacher); 
     // Reverse Flash ( Se cambia la variable) 
 } 
 
 console.log(profesor);         
 // The Flash
 
 console.log(teacher);          
 //  Jose    ( declarado como global dentro del if)
