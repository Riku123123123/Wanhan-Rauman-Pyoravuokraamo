document.addEventListener('DOMContentLoaded', function() {
    // Estää automaattisen siirtymisen alaspäin sivustoa avatessa
    window.scrollTo(0, 0);
    
    // Navigaatio-toiminto
    function navigateTo(sectionId) {
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            section.style.display = 'none';
        });
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.style.display = 'block';
            window.scrollTo(0, 0); // Estää automaattisen siirtymisen alaspäin navigoidessa
        }
    }

    // Avaa aloitusosio
    navigateTo('privacy');

    // Kiinnitetään funktiot globaaleihin muuttujiin, jotta ne ovat saatavilla HTML:stä
    window.navigateTo = navigateTo;
});

function navigateToPage(url) {
    window.location.href = url;
}