const sidebarIcons = document.querySelectorAll('.links-btn');
const navItems = document.querySelectorAll('.nav-item');

window.addEventListener('DOMContentLoaded', () => {
    sidebarIcons.forEach((sidebarIcon, index) => {
        sidebarIcon.style.animation = `sidebarStart 0.2s ${index * 0.1}s 2 alternate`;
    });
});

let prevScrollPos = window.pageYOffset;

window.onscroll = () => {
  const currentScrollPos = window.pageYOffset;
  if (prevScrollPos < currentScrollPos) {
    document.getElementById("navbar").style.animation = "navScrollUp 0.5s 1 forwards";
  } else {
    document.getElementById("navbar").style.animation = "navScrollDown 0.5s 1 forwards";
  }
  prevScrollPos = currentScrollPos;
};
document.addEventListener('DOMContentLoaded', () => {
  const navbarLinks = document.querySelectorAll('#navbar li a');

  navbarLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      
      const targetId = link.getAttribute('href').substring(1);
      let targetElement;
      if(targetId == "name") {
        targetElement = window;
      }
      else {
        targetElement = document.getElementById(targetId);
      }
      window.scrollTo({
        top: targetElement === window ? 0 : targetElement.offsetTop,
        behavior: 'smooth'
      });
    });
  });
});