document.addEventListener("DOMContentLoaded", function() {
    // Haetaan tallennettu kieli
    const savedLanguage = localStorage.getItem('language');

    // Jos kieli on tallennettu, asetetaan se
    if (savedLanguage) {
        setLanguage(savedLanguage, false); // false tarkoittaa, että animaatiota ei käytetä sivun latauksessa
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

function setLanguage(language, useAnimation = true) {
    if (useAnimation) {
        // Lisää fade-out-animaatio kaikkiin kieliversioihin
        document.querySelectorAll('.fi, .en').forEach(el => {
            el.classList.add('fade-out');
        });

        // Odota animaation loppumista ennen kielen vaihtoa
        setTimeout(() => {
            applyLanguage(language);
        }, 500); // Sama kesto kuin fade-out-animaatiolla
    } else {
        applyLanguage(language);
    }
}

function applyLanguage(language) {
    // Tallennetaan valittu kieli paikalliseen tallennustilaan
    localStorage.setItem('language', language);

    // Näytetään oikea kieliversio
    document.querySelectorAll('.fi').forEach(el => {
        el.style.display = (language === 'fi') ? 'block' : 'none';
        el.classList.remove('fade-out');
        el.classList.add('fade-in');
    });
    document.querySelectorAll('.en').forEach(el => {
        el.style.display = (language === 'en') ? 'block' : 'none';
        el.classList.remove('fade-out');
        el.classList.add('fade-in');
    });

    // Poista fade-in-luokka, kun animaatio on valmis
    setTimeout(() => {
        document.querySelectorAll('.fi, .en').forEach(el => {
            el.classList.remove('fade-in');
        });
    }, 1000); // Sama kesto kuin fade-in-animaatiolla
}
