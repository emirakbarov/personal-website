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
    document.getElementById("navbar").style.animation = "navScrollDown 0.5s 1 forwards"; /* Adjust the value based on your navbar height */
  }

  prevScrollPos = currentScrollPos;
};
