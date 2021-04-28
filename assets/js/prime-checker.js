// prime checker
function isPrime(num) {
   for(var i = 2; i < num; i++)
      if (num % i === 0)
         console.log(i);
      return false;
   return num > 1;
}
 