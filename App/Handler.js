(function() {

  var castList=document.getElementById('castList');




function FetchMovieCastList(id) {
    var url="http://api.themoviedb.org/3/movie/" + id + "/casts?api_key=bfd5274ec186e4bf6e99f1d3b76cdb1b";
    console.log('befor xhr Request');

    xhr_request(url , function(data) {
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


module.exports = {
  FetchMovieCastList,
  castData,
  xhr_request
}









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
