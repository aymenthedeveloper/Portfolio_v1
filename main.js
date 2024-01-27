function toggelNav(menuIcon){
    menuIcon.classList.toggle('change')
    const nav = document.querySelector('nav')
    if (nav.style.maxHeight){
        nav.style.maxHeight = null;
    } else {
        nav.style.maxHeight = nav.scrollHeight + "px";
    }
}
