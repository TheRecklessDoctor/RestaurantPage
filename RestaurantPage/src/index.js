console.log('setup');

import { renderHome } from "./modules/home";
import { renderHeader } from "./modules/header";
import {renderMenu} from "./modules/menu";
import { renderAbout } from "./modules/about";



const onLoad = () => {
    renderHome();
    renderHeader();
}

const removeChild = (className) => {
    const content = document.querySelectorAll(`.${className}`)
    content.forEach((element) => {
        element.remove();
    })
}


window.onload = onLoad();

const homeButton = document.querySelector("#homeButton");
homeButton.addEventListener("click", (event) =>{
 
        removeChild("infoContent");
        renderHome();

})

const menuButton = document.querySelector("#menuButton");
menuButton.addEventListener("click", (event) =>{
 
        removeChild("infoContent");
        renderMenu();
        
})

const aboutButton = document.querySelector("#aboutButton");
aboutButton.addEventListener("click", (event) => {
    
    removeChild("infoContent");
    renderAbout();
})


