// navbar

const navbar = () => {
   document.getElementById("nav").innerHTML = `
   <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
         <div class="container-fluid animate__animated animate__flipInX">
           <a class="navbar-brand px-4" href="index.html">Task Dumbways</a>
           <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span class="navbar-toggler-icon"></span>
           </button>
           <div class="collapse navbar-collapse" id="navbarSupportedContent">
             <ul class="navbar-nav me-auto mb-2 mb-lg-0">
               <li class="nav-item">
                 <a class="nav-link active" aria-current="page" href="index.html">Home</a>
               </li>
               <li class="nav-item dropdown">
                 <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                   Week 1
                 </a>
                 <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                   <li><a class="dropdown-item" href="week1/function.html">1. Function</a></li>
                   <li><a class="dropdown-item" href="week1/reverse.html">2. Reverse</a></li>
                   <li><a class="dropdown-item" href="week1/looping.html">3. Looping</a></li>
                   <li><a class="dropdown-item" href="week1/convert-value.html">4. Convert Value</a></li>
                   <li><a class="dropdown-item" href="week1/prime-checker.html">5. Prime Checker</a></li>
                   <li><a class="dropdown-item" href="week1/math.html">6. Math</a></li>
                   <li><a class="dropdown-item" href="week1/convert-temp.html">7. Convert Temperature</a></li>
                   <li><a class="dropdown-item" href="week1/study-case.html">8. Study Case</a></li>
                   <li><a class="dropdown-item" href="week1/count-letters.html">9. Counting Letters</a></li>
                 </ul>
               </li>
               <li class="nav-item dropdown">
                 <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                   Week 2
                 </a>
                 <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                   <li><a class="dropdown-item" href="week2/asterik-pattern.html">1. Asterik Pattern <span class="badge bg-success">Done</span></a></li>
                   <li><a class="dropdown-item" href="week2/pascals-triangle.html">2. Pascal's Triangle <span class="badge bg-warning">Pending</span></a></li>
                   <li><a class="dropdown-item" href="week2/prime-number-range.html">3. Prime Rumber Range <span class="badge bg-success">Done</span></a></li>
                   <li><a class="dropdown-item" href="week2/multiplication-table.html">4. Multiplication Table <span class="badge bg-primary">Progress</span></a></li>
                   <li><a class="dropdown-item" href="week2/vowels-check.html">5. Vowels Check <span class="badge bg-warning">Pending</span></a></li>
                   <li><a class="dropdown-item" href="week2/fibonacci-number-sequence.html">6. The Fibonacci Number Sequence <span class="badge bg-warning">Pending</span></a></li>
                   <li><a class="dropdown-item" href="week2/removes-the-array.html">7. Removes the Array based on the Input <span class="badge bg-warning">Pending</span></a></li>
                   <li><a class="dropdown-item" href="week2/concatenate-arrays.html">8. Concatenate Arrays <span class="badge bg-warning">Pending</span></a></li>
                 </ul>
               </li>
             </ul>
           </div>
         </div>
       </nav>`;
}

const navWeek = () => {
   document.getElementById("nav").innerHTML = `
   <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
         <div class="container-fluid animate__animated animate__flipInX">
           <a class="navbar-brand px-4" href="index.html">Task Dumbways</a>
           <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span class="navbar-toggler-icon"></span>
           </button>
           <div class="collapse navbar-collapse" id="navbarSupportedContent">
             <ul class="navbar-nav me-auto mb-2 mb-lg-0">
               <li class="nav-item">
                 <a class="nav-link active" aria-current="page" href="../index.html">Home</a>
               </li>
               <li class="nav-item dropdown">
                 <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                   Week 1
                 </a>
                 <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                   <li><a class="dropdown-item" href="../week1/function.html">1. Function</a></li>
                   <li><a class="dropdown-item" href="../week1/reverse.html">2. Reverse</a></li>
                   <li><a class="dropdown-item" href="../week1/looping.html">3. Looping</a></li>
                   <li><a class="dropdown-item" href="../week1/convert-value.html">4. Convert Value</a></li>
                   <li><a class="dropdown-item" href="../week1/prime-checker.html">5. Prime Checker</a></li>
                   <li><a class="dropdown-item" href="../week1/math.html">6. Math</a></li>
                   <li><a class="dropdown-item" href="../week1/convert-temp.html">7. Convert Temperature</a></li>
                   <li><a class="dropdown-item" href="../week1/study-case.html">8. Study Case</a></li>
                   <li><a class="dropdown-item" href="../week1/count-letters.html">9. Counting Letters</a></li>
                 </ul>
               </li>
               <li class="nav-item dropdown">
                 <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                   Week 2
                 </a>
                 <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                   <li><a class="dropdown-item" href="../week2/asterik-pattern.html">1. Asterik Pattern <span class="badge bg-success">Done</span></a></li>
                   <li><a class="dropdown-item" href="../week2/pascals-triangle.html">2. Pascal's Triangle <span class="badge bg-warning">Pending</span></a></li>
                   <li><a class="dropdown-item" href="../week2/prime-number-range.html">3. Prime Rumber Range <span class="badge bg-success">Done</span></a></li>
                   <li><a class="dropdown-item" href="../week2/multiplication-table.html">4. Multiplication Table <span class="badge bg-primary">Progress</span></a></li>
                   <li><a class="dropdown-item" href="../week2/vowels-check.html">5. Vowels Check <span class="badge bg-warning">Pending</span></a></li>
                   <li><a class="dropdown-item" href="../week2/fibonacci-number-sequence.html">6. The Fibonacci Number Sequence <span class="badge bg-warning">Pending</span></a></li>
                   <li><a class="dropdown-item" href="../week2/removes-the-array.html">7. Removes the Array based on the Input <span class="badge bg-warning">Pending</span></a></li>
                   <li><a class="dropdown-item" href="../week2/concatenate-arrays.html">8. Concatenate Arrays <span class="badge bg-warning">Pending</span></a></li>
                 </ul>
               </li>
             </ul>
           </div>
         </div>
       </nav>`;
}

const footer = () => {
   document.getElementById("footer").innerHTML = `
      <footer class="footer mt-auto py-3 bg-light fixed-bottom">
         <div class="container">
            <span class="text-muted">2021 &copy; Rama Aditya</span>
         </div>
      </footer>`;
}
