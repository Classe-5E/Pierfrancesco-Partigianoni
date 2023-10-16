// Funzione per verificare se un elemento è visibile nella finestra visualizzazione
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Aggiungi un gestore per l'evento scroll per verificare quando l'elemento diventa visibile
window.addEventListener('scroll', function () {
    const textElement = document.querySelector('.text');
    if (isElementInViewport(textElement)) {
        console.log("true");
        textElement.classList.add('visible'); // Aggiungi una classe per attivare l'animazione
    }
});