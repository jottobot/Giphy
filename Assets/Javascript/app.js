// array of topic strings
var topics = ["Justin Bieber", "Fleetwood Mac", "Quavo", "Queen", "Lil Wayne"
];


function display() {

    // declaring singer variable as the data name of the button clicked
    var singer = $(this).attr("data-name");

    // API key
    var APIKey = "H2UBAUc1d6Z50i0F4FEwme8eChN6XRcC";

    // URL we need to query the database
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + APIKey;

    // AJAX call
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);

        // div to hold the musician
        var singerDiv = $("<div class='singer'>");

        // variable for rating
        var rating = response.Rated;
        console.log(rating);

        // element to have the rating displayed
        var showRating = $("<p>").text("Rating: " + rating);

        // Displaying the rating
        singerDiv.append(showRating);

        // click on button and 10 static gifs are pulled from that API and shown on page
        // var gif = $("<img>").attr("src", imgURL);


        // click on pic and it moves, clicks to stop

        // display rating under gif

        // create button (form) to search for new topic and add to "topics" array

        // function call that takes each topic in the array remakes the buttons on the page

    });
};


function buttons() {
    $(".buttons").empty();

    // loop through topics creating buttons
    for (var i = 0; i < topics.length; i++) {
        var button = $("<button>");
        button.addClass("singer-button")
        button.attr("data-name", topics[i]);
        button.text(topics[i]);
        $(".buttons").append(button);
    }
} buttons();

$("#add-singer").on("click", function(event) {
    event.preventDefault();

        var singer = $("#singer-input").val();

        topics.push(singer);

        buttons();
});

// $(document).on("click", ".singer-button", move gif)

