$(function(){
  alert("document ready");

  $('#searchform').submit(function(){
    var searchterms = $("#searchterms").val();
    getResultsFromOMDB(searchterms);
    return false;
  });
});
function getResultsFromOMDB(searchterms){
  var url = "http://www.omdbapi.com/?i=tt3896198&apikey=ef7d4dac&s=" + searchterms;
  $.getJSON(url, function(jsondata){
    prettyPrintJSON(jsondata);
  });

}
  function prettyPrintJSON(jsondata){
    var pretty = JSON.stringify(jsondata, null, 4);
    $('#resultsbox').append("<li>" + pretty + "</li>");
}
