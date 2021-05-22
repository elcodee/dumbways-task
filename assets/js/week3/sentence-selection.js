// Sentence Selection

document.getElementById("search").addEventListener("click", function () {
   
   let myWord = document.getElementById("word").value;
   let mySentence = document.getElementById("sentence").value.toLowerCase().split('.');

   for (let i = 0; i < mySentence.length; i++){
      if (mySentence[i].includes(myWord)) {
         document.getElementById("display").innerHTML += mySentence[i] + ', ';
      }
   }
 }); 