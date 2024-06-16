document.addEventListener("DOMContentLoaded", function() {
    // Haetaan tallennettu kieli
    const savedLanguage = localStorage.getItem('language');

    // Jos kieli on tallennettu, asetetaan se
    if (savedLanguage) {
        setLanguage(savedLanguage);
    }

    // Kielipainikkeiden klikkaustapahtumat
    document.querySelectorAll('.flag-fi').forEach(button => {
        button.addEventListener('click', function() {
            setLanguage('fi');
        });
    });
    document.querySelectorAll('.flag-en').forEach(button => {
        button.addEventListener('click', function() {
            setLanguage('en');
        });
    });
});

function setLanguage(language) {
    // Tallennetaan valittu kieli paikalliseen tallennustilaan
    localStorage.setItem('language', language);

    // Näytetään oikea kieliversio
    document.querySelectorAll('.fi').forEach(el => {
        el.style.display = (language === 'fi') ? 'block' : 'none';
    });
    document.querySelectorAll('.en').forEach(el => {
        el.style.display = (language === 'en') ? 'block' : 'none';
    });
}