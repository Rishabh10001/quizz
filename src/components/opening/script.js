document.addEventListener('DOMContentLoaded', function () {
    const navItems = document.querySelectorAll('.nav__item-text');
    const navToggle = document.querySelector('.nav__cb');

    navItems.forEach(function (item) {
        item.addEventListener('click', function () {
            navToggle.checked = false; // Uncheck the checkbox to hide the navigation bar
        });
    });
});
