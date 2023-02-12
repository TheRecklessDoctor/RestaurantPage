
const render = () => {

    const content = document.getElementById("content");

    let homeContent = document.createElement("div");
    homeContent.classList.add("homeContent");
    homeContent.classList.add("infoContent");

    let intro = document.createElement("p");
    intro.textContent = "Welcome to Dayan's sushi.";

    let introSub = document.createElement("p");
    introSub.textContent = "World famous for its delicacy and elegance!";

    homeContent.appendChild(intro);
    homeContent.appendChild(introSub);

    content.appendChild(homeContent);

    content.style.display = "flex";
    content.style.justifyContent = "center";
    content.style.alignItems = "center";

    homeContent.style.display = "flex";
    homeContent.style.flexDirection = "column";
    homeContent.style.justifyContent = "center";
    homeContent.style.alignItems = "center";
    homeContent.style.backgroundColor = "white";
    homeContent.style.padding = "25px";

    intro.style.fontSize = "70px";
    intro.style.color = "black";

    introSub.style.fontSize = "30px";
    introSub.style.color = "black";




}

export { render as renderHome};