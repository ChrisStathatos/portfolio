//Affichage des dynamique des projets
var lesProjets;
function afficherProjet(projet,index){
    fetch("../data/projets.json")
    .then(reponse => reponse.json())
    .then(data => lesProjets = data)
    .then(lesProjets =>{
        document.querySelector("#popUp").classList = "";
        document.querySelector("#popUp h1").innerHTML = lesProjets.projets[index].nom;
        document.querySelector("#popUp img").src = lesProjets.projets[index].image;
        document.querySelector("#popUp p").innerHTML = lesProjets.projets[index].description;
        document.querySelector("#popUp a").href = lesProjets.projets[index].url;
    })
}

