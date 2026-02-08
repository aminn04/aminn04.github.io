// Add your javascript here

window.darkMode = false;

const stickyClasses = ["fixed", "py-3"];
const unstickyClasses = ["absolute", "py-5"];
const stickyClassesContainer = [];
const unstickyClassesContainer = [];
let headerElement = null;

document.addEventListener("DOMContentLoaded", () => {
  headerElement = document.getElementById("header");

  if (
    localStorage.getItem("dark_mode") &&
    localStorage.getItem("dark_mode") === "true"
  ) {
    window.darkMode = true;
  }
  stickyHeaderFuncionality();
  evaluateHeaderPosition();
  mobileMenuFunctionality();
});

// window.toggleDarkMode = function(){
//     document.documentElement.classList.toggle('dark');
//     if(document.documentElement.classList.contains('dark')){
//         localStorage.setItem('dark_mode', true);
//         window.darkMode = true;
//     } else {
//         window.darkMode = false;
//         localStorage.setItem('dark_mode', false);
//     }
// }

window.stickyHeaderFuncionality = () => {
  window.addEventListener("scroll", () => {
    evaluateHeaderPosition();
  });
};

window.evaluateHeaderPosition = () => {
  if (window.scrollY > 16) {
    headerElement.firstElementChild.classList.add(...stickyClassesContainer);
    headerElement.firstElementChild.classList.remove(
      ...unstickyClassesContainer,
    );
    headerElement.classList.add(...stickyClasses);
    headerElement.classList.remove(...unstickyClasses);
    document.getElementById("menu").classList.add("top-[50px]");
    document.getElementById("menu").classList.remove("top-[70px]");
  } else {
    headerElement.firstElementChild.classList.remove(...stickyClassesContainer);
    headerElement.firstElementChild.classList.add(...unstickyClassesContainer);
    headerElement.classList.add(...unstickyClasses);
    headerElement.classList.remove(...stickyClasses);
    document.getElementById("menu").classList.remove("top-[50px]");
    document.getElementById("menu").classList.add("top-[70px]");
  }
};

document.getElementById("darkToggle").addEventListener("click", () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.removeItem("dark_mode");
    window.darkMode = false;
  } else {
    document.documentElement.classList.add("dark");
    localStorage.setItem("dark_mode", true);
    window.darkMode = true;
  }
});

function mobileMenuFunctionality() {
  document.getElementById("openMenu").addEventListener("click", () => {
    openMobileMenu();
  });

  document.getElementById("closeMenu").addEventListener("click", () => {
    closeMobileMenu();
  });
}

window.openMobileMenu = () => {
  document.getElementById("openMenu").classList.add("hidden");
  document.getElementById("closeMenu").classList.remove("hidden");
  document.getElementById("menu").classList.remove("hidden");
  document.getElementById("mobileMenuBackground").classList.add("opacity-0");
  document.getElementById("mobileMenuBackground").classList.remove("hidden");

  setTimeout(() => {
    document
      .getElementById("mobileMenuBackground")
      .classList.remove("opacity-0");
  }, 1);
};

window.closeMobileMenu = () => {
  document.getElementById("closeMenu").classList.add("hidden");
  document.getElementById("openMenu").classList.remove("hidden");
  document.getElementById("menu").classList.add("hidden");
  document.getElementById("mobileMenuBackground").classList.add("hidden");
};
