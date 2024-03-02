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