$dropdownMenu = document.querySelector(".nav__links");
$dropdownLink = document.querySelector(".nav__menu__btn");
const $links = document.querySelectorAll(".link");

function toggleNavbar() {
   if (
      !$dropdownMenu.getAttribute("style") ||
      $dropdownMenu.getAttribute("style") === "display: none;"
   ) {
      $dropdownMenu.style.display = "flex";
      $dropdownLink.setAttribute("aria-expanded", "true");
   } else {
      $dropdownMenu.style.display = "none";
      $dropdownLink.setAttribute("aria-expanded", "false");
   }
}

$dropdownLink.addEventListener("click", function (e) {
   if (window.innerWidth < 768) {
      e.preventDefault();
      toggleNavbar();
   }
});

$links.forEach((link) => {
   link.addEventListener("click", function (e) {
      if (window.innerWidth < 768) {
         e.preventDefault();
         toggleNavbar();

         // Get the href attribute from the link
         const href = this.querySelector("a").getAttribute("href");

         // Navigate to the section after a short delay (to allow menu to close)
         setTimeout(() => {
            window.location.href = href;
         });
      }
   });
});
