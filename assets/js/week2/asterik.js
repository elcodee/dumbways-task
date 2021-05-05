// asterik pettern

const pettern = (num) => {

   if (num == 0) {
      document.getElementById("display").innerHTML = `
      <div class="alert alert-danger alert-dismissible fade show" role="alert">
         <strong>Output :</strong> Input Number Terlebih Dahulu
         <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div> `;
   } else {
      let arr = [];
   
      for (let i = num; i >= 1; i--) {
         let str = "";
   
         for (let j = i; j <= num; j++) {
            str += "* &nbsp;";
         }
   
         arr.push(str)
      }
   
      arr.forEach(iteration);
      function iteration(ptrn) {
         return document.getElementById("display").innerHTML += ptrn + "<br>"; 
      }
   }
}