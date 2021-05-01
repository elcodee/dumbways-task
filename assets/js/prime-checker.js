// prime checker
const isPrime = (num) => {
   
   let modular = 0;

   for (let i = 1; i <= num; i++){
      if (num % i == 0) {
         modular++
      }
   }
   if (modular == 2) {
      document.getElementById("display").innerHTML = num + " Adalah Bilangan Prima";
      console.log("PRIME");
   } else {
      document.getElementById("display").innerHTML = num + " Bukan Bilangan Prima";
   }
}
 