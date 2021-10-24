// "use strict";
var c=2;
var C=2;
var x=0;

// comment one ligne

/* comment many 

lines
*/

// Statement
var a=10;
var b=20;
if(a>b){
    console.log("a is bigger then b")
}

console.log(a+b);

// break;
// float
// int
//short
// abstract
// private
// protected

// undefined
var messages;
console.log(messages);
// console.log(msg);

// variable global and local
var variable_1="hello";
function testF(){
    variable_1= "hello world";
}

testF();
console.log(variable_1);

//  

function test_2(){
    message = 'Hi';
    console.log(message);
}

test_2();
console.log(message);

console.log(msg_1);
var msg_1;

var a_1=20, b_1=10;
{
    let t =a_1;
    a_1=b_1;
    b_1=t;
}
// console.log(t);

const pi=3.14;
// pi =1.141;

// Typw
// null
c=null;
console.log(typeof(c));
// undefined
// boolean
c=false;
console.log(typeof(c));
// number
c =120;
console.log(typeof(c));
// string
c="hello"
console.log(typeof c);
// object
// symbole

let num_1=60;
let num_2=060;
let num_3=090;
let num_4=0o45; // 37 ES6
let num_5 = 0xf; // 15
let f1=12.5;
let f2=.3;
let f3=200.00;
let f4=2.17e6; //2170000
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MIN_VALUE + Number.MAX_VALUE);

console.log('a'/2); // NaN



let s = 'c\'est mon nom';
let mes_2='hello ';
let name_s = mes_2 + " name";

console.log(Boolean(20));
console.log(Boolean(0));
console.log(Boolean('hello'));
console.log(Boolean(''));
console.log(Boolean(Infinity));

console.log(Boolean({key: 'value'}));

let fun = function add(){

}

let s1=Symbol();
let s2=Symbol();
let s21=Symbol('click');
console.log(s21.toString());

// Object 
let etudiant ={
    firstName:'ahmed',
     secondName: 'adil',
     address:{
         rue:'rue1', 
     }
};
