document.addEventListener('DOMContentLoaded', function() {
    // Estää automaattisen siirtymisen alaspäin sivustoa avatessa
    window.scrollTo(0, 0);

    // Käyttöliittymän vaihtaminen
    function setLanguage(language) {
        const fiElements = document.querySelectorAll('.fi');
        const enElements = document.querySelectorAll('.en');
        if (language === 'fi') {
            fiElements.forEach(el => el.style.display = 'block');
            enElements.forEach(el => el.style.display = 'none');
        } else if (language === 'en') {
            fiElements.forEach(el => el.style.display = 'none');
            enElements.forEach(el => el.style.display = 'block');
        }
    }

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

    // Hamburger-menu-toiminto
    function toggleMenu() {
        const navItems = document.querySelector('.nav-items');
        navItems.classList.toggle('active');
        document.querySelectorAll('.nav-items a').forEach(item => {
            item.addEventListener('click', toggleMenu);
        });
    }

    // Kiinnitetään funktiot globaaleihin muuttujiiin, jotta ne ovat saatavilla HTML:stä
    window.setLanguage = setLanguage;
    window.navigateTo = navigateTo;
    window.toggleMenu = toggleMenu;
});

document.addEventListener('DOMContentLoaded', function() {
    // Koodi, joka ajetaan vasta, kun DOM on täysin ladattu
    // Voit asettaa täällä tapahtumankäsittelijät tai suorittaa muita toimintoja

    function navigateTo(sectionId) {
        // Piilota kaikki osiot
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            section.style.display = 'none';
        });

        // Näytä valittu osio
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.style.display = 'block';
        }
    }

    // Alustetaan navigaatio tapahtumat
    const navItems = document.querySelectorAll('.nav-items a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const sectionId = this.getAttribute('onclick').replace("navigateTo('", "").replace("')", "");
            navigateTo(sectionId);
        });
    });

    // Avaa aloitusosio
    navigateTo('home');
});

