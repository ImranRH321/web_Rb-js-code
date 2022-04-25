// 4. Condition and logic:---->
// If condition 
// Else condition 
// Else if condition
// Switch statement

// If condition --->
// var age = 40 ;
// if(age < 30){
//     console.log('job ar Time ase');
// } else {
//     console.log('Job ar jonno time nai');
// }

// Else condition--->
// var age = 15;
// var citizen;
// if(age < 21 && age >= 18){
//     citizen = 'vote ted'
// } else {
//     citizen = 'Not vote ted'
// }
// console.log(citizen);

// let books = 'Bangla'
// if(books == 'Bangla'){
//     console.log('Bangla Books');
// } else if(books == 'Math'){
//  console.log('Math Books');
// } else if(books == 'English'){
//     console.log('English Books');
// } else {
//     console.log('Unkwon Books');
// }

// Else if condition---> 

// var many = 2000;
// var tshirt = 5000;
// var isMarid = true 

// if(many > 500 && isMarid == false){
//     console.log('biya na korai valo');
// } else if(many < 500 || isMarid === true){
//     console.log('ki ar hobe koira fela');
// }

// Switch statement--->

var day = new Date()

switch(day.getDay()){
 
    case 0: 
    console.log('sun');
    break
    case 1: 
    console.log('sun');
    break
    case 2: 
    console.log('Mon');
    break
    case 3: 
    console.log('wednesday');
    break
    case 4: 
    console.log('Threes');
    break
    case 5: 
    console.log('Fri');
    break
    case 6: 
    console.log('sat');
    break
}