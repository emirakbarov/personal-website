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

document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("navbar");
    const navbarOffset = navbar.offsetTop;
    const stickyName = document.querySelector(".name-nav-sticky");
  
    function handleScroll() {
      if (window.pageYOffset >= navbarOffset) {
        console.log("sticky class added");
        navbar.classList.add("sticky");
        navItems.forEach((navItem) => {
            navItem.classList.add("sticky-hover");
        });
        stickyName.style.animation = "grow 0.2s 1 forwards";
      } else {
        console.log("sticky class removed");
        navbar.classList.remove("sticky");
        navItems.forEach((navItem) => {
            navItem.classList.remove("sticky-hover");
        });
        stickyName.style.animation = "shrink 0.2s 1 forwards";
      }
    }
  
    window.addEventListener("scroll", handleScroll);
});