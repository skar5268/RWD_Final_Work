let showMenuButton = document.querySelector(".menu-icon");

showMenuButton.addEventListener('click',openMenu,false)

function openMenu(e){
 e.preventDefault();
 let mobileMenu = document.querySelector(".mobile-menu");
 mobileMenu.classList.toggle("d-block");
}


