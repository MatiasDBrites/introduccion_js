6 / "3"  // 2
"2"*"3" // 6
4 + 5 +"px" // "9px"
"$" + 4 + 5 //"$45"
"4" - 2 //2
"4px" - 2 //NaN
7 / 0 // Infinity
{}[0] // las llaves inician un bloque declarado en 0
parseInt("09") //9
5 && 2 //2 
2 && 5 //5 
5 || 0 //5
0 || 5 //5
[3]+[3]-[10] // 23
3>2>1 //false
[] == ![] //true

var profesor = "Jhoswe";
let teacher = "Jose";

if(true) {
  var profesor = "The Flash";
  let teacher = "Reverse Flash";
  console.log(profesor); // The Flash 
  console.log(teacher); // Reverse Flash
}

console.log(profesor); // The Flash
console.log(teacher); // Jose
