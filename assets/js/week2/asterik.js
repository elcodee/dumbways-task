// asterik pettern

const pettern = (num) => {

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