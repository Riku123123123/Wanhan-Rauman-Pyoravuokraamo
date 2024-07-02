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