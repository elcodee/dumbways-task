//  Looping

function loop(input) {
   
   if (input == 15) {   
      let num = "";

      for (let i = 1; i <= 15; i++){
         num += i + '&nbsp;' + ' ';
      }
      document.getElementById("display").innerHTML = `
      <div class="alert alert-success alert-dismissible fade show" role="alert">
         <strong>Output :</strong> ${num}
         <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
      `;
   }

   if (input == 15) {
      let num = "";

      for (let i = 1; i <= 15; i++){
         let square = i * i;
         num += square + '&nbsp;' + ' ';
      }
      document.getElementById("display1").innerHTML = `
      <div class="alert alert-success alert-dismissible fade show" role="alert">
         <strong>Output :</strong> ${num}
         <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
      `;;
   }

   if (input == 20) {
      let num = "";
      
      for (let i=1; i<=61 ;i++) {
         if (i % 3 == 0) {
            // console.log(i);
            num += i + '&nbsp;' + ' ';
         }
         }
         document.getElementById("display2").innerHTML = `
         <div class="alert alert-success alert-dismissible fade show" role="alert">
            <strong>Output :</strong> ${num}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
         </div>
         `;;
      }
   }