// array of topic strings
var topics = ["Justin Bieber", "Fleetwood Mac", "Quavo", "Queen", "Lil Wayne", "YG"
];

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
    };
}; buttons();

// function to show GIFs and ratings
function display() {

    // when clicking button, this variable grabs that singers name
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

        // retrieving data of gif
        var results = response.data;
        console.log(results);

        for (var j = 0; j < results.length; j++) {

            // create div to hold results
            //var giphy = $("<div class=gifss>");

            // creating image variable
            var image = $("<img>");

            // adding the attribute of the gif to image variable
            image.attr("src", results[j].images.fixed_height_still.url);

           // image.attr("data-still", results[j].images.fixed_height_still.url);

           // telling gif to be still
            image.attr("data-state", "still");

            //image.addClass("gif");

            // adding the gifs to the top of the page
            $(".gifs").prepend(image);

            // creating p tag for rating of gif
            var p = $("<p>").text("Rating: " + results[j].rating);

            // create new div for rating
            var rating = $('<div class="gif-rating">');

            // appending the p tag into the new rating variable 
            rating.append(p);

            // adding the rating to the page
            $(".gifs").prepend(rating);
        };
    });
};

// adding new button
$("#add-singer").on("click", function (event) {
    event.preventDefault();

    var singer1 = $("#gif-input").val().trim();

    topics.push(singer1);

    buttons();
});

// telling document to run the display function when a singer button is clicked
$(document).on("click", ".singer-button", display);



