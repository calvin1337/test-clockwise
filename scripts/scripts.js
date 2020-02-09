window.onscroll = function() {
    var nav = document.getElementById('mynav');
    if ( window.pageYOffset > 100 ) {
        nav.classList.add("nav-colored")
    } else {
        nav.classList.remove("nav-colored")
    }
}


