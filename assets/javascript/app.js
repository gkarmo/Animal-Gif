var animals= ["bird", "lion", "duck", "deer","chicken", "rabbit", "dinosaur"];

function getAnimal() {
event.preventDefault();
var animal = $(this).attr("data-name");
var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=z6DHZTrQlbnpI5laMFUh8bAdDYwSv9Io&limit=6";

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
  $("#my-buttons").empty();

  // Looping through the array of movies
  for (var i = 0; i < animals.length; i++) {

 
    // This code $("<button>") is all jQuery needs to create the tag
    var a = $("<button>");
    // Adding a class of movie-btn to our button
    a.addClass("animal-btn");
    // Adding a data-attribute
    a.attr("data-name", animals[i]);
    // Providing the initial button text
    a.text(animals[i]);
    // Adding the button to the my-button div
    $("#my-buttons").append(a);
  }
}

$("#add-animal").on("click", function(event) {
    event.preventDefault();
    // This line grabs the input from the textbox
    var animal = $("#animal-input").val().trim();

    // Adding animals from the textbox to our array
    animals.push(animal);

    // Calling animalButtons which handles the processing of our movie array
    animalButtons();
  });

$(document).on("click", ".animal-btn", getAnimal);
animalButtons();