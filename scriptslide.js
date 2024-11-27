let slideIndex = 0; // Indexul curent al slide-ului
showSlides(); // Apelăm funcția pentru a începe slideshow-ul

// Funcția pentru a schimba slide-urile automat
function showSlides() {
    let slides = document.getElementsByClassName("mySlides"); // Obținem toate slide-urile
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  // Ascundem toate slide-urile
    }

    slideIndex++; // Mărim indexul slide-ului curent
    if (slideIndex > slides.length) { slideIndex = 1 } // Dacă ajungem la ultimul slide, revenim la primul

    slides[slideIndex-1].style.display = "block"; // Afișăm slide-ul curent
    setTimeout(showSlides, 3000); // Schimbăm slide-ul la fiecare 3 secunde
}
