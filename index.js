// Получаем элементы
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');


menuToggle.addEventListener('click', function(event) {
    event.preventDefault();
    navLinks.classList.toggle('active'); 
});

