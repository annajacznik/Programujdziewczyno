'use strict';
document.addEventListener('DOMContentLoaded', function() {

// zadanie 1
var materialsDropdown = document.querySelector('.for-dropdown');
var makeover = document.querySelector('.dropdown');

console.log('materialsDropdown');
console.log('makeover');

materialsDropdown.addEventListener('mouseover', function() {
  makeover.style.display = 'block';
});

materialsDropdown.addEventListener('mouseout', function() {
  makeover.style.display = 'none';
});








   });
