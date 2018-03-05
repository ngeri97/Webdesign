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
    printJSON(jsondata);
  });

}
  function printJSON(jsondata){
    var normal = JSON.stringify(jsondata);
    $('#results').append("<li>" + normal + "</li>");
}
