console.log("Manipulating the DOM")
// Part 1 of the Lab
const mainEl = document.querySelector("main");
mainEl.style.backgroundcolor ='var(--#4a4e4d)';
mainEl.innerHTML = '<h1>DOM Manipulation</h1>';
console.log(mainEl.style.backgroundColor);
console.log(mainEl.innerHTML);
console.log(mainEl.classList)
element.classList.add("flex-ctr")


// Part 2
const topMenu = document.querySelector("topMenuEl"); 
console.log(topMenuEl)
topMenuEl.style.height = 100%;
topMenuEl.style.backgroundColor =  "#0e9aa7";
topMenuEl.classList.add("flex-around");

// Part 3

// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];

const topMenuEl = document.querySelector('.top-menu');
menuLinks.forEach(link => {
  const linkEl = document.createElement('a');
  linkEl.href = link.href;
  linkEl.textContent = link.text;
  topMenuEl.appendChild(linkEl);
});

// Part 2 of the Lab
// Part 3
const  newNav = document.createElement("nav");
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

// Part 4
const topMenuLinks = topMenuEl.querySelectorAll('a');
topMenuEl.addEventListener("click",(event) => {
    event.preventDefault();
    if (!event.target.matches('a')) {
    return 
}
topMenuLinks.forEach(link => link.classList.remove('active'));
const clickedLink = event.target;
clickedLink.classList.toggle("active");
console.log(event.target.textContent);
});

// Part 5
const linkObj = menuLinks.find(link => link.text === clickedLink.textContent);
    if (linkObj.subLinks) {
      subMenuEl.style.top = '100%'; 
      subMenuEl.style.top = '0'; 
} else {
    subMenuEl.style.top = "0";
}
subMenuEl.innerHTML = '';
linkObj.subLinks.forEach(subLink => {
    const subLinkEl = document.createElement('a');
    subLinkEl.href = subLink.href;
    subLinkEl.textContent = subLink.text;
    subMenuEl.appendChild(subLinkEl);
});