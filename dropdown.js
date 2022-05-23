// Dropdown menu
const link_web = document.getElementsByClassName("link-web");
const nav_dir = document.getElementsByClassName("nav-dir");

// drop selection Giao diện
const introduce = document.getElementsByClassName("Introduce-box");
const library = document.getElementsByClassName("Library-item-dropdown");
const article = document.getElementsByClassName("Article-box");

const dropdown = () => {
    link_web[0].classList.toggle("show");
    nav_dir[0].classList.toggle("show");
}

const dropdown_Intro = () => {
    introduce[0].classList.toggle("show");
}

const dropdown_Lib = () => {
    library[0].classList.toggle("show");
}

const dropdown_Art = () => {
    article[0].classList.toggle("show");
}

const accordingScrollMenu = () => {
    var panel = link_web[0].firstChild.nextSibling;
    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
    } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
    } 
    var panel1 = nav_dir[0].firstChild.nextSibling;
    if (panel1.style.maxHeight) {
        panel1.style.maxHeight = null;
    } else {
        panel1.style.maxHeight = panel1.scrollHeight + "px";
    } 
    
}    

const accordingScrollSecIntro = () => {
    if (introduce[0].style.maxHeight) {
        introduce[0].style.maxHeight = null;
    } else {
        introduce[0].style.maxHeight = introduce[0].scrollHeight + "px";
    } 
}

const accordingScrollSecLib = () => {
    if (library[0].style.maxHeight) {
        library[0].style.maxHeight = null;
    } else {
        library[0].style.maxHeight = library[0].scrollHeight + "px";
    } 
}

const accordingScrollSecArt = () => {
    if (article[0].style.maxHeight) {
        article[0].style.maxHeight = null;
    } else {
        article[0].style.maxHeight = article[0].scrollHeight + "px";
    } 
}
