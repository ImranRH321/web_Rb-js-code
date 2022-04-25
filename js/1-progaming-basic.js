// Javascript outline: 

// 1. Programming Basics:

// Printing an output with console.log()
// console.log('2 day is my revision javascript'); ---->


// Declaring variables with let, var, const keywords
// var langues = 'Javascript Program';
// let javascript = 'Object oriented Program'
// const challenge = "2 day is my challenge"
// console.log(langues, javascript, challenge);  

// Statements and syntax 
// var x = 10;
// var y = 20 ;
// console.log(x, y);


// Comments
//this is comment = /* this is multiline comment */


// Operators 
// i. Assignment operators, ii.  Arithmetic operators, iii. Comparative operators, iv. Logical operators. 

// Assignment operators----> (=, +=, -=, *=, /=, %=)
// var x = 10 ;
// x += 10
// console.log(x);
// var y = 20 ;
// y -= 10 ;
// console.log(y);
// var z = 5 
// z *= 5 + 10 
// console.log(z);
// var j = 30 ;
// j /= 3
// console.log(j);
// var n = 42 ;
// n %= 4 ;
// console.log(n);

// Arithmetic operators----> (+, -, --, *, **, /, %, +, ++, )
// var a = 10; 
// a = a + 10;
// console.log(a);
// var b = 20;
// b = (20 - 10) + 5 
// console.log(b);
// var c = 10 ;
// c **= 2   
// console.log(c); //100
// var d = 20 ;
// var e = d / 10 
// console.log(e);
// var f = 35;
// f %= 2 ;
// console.log(f); // 1

// Comparative operators---> (> , >=, <, <=, ==, ===, !=, !==, )
// var j = 30;
// var h = 50 
// var z = j > h 
// console.log(z);
// var i = 300;
// var j = 500;
// var k = i < j 
// console.log(k);
// var l = 20;
// var n  = l >= 30 
// console.log(n);
// var o = 50;
// var p = o < 30 
// console.log(p);
// var q = 20 ;
// var r = q ==20
// console.log(r); 
// var s = 20 ;
// var t = s != '20'
// console.log(t); // false 
// var u = 50;
// var v = u !== '50'
// console.log(v);  // true

// Logical operators-------> (&&, || , !) 
// var w = 20;
// var x = 50
// var y = 60;
// if(w == x && x !== y ){
//     console.log('this is similar');
// } else {
//     console.log('this is Not similar');
// }

// var z = 20;
// if(z === '20' || z == 30){
//     console.log('Similar');
// } else {
//     console.log('not similar');
// }

// var zz = 200
// if(!zz){
//     console.log('not similar');
// } else {
//     console.log('similar');
// }

// ------------------ >< ------------------
// Data types:
// Primitive data types, ii. Object types

// Primitive: a) number, b) string c) boolean d) null,
// e) undefined … 
// number--->
var num = Number('40')  // number
var num1 = new Number('40') // object
console.log(typeof num);
console.log(typeof num1);

// string--->
var str = String(305060) // string
var str1 = new String(404050) // object
console.log(typeof str);
console.log(typeof str1);

// boolean--->
var bool = Boolean(true) // boolean
var bool1 = new Boolean(true) // object
console.log(typeof bool);
console.log(typeof bool1);

// null--->
var value = null  // null
console.log(typeof value);  // object

// undefined---> 
var x ; // undefined
console.log(typeof x); 

// Object: a) Array , b) Object, c) function ?

// Object--->
var obj = {a: 20, b: 30}  // object
var obj1 = Object()   // object
console.log(typeof obj);
console.log(typeof obj1);

// Array--->
var arr = Array(1,2,3,4,5)
var arr1 = new Array(1,2,3)
console.log(typeof arr);
console.log(typeof arr1);

var func = function () {}
var func1 = new Function()
console.log(typeof func);
console.log(typeof func1);



// -------------Other-------------


// Examples
// Basic usage
// Numbers
typeof 37 === 'number';
typeof 3.14 === 'number';
typeof(42) === 'number';
typeof Math.LN2 === 'number';
typeof Infinity === 'number';
typeof NaN === 'number'; // Despite being "Not-A-Number"
typeof Number('1') === 'number';      // Number tries to parse things into numbers
typeof Number('shoe') === 'number';   // including values that cannot be type coerced to a number

typeof 42n === 'bigint';

// Strings
typeof '' === 'string';
typeof 'bla' === 'string';
typeof `template literal` === 'string';
typeof '1' === 'string'; // note that a number within a string is still typeof string
typeof (typeof 1) === 'string'; // typeof always returns a string
typeof String(1) === 'string'; // String converts anything into a string, safer than toString

// Booleans
typeof true === 'boolean';
typeof false === 'boolean';
typeof Boolean(1) === 'boolean'; // Boolean() will convert values based on if they're truthy or falsy
typeof !!(1) === 'boolean'; // two calls of the ! (logical NOT) operator are equivalent to Boolean()

// Symbols
typeof Symbol() === 'symbol'
typeof Symbol('foo') === 'symbol'
typeof Symbol.iterator === 'symbol'

// Undefined
typeof undefined === 'undefined';
typeof declaredButUndefinedVariable === 'undefined';
typeof undeclaredVariable === 'undefined';

// Objects
typeof {a: 1} === 'object';

// use Array.isArray or Object.prototype.toString.call
// to differentiate regular objects from arrays
typeof [1, 2, 4] === 'object';

typeof new Date() === 'object';
typeof /regex/ === 'object'; // See Regular expressions section for historical results

// The following are confusing, dangerous, and wasteful. Avoid them.
typeof new Boolean(true) === 'object';
typeof new Number(1) === 'object';
typeof new String('abc') === 'object';

// Functions
typeof function() {} === 'function';
typeof class C {} === 'function';
typeof Math.sin === 'function';

typeof null
// This stands since the beginning of JavaScript
typeof null === 'object';