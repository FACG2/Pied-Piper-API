   
(function() {
    
    var inpQuery=document.getElementById("descriptionI");
    var submit=document.getElementById("submit");
    var formS=document.getElementById("seach-form");
    var description0=""
     var url = "https://api.themoviedb.org/3/search/movie?year=2016&include_adult=false&page=1&query=split&language=en-US&api_key=bfd5274ec186e4bf6e99f1d3b76cdb1b";
    
        //console.log(data);
        
        //submit.addEventListener('click', ()=>{
          //console.log(inpQuery[0].value);
        //})

        formS.addEventListener('submit', (event) => {
        event.preventDefault();
  
        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function() {

      if (xhr.readyState == 4 && xhr.status == 200) {

        var data = JSON.parse(xhr.responseText)
        //     // console.log(data.results[0]);
        // var description = event.target;
        // description0 = description.firstElementChild.value
      };

      }


      xhr.open("GET","https://api.themoviedb.org/3/search/movie?api_key=bfd5274ec186e4bf6e99f1d3b76cdb1b&language=en-US&query=" +inpQuery.value.replace(/ /g, '+') + "&page=1&include_adult=false", true);
      xhr.send();

      console.log(inpQuery.value)
    

});
})();

// (function() {
//     var xhr = new XMLHttpRequest();
//     var url = "http://api.themoviedb.org/3/movie/338139/casts?api_key=bfd5274ec186e4bf6e99f1d3b76cdb1b";
//     xhr.onreadystatechange = function() {
//       if (xhr.readyState == 4 && xhr.status == 200) {
//
//         var data = JSON.parse(xhr.responseText)
//         console.log(data);
//       }}
//       xhr.open("GET", url, true);
//       xhr.send();
//
//
//
// })();
//
//"http://api.giphy.com/v1/gifs/search?q="+ myInput.replace(/ /g , '+') + "&api_key=57d2a87757c84c429f37713f2339c68a&limit=20"