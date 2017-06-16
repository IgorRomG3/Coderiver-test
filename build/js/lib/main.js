'use strict';

//SLICK
$(document).ready(function () {
  $('.blog-slider').slick();
});

//MENU
var menu = document.getElementsByClassName('menu')[0],
    toggleBtn = document.getElementsByClassName('toggle')[0];

toggleBtn.addEventListener('click', function () {
  menu.classList.toggle('menu_js');
});