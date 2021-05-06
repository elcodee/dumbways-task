// remove the array

let arr = [];

const toArray = () => {
   let input = document.getElementById('str').value;
   arr.push(input.split(''));

   document.getElementById("data").innerHTML = arr[0];
}


const remove = (str) => {
   if (str == '') {
      document.getElementById("display").innerHTML = `
      <div class="alert alert-danger alert-dismissible fade show" role="alert">
         <strong>Output :</strong> Input Data Terlebih Dahulu
         <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div> `;
   } else {
      const index = arr[0].indexOf(str);
   
      if (index > -1) {
         arr[0].splice(index, 1);
      }
      
      document.getElementById("display").innerHTML = '[' + arr[0] + ']';
   }
}
