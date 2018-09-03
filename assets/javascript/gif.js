// console.log( "ready!" );
// $( document ).ready(function() {
//api url and key
var topics = ["tesla", "pagani", "koenigsegg", "bmw", "apollo automobil", "mercedes-benz"];
var apiKey = "zAEBPU2C4G4HZnkU4vAKHzuzQg0wS2UZ";

// var queryUrl = "https://api.giphy.com/v1/gifs/search?q=" + userInput "&api_key=" + apiKey +"&limit=5";    
// var userInput = ;
// var imgUrl + userInput

// ajax get call to request the query url
// $.ajax({
//     url: queryUrl,
//     method: "GET"
// })
for (let i = 0; i < topics.length; i++) {
    // var imgUrl = response.data[i].images
    var topicBtn = $("<button>").attr("data-topics", topics[i]);
    // var topicImg = $("<img>");
    $("#topicsBtn").append(topicBtn);
    $(topicBtn).text(topics[i]);
    // topicBtn.append(topicImg);
    // topicImg.attr("src", imgUrl)

}

$("#search1").on("click", function (e) {
    e.preventDefault();
    var userInput = $("#userInput").val();
    console.log(userInput)
    var inputArray = [];
    inputArray.push(userInput);
    console.log(inputArray);
    var completeArray = inputArray.concat(topics);
    console.log(completeArray)
    for (let i = 0; i < completeArray.length; i++) {
        // var imgUrl = response.data[i].images
        
        var completeBtn = $("<button>").attr("data-topics", completeArray[i]);
        // var topicImg = $("<img>");
        $("#topicsBtn").append(completeBtn);
        
        $(completeBtn).text(completeArray[i]);
    
}
});
//loop run through array
























// });