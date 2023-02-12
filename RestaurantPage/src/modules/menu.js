
function menu() {

    const content = document.getElementById("content")
    
    content.style.display = "flex"
    content.style.justifyContent = "center";
    content.style.alignItems = "center";

    let menu = document.createElement("div");
    menu.classList.add("menu");
    menu.classList.add("infoContent")

    menu.style.backgroundColor = "white";
    menu.style.display = "flex";
    menu.style.flexDirection = "column";
    menu.style.justifyContent = "space-between";
    menu.style.rowGap = "5px";
    menu.style.padding = "40px";

    let itemOne = document.createElement("h2");
    itemOne.textContent = "Lorem ipsum dolor sit amet";

    let itemOne_desc = document.createElement("p");
    itemOne_desc.textContent = "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    
    let itemTwo = document.createElement("h2");
    itemTwo.textContent = "Lorem ipsum dolor sit amet";

    let itemTwo_desc = document.createElement("p");
    itemTwo_desc.textContent = "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"

    
    menu.appendChild(itemOne);
    menu.appendChild(itemOne_desc);
    menu.appendChild(itemTwo);
    menu.appendChild(itemTwo_desc);
    content.appendChild(menu);



}

export {menu as renderMenu}