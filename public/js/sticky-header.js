/* Header fijo */
window.addEventListener("load", ()=> {
    window.addEventListener("scroll", () => {                        // Se ejecuta evento al scrollear
        let header = document.querySelector("#header");
        let headerPlaceholder = document.querySelector("#sticky-header-placeholder")
        let scrollUpButton = document.querySelector("#scroll-up-button");
    
        if (window.scrollY > 90) {                                   // Al scrollear hacia abajo:
            let headerHeight = header.offsetHeight;                  // Se recupera la altura del header
            headerPlaceholder.style.height = headerHeight + 'px'     // Se expande el placeholder para ocupar el lugar del header y evitar el desplazamiento de los elementos de la página
            header.classList.add("sticky");                          // Se fija el header y se ejecuta la animación correspondiente
            scrollUpButton.classList.add("show")                     // Se muestra el scroll up button
        } else {
            header.classList.remove("sticky");
            headerPlaceholder.style.height = '0'
            scrollUpButton.classList.remove("show")
        }
    })
})