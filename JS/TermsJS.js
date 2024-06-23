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
        let navigationHistory = [];

        function navigateTo(sectionId) {
            const sections = document.querySelectorAll('section');
            sections.forEach(section => {
                section.style.display = 'none';
            });
            const targetSection = document.getElementById(sectionId);
            if (targetSection) {
                targetSection.style.display = 'block';
                window.scrollTo(0, 0); // Siirrä näkymä sivun alkuun
            }
        
            if (navigationHistory.length === 0 || navigationHistory[navigationHistory.length - 1] !== sectionId) {
                navigationHistory.push(sectionId); // Lisää osio historiaan
            }
        }

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
                navigateToPage('../index.html'); // Muuten palaa alkuperäiselle sivulle
            }
        }

        window.navigateTo = navigateTo;
        window.navigateBack = navigateBack;
        window.handleNavigation = handleNavigation;

        navigateTo('home');
    });

    function navigateToPage(url) {
        window.location.href = url;
    }