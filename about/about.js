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