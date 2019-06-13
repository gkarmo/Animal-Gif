var animals= ["bird", "lion", "duck", "deer","chicken", "rabbit", "dinosaur"];

function getAnimal() {
// event.preventDefault();
// Initial array of animal names
var animal = $('#animal-input').val().trim();
var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=z6DHZTrQlbnpI5laMFUh8bAdDYwSv9Io&limit=4";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
    console.log(response);
    var results = response.data;
    $('#animal-gifs').empty();
    for(var i = 0; i < results.length; i++) {
        var resultsDiv = $('<div>')
        var picUrl = results[i].images.fixed_height.url
        var pic = $('<img>').attr( { src: picUrl, height:"200px", width: "200px" } )
        resultsDiv.prepend(pic)
        $('#animal-gifs').append(pic)
    }
})

}

function animalButtons() {

  // Deleting the movies prior to adding new movies
  // (this is necessary otherwise you will have repeat buttons)
  $("#my-buttons").empty();

  // Looping through the array of movies
  for (var i = 0; i < animals.length; i++) {

    // Then dynamicaly generating buttons for each movie in the array
    // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
    var a = $("<button>");
    // Adding a class of movie-btn to our button
    a.addClass("animal-btn");
    // Adding a data-attribute
    a.attr("data-name", animals[i]);
    // Providing the initial button text
    a.text(animals[i]);
    // Adding the button to the buttons-view div
    $("#my-buttons").append(a);
  }
}

$("#add-animal").on("click", function(event) {
    event.preventDefault();
    // This line grabs the input from the textbox
    var animal = $("#animal-input").val().trim();

    // Adding movie from the textbox to our array
    animals.push(animal);

    // Calling renderButtons which handles the processing of our movie array
    animalButtons();
  });

$(document).on("click", ".animal-btn", getAnimal);
animalButtons();






















// // displayMovieInfo function re-renders the HTML to display the appropriate content
// function showGifs() {

//   var animal = $(this).attr("data-name");
//   var apiKey = "z6DHZTrQlbnpI5laMFUh8bAdDYwSv9Io";
//   var queryURL = "http://api.giphy.com/v1/gifs/search?q" + animal + "&api_key=" + apiKey ;

//   // Creating an AJAX call for the specific movie button being clicked
//   $.ajax({
//     url: queryURL,
//     method: "GET"
//   }).then(function(response) {
//         console.log(response);
//   //   // Creating a div to hold the movie
//   //   var movieDiv = $("<div class='gif'>");

//   //   // Storing the rating data
//   //   var rating = response.Rated;

//   //   // Creating an element to have the rating displayed
//   //   var pOne = $("<p>").text("Rating: " + rating);

//   //   // Displaying the rating
//   //   movieDiv.append(pOne);

//   //   // Putting the entire movie above the previous movies
//   //   $("#movies-view").prepend(movieDiv);
//   });

// }

// // Function for displaying movie data
// function animalButtons() {

//   // Deleting the movies prior to adding new movies
//   // (this is necessary otherwise you will have repeat buttons)
//   $("#my-buttons").empty();

//   // Looping through the array of movies
//   for (var i = 0; i < animals.length; i++) {

//     // Then dynamicaly generating buttons for each movie in the array
//     // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
//     var a = $("<button>");
//     // Adding a class of movie-btn to our button
//     // a.addClass("movie-btn");
//     // Adding a data-attribute
//     a.attr("data-name", animals[i]);
//     // Providing the initial button text
//     a.text(animals[i]);
//     // Adding the button to the buttons-view div
//     $("#buttons-view").append(a);
//   }
// }

// // This function handles events where a movie button is clicked
// $("#add-animal").on("click", function(event) {
//   event.preventDefault();
//   // This line grabs the input from the textbox
//   var movie = $("#movie-input").val().trim();

//   // Adding movie from the textbox to our array
//   animals.push(movie);

//   // Calling renderButtons which handles the processing of our movie array
//   animalButtons();
// });

// // Adding a click event listener to all elements with a class of "movie-btn"
// $(document).on("click", ".movie-btn", showGifs);

// // Calling the renderButtons function to display the intial buttons
// animalButtons();
