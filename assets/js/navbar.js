
import {get_fetch_text} from '/assets/js/fetch-method.js'

function add_navbar(navbar_text) {
    let script = document.querySelector("script#navbar");
    let navbar = document.createElement("div");
    navbar.innerHTML = navbar_text;
    script.parentNode.replaceChild(navbar, script);
}

get_fetch_text("/sections/navbar.html", add_navbar);
