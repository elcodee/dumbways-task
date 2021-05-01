// Count Salary

function countSalary() {
   let nama = document.getElementById("nama").value;
   let golongan = document.getElementById("group").value;
   let hour = document.getElementById("worktime").value;
   let days = 0;
   let month = 0;
   let bonus = 0;
   let total = 0;

   if (golongan === 'A') {
      if (hour * 30 >= 200) {
         bonus = hour * 200
      }

      days = hour * 1000;
      month = hour * 1000 * 30;
      total = days + month + bonus
   }

   if (golongan === 'C') {
      if (hour * 30 >= 200) {
         bonus = hour * 200
      }

      days = hour * 2000;
      month = hour * 2000 * 30;
      total = days + month + bonus
   }

   if (golongan === 'D') {
      if (hour * 30 >= 200) {
         bonus = hour * 200
      }

      days = hour * 3000;
      month = hour * 3000 * 30;
      total = days + month + bonus
   }

   if (golongan === 'E') {
      if (hour * 30 >= 200) {
         bonus = hour * 200
      }

      days = hour * 4000;
      month = hour * 4000 * 30;
      total = days + month + bonus
   }


   // Day Converter
   let num1 = days.toString().split('').reverse().join('');
	let num2 = num1.match(/\d{1,3}/g);
	let dayIDR	= num2.join('.').split('').reverse().join('');

   // Month Converter
   let num3 = month.toString().split('').reverse().join('');
   let num4 = num3.match(/\d{1,3}/g);
   let monthIDR = num4.join('.').split('').reverse().join('');

   // Bonus Converter
   let num5 = bonus.toString().split('').reverse().join('');
   let num6 = num5.match(/\d{1,3}/g);
   let lemburIDR = num6.join('.').split('').reverse().join('');

   // Total Converter
   let num7 = total.toString().split('').reverse().join('');
   let num8 = num7.match(/\d{1,3}/g);
   let totalIDR = num8.join('.').split('').reverse().join('');


   console.log('nama: ' + nama + ' golongan: ' + golongan + ' jam: ' + hour + ' gajiPerhari: Rp ' + dayIDR + ' gajiPerbulan: Rp ' + monthIDR + ' Lembur: Rp ' + lemburIDR + ' Total: Rp ' + totalIDR);
   document.getElementById("display").innerHTML = `Nama: ${nama} <br /> Golongan: ${golongan} <br /> Gaji Perhari: Rp ${dayIDR} <br /> Gaji Bulanan: Rp ${monthIDR} <br /> Lembur: Rp ${lemburIDR} <br /> Total Keseluruhan: Rp ${totalIDR}`;
}