'use strict';
document.addEventListener('DOMContentLoaded', function() {

// zadanie 1
var materialsDropdown = document.querySelector('.for-dropdown');
var makeover = document.querySelector('.dropdown');

console.log(materialsDropdown);
console.log(makeover);

materialsDropdown.addEventListener('mouseover', function() {
  makeover.style.display = 'block';
});

materialsDropdown.addEventListener('mouseout', function() {
  makeover.style.display = 'none';
});

// Zadanie 2
var buttons = document.querySelectorAll('.read-more');
console.log(buttons);

console.log(buttons[0].previousElementSibling);

buttons[0].addEventListener('click', function() {
      console.log('działa');
    });

buttons[0].addEventListener('click', function() {
     console.log(this);
   });

buttons[0].addEventListener('click', function() {
      var textArea = this.previousElementSibling;
      console.log(textArea);
    });

buttons[0].addEventListener('click', function() {
      var textArea = this.previousElementSibling;
      textArea.style.display = 'block';
        });
    










   });
