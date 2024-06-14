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
        const notificationBox = document.getElementById('notification-box');
        const hamtausta = document.getElementById('hamtausta'); // Lisätään hamtausta-elementti

        navItems.classList.toggle('active');
        notificationBox.classList.remove('active'); // Varmista, että ilmoitus ei ole aktiivinen avattaessa valikko

        if (navItems.classList.contains('active')) {
            hamtausta.style.display = 'block';
        } else {
            hamtausta.style.display = 'none';
        }
    }

    // Avaa aloitusosio
    navigateTo('home');

    // Kiinnitetään funktiot globaaleihin muuttujiin, jotta ne ovat saatavilla HTML:stä
    window.setLanguage = setLanguage;
    window.navigateTo = navigateTo;
    window.toggleMenu = toggleMenu;

    // Alustetaan navigaatio tapahtumat
    const navItems = document.querySelectorAll('.nav-items a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const sectionId = this.getAttribute('onclick').replace("navigateTo('", "").replace("')", "");
            navigateTo(sectionId);
            toggleMenu(); // Sulje valikko kun navigoidaan
        });
    });
});

    // Button animaatio
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.add('animate');
            setTimeout(() => {
                button.classList.remove('animate');
            }, 500);
        });
    });

    // Modal-toiminnallisuus
    const bikeUrls = {
        'terässiipi': 'https://twice.shop/wanhanraumanpyrvuokraus/product/voCeBmWjfU8iu3wyRonv',
        'nopsa': 'https://twice.shop/wanhanraumanpyrvuokraus/product/JCiNiKKAoZf2uZcjABfI',
        'helkama': 'https://twice.shop/wanhanraumanpyrvuokraus/product/Olp0IztcX7TJTXPGg77k',
        'madison': 'https://twice.shop/wanhanraumanpyrvuokraus/product/MVCFG2UdZqkmkaASCE6k',
        'carraro': 'https://twice.shop/wanhanraumanpyrvuokraus/product/Pd3Zvd2TmurVqUUNH3dH',
        'nakamura': 'https://twice.shop/wanhanraumanpyrvuokraus/product/w1XL8k7ThBrftyOJePLc',
        'ibrido': 'https://twice.shop/wanhanraumanpyrvuokraus/product/BkXWgHwo7cneQ5DzmEQn'
    };

    const bikeVideoUrls = {
        'terässiipi': 'none.mp4',
        'nopsa': 'none.mp4',
        'helkama': 'none.mp4',
        'madison': 'none.mp4',
        'carraro': 'none.mp4',
        'nakamura': 'none.mp4',
        'ibrido': 'none.mp4'
    };

    function openModal(name, image, description) {
        document.getElementById('bikeName').innerText = name;
        document.getElementById('bikeImage').src = image;
        document.getElementById('bikeDescription').innerText = description;

        const url = bikeUrls[name.toLowerCase()] || '';
        const videoUrl = bikeVideoUrls[name.toLowerCase()] || '';

        const bikeURL = document.getElementById('bikeURL');
        bikeURL.href = url;

        const bikeVideoSource = document.getElementById('bikeVideoSource');
        bikeVideoSource.src = videoUrl;

        const bikeVideo = document.getElementById('bikeVideo');
        bikeVideo.load(); // Load the new video URL
        bikeVideo.pause(); // Pause the video

        const modal = document.getElementById('bikeModal');
        modal.style.display = "block";
        modal.classList.remove('modal-close');
        modal.classList.add('modal-open');
    }

    function closeModal() {
        const modal = document.getElementById('bikeModal');
        const bikeVideo = document.getElementById('bikeVideo');
        bikeVideo.pause(); // Pause the video when closing the modal

        modal.classList.remove('modal-open');
        modal.classList.add('modal-close');
        setTimeout(() => {
            modal.style.display = "none";
        }, 500); // Sama kesto kuin modalClose-animaatiolla
    }

    // Sulje modal klikkaamalla ulkopuolella
    window.onclick = function(event) {
        const modal = document.getElementById('bikeModal');
        if (event.target == modal) {
            closeModal();
        }
    };

    // Ilmoitusnäyttö
    function showNotification() {
        const notificationBox = document.getElementById('notification-box');
        notificationBox.style.display = 'none'; // Muuta 'none' -> 'block' halutessasi näyttää ilmoituslaatikon
    }

    function closeNotification() {
        const notificationBox = document.getElementById('notification-box');
        notificationBox.style.display = 'none';
    }

    // Käynnistä ilmoitus
    showNotification();

    // Lisätään kuuntelija, joka sulkee valikon kun klikataan muualle sivulle
    document.addEventListener('click', function(event) {
        var navItems = document.querySelector('.nav-items');
        if (!event.target.closest('.hamburger') && !event.target.closest('.nav-items')) {
            navItems.classList.remove('active');
            hamtausta.style.display = 'none';
        }
    });

