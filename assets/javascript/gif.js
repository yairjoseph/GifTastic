// console.log( "ready!" );
// $( document ).ready(function() {
//api url and key
var topics = ["tesla", "pagani", "koenigsegg", "bmw", "apollo automobil", "mercedes-benz"];

function runApp() {
    var userInput = $(this).attr("data-topics");
    var apiKey = "zAEBPU2C4G4HZnkU4vAKHzuzQg0wS2UZ";
    var queryUrl = "https://api.giphy.com/v1/gifs/search?q=" + userInput +"&api_key=" + apiKey + "&limit=5";
    // https://api.giphy.com/v1/gifs/search?q=&api_key=zAEBPU2C4G4HZnkU4vAKHzuzQg0wS2UZ&limit=5
    // // ajax get call to request the query url
    
    $.ajax({
        url: queryUrl,
        method: "GET"
    })
        // After the data from the AJAX request comes back
        .then(function (response) {
            var searchDiv = $("<div class='searchDiv'>");
            var rating = response.data.rating;
            var pOne = $("<p>").text("Rating: " + rating);
            searchDiv.append(pOne);
            var imageUrl = response.data.images;

            // Creating and storing an image tag
            var image = $("<img>");

            // Setting the catImage src attribute to imageUrl
            image.attr("src", imageUrl);
            image.attr("alt", "image");
            searchDiv.append(image);


            // Prepending the catImage to the images div
            $("#imageReady").prepend(searchDiv);



        });
}

function buttonMaker() {
    $("#topicsBtn").empty()
    for (let i = 0; i < topics.length; i++) {
        var topicBtn = $("<button>").attr("data-topics", topics[i]);
        $("#topicsBtn").append(topicBtn);
        $(topicBtn).text(topics[i]);

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

buttonMaker();

//loop run through array
























// });