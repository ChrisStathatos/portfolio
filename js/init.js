//Page projets
var projets = document.getElementsByClassName("projet");
for (let i = 0; i < projets.length-1; i++) {
    projets[i].addEventListener('mousedown',()=>{
    afficherProjet(projets[i],i);

    },true)
}
    document.getElementById("global").addEventListener('mousedown',()=>{
        if(document.querySelector("#popUp").classList ==""){
            if(event.target.id=="global"){
                document.querySelector("#popUp").classList ="display"
            }
        } 
    },true);


