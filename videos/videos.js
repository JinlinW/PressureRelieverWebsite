/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction_cate() {
  document.getElementById("myDropdown-cate").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn-cate')) {
    var dropdowns = document.getElementsByClassName("dropdown-content-cate");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

 document.querySelector('.js-show-menu').addEventListener('click', function (event) {
     event.preventDefault();
     console.log(event)
     document.body.classList.add('is-showing-menu');
 });

 document.querySelector('.js-close-menu').addEventListener('click', function (event) {
     event.preventDefault();
     document.body.classList.remove('is-showing-menu');
 });

 document.querySelector('.menu-p').addEventListener('click', function (event) {
     event.preventDefault();
     document.body.classList.toggle('is-showing-menu');
     console.log(document.body.classList)
 });