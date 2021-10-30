
#Plan

##  Section 4. Program flow
###  if…else 
###  Ternary operators 
###  switch 
###  while 
###  do…while 
###  for loop 
###  break 
###  continue 



##  Section 5. Strings
###  JavaScript strings 
###  String type 
###  trim(), trimStart(), and trimEnd() 
###  padStart() and padEnd() 
###  concat() 
###  split() 
###  indexOf() 
###  lastIndexOf() 
###  substring() 
###  slice() 


## Section 6. Arrays
###  JavaScript Array 
###  Array length 
###  Stack 
###  Queue 
###  splice() 
###  slice() 
###  index() 
###  every() 
###  some() 
###  sort() 
###  filter() 
###  map() 
###  forEach() 
###  reduce() 
###  join() 
###  Multidimensional Array 



##  JAVASCRIPT FUNCTIONS
###  Functions
#alrt();
#console.log();

function test(paraneters){
    // function body
}

function test_1(a){
    // function body
}
function test_2(a,b){
    // function body
}

test_1(12);

test_2(12,13); // test_2(12)

# parameters et arguments

function add(x,y){
    return x+y;
}

let somme = add(12,13);
console.log(somme);

function div(x,y){
    if(y!=0) return x/y;
    else return 1;
}

function div(x,y){
    if(y!=0) return x/y;
    else return;
}

function add(){
    let res =0;
    for(let i=o; i < arguments.length; i++>){
        res += arguments[i];
        }
    return res;
}

add(1,2);
add(1,2,3);
add(1,2,3,4,5);

### hointing


###  Functions are First-Class Citizens

function getCities(){
let city_1= "knitra";
let city_2 = 'rabat";

return [city_1, city_2];
}
let cities = getCities();

function getCities(){
let city_1= "knitra";
let city_2 = 'rabat";

return {city_1, city_2};
}
let cities = getCities();
let {city_1, city_2} = getCities();


### Anonymous Functions

let func_name = function () {
    console.log("hello world);
}

show();
SetTimeout (fn, timeout);
SetTimeout ( function (){
    console.log("Excute apres 1000ms")
}, timeout);

call anayme function 

(function () {
    console.log("hello world);
})();

let person = {
    firstName: 'baddi',
    lastName: 'youssef'
}
(function () {
    console.log(`${person.firstName} ${person.lastName}`);
})(person);

let fun = () =>
    console.log(`${person.firstName} ${person.lastName;
### IIFE
function add(a,b) {
    return a+b
}

console.log(window.add);

let var_1 = function (a,b) {
    return a+b
};

console.log(window.var_1(10,20));
......
### Callback Functions
let numbers =[1,2,3,4,5,6,7,8,9];

function ispair(number){
    retrun number % 2;
}

let isImpaire = (number) =>  retrun !( number % 2);
let numbers_paire = numbers.filtre(ispaire);

let numbers_paire = numbers.filtre(function(number){
    retrun number % 2;
});


let numbers_paire = numbers.filtre(number => number % 2;
);

numbers.sort((a,b) => b-a);
console.log(numbers);

function first (a){
    console.log(h);
    let var_1;
    setTimeout (() => {
        var_1 = 12
        console.log(${a});
    }, 1000)
 console.log(var_1);
}


function first (a,fn){
    console.log(h);
    setTimeout (() => {
        console.log(${a});
        fn(a);
    }, 1000)
 console.log(var_1);
}

function do(a)
{console.log(a);
}
first (12, do);


function download(url, success){
    setTimeout (()=> {
        console.log(`Downloading ${url} ..`)
        let error = url.length ===0 || !url;
        success(url);
    }, 3000)
}

download('', 
download('', 
function(url){
    console.log("success");
}))

## JAVASCRIPT OBJECTS
### JavaScript Objects

let var_1 = {};

let var_2 = {
    key1: "val",
key2: "val2",
var_2: function(key1, key2){
    this.key1= key1;
    this.key2 = key2;

}
calcule : function (){
    console.log("hello");
}

var_2.key1

var_2['key1'];

var_2['key1'] = "val2";
var_2['key3']= "val3";

if ('key1' in var_2) return true;
else return false:

for (let key in var_2){
    console.log(key);
}

for (const key in var_2){
    console.log(key);
}

var_2.compute = function () {
    console.log("hello");
}

function calcule () {
    console.log("hello");
}

var_2.compute2 = calcule;  
var_2.compute();

let var = new var_2("val2", "value3");

var_2.var_2 = function(key_1, key_2){
    key1= key_1;
    key2 = key_2;
### Object Properties
### Constructor Functions
### Javascript Prototypes
### Constructor/Prototype Pattern
### Prototypal Inheritance
### THIS Keyword
### Factory Functions
### for…in Loop
### Enumerable Properties
### Own Properties
### Primitive vs. Reference Values
### Primitive Wrapper Types

## ADVANCED FUNCTIONS
### Passing By Value
### Returning Multiple Values
### Function Type
### The call() Method
### The apply() method
### The bind() Method
### Recursive Functions
### Closures

## REGULAR EXPRESSIONS
### Basic Regular Expressions
### Character Classes
### Anchors
### Sets and Ranges
### Word Boundaries
### Quantifiers
### search()
### match()
### replace()

## JAVASCRIPT RUNTIME
### Execution Context
### Call Stack
### Event Loop
### Hoisting
### Variable Scopes