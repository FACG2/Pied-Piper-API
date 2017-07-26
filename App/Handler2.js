

(function() {
    var movieMainList={};
    var rate=6;
  function fetchMoviesData(SearchQuery,cb) {

      // var myInput = document.getElementsByClassName("search-query")[0].value;
      // var url = "https://api.themoviedb.org/3/search/movie?year=2016&include_adult=false&page=1&query=split&language=en-US&api_key=bfd5274ec186e4bf6e99f1d3b76cdb1b";
      // formS.addEventListener('submit', (event) => {
      // event.preventDefault();
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var data = JSON.parse(xhr.responseText);
      cb(data);
    };
    // console.log(movieMainList);
    }
    xhr.open("GET","https://api.themoviedb.org/3/search/movie?api_key=bfd5274ec186e4bf6e99f1d3b76cdb1b&language=en-US&query=" +SearchQuery.replace(/ /g, '+') + "&page=1&include_adult=false", true);
    xhr.send();
// });
}


function moviesList(data , cb2){
  var bigList= data.results.map(function(movie) {
    return {'title':movie.title , 'id':movie.id ,  'poster_path':'http://image.tmdb.org/t/p/w640/'+ movie.poster_path , 'vote' : movie.vote_average , 'overview': movie.overview  , 'date': movie.release_date};
  });

  var filteredMovies = bigList.filter(function(movie){
    if(movie.vote > rate)
    return movie ;

  });
  cb2(filteredMovies);
  return filteredMovies;

}
// var obj= fetchMoviesData('split');

// fetchMoviesData('split',function(tst){ ///////// callback 1
//   console.log(moviesList(tst));
// });



  function FetchMovieCastList(id) {
    var url="http://api.themoviedb.org/3/movie/" + id + "/casts?api_key=bfd5274ec186e4bf6e99f1d3b76cdb1b";
    var xhr = new XMLHttpRequest();
        xhr.onload= function() {
          if (this.readyState == 4 && this.status == 200){}
          //console.log(castData(JSON.parse(xhr.responseText)));
        };
        xhr.open("GET", url,true);
        xhr.send();
  }
  function castData(data) {
    return data.cast.map(function(actor) {
      return {'name':actor.name , 'char':actor.character ,  'avatar_url':'http://image.tmdb.org/t/p/w640/'+ actor.profile_path , 'profil_url': 'https://www.themoviedb.org/person/'+actor.id};
    });
  }


  // // fetchMoviesData('split',function(tst){ ///////// callback 1
  // //   console.log(moviesList(tst));
  // // });



  //   fetchMoviesData('split',function(tst){ ///////// callback 1
  //     moviesList(tst, function(test){
  //       test.map(function(item){
  //        // console.log(item.id);
  //       });
  //     });
  //   });



// FetchMovieCastList(121);

//youtube 
function fetchMoviestrailer(SearchQuery) {
  var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        var data = JSON.parse(xhr.responseText);
        // cb(data);

        console.log(data);
      };
      // console.log(movieMainList);
      }
      xhr.open("GET","https://www.googleapis.com/youtube/v3/search?q="+ SearchQuery.replace(/ /g, '%20') + "movie%20trialer&maxResults=1&part=snippet&key=AIzaSyAF-Dke9dKBWXWuIKFkaIaEtgxtkLiftiI", true);
      xhr.send();

}

fetchMoviestrailer('split');

//https://www.youtube.com/watch?v=

// function getTrailer(data){
//   var video = 'https://www.youtube.com/watch?v='+data.items['0'].id.videoId;
//  return video;

// }



})();


//"https://www.googleapis.com/youtube/v3/search?q="+ SearchQuery.replace(/ /g, '%20') + "&maxResults=3&part=snippet&key=AIzaSyAF-Dke9dKBWXWuIKFkaIaEtgxtkLiftiI"