const sidebarIcons = document.querySelectorAll('.links-btn');
const navItems = document.querySelectorAll('.nav-item');

window.addEventListener('DOMContentLoaded', () => {
    sidebarIcons.forEach((sidebarIcon, index) => {
        sidebarIcon.style.animation = `sidebarStart 0.2s ${index * 0.1}s 2 alternate`;
    });
    navItems.forEach((navItem, index) => {
        navItem.style.animation = `navStart 0.2s ${index * 0.1}s 2 alternate`;
    });
});