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
    ).then(info => {
        //console.log(info)
        callback(info)
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

let get_movies_id = () => getJSON(moviedb.movie_ids_path, load_movie_list);

let load_movie_list = (data) => {
    let ids = data.ids;
    for (let i in ids) {
        console.log(ids[i].id)
        getJSON(generate_url(moviedb.base_url, ids[i].id,
            moviedb.api_query_param, moviedb.api_key), test_callback);
    }
}

let test_callback = (movie) => console.log(movie.original_title);

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
