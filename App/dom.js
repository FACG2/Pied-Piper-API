(function(){
var dataMod = require("./Handler.js");

function renderCastList(castedData){

    var castListContainer = document.body.getElementById('castLis');
    var list=document.body.createElement('ul');
    var item=document.body.createElement('li');
    item.id = castedData.id;
    var img=document.body.createElement('img');
    img.src =castedData.avatar_url;
    var actorName=document.body.createElement('span');
    actorName.textContent=castedData.name;
    var actorRoll=document.body.createElement('span');
    actorRoll.textContent=castedData.character;
    var profilLink=document.body.createElement('a');
    profilLink.herf=castedData.avatar_url;

    profilLink.appendChild(img);
    profilLink.appendChild(actorName);
    profilLink.appendChild(actorRoll);
    item.appendChild(profilLink);

    list.appendChild(item);

    castListContainer.appendChild(list);
    }

})()
