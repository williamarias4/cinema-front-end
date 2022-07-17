//POSTER PATH IS IMG

import getFetch from '/assets/js/fetch-method.js';
import { style_outside_element_onhover } from '/assets/js/style-element.js';

let generate_url = (base_url, id, query_string, api_key) =>
    base_url + id + query_string + api_key;


function load_available_movies(movie) {
    let table = document.getElementById("table-available-movies");
    if (table) {
        let rows_length_aux = table.rows.length;

        if (rows_length_aux === 0) {
            let row = table.insertRow();
            let col = row.insertCell();
            col.setAttribute('style', 'width:16.67%;');

            let div_class_image_box = document.createElement("div");
            div_class_image_box.setAttribute('class', 'image_box');
            //div.setAttribute('style', 'width:200px; height:359px;');

            let div_schedule_container = document.createElement("div");
            div_schedule_container.setAttribute('class', 'schedule_container');
            div_schedule_container.setAttribute('id', 'test');


            let btn_schedule = document.createElement("a");
            btn_schedule.setAttribute('class', 'text_btn');
            btn_schedule.textContent = "July 30th, 7:00PM / C3";

            let btn_schedule2 = document.createElement("a");
            btn_schedule2.setAttribute('class', 'text_btn');
            btn_schedule2.textContent = "July 30th, 7:00PM / C3";

            let btn_schedule3 = document.createElement("a");
            btn_schedule3.setAttribute('class', 'text_btn');
            btn_schedule3.textContent = "July 30th, 7:00PM / C3";

            let br = document.createElement("br");

            let br2 = document.createElement("br");

            let p_movie_title = document.createElement("p");
            p_movie_title.textContent = movie.original_title;

            let img = document.createElement("img");
            img.src = moviedb.base_img_url + movie.poster_path;

            style_outside_element_onhover(div_schedule_container, img);

            style_outside_element_onhover(img, img);

            col.appendChild(div_class_image_box);
            div_class_image_box.appendChild(img);
            div_schedule_container.appendChild(btn_schedule);
            div_schedule_container.appendChild(br);
            div_schedule_container.appendChild(btn_schedule2);
            div_schedule_container.appendChild(br2);
            div_schedule_container.appendChild(btn_schedule3);
            div_class_image_box.appendChild(div_schedule_container);
            div_class_image_box.appendChild(p_movie_title);

        }
        else if (rows_length_aux <= movie_table_size.rows) {
            let cols_length_aux = table.rows[rows_length_aux - 1].cells.length;
            console.log(cols_length_aux);
            if (cols_length_aux < movie_table_size.cols) {
                let col = table.rows[rows_length_aux - 1].insertCell();
                col.setAttribute('style', 'width:16.67%;');

                let div_class_image_box = document.createElement("div");
                div_class_image_box.setAttribute('class', 'image_box');
                //div.setAttribute('style', 'width:200px; height:359px;');

                let div_schedule_container = document.createElement("div");
                div_schedule_container.setAttribute('class', 'schedule_container');

                let btn_schedule = document.createElement("a");
                btn_schedule.setAttribute('class', 'text_btn');
                btn_schedule.textContent = "July 30th, 7:00PM / C3";

                let p_movie_title = document.createElement("p");
                p_movie_title.textContent = movie.original_title;

                let img = document.createElement("img");
                img.src = moviedb.base_img_url + movie.poster_path;

                style_outside_element_onhover(div_schedule_container, img);
                style_outside_element_onhover(img, img);

                col.appendChild(div_class_image_box);
                div_class_image_box.appendChild(img);
                div_schedule_container.appendChild(btn_schedule);
                div_class_image_box.appendChild(div_schedule_container);
                div_class_image_box.appendChild(p_movie_title);
                //col.appendChild(img);
            }
            else if (cols_length_aux === movie_table_size.cols && rows_length_aux < movie_table_size.rows) {
                let row = table.insertRow();
                let col = row.insertCell();
                col.setAttribute('style', 'width:16.67%;');

                let div_class_image_box = document.createElement("div");
                div_class_image_box.setAttribute('class', 'image_box');
                //div.setAttribute('style', 'width:200px; height:359px;');

                let div_schedule_container = document.createElement("div");
                div_schedule_container.setAttribute('class', 'schedule_container');

                let btn_schedule = document.createElement("a");
                btn_schedule.setAttribute('class', 'text_btn');
                btn_schedule.textContent = "July 30th, 7:00PM / C3";

                let p_movie_title = document.createElement("p");
                p_movie_title.textContent = movie.original_title;

                let img = document.createElement("img");
                img.src = moviedb.base_img_url + movie.poster_path;

                style_outside_element_onhover(div_schedule_container, img);
                style_outside_element_onhover(img, img);

                //col.appendChild(img);
                col.appendChild(div_class_image_box);
                div_class_image_box.appendChild(img);
                div_schedule_container.appendChild(btn_schedule);
                div_class_image_box.appendChild(div_schedule_container);
                div_class_image_box.appendChild(p_movie_title);
            }
        }


    }
}

let get_movie_list = (data) => {
    let ids = data.ids;
    for (let i in ids) {
        console.log(ids[i].id)
        getFetch(generate_url(moviedb.base_url, ids[i].id,
            moviedb.api_query_param, moviedb.api_key), load_available_movies);
    }
}



let get_movies_id = () => getFetch(moviedb.movie_ids_path, get_movie_list);

//window.onload gives an exception
//document.onload = () => load_available_movies();

get_movies_id();

//getJSON(generate_url(moviedb.base_url, "315635", moviedb.api_query_param, moviedb.api_key));


