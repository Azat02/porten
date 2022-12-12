window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.like'),
    menuItem = document.querySelectorAll('a'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('like_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('like_active');
        })
    })
})