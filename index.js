
// let age = prompt('your age');
// document.getElementById("java").
// innerText=age;

// let num=10
// // increment decrement any number +_=
// num-= 10
// console.log(num)

// functions

// function  fun (yourName) {
  
//    let result = 'tanbir' + ' ' +yourName
//    console.log(result)
// }

// let name = prompt('what is ur name')
// fun(name);

//while lookps
/*let num =0
while (num<30) {
    num +=1
    console.log(num);
}
for loop////////////////
*/

// for (let num = 0; num <= 100; num++) {
   
//     console.log(num)
// }

// // Array
// let newFruit = [ 'banan','apple','kola','pali']

//  newFruit =new Array('banan','apple','kola','pali')

//  alert(newFruit[0])
 
// //access value from index

// let num1 = new Array()
// for (let num = 0; num <10; num++) {
//    num1.push(num)
    
// }
// console.log(num1)

// let student = {
//     first:'tanbir' , last : 'ahmed', age:24,height:5

// }
// student.first = "nw"  
// console.log(student)


//if else

// let age =prompt('age plz')

// if ((age>=18)&&(age<=34)) {
//     status = 'young'
//     console.log(status)
// }
// else{
//     status ='old'
//     console.log(status)
// }


// switch


// switch (1) {
//     case 1:
//         text='ffff'
//         break;
// case 2:
//     text='kkkk'
//     break
//     case 3:
//         text='sssss'
//         break
//     default:
//         text ='llllllll'
//         break;
// }

// console.log(text)

function ageInDays(){

let birthYear = prompt('what year ur born bro');
let totalDays = (2021 - birthYear) * 365 ;
let h1=document.createElement('h1');

console.log(h1)
let textAnswer=document.createTextNode('you are' +" "+ totalDays  +" " +'days old');
h1.setAttribute('id' , 'ageInDays');
h1.appendChild(textAnswer);
document.getElementById('result').appendChild(h1);



}


function reset() {
    document.getElementById('ageInDays').remove();
}

































































