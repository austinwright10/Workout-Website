document.addEventListener("DOMContentLoaded", function() {
    toggleDisplay('home', 'nav_home');
});

function toggleDisplay(className, className2) {
    //grab all sections in the DOM
    const sections = document.querySelectorAll('section');
    const navElements = document.querySelectorAll('li');
    //hide all sections by changing the DOM display to none
    sections.forEach(section => {
        section.style.display = 'none';
    })
    navElements.forEach(element => {
        element.style.fontWeight = 'normal';
    })
    //change display=block for className section in the DOM
    document.querySelector(`.${className}`).style.display = 'flex';
    document.querySelector(`.${className2}`).style.fontWeight = 'bold';
}
// script.js
document.addEventListener('DOMContentLoaded', function() {
    var darkModeButton = document.getElementById('darkMode');
    darkModeButton.addEventListener('click', function() {
        toggleDarkMode();
    });
});

function toggleDarkMode() {
    var darkModeStylesheet = document.getElementById('darkmode-stylesheet');
    if (darkModeStylesheet) {
        darkMode.innerHTML = "Click here for Dark Mode!";
        darkModeStylesheet.remove();
    } else {
        var link = document.createElement('link');
        link.id = 'darkmode-stylesheet';
        link.rel = 'stylesheet';
        link.href = 'css/darkmode.css';
        document.head.appendChild(link);
        darkMode.innerHTML = "Click here for Light Mode!";
    }
}
