
function render() {
    
    console.log("done");
    const content = document.getElementById("content");

    let header = document.createElement("div");
    header.classList.add("header");

    header.style.position = "fixed";
    header.style.top = "0";
    header.style.width = "100%";
    header.style.height = "75px";
    header.style.padding = "10px 35px 10px 35px";
    header.style.display = "flex";
    header.style.alignItems = "center";
    header.style.justifyContent = "space-between";
    // header.style.borderBottom = "5px solid black";



    let homeButton = document.createElement("button");
    homeButton.textContent = "Home";
    homeButton.classList.add("header-button");
    homeButton.setAttribute("id","homeButton");

    let menuButton = document.createElement("button");
    menuButton.textContent = "Menu";
    menuButton.classList.add("header-button");
    menuButton.setAttribute("id","menuButton");

    let aboutButton = document.createElement("button");
    aboutButton.textContent = "About";
    aboutButton.classList.add("header-button");
    aboutButton.setAttribute("id","aboutButton");

    homeButton.style.backgroundColor = "white";
    menuButton.style.backgroundColor = "white";
    aboutButton.style.backgroundColor = "white";


    header.appendChild(homeButton)
    header.appendChild(menuButton);
    header.appendChild(aboutButton);


    

    content.appendChild(header);




    


}


export {render as renderHeader};