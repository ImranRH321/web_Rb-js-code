/* 
variables:
var x = 10;
let y = 20;
const z = 30;
/* 
Operators:
    1. Arithmetic operators (+, - , * , / , -- , ++, % , ** )
    2. Assignment Operators ( = , += , -=, *=, /=,  )
    3. Logical operators ( && , || , !)
    4. Comparison operators ( == , === , < , > , <=, >=, !=, !==)
*/

// var x = 10;
// var z = 5;
// x += z;

// console.log(x);

/* 
Data Types:
1. Primitive data type.
    a. Number
    b. String // '' , "", ``
    c. Boolean // 
    d. undefined
    e. null
    f. NaN
2. Object
    a. Array
    b. Object
    c. Function
*/

/* 
var myArray = ["Hasan",100,true]
 */

// const person = {
//     name: 'Jone Doe',
//     age: 50,
//     isMarried: true,
//     hisWork: function () {
//         console.log('coding!');
//     }
// }

// console.log(person.hisWork());
/* 
console.log(Math.abs(-20));
var a = 10.23234;
console.log(Math.floor(a));
console.log(Math.ceil(a));
console.log(Math.round(a));
console.log(Math.max(2, 3, 5, 1, 8));
console.log(Math.min(2, 3, 5, 1, 8, -67));
console.log(Math.pow(10, 2));
console.log(Math.sqrt(81));
console.log(Math.floor(Math.random() * 100) + 1); */

const date = new Date()
// console.log(date.getDate())
// console.log(date.getDay())
// console.log(date.getFullYear())
// console.log(date.getTi dd
// console.log(date.toLocaleDateString())



// function hello() {
//     // console.log('Function has been called');
//     return 'Greeting!'
// }

// // const hello = () => {
// //     console.log('Function has been called');
// // }

// console.log(hello());

// function calculator(a, b) {
//     return a + b;
// }


// var result = calculator(10, 20)

// console.log(result);


// function celsiusToFahrenheit(celsius = 0) {
//     const fahrenheitTemp = celsius * 9 / 5 + 32; //(0°C × 9/5) + 32 = 32°F
//     return fahrenheitTemp;

// }

// console.log(celsiusToFahrenheit(50));

// console.log(celsiusToFahrenheit(20));



// conditional

// 1. if condition 
// 2. else condition
// 3. else if condition

// 4. switch statement.

var a = 100;
var b = 20;

// if (a < b) {
//     console.log("A is smaller than B");
// } else {
//     console.log("B is smaller than A");
// }


// var num = 0;

// if (num === 0) {
//     console.log("This is zero");
// } else if (num % 2 === 0) {
//     console.log('This is even number');
// } else {
//     console.log('This is odd number');
// }

// console.log(10 === '10');
// console.log(100 + 'a');
// console.log(5 * '2');
// console.log(4 / "2");
// console.log(100 - "dfdf");

// var zero = 0;

// var month = 3;

// switch (month) {
//     case 0:
//         console.log("January")
//         break;
//     case 1:
//         console.log("Feb")
//         break;
//     case 2:
//     case 3:
//         console.log("April")
//         break;

//     default:
//         console.log("Invalid number");
// }


// var marks = 50


// 0-32 = F
// 33-39 = D
// 40-49 = C 
// 50-59 = B
// 60-69 = A-
// 70-79 = A
// 80 - 100 = A+




// function GradeCalculator(marks) {

//    if (marks < 0 || marks > 100) {

//         console.log("invalid input");
//     } else if (marks >= 80) {
//         console.log("you got A+");
//     } else if (marks >= 70) {
//         console.log("you got A");
//     } else if (marks >= 60) {
//         console.log("you got A-");
//     } else if (marks >= 50) {
//         console.log("you got B");
//     } else if (marks >= 40) {
//         console.log("you got C");
//     } else if (marks >= 33) {
//         console.log("you got D");
//     } else {
//         console.log("you got F");
//     }

// }

// GradeCalculator(59.55)

// loops

/* 
1. for 
2. for of 
3. for in
4. while
5. do while
*/

// for (var i = 0; i < 10; i++) {
//     console.log(i);
// }


// var i = 0;
// while (i < 10) {
//     console.log(i);
//     i++
// }


