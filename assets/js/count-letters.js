// counting letters
const counting = () => {
   let text = document.getElementById("teks").value;
   let letter = document.getElementById("letter").value;
   let count = 0;
   
   for (let i = 0; i < text.length; i++){
      if (text[i] === letter) {
         count++
      }
   }

   document.getElementById("display").innerHTML = 'Total huruf ' + letter + ' sebanyak ' + count + ' buah';
}

