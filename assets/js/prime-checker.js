// prime checker
const isPrime = (num) => {
   
   let modular = 0;

   for (let i = 1; i <= num; i++){
      if (num % i == 0) {
         modular++
      }
   }
   if (modular == 2) {
      console.log("PRIME");
   } else {
      console.log("NOT PRIME");
   }
}
 