// Counting Letters Converted To Method Logic
const counting = () => {
   let text = document.getElementById("teks").value.split(' ');
   let letter = document.getElementById("letter").value;
   let count = 0;
   
   text.forEach(function(data) {
      for (let i = 0; i < data.length; i++){
         if (data[i] === letter) {
            count++
         }
      }
  });

   document.getElementById("display").innerHTML = `
   <div class="alert alert-success alert-dismissible fade show" role="alert">
      <strong>Output :</strong> Total Huruf <u>${letter}</u> Sebanyak <u>${count}</u> Buah
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
   </div>`;
}



// Reverse Converted To Method Logic
const reverse = () => {
   let angka = document.getElementById('num').value;

   document.getElementById("display-reverse").innerHTML = `
   <div class="alert alert-success alert-dismissible fade show" role="alert">
      <strong>Output :</strong> ${angka.split('').reverse().join('')}
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
   </div>`;
}



// Multiplication Table Converted To Method Logic
document.getElementById("count").addEventListener("click", function () {
   let number = document.getElementById("number").value;
   let counter = document.getElementById("countTo").value;
   let data = [];

   for (let i = 1; i <= counter; i++){
      data.push(number + ' x ' + i + ' = ' + number * i);
   }
   
   data.map((result, key) => {
      return document.getElementById("display-multi-table").innerHTML += `
      <div class="d-block">
      <span class="badge bg-primary my-2">${result}</span>
      </div>`
   })
});

document.getElementById("reset").addEventListener("click", function () {
   return document.getElementById("display-multi-table").innerHTML = ''
});



// Concatenate Arrays Converted To Method Logic
let numberOne, numberTwo, result;

document.getElementById("add").addEventListener("click", function () {
   numberOne = document.getElementById("num1").value.split('');
   numberTwo = document.getElementById("num2").value.split('');
   result = numberOne.concat(numberTwo);
   
   document.getElementById("data1").innerHTML = numberOne;
   document.getElementById("data2").innerHTML = numberTwo;
   document.getElementById("data3").innerHTML = result;
});

document.getElementById("find").addEventListener("click", function () {
   const display = document.getElementById("concate-arr");
   document.getElementById("display-arr").innerHTML = '[' + result + ']';

   result.map((num, key) => {
      return display.innerHTML += `
      <div class="d-block">
      <span class="badge bg-info my-2">Index Ke: ${key} Value: ${num}</span>
      </div>`
   })
});

document.getElementById("resetResult").addEventListener("click", function () {
   document.getElementById("data1").innerHTML = ''
   document.getElementById("data2").innerHTML = ''
   document.getElementById("data3").innerHTML = ''
   document.getElementById("display-arr").innerHTML = ''
   document.getElementById("concate-arr").innerHTML = ''
});
