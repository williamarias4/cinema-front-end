
import { get_fetch_text } from '/assets/js/fetch-method.js'
import * as navlinks from '/assets/js/navlink-config.js'
import load_nav_toggle from '/assets/js/nav-hamburguer.js'

function nav_list() {

    navlinks.index_guest.forEach(element => {
        let nav_list = document.getElementsByClassName('nav-list')[0];
        let link = document.createElement('li');
        let a = document.createElement('a');

        a.setAttribute('href', element.LINK);
        a.textContent = element.TEXT;

        link.appendChild(a);
        nav_list.appendChild(link);
    });

    add_search_bar();
}

function add_search_bar(){

    let nav_list = document.getElementsByClassName('nav-list')[0];

    let search_bar = document.createElement('div');
    search_bar.setAttribute('class', 'search-bar');

    let search_input = document.createElement('input');
    search_input.setAttribute('id', 'searchMovie');
    search_input.setAttribute('type', 'search');
    search_input.setAttribute('placeholder', 'Search');

    let search_btn = document.createElement('button');
    search_btn.setAttribute('id', 'btnSearchMovie');

    let search_icon = document.createElement('i');
    search_icon.setAttribute('class', 'bi bi-search');

    let btn_text = document.createElement('span');
    btn_text.textContent = " Search Movie";

    search_btn.appendChild(search_icon);
    search_btn.appendChild(btn_text);
    search_bar.appendChild(search_input);
    search_bar.appendChild(search_btn);
    nav_list.appendChild(search_bar);
}

async function add_navbar(navbar_text) {
    let header = document.getElementsByTagName('header')[0];
    header.innerHTML = navbar_text;
    nav_list();
    load_nav_toggle();
}

get_fetch_text("/sections/navbar.html", add_navbar);

/*function create_navbar() {

    let header = document.getElementsByTagName('header')[0];

    let nav_container = document.createElement('div');
    nav_container.setAttribute('class', 'nav-container');

    header.appendChild(nav_container);

    let brand = document.createElement('div');
    brand.setAttribute('class', 'brand');

    let home_link = document.createElement('a');
    home_link.setAttribute('href', '#!');
    home_link.textContent = "🎥 Cinema";

    brand.appendChild(home_link);
    nav_container.appendChild(brand);

    let nav_tag = document.createElement('nav');

    let nav_hamburguer = document.createElement('div');
    nav_hamburguer.setAttribute('class', 'nav-hamburguer');

    let nav_toggle = document.createElement('a');
    nav_toggle.setAttribute('id', 'nav-toggle');
    nav_toggle.setAttribute('href', '#!');

    let span = document.createElement('span');

    nav_toggle.appendChild(span);
    nav_hamburguer.appendChild(nav_toggle);
    nav_tag.appendChild(nav_hamburguer);

    let nav_list = document.createElement('ul');
    nav_list.setAttribute('class', 'nav-list');


    nav_container.appendChild(nav_tag);

}*/



//create_navbar();