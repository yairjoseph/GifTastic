// console.log( "ready!" );
// $( document ).ready(function() {
//api url and key
var topics = ["tesla", "pagani", "koenigsegg", "bmw", "apollo automobil", "mercedes-benz"];
function runApp() {
    var userInput = $(this).attr("data-topics");
    var apiKey = "zAEBPU2C4G4HZnkU4vAKHzuzQg0wS2UZ";
    var queryUrl = "https://api.giphy.com/v1/gifs/search?q=" + userInput + "&api_key=" + apiKey + "&limit=10";
    // https://api.giphy.com/v1/gifs/search?q=&api_key=zAEBPU2C4G4HZnkU4vAKHzuzQg0wS2UZ&limit=5
    // // ajax get call to request the query url
    $.ajax({
        url: queryUrl,
        method: "GET"
    })
        // After the data from the AJAX request comes back
        .then(function (response) {
            var divForTheDivs = $("<div id='div1'>")
            var results = response.data;
            for (let i = 0; results.length; i++) {
                var searchDiv = $("<div class='searchDiv'>");
                var rating = results[i].rating;
                var pOne = $("<p>").text("Rating: " + rating);
                //append rating paragraph 
                searchDiv.append(pOne);
                //image variable
                var imageUrl = results[i].images.fixed_width_still.url;
                var imageGif = results[i].images.fixed_width.url;
                // Creating and storing an image tag
                var image = $("<img>");
                // Setting the image src attribute to imageUrl
                image.attr("src", imageUrl);
                image.attr("alt", "image");
                image.attr("data-still", imageUrl);
                image.attr("data-gif", imageGif);
                image.attr("data-state", "still");
                image.addClass("gif");
                searchDiv.append(image);
                divForTheDivs.append(searchDiv)
                // Prepending the image to the images div
                $(".gif").on("click", function () {
                    var state = $(this).attr("data-state");
                    if (state === "still") {
                        var dataAnimate = $(this).attr("data-gif")
                        $(this).attr("data-state", "data-gif")
                        $(this).attr("src", dataAnimate)
                    }
                    else {
                        $(this).attr("data-state", "still")
                        $(this).attr("src", $(this).attr("data-still"));
                    }
                })
                $("#imageReady").html(divForTheDivs);
            }
        });
}
function buttonMaker() {
    $("#topicsBtn").empty()
    for (let i = 0; i < topics.length; i++) {
        var topicBtn = $("<button>").attr("data-topics", topics[i]);
        $(topicBtn).text(topics[i]);
        topicBtn.addClass("select-btn");
        $("#topicsBtn").append(topicBtn);
    }
}
$("#search1").on("click", function (e) {
    e.preventDefault();
    var userInput = $("#userInput").val();
    console.log(userInput)

    if (userInput === "") {
        alert("Don't forget to search!")
    }
    else {
        topics.push(userInput);
        buttonMaker();
    }
    // if (!(userInput in topics)){
    //     alert("No doubles please")
    // }
});
$(document).on("click", ".select-btn", runApp)
buttonMaker();

























// });