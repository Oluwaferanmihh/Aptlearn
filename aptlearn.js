const showsidebar = () => {
  console.log(event.target);
  const navlink = document.querySelector(".navlinks");
  navlink.classList.add("navlinksShow");
  const body = document.querySelector("body");
  body.classList.add("bodyUnscroll");
};
const removesidebar = () => {
  console.log(event.target);
  const navlink = document.querySelector(".navlinks");
  navlink.classList.remove("navlinksShow");
  const body = document.querySelector("body");
  body.classList.remove("bodyUnscroll");
};
const scrollLeft = () => {
  const sectionCards = document.querySelector("sectionCards");
  sectionCards.scrollBy(500, 0);
};
