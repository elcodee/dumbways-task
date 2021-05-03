// study case

const age = (num) => {
   if (num <= 1) {
      document.getElementById("display").innerHTML = `
      <div class="alert alert-success alert-dismissible fade show" role="alert">
         <strong>Output :</strong> Umur ${num} Tahun Adalah Bayi
         <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`;
   }
   if (num >= 2 && num <= 10) {
      document.getElementById("display").innerHTML = `
      <div class="alert alert-success alert-dismissible fade show" role="alert">
         <strong>Output :</strong> Umur ${num} Tahun Adalah Anak - Anak
         <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`;
   }
   if (num >= 11 && num <= 19) {
      document.getElementById("display").innerHTML = `
      <div class="alert alert-success alert-dismissible fade show" role="alert">
         <strong>Output :</strong> Umur ${num} Tahun Adalah Remaja
         <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`;
   }
   if (num >= 20 && num <= 60) {
      document.getElementById("display").innerHTML = `
      <div class="alert alert-success alert-dismissible fade show" role="alert">
         <strong>Output :</strong> Umur ${num} Tahun Adalah Dewasa
         <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`;
   }
   if (num > 60) {
      document.getElementById("display").innerHTML = `
      <div class="alert alert-success alert-dismissible fade show" role="alert">
         <strong>Output :</strong> Umur ${num} Tahun Adalah Lanjut Usia
         <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`;
   }
}