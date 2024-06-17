document.addEventListener('DOMContentLoaded', function() {
    const cursor = document.getElementById('cursor');
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('mouseover', function() {
            cursor.style.transition = 'background-color 0.5s ease'; // Lisää smooth transition
            cursor.style.backgroundColor = '#ffffff'; // Muuta väriä nappia hoveroidessa
        });

        button.addEventListener('mouseout', function() {
            cursor.style.transition = 'background-color 0.5s ease'; // Lisää smooth transition
            cursor.style.backgroundColor = '#ff0000'; // Palauta alkuperäinen väri kun poistutaan napin päältä
        });
    });

    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
});

document.addEventListener('mousemove', function (e) {
    var cursor = document.getElementById('cursor');
    var trail = document.createElement('div');
    trail.className = 'cursor-trail';
    trail.style.left = e.pageX + 'px';
    trail.style.top = e.pageY + 'px';
    document.body.appendChild(trail);
    setTimeout(function () {
        trail.remove();
    }, 500); // Poista jälki 0.5 sekunnin kuluttua
});

document.addEventListener('gesturestart', function (e) {
    e.preventDefault();
});


document.addEventListener('DOMContentLoaded', function() {
    let navigationHistory = [];

    function navigateTo(sectionId) {
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            section.style.display = 'none';
        });
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.style.display = 'block';
            window.scrollTo(0, 0); // Estää automaattisen siirtymisen alaspäin navigoidessa
    
            // Update the URL hash without reloading the page
            history.pushState(null, null, '#' + sectionId);
        }
    
        if (navigationHistory.length === 0 || navigationHistory[navigationHistory.length - 1] !== sectionId) {
            navigationHistory.push(sectionId); // Add section to navigation history
        }
    }
    
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

    // Avaa aloitusosio
    checkAnchorAndNavigate();

    function navigateBack() {
        if (navigationHistory.length > 1) {
            navigationHistory.pop();
            const previousSection = navigationHistory[navigationHistory.length - 1];
            navigateTo(previousSection);
        }
    }

    function handleNavigation() {
        // Tarkista onko navigointihistoria tyhjä
        if (navigationHistory.length > 1) {
            navigateBack(); // Jos historia ei ole tyhjä, navigoi taaksepäin
        } else {
            navigateToPage('../index.html#home'); // Muuten palaa alkuperäiselle sivulle
        }
    }

    window.navigateTo = navigateTo;
    window.navigateBack = navigateBack;
    window.handleNavigation = handleNavigation;

    function navigateToPage(url) {
        window.location.href = url;
    }
});