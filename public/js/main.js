const sidebarIcons = document.querySelectorAll('.links-btn');
const navItems = document.querySelectorAll('.nav-item');

window.addEventListener('DOMContentLoaded', () => {
    sidebarIcons.forEach((sidebarIcon, index) => {
        sidebarIcon.style.animation = `sidebarStart 0.2s ${index * 0.1}s 2 alternate`;
    });
});

let prevScrollPos = window.pageYOffset;
let navOut = true;
const nav = document.getElementById('navbar');

window.onscroll = () => {
  const currentScrollPos = window.pageYOffset;
  if (prevScrollPos < currentScrollPos) {
    nav.style.animation = "navScrollUp 0.5s 1 forwards";
    navOut = false;
  } else {
    nav.style.animation = "navScrollDown 0.5s 1 forwards";
    navOut = true;
  }
  prevScrollPos = currentScrollPos;
};
document.addEventListener('DOMContentLoaded', () => {

  const name = document.getElementById("name");

  name.style.animation = "jumpFromRight 1s 1 forwards ease-out";

  const navbarLinks = document.querySelectorAll('#navbar li a');
  const infoLinks = document.querySelectorAll(".info-link");

  navbarLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      navigate(link);
    });
  });
  infoLinks.forEach(item => {
    item.addEventListener('click', e => {
      e.preventDefault();
      navigate(item);
    });
  });
  function navigate(link) {
    const targetId = link.getAttribute('href').substring(1);
      let targetElement;
      if(targetId == "name") {
        targetElement = window;
      }
      else {
        targetElement = document.getElementById(targetId);
      }
      console.log(navOut);
      window.scrollTo({
        top: navOut === false ? (targetElement === window ? 0 : targetElement.offsetTop) : (targetElement === window ? 0 : targetElement.offsetTop - nav.offsetHeight),
        behavior: 'smooth'
      });
  }
});
const skills = document.querySelectorAll("#skills-container .fa-brands");

skills.forEach((skill, index) => {
  const currentHover = skill;
  const leftHover = index > 0 ? skills[index - 1] : null;
  const rightHover = index < skills.length - 1 ? skills[index + 1] : null;

  skill.addEventListener("mouseover", () => {
    console.log(skills.length);
    if (index !== 0 && index !== skills.length - 1) {
      currentHover.style.transform = "scale(1.7)";
      if (leftHover) leftHover.style.transform = "scale(1.2)";
      if (rightHover) rightHover.style.transform = "scale(1.2)";
    } 
    else if (index === 0) {
      currentHover.style.transform = "scale(1.7)";
      if (rightHover) rightHover.style.transform = "scale(1.2)";
    } 
    else if (index === skills.length - 1) {
      currentHover.style.transform = "scale(1.7)";
      if (leftHover) leftHover.style.transform = "scale(1.2)";
    }
  });

  skill.addEventListener("mouseout", () => {
    currentHover.style.transform = "scale(0.9)";
    if (rightHover) rightHover.style.transform = "scale(0.9)";
    if (leftHover) leftHover.style.transform = "scale(0.9)";
  });
});

