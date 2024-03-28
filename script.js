document.addEventListener("DOMContentLoaded", function() {
    toggleDisplay('home', 'nav_home');
});
// document.addEventListener("DOMContentLoaded", function() {
//     body.style.backgroundColor = 'white';
// })

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
        console.log('Dark Mode');
        toggleDarkMode();
    });
});

function toggleDarkMode() {
    var darkModeStylesheet = document.getElementById('darkmode-stylesheet');
    if (darkModeStylesheet) {
        console.log("if")
        darkModeStylesheet.remove();
    } else {
        console.log("else")
        var link = document.createElement('link');
        link.id = 'darkmode-stylesheet';
        link.rel = 'stylesheet';
        link.href = 'css/darkmode.css';
        document.head.appendChild(link);
    }
}


// function dark_mode() {
//     const aTags = document.querySelectorAll('a');
//     const navList = document.querySelector('ul#nav-list');
//     if (body.style.backgroundColor == 'white') {
//         body.style.backgroundColor = '#121212';
//         body.style.color = 'white';
//         darkMode.innerHTML = 'Click here for Light mode!';
//         aTags.forEach(tag => {
//             tag.style.color = 'rgb(0, 100, 255)';
//         })
//         nav.style.backgroundColor = '#121212';
//         nav.style.borderTop = 'solid 2px white'
//         nav.style.borderBottom = 'solid 2px white'
//         header.style.backgroundImage = 'linear-gradient(rgb(30, 89, 121), darkblue)'
//         footer.style.backgroundImage = 'linear-gradient(rgb(30, 89, 121), darkblue)'
//     } else {
//         body.style.backgroundColor = 'white';
//         body.style.color = 'black';
//         darkMode.innerHTML = 'Click here for Dark mode!';
//         nav.style.backgroundColor = 'white';
//         header.style.backgroundImage = 'linear-gradient(rgb(90, 183, 232), lightblue)'
//         footer.style.backgroundImage = 'linear-gradient(rgb(90, 183, 232), lightblue)'
//         aTags.forEach(tag => {
//             tag.style.color = 'black';
//         })
//         nav.style.borderTop = 'solid 2px black';
//         nav.style.borderBottom = 'solid 2px black';
//     }
// }