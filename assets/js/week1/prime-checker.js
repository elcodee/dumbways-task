// prime checker
const isPrime = (num) => {
   
   let modular = 0;

   for (let i = 1; i <= num; i++){
      if (num % i == 0) {
         modular++
      }
   }
   if (modular == 2) {
      document.getElementById("display").innerHTML = `
      <div class="alert alert-success alert-dismissible fade show" role="alert">
         <strong>Output :</strong> ${num} Adalah Bilangan Prima
         <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div> `;
      console.log("PRIME");
   } else {
      document.getElementById("display").innerHTML = `
      <div class="alert alert-danger alert-dismissible fade show" role="alert">
         <strong>Output :</strong> ${num} Bukan Bilangan Prima
         <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div> `;
   }
}