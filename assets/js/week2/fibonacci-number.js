// fibonacci number

const run = (num) => {
   if (num == 0) {
      document.getElementById("display").innerHTML = `
      <div class="alert alert-danger alert-dismissible fade show" role="alert">
         <strong>Output :</strong> Input Number Terlebih Dahulu
         <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div> `;
   } else {
      let n1 = 0, n2 = 1, saveNum;
      
      for (let i = 1; i <= num; i++) {
         saveNum = n1 + n2; // Variable NAme
         n1 = n2;
         n2 = saveNum;
         document.getElementById("display").innerHTML += n1 + '&nbsp;' + ' ';
      }
   }
};
 

