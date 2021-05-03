// Reverse

function reverse() {
   let angka = document.getElementById('num').value;

   document.getElementById("display").innerHTML = `
   <div class="alert alert-success alert-dismissible fade show" role="alert">
      <strong>Output :</strong> ${angka.split('').reverse().join('')}
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
   </div>`;
}

