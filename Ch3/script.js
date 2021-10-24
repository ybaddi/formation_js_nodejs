console.log("ch3");

if(){

}else{

}

// Tenary opeartors

let var = (x>0)? 1:0;

if(x>0){
    return 1
}else{
    return 0;
}

function test(var_1){
    var_1= typeof(var_1) !== 'undefined' ? var_1 : 10;
    console.log(var_1);
}

test();
test(30);

var loged = true;
var nextPATH = loged ? (
    alert ("redirect to admin dashboard"),'/admin'
): (
    alert ("access denied"),'/403'
);

console.log(nextPATH); // '/admin)


//  multiple JS tenary operators
var sp =90;
var msg = sp >= 120 ? "Too hight" : (sp >= 80 ? "not high" : 'OK' );
 console.log(msg); //

 // switch
 let day =3;
 var dayName;
 switch (day){
     case 1:
         dayName='Lundi"'
         break;
    case 2:
           dayName='Mardi"'
          break;
    case 3:
         dayName='Mercredi"'
          break;
     case 4:
        dayName='jeudi"'
        break;
    case 5:
                        dayName='vendredi"'
                        break;
                        case 6:
                            dayName='Samedi"'
                            break;
                            case 7:
                                dayName='Dimanche"'
                                break;
 }

 console.log(dayName);

 switch(day){
     case 1:
    case 2:
    case 3:
        dayName = "Lundi";
        break;'
    case 4:
        if(day % 2 ==0) DayName="Mardi";
        else dayName="MErcredi";
    }

    // while
    let counter = 0
    while(counter < 100){
        console.log(counter);
        counter++;
    }

    let rounds = [];
 let count = 0;
 const step =5;

 while (count < step){
     rounds.push(Math.round(Math.random() * 100));
     count ++;
 }
 console.log(rounds);

    // do while

        // while
    let counter = 0
    do{
        console.log(counter);
        counter++;
    }while(counter < 100);

    // for 
    for(i=0;i<100; i++){
        console.log(i);
    }

    // break

    // continue
    for(i=0;i<100; i++){
        if(x%5==0){continue}
        console.log(i);
    }

    // Strings

    // trim
    // trimStar()
    // // trimEnd()
    // padStart()
    // padENd()
    // concat()
    // split
    // indexOf()
    // lastindexof()
    // substring() / slice`
    // includes()
let str = "hekllo world";
console.log(str[3]);

let str_1='JS lanlguage';
let substr='js';
str_1.toLocalLowerCase().indexof(substr.toLocalLowerCase()); 




// arrays
let tabs = new Array();
let tabs_1 = array(10);
let tab_2 = new Array(1,2,3,'hello',4,7,6,8,10);

let val=1;
let val1=4;
let val2=3;

let tab_3 = [1,2,4,'hello'];

console.log(tabs[5]);
console.log(tabs);
console.log(tabs.length);

// push
tabs.push('hi');

// add at first index
tabs.unshift('first');

// pop delete last element

// shift delete first element


// find index indexof

// isArray()

// question ? 
let tab = new array(1,2,3,4);
tab[9] = 'hi;'
tab.length =0;
tab.length = tab.length -1;

// Stack

// push add in the end

//pop
// exercice reverse d'un string
let str = "hello world";
let stack = [];
for (let i =0; i < str.length; i++){
    stack.push (str[i]);
}
let reverse_str='';
for (let i =0; i < stack.length; i++){
    reverse_str +=stack.pop();
}

// Queue
function Queue(){
    this.tabs=[];
}
// enqueue
Queue.prototype.enqueue = function(item){
    this.tabs.push(item);
}


Queue.prototype.dequeue = function(item){
    return this.tabs.shift(item);
}
// dequeue
Queue.prototype.isEmpty = function(item){
   return  this.tabs.length==0;
}

// dequeue
Queue.prototype.show = function(item){
    return !this.isEmpty ? this.tabs[0]: undefined;
}

let queue = new Queue();

for (let i =0; i < 10; i++){
    queue.enqueue(i);
}

console.log(queue.show());  //1

console.log(queue.length);

while(!queue.isEmpty){
    console.log(queue.dequeue());
}

// splice
Array.splice(pos,tab);

let numbers = [1,2,3,4,5,6]

let items = numbers.splice(0,3);

console.log(numbers) // 4,5,6
console.log(items); // 1,2,3

numbers = [1,2,3,4,5,6]

let items = numbers.splice(2,0,11); // 1,2,3,11,4,5,6

function toArray(){
    return Array.prototype.slice.call(arguments);
}

var tabs = toArray('A', 'B', 'C');

console.log(tabs); // ["A", "B", "C"]

var paragraphs = document.querySelectorAll('p');

var objs = [
    {},
    {},
    {},,
    {}
]
console.log(objs.indexOf({
    name: 'baddi',
    age: 24,
}))   // 

// exercice function to find all occurence of an item
function find(item, items){
  res =[];
   var idx = items.indexOf(item);
   while(idx != -1){
       res.push(idx);
       idx = items.indexOf(items, idx+1);
   }
  return res;
}

console.log(find(20,numbers));

// Filter()
let villes=[
      {name: "Chicago", size: 350000},
      {name: "New York", size: 400000},
      {name: "londre", size: 250000},
      {name: "maldive", size: 400000}
]

let filtred = [];
for (let i =0; i < villes.length; i++){
   if(villes[i].size >= 300000) filtred.push(ville[i]);
}

let filtred = villes.filter(function (item) {
    return item.size > 300000;
})

let filtred = villes.filter( item =>
  { return item.size > 300000;}
  );


  let reduced = villes.reduce(function (val1, val2) {
    return val1+val2;
});
let tab =[1,2,3];
console.log(reduced); // 6
reduce()
// map()

function calculeCarre(val1) {
    return val1*val1;
}
let reduced = villes.redumapce(calculeCarre);