// var i = 0;
// do {
//     console.log(i);
//     i++
// } while (i == 10)


/* 
0
12
123
1234 */




// var arr = [1, 2, 3, 4, 5, 4]

// for (let element of arr) {

//     console.log(element);
// }


// var sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i]
// }

// console.log(sum);


// for (var i = 1; i < 10; i++) {

//     var line = '0'
//     for (var n = 1; n < i; n++) {
//         line += n;
//     }
//     console.log(line);
// }


// 01234
// 01234
// 01234
// 01234



// var line = 10;

// for (var i = 0; i < line; i++) {

//     var lineData = ''
//     for (var j = 0; j < line; j++) {
//         lineData += ' ' + j

//     }
//     console.log(lineData);

// }

// <------------------String---------------->

// var str = 'helo'
// var str2 = "gleo"
// var str3 = String(1020.40)
// var str4 = `helo`
// var str5 = new String(10405060)
// console.log(str,'= ', "= ", str2, "= ",str3);
// console.log(`${str} = ${str2} = ${str3} = ${str4} = ${(50+50)-20} = ${str5} = 10`);
// console.log(str3.concat(str5));
// console.log(str4[2] = 'A');  // can n't change mul string ?
// console.log(str4);

// var str = 'oneTowThree'

// console.log(str.charAt(6));  // T
// console.log(str.charCodeAt(4)) // 111 
// console.log(str.indexOf('T')); // index 3
// console.log(str.length); //11

// console.log(str.toLocaleLowerCase());
// console.log(str.toLowerCase());
// console.log(str.toLocaleUpperCase());
// console.log(str.toUpperCase());

// var str = 'oneTowThree'

// console.log(str.endsWith('e')); //search last index = true
// console.log(str.includes('L')); // search string index false
// console.log(str.lastIndexOf('Tow')); // index 3
// console.log(str.slice(5,-2)); //1 value next index start result 2value koto take koto gor

// console.log(str.substring(6,11));
// console.log(str.endsWith('e'));
// console.log(str.startsWith("T", 3)); // index 3 = true 

// var str = "Lorem Dolor ipsum dolor sit amet iue dolor fugiat quos nam?"
// console.log(str.indexOf('dolor',22)); //first check second next index check

// for(let i in str){
//     console.log(str[i]);
// }
// console.log(str.split());
// console.log(str.search(/dolor/i));



// var str = '            abc@gmail.com           '
// console.log(str);
// console.log(str.trim());
// console.log(str.trimEnd());
// console.log(str.trimStart());

var str = 'world hello bondo hello bondo'

// console.log(str.padStart(8, '*'));
// console.log(str.padEnd(8, '*'));

// console.log(str.repeat(3, str));


// console.log(str.replace('hello','kikorli'))
// console.log(str.replace(/hello/i, "Bangladesh"));
// console.log(str.replace(/bondo/g, 'shotro'));
// console.log(str.replace(/hello/ig, "Bangladesh"));
// // console.log(str);





// Number

// var num = "10.834351";
// var num = "10.834351";
// var num1 = new Number('100')
// console.log(num1.toString());
// console.log(num1);
// console.log(num.toExponential());
// console.log(num.toFixed(2));

// console.log(Number.parseInt(num));
// console.log(Number.parseInt(num));

// var num = 2 / 0;
var num = 50 / 'wer';
// console.log(Number.isInteger(num));
// console.log(Number.isNaN(num));

// var bol = false;
// var bol1 = Boolean(0.124) // false, 0, '' , undefined , null, NaN 

// console.log(bol1);



// Array


// var arr2 = new Array(5)
// console.log(arr2.length);
// console.log(arr[1]);

// console.log(arr2[2]);
// arr[2] = "hello"
// console.log(arr[2]);
// console.log(arr);


const arr = [1, 3, 6, "three", 6, "Lst"]

// arr.push("push", "a", "b")
// arr.unshift("unshift")
// arr.pop()
// arr.shift()

// arr.splice(4)
// arr.splice(3, 2)
// arr.splice(3, 1, "new element", "new2")
// arr.splice(2, 0, "new element", "new2")
// var returnedArray = arr.slice(1, 3)

// console.log(returnedArray);


// console.log(returnedArray);
// console.log()

