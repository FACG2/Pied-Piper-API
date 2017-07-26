(function() {

  var castList=document.getElementById('castList');
  var id=215;



  function FetchMovieCastList(id) {
    var url="http://api.themoviedb.org/3/movie/" + id + "/casts?api_key=bfd5274ec186e4bf6e99f1d3b76cdb1b";
    var xhr = new XMLHttpRequest();
        xhr.onload= function() {
          if (this.readyState == 4 && this.status == 200)
          console.log(castData(JSON.parse(xhr.responseText)));
        };
        xhr.open("GET", url,true);
        xhr.send();
  }
  function castData(data) {
    return data.cast.map(function(actor) {
      return {'name':actor.name , 'char':actor.character ,  'avatar_url':'http://image.tmdb.org/t/p/w640/'+ actor.profile_path , 'profil_url': 'https://www.themoviedb.org/person/'+actor.id};
    });
  }



FetchMovieCastList(121);
//images Root Directory : http://image.tmdb.org/t/p/w640/{image Hash name.jpg}

//it should be tested





  // function updateCastList(data){
  //     var newData=Object.assign({},data);
  //     var actorElement =document.createElement('div');
  //     var actorSpane =
  //     newData.cast.map(function(actor) {
  //         actor
  //
  //
  //
  //     })
  //
  // }


})()
