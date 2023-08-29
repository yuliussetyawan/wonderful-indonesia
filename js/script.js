// ********** nav toggle ************
// select button and links
const navBtn = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links')
navBtn.addEventListener('click', ()=>{
  links.classList.toggle('show-links')
})

