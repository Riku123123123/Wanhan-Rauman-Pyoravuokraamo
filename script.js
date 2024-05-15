function navigateTo(sectionId) {
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

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
  

const express = require('express');
const app = express();