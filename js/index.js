//Gestion des animations
const icons = document.querySelectorAll(".icon");
for(let i = 0;i<icons.length;i++){
    icons[i].addEventListener('animationend',()=>{
    icons[i].classList ='icon animate__animated animate__bounce';
        icons[i].addEventListener('animationend',()=>{
        icons[i].classList ='icon animate__animated animate__bounce animate__delay-1s';
            icons[i].addEventListener('animationend',()=>{
                     for(let i = 0;i<3;i++){
                        icons[i].classList ='icon animate__animated animate__backOutLeft animate__delay-1s';
                     }
                     for(let i = 3;i<icons.length;i++){
                        icons[i].classList ='icon animate__animated animate__backOutRight animate__delay-1s';
                     }
            });
        });
    });
}