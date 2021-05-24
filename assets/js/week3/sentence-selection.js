// Sentence Selection

document.getElementById("search").addEventListener("click", function () {
   
   let myWord = document.getElementById("word").value;
   let mySentence = document.getElementById("sentence").value.toLowerCase().split('.');
   let display = [];

   for (let i = 0; i < mySentence.length; i++){
      if (mySentence[i].includes(myWord)) {
         display.push(mySentence[i])
      }
   }

   document.getElementById("display").innerHTML = `
   <div class="alert alert-success alert-dismissible fade show" role="alert">
      <strong>Output :</strong> ${display}
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
   </div>`;;
});
