const change = (num) => {

   if (num >= 86) {
      document.getElementById("display").innerHTML = `
   <div class="alert alert-success alert-dismissible fade show" role="alert">
      <strong>Output :</strong> Nilai Konversi Adalah <u>A</u>
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
   </div>`;
   }
   if (num >= 70 && num <= 85) {
      document.getElementById("display").innerHTML = `
   <div class="alert alert-success alert-dismissible fade show" role="alert">
      <strong>Output :</strong> Nilai Konversi Adalah <u>B</u>
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
   </div>`;
   }
   if (num >= 50 && num <= 69) {
      document.getElementById("display").innerHTML = `
   <div class="alert alert-success alert-dismissible fade show" role="alert">
      <strong>Output :</strong> Nilai Konversi Adalah <u>C</u>
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
   </div>`;
   }
   if (num >= 30 && num <= 49) {
      document.getElementById("display").innerHTML = `
   <div class="alert alert-success alert-dismissible fade show" role="alert">
      <strong>Output :</strong> Nilai Konversi Adalah <u>D</u>
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
   </div>`;
   }
   if (num == 0 && num <= 29) {
      document.getElementById("display").innerHTML = `
   <div class="alert alert-success alert-dismissible fade show" role="alert">
      <strong>Output :</strong> Nilai Konversi Adalah <u>E</u>
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
   </div>`;
   }
}