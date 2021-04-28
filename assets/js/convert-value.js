const change = (num) => {

   if (num >= 86) {
      document.getElementById("display").innerHTML = "Your Value " + "<u>A</u>";
   }
   if (num >= 70 && num <= 85) {
      document.getElementById("display").innerHTML = "Your Value " + "<u>B</u>";
   }
   if (num >= 50 && num <= 69) {
      document.getElementById("display").innerHTML = "Your Value " + "<u>C</u>";
   }
   if (num >= 30 && num <= 49) {
      document.getElementById("display").innerHTML = "Your Value " + "<u>D</u>";
   }
   if (num == 0 && num <= 29) {
      document.getElementById("display").innerHTML = "Your Value " + "<u>E</u>";
   }
}
 