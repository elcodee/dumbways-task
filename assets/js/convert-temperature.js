// convert Temperature

const celsius = () => {

   cToR();
   cToF();
   cToK();

   // function kalkulasi Celsius to other
   function cToR() {
      let C = document.getElementById('cel').value;
      return document.getElementById('rea').placeholder = (Number(C) * 4 / 5) + ' °R';
   }
   function cToF() {
      let C = document.getElementById('cel').value;
      return document.getElementById('far').placeholder = (Number(C) * 9 / 5) + 32 + ' °F';
   }
   function cToK() {
      let C = document.getElementById('cel').value;
      return document.getElementById('kel').placeholder = (Number(C) + 273.15) + ' °K';
   }
}


const reamur = () => {

   rToC();
   rToF();
   rToK();

   // function kalkulasi Reamur to other
   function rToC() {
      let R = document.getElementById('rea').value;
      return document.getElementById('cel').placeholder = (Number(R) * 5 / 4) + ' °C';
   }
   function rToF() {
      let R = document.getElementById('rea').value;
      return document.getElementById('far').placeholder = (Number(R) * 9 / 4) + 32 + ' °F';
   }
   function rToK() {
      let R = document.getElementById('rea').value;
      return document.getElementById('kel').placeholder = (Number(R) * 5 / 4) + 273 + ' °K';
   }
}

const farenheit = () => {

   fToC();
   fToR();
   fToK();

   // function kalkulasi Farenheit to other
   function fToC() {
      let F = document.getElementById('far').value;
      return document.getElementById('cel').placeholder = (Number(F - 32) * 5 / 9) + ' °C';
   }
   function fToR() {
      let F = document.getElementById('far').value;
      return document.getElementById('rea').placeholder = (Number(F - 32) * 4 / 9) + ' °R';
   }
   function fToK() {
      let F = document.getElementById('far').value;
      return document.getElementById('kel').placeholder = (Number(F - 32) * 5 / 9) + 273 + ' °K';
   }
}

const kelvin = () => {

   kToC();
   kToR();
   kToF();

   // function kalkulasi Kelvin to other
   function kToC() {
      let K = document.getElementById('kel').value;
      return document.getElementById('cel').placeholder = Number(K - 273) + ' °C';
   }
   function kToR() {
      let K = document.getElementById('kel').value;
      return document.getElementById('rea').placeholder = (Number(K - 273) * 4 / 5) + ' °R';
   }
   function kToF() {
      let K = document.getElementById('kel').value;
      return document.getElementById('far').placeholder = (Number(K - 273) * 9 / 5) + 32 + ' °F';
   }
}