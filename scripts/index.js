var navMenu = document.getElementById("navMenu");

// Abre el menú para celulares
function openNavMenu() {
    navMenu.style.display = "block";
    setTimeout(function(){ navMenu.style.transform = "translateY(100vh)"; }, 300);
}

// Cierra el menú para celulares
function closeNavMenu() {
    //navMenu.style.display = "none";
    navMenu.style.transform = "translateY(-100vh)";
    setTimeout(function(){ navMenu.style.display = "none"; }, 750);
}