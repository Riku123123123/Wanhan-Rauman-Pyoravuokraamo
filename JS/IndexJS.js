document.addEventListener('DOMContentLoaded', function() {
    const cursor = document.getElementById('cursor');
    const pointer = document.getElementById('pointer');
    const buttons = document.querySelectorAll('button');
    const links = document.querySelectorAll('a');

    buttons.forEach(button => {
        button.addEventListener('mouseover', function() {
            cursor.style.display = 'none';
            pointer.style.display = 'block';
        });

        button.addEventListener('mouseout', function() {
            cursor.style.display = 'block';
            pointer.style.display = 'none';
        });
    });

    links.forEach(link => {
        link.addEventListener('mouseover', function() {
            cursor.style.display = 'none';
            pointer.style.display = 'block';
        });

        link.addEventListener('mouseout', function() {
            cursor.style.display = 'block';
            pointer.style.display = 'none';
        });
    });

    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        pointer.style.left = e.clientX + 'px';
        pointer.style.top = e.clientY + 'px';
    });
});

document.addEventListener('mousemove', function (e) {
    var trail = document.createElement('div');
    trail.className = 'cursor-trail';
    trail.style.left = e.pageX + 'px';
    trail.style.top = e.pageY + 'px';
    document.body.appendChild(trail);
    setTimeout(function () {
        trail.remove();
    }, 500);
});


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

            document.title = targetSection.dataset.title || "Wanhan Rauman Pyörävuokraamo";
        }
    }

    // Tarkista ankkuri URL:ssa ja navigoi tarvittaessa
    function checkAnchorAndNavigate() {
        const hash = window.location.hash;
        let sectionId = 'home'; // Default to #home if no hash
    
        if (hash) {
            sectionId = hash.substring(1); // Remove leading #
        }
    
        navigateTo(sectionId);
    }    
    
    // Kuuntele hash-muutoksia
    window.addEventListener('hashchange', checkAnchorAndNavigate);

    // Hamburger-menu-toiminto
    function toggleMenu() {
        const navItems = document.querySelector('.nav-items');
        const notificationBox = document.getElementById('notification-box');
        const hamtausta = document.getElementById('hamtausta'); // Lisätään hamtausta-elementti

        navItems.classList.toggle('active');
        notificationBox.classList.remove('active'); // Varmista, että ilmoitus ei ole aktiivinen avattaessa valikko

        if (navItems.classList.contains('active')) {
            if (window.innerWidth <= 1289) { // Näytä hamtausta vain näytöillä, joiden leveys on enintään 1289px
                hamtausta.classList.add('show');
            }
        } else {
            hamtausta.classList.remove('show');
        }
    }

    // Avaa aloitusosio
    checkAnchorAndNavigate();

    // Kiinnitetään funktiot globaaleihin muuttujiin, jotta ne ovat saatavilla HTML:stä
    window.setLanguage = setLanguage;
    window.navigateTo = navigateTo;
    window.toggleMenu = toggleMenu;

    // Alustetaan navigaatio tapahtumat
    const navItems = document.querySelectorAll('.nav-items a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            toggleMenu(); // Sulje valikko kun navigoidaan
        });
    });
});

    // Lisätään kuuntelija, joka sulkee valikon kun klikataan muualle sivulle
    document.addEventListener('click', function(event) {
        const navItems = document.querySelector('.nav-items');
        const hamtausta = document.getElementById('hamtausta');
        if (!event.target.closest('.nav-items') && !event.target.closest('.hamburger')) {
            navItems.classList.remove('active');
            hamtausta.classList.remove('show');
        }
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
        const nottausta = document.getElementById('nottausta');
        notificationBox.style.display = 'block'; // Muuta 'none' -> 'block' halutessasi näyttää ilmoituslaatikon
        nottausta.style.display = 'flex'; // Muuta 'none' -> 'block' halutessasi näyttää ilmoituslaatikon
    }

    function closeNotification() {
        const notificationBox = document.getElementById('notification-box');
        const nottausta = document.getElementById('nottausta');
        notificationBox.classList.add('fade-out');
        nottausta.classList.add('fade-out');

        // Odota animaation loppumista, ennen kuin piilotat elementit kokonaan
        setTimeout(() => {
            notificationBox.classList.add('hidden');
            nottausta.classList.add('hidden');
        }, 500);
    };

    // Käynnistä ilmoitus
    showNotification();

    // Esimerkki ilmoituksen sulkemisesta 3 sekunnin kuluttua
    setTimeout(closeNotification, 10000);