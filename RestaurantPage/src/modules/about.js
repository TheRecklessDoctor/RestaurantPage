
function about() {

    const content = document.getElementById("content");

    let aboutContainer = document.createElement("div");
    aboutContainer.classList.add("aboutContainer");
    aboutContainer.classList.add("infoContent")

    let title = document.createElement("h1")
    title.textContent = "About"

    let text = document.createElement("p");
    text.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    
    aboutContainer.style.display = "flex"
    aboutContainer.style.flexDirection = "column"
    aboutContainer.style.justifyContent = "center"
    aboutContainer.style.alignItems = "center"
    aboutContainer.style.rowGap = "10px"
    aboutContainer.style.backgroundColor = "white"
    aboutContainer.style.padding = "25px"
    aboutContainer.style.width = "600px"
    aboutContainer.style.height = "250px"

    aboutContainer.appendChild(title)
    aboutContainer.appendChild(text);

    content.style.display = "flex"
    content.style.justifyContent = "center"
    content.style.alignItems = "center"
    

    content.appendChild(aboutContainer)

    
}


export {about as renderAbout}