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

   document.getElementById("display").innerHTML = `
   <div class="alert alert-success alert-dismissible fade show" role="alert">
      <strong>Output :</strong> Total Huruf <u>${letter}</u> Sebanyak <u>${count}</u> Buah
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
   </div>`;
}