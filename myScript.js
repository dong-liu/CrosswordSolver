
$(function(){
    
    // read the web page http://www.onlinecrosswords.net/printable-daily-crosswords-1.php, and get the image for the today's crossword
    var requestURL = 'http://www.onlinecrosswords.net/printable-daily-crosswords-1.php';
    
    $.get(requestURL, function(response){
        console.log(response);    
        $('#result').text(response);

        // parse meta tag to get today's crossword puzzle image
        var boardImage;
        var parsed = $.parseHTML(response);
        $(parsed).filter(function(){
            if ($(this).attr( "property" ) === "og:image")
                boardImage = $(this).attr("content");
        });
        $('#puzzle_image').text(boardImage);
        
        // parse the <ul> tag to get the clues for today's crossword puzzle
        var items = $(parsed).find("ul");
        console.log(items);
        
        var clue_across, clue_down;
        $(items).each(function(index) {
            if (index === 0){
                clue_across = $(this).text();
            } else {
                clue_down += $(this).text();
            }

        });
    })  
        .fail(function() {
            alert( "error" );
    });   
})
