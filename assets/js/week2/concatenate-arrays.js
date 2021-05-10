//  Concatenate Arrays

let arr1 = [];
let arr2 = [];


const add = () => {
   let input1 = document.getElementById('num1').value;
   let input2 = document.getElementById('num2').value;
   arr1.push(input1.split(''));
   arr2.push(input2.split(''));

   document.getElementById("data1").innerHTML = arr1[0];
   document.getElementById("data2").innerHTML = arr2[0];
}


const combineArr = () => {
   document.getElementById("display").innerHTML = '[' + [...new Set([...arr1[0],...arr2[0]])].sort() + ']';
}