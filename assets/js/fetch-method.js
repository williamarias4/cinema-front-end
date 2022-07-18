function getFetch(url, callback) {
    fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    }).then(response => response.json()
    ).then(data => {
        callback(data)
    }), function (error) { //switch to arrow
        console.log(error);
    }
}

function get_fetch_text(url, callback) {
    fetch(url).then(response => response.text()
    ).then(data => {
        //console.log(info)
        callback(data)
        //console.log(info.id)
        //console.log(info.original_title)
    }), function (error) { //switch to arrow
        console.log(error);
    }
}

function postJSON(url, callback, method, body) {
    fetch(url, {
        method: method,
        body: body,
        headers: {
            "Content-Type": "application/json"
        }

    }).then(response => response.json()
    ).then(data => callback(data)
    ), function (error) { //switch to arrow
        console.log(error);
    }
}


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

export {getFetch, get_fetch_text};