const date = document.querySelector("#date");
const navBtn = document.querySelector(".nav-toggle");
const scrollLinks = document.querySelectorAll(".scroll-link");
// ********** nav toggle ************
const links = document.querySelector(".nav-links");
navBtn.addEventListener("click", () => {
  links.classList.toggle("show-links");
});
// ********** set date ************
date.innerHTML = new Date().getFullYear();
// ********** smooth scroll ************
scrollLinks.forEach((link) => {
  link.addEventListener('click', e => {
    e.preventDefault();
    links.classList.remove('show-links');
    const id = e.target.getAttribute('href').slice(1);
    const element = document.getElementById(id);
    let position = element.offsetTop - 62;
    window.scrollTo({
      left: 0,
      top: position,
      behavior: 'smooth',
    })
  })
})