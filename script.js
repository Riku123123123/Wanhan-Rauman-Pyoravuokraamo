function navigateTo(sectionId) {
    // Piilota kaikki osiot
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
    });

    // Näytä valittu osio
    document.getElementById(sectionId).style.display = 'block';

    // Päivitä URL-osoitteen fragmentti
    window.location.hash = sectionId;
}

// Tarkista alussa URL-fragmentti ja näytä vastaava osio
document.addEventListener('DOMContentLoaded', () => {
    const hash = window.location.hash.substring(1);
    if (hash) {
        navigateTo(hash);
    } else {
        navigateTo('home'); // Oletuksena näytetään kotisivu
    }
});

function ShowDetails() {
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'block';
        document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    });
}

function showDetails() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => section.classList.add('visible'));
  }
  

  document.addEventListener('DOMContentLoaded', function() {
    // Set default language based on browser language or fallback to Finnish
    const userLang = navigator.language || navigator.userLanguage;
    const defaultLang = userLang.includes('fi') ? 'fi' : 'en';
    setLanguage(defaultLang);
});

document.addEventListener('DOMContentLoaded', function() {
    // Toggle valikon näyttäminen/piilottaminen
    function toggleMenu() {
        const navItems = document.querySelector('.nav-items');
        navItems.classList.toggle('active');
    }

    // Aseta tapahtumankäsittelijät
    document.querySelector('.hamburger').addEventListener('click', toggleMenu);
    document.querySelectorAll('.nav-items a').forEach(item => {
        item.addEventListener('click', toggleMenu);
    });
});





function setLanguage(lang) {
    // Get all elements for both languages
    const fiElements = document.querySelectorAll('.fi');
    const enElements = document.querySelectorAll('.en');

    // Show or hide elements based on selected language
    if (lang === 'fi') {
        fiElements.forEach(element => element.style.display = '');
        enElements.forEach(element => element.style.display = 'none');
    } else if (lang === 'en') {
        fiElements.forEach(element => element.style.display = 'none');
        enElements.forEach(element => element.style.display = '');
    }
}


const express = require('express');
const app = express();
