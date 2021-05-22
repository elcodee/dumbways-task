// Vowels Check

const run = (str) => {
   
   if (str == '') {
      document.getElementById("display").innerHTML = `
      <div class="alert alert-danger alert-dismissible fade show" role="alert">
         <strong>Output :</strong> Input Letter Terlebih Dahulu
         <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div> `;
   } else {
      let isVowel = false;

      isVowel = str === 'a' || str === 'e' || str === 'i' || str === 'o' || str === 'u';
      
      if (isVowel) {
         return document.getElementById("display").innerHTML = `${str} adalah huruf vokal `;
      } else {
         return document.getElementById("display").innerHTML = `${str} bukan huruf vokal `;
      }
   }

}