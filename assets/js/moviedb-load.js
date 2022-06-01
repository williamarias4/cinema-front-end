//POSTER PATH IS IMG

let generate_url = (base_url, id, query_string, api_key) =>
    base_url + id + query_string + api_key;

function getJSON(url, callback) {
    fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    }).then(response => response.json()
    ).then(data => {
        //console.log(info)
        callback(data)
        //console.log(info.id)
        //console.log(info.original_title)
    }), function (error) { //switch to arrow
        console.log(error);
    }
}

function postJSON(url, body, callback) {
    fetch(url, {
        method: "POST",
        body: body,
        headers: {
            "Content-Type": "application/json"
        },
    }).then(response => response.json()
    ).then(data => callback(data)
    ), function (error) { //switch to arrow
        console.log(error);
    }
}

let get_movies_id = () => getJSON(moviedb.movie_ids_path, get_movie_list);

let get_movie_list = (data) => {
    let ids = data.ids;
    for (let i in ids) {
        console.log(ids[i].id)
        getJSON(generate_url(moviedb.base_url, ids[i].id,
            moviedb.api_query_param, moviedb.api_key), load_available_movies);
    }
}

function load_available_movies(movie) {
    let table = document.getElementById("table-available-movies");
    if (table) {
        let rows_length_aux = table.rows.length;
        if (rows_length_aux === 0) {
            let row = table.insertRow();
            let col = row.insertCell();
            let img = document.createElement("img");
            img.src = moviedb.base_img_url + movie.poster_path;
            col.appendChild(img);
        }
        else if (rows_length_aux <= movie_table_size.rows) {
            let cols_length_aux = table.rows[rows_length_aux - 1].cells.length;
            console.log(cols_length_aux);
            if (cols_length_aux < movie_table_size.cols) {
                let col = table.rows[rows_length_aux - 1].insertCell();
                let img = document.createElement("img");
                img.src = moviedb.base_img_url + movie.poster_path;
                col.appendChild(img);
            }
            else if (cols_length_aux === movie_table_size.cols && rows_length_aux < movie_table_size.rows) {
                let row = table.insertRow();
                let col = row.insertCell();
                let img = document.createElement("img");
                img.src = moviedb.base_img_url + movie.poster_path;
                col.appendChild(img);
            }
        }


    }
}

//window.onload gives an exception
document.onload = () => load_available_movies();

let test_callback = (movie) => console.log(movie.original_title, movie.poster_path);

get_movies_id();



//getJSON(generate_url(moviedb.base_url, "315635", moviedb.api_query_param, moviedb.api_key));

/*fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "same-origin"
  }).then(function(response) {
    response.status     //=> number 100–599
    response.statusText //=> String
    response.headers    //=> Headers
    response.url        //=> String
  
    return response.text()
  }, function(error) {
    error.message //=> String
  })*/
