const navToggle = document.querySelector('[aria-controls="primary-nav"]');
const primaryNav = document.querySelector("#primary-nav");

const opo = {
  true: "false",
  false: "true",
};

navToggle.addEventListener("click", () => {
  const navOpened = navToggle.getAttribute("aria-expanded");
  navToggle.setAttribute("aria-expanded", opo[navOpened]);

  console.log("navOpened==>", navOpened);
});
