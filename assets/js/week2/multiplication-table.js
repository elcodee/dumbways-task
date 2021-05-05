// Multiplication Table

const run = (num) => {
   if (num == 0) {
      document.getElementById("display").innerHTML = `
      <div class="alert alert-danger alert-dismissible fade show" role="alert">
         <strong>Output :</strong> Input Number Terlebih Dahulu
         <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div> `;
   } else {
      for (let i = 1; i <= 10; i++) {
         document.getElementById("display").innerHTML += num + ' * ' + i + ' = ' + num * i + '<br />';
      }
   }
}