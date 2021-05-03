// regular function
function changeText(text) {
   document.getElementById("display").innerHTML = `
   <div class="alert alert-success alert-dismissible fade show" role="alert">
      <strong>Output :</strong> ${text}
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
   </div>`;
}


// arrow function
const change = (text) => {
   document.getElementById("display1").innerHTML = `
   <div class="alert alert-success alert-dismissible fade show" role="alert">
      <strong>Output :</strong> ${text}
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
   </div> `;
}
