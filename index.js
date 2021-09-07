// ClassList - shows / get all classes
// containes - check classList for specific class
// add - add class 
// remove - remove the classs 
// toggle- toggle class

const navToggle = document.querySelector('.nav-toggle')
const links = document.querySelector('.links')

navToggle.addEventListener('click', () => {
    // console.log(links.classList);
    // console.log(links.classList.contains('links'));

    // if (links.classList.contains('show-links')) {
    //     links.classList.remove('show-links')
    // } else {
    //     links.classList.add('show-links')
    // }
    links.classList.toggle("show-links")
});

















