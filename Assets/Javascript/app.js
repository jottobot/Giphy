// array of topic strings
var topics = ["Justin Bieber", "Fleetwood Mac", "Quavo", "Queen", "Lil Wayne", "YG"
];

function display() {

    // declaring singer variable as the data name of the button clicked
    var singer = $(this).attr("data-name");
    console.log(singer);

    // API key
    var APIKey = "H2UBAUc1d6Z50i0F4FEwme8eChN6XRcC";

    // URL we need to query the database
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + singer + "&api_key=" + APIKey + "&limit=10";

    // AJAX call
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        // data of gif
        var results = response.data;
        console.log(results);

        for (var j = 0; j < results.length; j++) {
            var animated = response.data[j].images.fixed_height.url;
            var still = response.data[j].images.fixed_height_still.url;
            var p = $("<p>").text("Rating: " + results[j].rating);
            var gifDiv = $('<div class="gif-item">');
            // // createBox(stillImg, animatedImg);
            gifDiv.append(p);
            // gifDiv.append(stillImg);
            // $newImg.addClass("img-box");
            console.log(gifDiv);
            $(".gifs").prepend(gifDiv);
            //console.log($('.results').html());

        };
    });
}



// div to hold the musician
//var singerDiv = $("<div class='singer'>");

// variable for rating
//var ratingGif = response.data.rating;
//console.log(ratingGif);

// element to have the rating displayed
//var showRating = $("<p>").text("Rating: " + ratingGif);

// Displaying the rating
//singerDiv.text(showRating);

//$(".gifs").append(singerDiv);

        // click on button and 10 static gifs are pulled from that API and shown on page
        // var gif = $("<img>").attr("src", imgURL);

        // click on pic and it moves, clicks to stop


  


// create buttons
function buttons() {
    $(".buttons-view").empty();

    // loop through topics creating buttons
    for (var i = 0; i < topics.length; i++) {
        var button = $("<button>");
        button.addClass("singer-button")
        button.attr("data-name", topics[i]);
        button.text(topics[i]);
        $(".buttons-view").append(button);
    }
} //buttons();

// adding new button
$("#add-singer").on("click", function (event) {
    event.preventDefault();

    var singer1 = $("#gif-input").val().trim();

    topics.push(singer1);

    buttons();
});


$(document).on("click", ".singer-button", display);

buttons();

