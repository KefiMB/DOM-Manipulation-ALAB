console.log("Manipulating the DOM");
// Part 1 of the Lab
const mainEl = document.querySelector("main");
mainEl.style.backgroundcolor = "var(--main-bg)";
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
console.log(mainEl.style.backgroundColor);
console.log(mainEl.innerHTML);
console.log(mainEl.classList);
mainEl.classList.add("flex-ctr");

// Part 2
const topMenu = document.querySelector("topMenuEl");
console.log(topMenuEl);
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");
console.log(topMenuEl.style.height);
console.log(topMenuEl.style.backgroundColor);
console.log(topMenuEl.classList);

// Part 3

// Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];

const topMenuEl = document.querySelector(".top-menu");
menuLinks.forEach((link) => {
  const linkEl = document.createElement("a");
  linkEl.href = link.href;
  linkEl.textContent = link.text;
  topMenuEl.appendChild(linkEl);
});
console.log(topMenuEl.innerHTML);

// Part 2 of the Lab
// Part 3
const newNav = document.createElement("nav");
const geader = document.querySelector("header");
Headers.appendChild(newNav);
newNav.setAttribute("id", "sub-menu");
const subMenuEl = document.getElementById("sub-menu");
console.log(subMenuEl);
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0%";

// Part 4 & 5
document.addEventListener("DOMContentLoaded", function () {
  const topMenuEl = document.getElementById("top-menu");
  const subMenuEl = document.getElementById("sub-menu");
  const mainEl = document.querySelector("main");

  //  Select and cache all <a> elements inside topMenuEl
  const topMenuLinks = topMenuEl.querySelectorAll("a");

  // Helper function to build submenu
  function buildSubmenu(subLinks) {
    subMenuEl.innerHTML = ""; // Clear current contents
    subLinks.forEach((link) => {
      const a = document.createElement("a");
      a.href = link.href;
      a.textContent = link.text;
      subMenuEl.appendChild(a);
    });
  }

  //  Attach delegated 'click' event listener to topMenuEl
  topMenuEl.addEventListener("click", function (event) {
    event.preventDefault();

    if (!event.target.matches("a")) {
      return;
    }

    console.log(event.target.textContent); // Log content of clicked <a>

    // Toggle active class
    if (event.target.classList.contains("active")) {
      event.target.classList.remove("active");
      subMenuEl.style.top = "0";
    } else {
      topMenuLinks.forEach((a) => a.classList.remove("active"));
      event.target.classList.add("active");

      // Find the corresponding link object
      const linkObj = menuLinks.find(
        (link) => link.text === event.target.textContent
      );

      if (linkObj && linkObj.subLinks) {
        subMenuEl.style.top = "100%";
        buildSubmenu(linkObj.subLinks);
      } else {
        subMenuEl.style.top = "0";
      }
    }

    // Handle about link
    if (event.target.textContent === "ABOUT") {
      mainEl.innerHTML = "<h1>About</h1>";
    }
  });

  // Attach delegated 'click' event listener to subMenuEl
  subMenuEl.addEventListener("click", function (event) {
    event.preventDefault();

    if (!event.target.matches("a")) {
      return;
    }

    console.log(event.target.textContent); // Log content of clicked <a>

    subMenuEl.style.top = "0";

    topMenuLinks.forEach((a) => a.classList.remove("active"));

    mainEl.innerHTML = `<h1>${event.target.textContent}</h1>`;
  });
});
