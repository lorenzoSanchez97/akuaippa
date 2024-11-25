/* Funcionalidad y animaciones del menu lateral */
window.addEventListener("load", () => {
    let burguerButton = document.querySelector("#burguer-button")
    let sideMenuCloseButton = document.querySelector("#side-menu-close-button")
    let sideMenu = document.querySelector("#side-menu");
    let overlay = document.querySelector("#overlay")

    burguerButton.addEventListener("click", () => {                 // Al clickear el botón hamburgesa se despliega el sidemenu y la covertura de la página
        sideMenu.classList.add("show")
        overlay.classList.add("on")
    })

    sideMenuCloseButton.addEventListener("click", () => {           // Al clickear el botón de cierre del sidemenu este se cierra y se retira la covertura de la página
        sideMenu.classList.remove("show")
        overlay.classList.remove("on")
    })

    overlay.addEventListener("click", () => {                       // Al clickear sobre la covertura esta se retira y se cierra el sidemenu 
        sideMenu.classList.remove("show")
        overlay.classList.remove("on")
    })
})