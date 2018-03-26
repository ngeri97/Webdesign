$(function() {
   $('#searchform').submit(function() {
        var searchterms = $("#searchterms").val();
        getTweets(searchterms);
        return false;
    }); 
});

function getTweets(searchterm) {
    $.ajax({
        url: "/getTwitter",
        data: {
            twitter_name: searchterm
        }
    }).done(function(data) {
        $('#results').html(data);
    });
}