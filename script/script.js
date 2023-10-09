// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');
console.log(header)
window.onscroll = function() {
    const top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}
// collapse navbar after click on small devices
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')

navLinks.forEach((l) => {
    l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
})


document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    const themeToggle = document.getElementById("themeToggle");

    themeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
        toggleComponentsTheme();
    });

    function toggleComponentsTheme() {
        const components = document.querySelectorAll(".container");
        components.forEach(component => {
            component.classList.toggle("dark-mode");
        });
    }
});
