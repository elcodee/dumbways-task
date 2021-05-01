// study case

const age = (num) => {
   if (num <= 1) {
      document.getElementById("display").innerHTML = "Umur " + num +  "Tahun Adalah Bayi";
   }
   if (num >= 2 && num <= 10) {
      document.getElementById("display").innerHTML = "Umur " + num +  "Tahun Adalah Anak-anak";
   }
   if (num >= 11 && num <= 19) {
      document.getElementById("display").innerHTML = "Umur " + num +  "Tahun Adalah Remaja";
   }
   if (num >= 20 && num <= 60) {
      document.getElementById("display").innerHTML = "Umur " + num +  "Tahun Adalah Dewasa";
   }
   if (num > 60) {
      document.getElementById("display").innerHTML = "Umur " + num +  " Adalah Lanjut Usia";
   }
}