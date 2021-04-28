// study case

const age = (num) => {
   if (num <= 1) {
      document.getElementById("display").innerHTML = "Umur " + num +  " Adalah Bayi";
   }
   if (num >= 2 && num <= 10) {
      document.getElementById("display").innerHTML = "Umur " + num +  " Adalah Anak-anak";
   }
   if (num >= 11 && num <= 19) {
      document.getElementById("display").innerHTML = "Umur " + num +  " Adalah Remaja";
   }
   if (num >= 20 && num <= 60) {
      document.getElementById("display").innerHTML = "Umur " + num +  " Adalah Dewasa";
   }
   // if (num == E) {
   //    document.getElementById("display").innerHTML = "Umur " + num +  " Adalah Lanjut Usia";
   // }
}