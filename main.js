document.onclick = hideNav

function hideNav(e){
    const nav = document.querySelector('nav')
    const menu_icon = document.getElementById('menu_icon')
    if (e.target.id !== "menu_icon" && e.target.id !== "nav_menu"){
        nav.style.maxHeight = null;
        menu_icon.classList.remove("change")
        nav.dataset.drop = "false";
    }
}
function toggelNav(menuIcon){
    menuIcon.classList.toggle('change')
    const nav = document.querySelector('nav')
    if (nav.style.maxHeight){
        nav.style.maxHeight = null;
        nav.dataset.drop = "false";
    } else {
        nav.dataset.drop = "true";
        nav.style.maxHeight = nav.scrollHeight + "px";
    }
}