// console.log(Array.isArray(arr));
// console.log(arr instanceof Array);

// console.log(typeof );

// const fruits = ["Banana", "Orange", "Apple", "Mango", "Apple"];
// const cars = ["Saab", "Volvo", "BMW"];
// const num1 = [1, 2, 3, 4, 5]

// console.log(cars.toString());
// console.log(cars.join("*"));

// var newArray = fruits.concat(cars, num1, "Extra", "extra extra", 1)
// console.log(fruits.indexOf("Apple"));
// console.log(fruits.indexOf("Apple", 2));
// console.log(fruits.indexOf("Apple", -2));


// const arr = [1, 3, 5, 4, 6, 2]

// let arr = [{
//         name: "Mehedi Hasan",
//         age: 25
//     },
//     {
//         name: "Hasan",
//         age: 21
//     },
//     {
//         name: "Roni",
//         age: 26
//     },
//     {
//         name: "Kafi",
//         age: 30
//     },
// ]

// console.log(arr.findIndex(function (e) {
//     return e > 5
// }));

// console.log(arr.findIndex((e, i, arr)));


// console.log(arr.findIndex(function (e) {
//     return e.age == 30
// }));

// console.log(arr.find(function (e) {
//     return e.age == 30
// }));



// console.log(arr1.find(condition));


// function condition(e) {
//     return e > 5;
// }

// console.log(parseFloat("123.343"));


// const arr1 = [1, 3, 5, 4, 6, 2, 8, 9, 6, 8]

// arr1.forEach((e, i, arr) => {
//     console.log(e, i, arr);
// })


// var newArray = arr1.map((e) => {
//     return arr
// })


// console.log(newArray);



// console.log(abc());


// const arr1 = [1, 3, 5, 2, 9, ]

// var result = arr1.some((e, i, arr) => {
//     return e % 2 === 0
// })

// var result = arr1.every((e) => {
//     return e % 2 === 0
// })

// console.log(result);



// function abc(p) {
//     return a + b;
// }


// abc(1, 0 , [])

// console.log(arr2);
// arr2.copyWithin(2, 0, 2)

// console.log(arr2);

// var arr2 = ["adfdf", "zfdf", 1, 'qdfdf', "Z", "b", "c", -2344, 23434, 'd', 'e']
// 0-9
// a-z
// arr2.sort()
// arr2.reverse()

// console.log(arr2);arr2.sort()
// arr2.reverse()

// console.log(arr2);

// console.log("badfdfdf".charCodeAt(0));
// console.log("Aadfdfdf".charCodeAt(0));

// var arr4 = [100, 20, 1453, 45];

// arr4.sort((a, b) => a - b)

// console.log(arr4);

// --------------------------Object------------------


var person = {
    name: 'Shakib khan',
    age: 35 ,
    isMarried: true,
    actor: {
        bangla: 4,
        english: 5,
    },
   movies: ['ami neta hobe', 'mar chokka', 'sahoshi alom'],
   sing: function () {
       console.log('Alom is Singer');
   }
}
//1. add korte pari 
//2. value update korte pari   
//3. propati delete korte pari 
// 4.delete person.sing

// console.log(person);

// person.totalMovies = 10 // noto popati add korbo abave 

// person.age = 20 // value update korbo abave 

// delete person.isMarried; // object take akta popati delete korte pari

// console.log(person.totalMovies);
// console.log(person);

// var obj1 = new Object()
// console.log(obj1);
// console.log(person?.actor?.english);
// person.sing()

// var name = "Moyenul"
// var obj = {
//     person : {
//         name: name // semikolon dile bek korbe caile koma dite pari
//     }
// }

// var name = 'Morsalin'
// var person = {
//     name: 'Hero',
//     print: function (){
//         console.log(this.name);
//     },
//     err: ['one','tow','three']
// }

// je objet ar bitor amra asi je objet popati ke dorte chai taile this.popatir name dite hobe

// person.print()
// console.log(person.err[2]);

// console.log('name' in person);   
  // check korte pari obj ar modde ase kina takle true bolble na takle false bolbe

//  var props = 'name'

//  console.log(person.props);
//  console.log(person[props]); 

// var obj = {
//     a: 10,
//     b: 30
// }
// var obj1 = {
//     a: 10,
//     b: 30
// }

