


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


function moviesList(data){
  var bigList= data.results.map(function(movie) {
    return {'title':movie.title , 'id':movie.id ,  'poster_path':'http://image.tmdb.org/t/p/w640/'+ movie.poster_path , 'vote' : movie.vote_average , 'overview': movie.overview  , 'date': movie.release_date};
  });

  var filteredMovies = bigList.filter(function(movie){
    if(movie.vote > rate)
    return movie ;

  });
  return filteredMovies;

}
// var obj= fetchMoviesData('split');

fetchMoviesData('split',function(tst){
  console.log(moviesList(tst));
});




  var castList=document.getElementById('castList');
  var id=215;  /////// movie.id

  function FetchMovieCastList(id) {
      var url="http://api.themoviedb.org/3/movie/" + id + "/casts?api_key=bfd5274ec186e4bf6e99f1d3b76cdb1b";
      console.log('befor xhr Request');

      xhr_request(url , function(data) {
        renderCastList(castData(data));
        console.log(castData(data));
      });

    }

  FetchMovieCastList(747);


  function castData(data) {
    return data.cast.map(function(actor) {
      return {'id':actor.cast_id,'name':actor.name , 'char':actor.character ,  'avatar_url':'http://image.tmdb.org/t/p/w640/'+ actor.profile_path , 'profil_url': 'https://www.themoviedb.org/person/'+actor.id};
    });
  }


  function xhr_request(url ,func ){
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange= function() {
            if (this.readyState == 4 && this.status == 200){
              var data=JSON.parse(this.responseText);
              func(data);
            }
        };

        xhr.open("GET", url,true);
        xhr.send();

  }

  function renderCastList(castedData){

      var castListContainer = document.getElementById('castLis');
      var list=document.createElement('ul');
      castedData.map(function(actor) {
          var item=document.createElement('li');
            item.id = actor.id;
          var img=document.createElement('img');
            img.classList.add("actorPhoto");
            img.src =actor.avatar_url;
          var actorName=document.createElement('span');
            actorName.textContent=actor.name;
            actorName.classList.add("actorName");
          var actorRoll=document.createElement('span');
            actorRoll.textContent=actor.char;
            actorRoll.classList.add("actorRoll");
          var profilLink=document.createElement('a');
            profilLink.href=actor.profil_url;



            profilLink.appendChild(img);
            profilLink.appendChild(actorName);
            profilLink.appendChild(actorRoll);
            item.appendChild(profilLink);
            list.appendChild(item);
          castListContainer.appendChild(list);
      })

    }



FetchMovieCastList(121);


})();
