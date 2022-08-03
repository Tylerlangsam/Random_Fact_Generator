const bttn = document.querySelector("#random-bttn");
const catURL = "https:///catfact.ninja/fact";
bttn.addEventListener("click", handleClick);

function handleClick(){
    // Everytime the button is clicked it will send a REQUEST to the API
    fetch(catURL).then((response) => response.json()).then((catFactObject) => {
        console.log(catFactObject["fact"])
        const whiteBox = document.querySelector(".random-fact-div");
        whiteBox.textContent = catFactObject["fact"];
    })


    console.log("waiting...");
}




