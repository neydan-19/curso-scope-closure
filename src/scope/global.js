// variables

var a; // declarando
var b = "b"; // declarando y asignando
b = "bb"; // reasignacion
var a = "aa"; // redeclaracion


// Global scope
var fruit = "Apple"; //global
console.log(fruit);
function bestFruit(){
    console.log(fruit);
}

bestFruit();

