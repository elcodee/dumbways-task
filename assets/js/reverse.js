// Reverse

function reverse() {
   let angka = document.getElementById('num').value;

   document.getElementById("display").innerHTML = angka.split('').reverse().join('');
}

