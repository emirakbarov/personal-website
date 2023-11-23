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
    let navbar = document.getElementById("navbar");
    let navbarOffset = 0;

    do {
        navbarOffset += navbar.offsetTop;
        navbar = navbar.offsetParent;
    } while (navbar);
    
    navbarOffset = navbarOffset < 0 ? 0 : navbarOffset;
    const stickyName = document.querySelector(".name-nav-sticky");
  
    function handleScroll() {
      if (window.pageYOffset >= navbarOffset) {
        navbar.classList.add("sticky");
        console.log("sticky class added");
        stickyName.style.animation = "grow 0.2s 1 forwards";
        navItems.forEach((navItem) => {
            navItem.classList.add("sticky-hover");
        });
      } else {
        console.log("sticky class removed");
        navbar.classList.remove("sticky");
        stickyName.style.animation = "shrink 0.2s 1 forwards";
        navItems.forEach((navItem) => {
            navItem.classList.remove("sticky-hover");
        });
      }
    }
  
    window.addEventListener("scroll", handleScroll);
});