// var obj1 = obj; // avabe korle ager obj take dibe accuss korte parbo

// console.log(JSON.stringify(obj)=== JSON.stringify(obj1)); // avabe doita object add korte pari

// var obj1 = Object.assign({}, obj)

// obj1.a = 'ten'
// console.log(obj1); 
// console.log(obj);

// console.log(Object.keys(obj)); //keys ar modde array moto korte pari

// console.log(Object.values(obj)); // array moto amara value pabo

// console.log(Object.entries(obj)); // ar modde akadik array moto banate pari




/* for(let prop in obj){
    console.log(prop);
    console.log(obj[prop]); // obj ar popati loop ar modde abave acuss korte pari
} */

// -----------------------------------function-----------------------------------

// function funcName (a , b){
// //    console.log('hi there');
// //  console.log(arguments); // object 
//    var arr = arguments  
//    var sum = 0 
//    for(let i = 0; i < arguments.length; i++){
//        sum += arguments[i]
//     //  console.log(arguments[i]);
//    }
// //   console.log(sum);
//   return sum 
// }

//  var name = funcName (10, 20,30,40,23)

// console.log(name);



// function nameFunc(a, b){
//     var dorlam= 0
//     for(let i = 0; i < arguments.length; i++){

//         dorlam += arguments[i]
//     }
//     return dorlam 
// }

// var total =  nameFunc(10,30,40, 50,20,30)
// console.log(total);

// function ar bitor ja take tai local scope 

// function ar  bahir a ja take tai gobal scope 

//  function funcName (a, b){
//     var sum = a + b 
//       function child (c){ 
          
//          sum = sum * 10 + c
//       }

//       child(20) 
//       return sum 
//  }

//  var total =  funcName(5 , 5)
// console.log(total);


// function func (c) {
//     var sum =  c 
//     function funcName(a, b){ 
//          sum  = a + b +  c + 10
//          return sum 
//     }
//    funcName(10, 20)
//     return  sum
// }

// var tot = func (10)
// console.log(tot);



// function func (a, b , cb){
//  var c = a - b 
//  var d = a + b
  
//  var result = cb(c,d) 

//  return result 

// }

// var callback = func(10, 5, function(c,d){
//    return c + d 
// })

// console.log(callback);


// je function ar name nai take bole anonymous funciton 



// function func (rakib, morsalin,auntor){
//     var manyRakib = rakib + morsalin  // 15
  
//     var morsalin = manyRakib - morsalin  // 10

//     var total = auntor(manyRakib, morsalin)
 
//     return total 
// }

// var call = func(10, 5, function(a, morsalib){
//   return a + b
// })

// console.log(call);

// jodi amader hote contorl rakte chai taile callbeak function babohar korbo 


// var myArr = [1, 2, 3, 4, 5] 

// myArr.forEach(function(ele, i , myArr){
//     // console.log(ele, i , myArr);
// })


// function funcName (arr, count) {
//    for(let i = 0; i < arr.length; i++){
//       count(arr[i],i)
//    } 
// }

// var sum = 0
// console.log(funcName(myArr, function(ar, i){
//   console.log(ar,i);
//   sum += ar
// }));

// console.log(sum);

// var myArr = [1, 2, 3, 4, 5,6,7] 

// function myFunc (arr, call){
//     for(const element of arr){
//       var re =  call(element) 
//       if(re){
//           return element 
//       }
//     } 
//   return re 
// }

// console.log(myFunc(myArr, function(e){
//   return e > 5
// }));

// var number = [1, 2, 3, 4, 5,6,7] 

// function myFilter(arr,callback){
//     var newArray = []
//   for(let i = 0; i < arr.length; i++){
//       if(callback(arr[i])){
//         newArray.push(arr[i])
//       }
//   }
//     return newArray
// }

// console.log(number, function(e){
//      return e % 2 === 0
// });

// ------------------------------





// function print(val){
//     console.log(val);
// }


// function add(a, b){
//     return a + b
// }

// function sqr (n){
//     return n * n
// }

// print(sqr(add(a,b)))

// function recursiveFunc(){
  
//     if(n === 0){
//         return 
//     }
//     // console.log(n);
//     recursiveFunc()
// }

// recursiveFunc()


