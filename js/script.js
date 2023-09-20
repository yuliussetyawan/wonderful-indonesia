const date = document.querySelector('#date')
const navBtn = document.querySelector('.nav-toggle');
// ********** nav toggle ************
const links = document.querySelector('.nav-links')
navBtn.addEventListener('click', ()=>{
  links.classList.toggle('show-links')
})
// ********** set date ************
date.innerHTML = new Date().getFullYear();