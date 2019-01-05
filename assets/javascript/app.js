var artistArray = ["Dave Matthews", "Pearl Jam", "Audioslave", "Coldplay", "Logic"];

var debugResults;


for (let i = 0; i < artistArray.length; i++) {
    var buttonChoice = $("<button>");
    buttonChoice.attr("data-musician", artistArray[i]);
    buttonChoice.text(artistArray[i]);
    $("#multipleButtons").append(buttonChoice);
    // buttonChoice.on('click', this.checkAnswers.bind(this));
};

$("button").on("click", function () {
    var artist = $(this).attr("data-musician");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        artist + "&api_key=0PnKs137lj6tKJnxrZEJjxTYQUrwztWq&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        // Step 1: Run this file, click a button, and see what the response object looks like in the browser's console.
        // Open up the data key, then open up the 0th, element. Study the keys and how the JSON is structured.

        console.log(response);

        // Step 2: since the image information is inside of the data key,
        // make a variable named results and set it equal to response.data
        var results = response.data;
        // =============== put step 2 in between these dashes ==================

        // ========================

        for (var i = 0; i < results.length; i++) {
            console.log(results[i]);
            debugResults = results[i];
            // Step 3: uncomment the for loop above and the closing curly bracket below.
            // Make a div with jQuery and store it in a variable named artistDiv.
            var artistDiv = $('<div>');
            // Make a paragraph tag with jQuery and store it in a variable named p.
            var p = $('<p>');
            // Set the inner text of the paragraph to the rating of the image in results[i].
            p.text(results[i].rating);
            // Make an image tag with jQuery and store it in a variable named artistImage.
            var artistImage = $('<img>');
            // Set the image's src to results[i]'s fixed_height.url.
            artistImage.attr('src', results[i].images.fixed_height.url);
            // Append the p variable to the artistDiv variable.
            artistDiv.append(p);
            // Append the artistImage variable to the artistDiv variable.
            // artistDiv.append(artistImage);
            artistImage.appendTo(artistDiv);
            // Prepend the artistDiv variable to the element with an id of gifs-appear-here.
            $('#gifs-appear-here').prepend(artistDiv);
            // artistDiv.prependTo($('#gifs-appear-here'));
            // ============= put step 3 in between these dashes ======================

            // ==================================
        }

    });
});