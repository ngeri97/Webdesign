$(function(){
  alert("document ready");

  $('#searchform').submit(function(){
    var searchterms = $("#searchterms").val();
    getResultsFromOMDB(searchterms);
    return false;
  });
});
function getResultsFromOMDB(searchterms){
  var url = "http://www.omdbapi.com/?i=tt3896198&apikey=ef7d4dac&s=\"" + searchterms + "\"";
  console.log(url);
  $.getJSON(url, function(jsondata){
    addResultTitles(jsondata);
  });

}
  function addResultTitles(jsondata){
    var htmlstring = "";
    for(var i=0; i<10; i++){
      console.log(jsondata.Search[i]);
      var title = jsondata.Search[i].Title + " " + jsondata.Search[i].Poster + " " + jsondata.Search[i].Year + " " + jsondata.Search[i].Type;
      htmlstring += "<li>" + title + "</li>";
    }

    $("#results").html(htmlstring);
}
