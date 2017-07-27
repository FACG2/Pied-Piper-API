
var SQ="split";

var onSubmit=document.getElementById('submit');


  onSubmit.addEventListener('click',function(event){
    var inpQuery=document.getElementById("searchQ").value;
    event.preventDefault();
    fetchMoviesData(inpQuery);


  });
  var SQ="";
  var movieMainList={};
  var rate=6;

  function fetchMoviestrailer(SearchQuery) {

    var url="https://www.googleapis.com/youtube/v3/search?q="+ SearchQuery.replace(/ /g, '%20') + "movie%20trialer&maxResults=1&part=snippet&key=AIzaSyAF-Dke9dKBWXWuIKFkaIaEtgxtkLiftiI";

    xhr_request(url , function(data) {
      updateTrailerList(getTrailer(data));
    })

  }
  function fetchMoviesData(SearchQuery) {///
      console.log("SearcQy",SearchQuery);
      console.log(SQ);
      var url="https://api.themoviedb.org/3/search/movie?api_key=bfd5274ec186e4bf6e99f1d3b76cdb1b&language=en-US&query=" +SearchQuery.replace(/ /g, '+') + "&page=1&include_adult=false";
        xhr_request(url ,function(data) {
            document.getElementById('moviesContainer').innerHTML="";
            updateMovieResults(moviesList(data));
        })
      }
  function FetchMovieCastList(id) {
              var url="http://api.themoviedb.org/3/movie/" + id + "/casts?api_key=bfd5274ec186e4bf6e99f1d3b76cdb1b";
              xhr_request(url , function(data) {

                renderCastList(castData(data));


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

  function updateTrailerList(vidsUrl) {
    var trailerContainer=document.getElementById('trailerContainer');
    var video=document.createElement('iframe');
    video.src=vidsUrl;
    video.height= '450';
    video.width= '620';
    trailerContainer.appendChild(video);
  }
  function updateMovieDesc(movie){

            var DescriptionCont=document.getElementById('descCon');
            var descrip=document.createElement('p');
            descrip.textContent=movie.overview;
            DescriptionCont.appendChild(descrip);

            var title=document.createElement('span');
            title.classList.add('title');
            title.textContent=movie.title;
            DescriptionCont.appendChild(title);

            var rate=document.createElement('span');
            rate.classList.add('rate');
            rate.textContent=movie.vote;
            DescriptionCont.appendChild(rate);

            var dateR=document.createElement('span');
            dateR.classList.add('Release');
            dateR.textContent=movie.date;

            DescriptionCont.appendChild(dateR);
  }
  function renderCastList(castedData){

          var castListContainer = document.getElementById('castLis');
          var list=document.createElement('ul');
          actorCoun=0;
          castedData.map(function(actor) {
            if(actorCoun < 11){
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
              actorCoun++;
          }})

        }
  function updateMovieResults(data){//Render page
        var moviesContainer=document.getElementById('moviesContainer');
        data.map(function(movie) {
              var movieBlock=document.createElement('div');
              var title =document.createElement('span');
              title.classList.add('mTitle');
              var relDate=document.createElement('span');
              relDate.classList.add('relDate');
              movieBlock.classList.add('movieBlock');//movie block class
              movieBlock.style.background = "url('"+movie.poster_path+"')";
              title.textContent=movie.title;
              relDate.textContent=movie.date.substring(0, 4);

              movieBlock.appendChild(title);
              movieBlock.appendChild(relDate);

              movieBlock.addEventListener("click", function() {
                moviesContainer.innerHTML="";
                updateMovieDesc(movie);
                FetchMovieCastList(movie.id);
                fetchMoviestrailer(movie.title);

              });

                moviesContainer.appendChild(movieBlock);

      })

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
  function getTrailer(data){
      var video = 'https://www.youtube.com/watch?v='+data.items['0'].id.videoId;
     return video;
  }
  function castData(data) {
        return data.cast.map(function(actor) {
          return {'id':actor.cast_id,'name':actor.name , 'char':actor.character ,  'avatar_url':'http://image.tmdb.org/t/p/w640/'+ actor.profile_path , 'profil_url': 'https://www.themoviedb.org/person/'+actor.id};
        });
  }
