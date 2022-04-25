// var number = [10, 30, 20, 40, 60, 70,81,95]  
// console.log(number.indexOf(20)); // index 2
// // var join = number.join(' *** ')
// var slice = number.slice(1,6) //1 value for delete 2value for start to end delete
// console.log(number,'---->');
// console.log(slice);


/*
 var number = [10, 30, 20, 40, 60, 70,81,95]  

var splice = number.splice(2,0,11)
//splice 1 argument deleted
//splice 2,1 argument element index deleteed wry neded person
//splice 2,0,11, argument element index deleteed 

console.log(number,'----> original'); // splice modify/change the mull array
console.log(splice);
 */



/*
 var number = [10, 30, 20, 40, 60, 70]
var number1 = number.findIndex(function(e){
   return e > 40 // element index
//    console.log(e,i,arr);
})
console.log(number1);
console.log(number); 
*/

/* 
var number = [10, 30, 20, 40, 60, 70] 
var number2 = number.find((element)=> {
    return element > 20   // mass first element
})

console.log(number);
console.log(number2);
 */

/* 
var number = [10, 30, 20, 40, 60, 70,81,95]  

var filter = number.filter(function(element,ind){
    return element % 2 == 1 // condition mass all element
})
console.log(number);
console.log(filter);
 */

// foreach ::
// var number = [10, 30, 20, 40, 60, 70,81,95]  
// var forEach = number.forEach(function(e,ind){
//     // console.log('element',e, 'index',ind);
// })
// console.log(forEach);
// ------------
// var forEach = number.forEach((e)=> {
// //    console.log('element',e);
//    if(e < 50){
//        console.log(e);
//    }
// })
// console.log(forEach);


// map::
// var number = [10, 30, 20, 40, 60, 70,81,95] 
// var map = number.map(function(element){
//     if(element % 2 == 1){
//         return element
//     }
// })
// console.log(map);
// ------------------
// var map = number.map(element => {
//     if(element < 50){
//        return element
//     } 
// })

// console.log(map);


// sort:: 
// var number = [10, 30, 20, 40, 60, 70,81,95]  
// number.sort((a,b) => a - b) 
// number.sort((a,b) => b - a) 
// console.log(number);


var number = [10, 30, 20, 40, 60, 70,81,95] 
// console.log(number.reverse())
// console.log(number.length)

let sort = number.sort(function(a,b){a-b})
console.log(sort);