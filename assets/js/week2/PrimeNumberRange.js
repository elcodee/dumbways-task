// Prime Number Range

const num = () => {
   let int1 = document.getElementById('num1').value;
   let int2 = document.getElementById('num2').value;

   if (int1 >= int2) {
      document.getElementById("display").innerHTML = `
      <div class="alert alert-danger alert-dismissible fade show" role="alert">
         <strong>Output :</strong> Input Number 1 Lebih Besar Dari Input Number 2
         <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div> `;
   } else {
      let arr = [];

      for (let i = 2; i <= int2; i++){
         if (i >= int1) {
            arr.push(i);
         }
      }

      function isPrime(num) {
         for (let j = 2; num > j; j++) {
           if (num % j == 0) {
             return false;
           }
         }
         return num >= 1;
      }
      document.getElementById("display").innerHTML = `Bilangan prima antara ${int1} dan ${int2} adalah <br /> ${arr.filter(isPrime)}`
   }
}