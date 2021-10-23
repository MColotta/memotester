//seleccion de elementos html
const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
let playerLives = 5;

//linkear variable con span
playerLivesCount.textContent = playerLives;

//arrow function para generar un array con las imgs
const getData = () => [
    { imgSrc: "./img/blackAlbum.jpg", name: "blackAlbum" },
    { imgSrc: "./img/justice.jpg", name: "justice" },
    { imgSrc: "./img/kill.jpg", name: "kill" },
    { imgSrc: "./img/lightning.jpg", name: "lightning" },
    { imgSrc: "./img/magnetic.jpg", name: "magnetic" },
    { imgSrc: "./img/puppets.jpg", name: "puppets" },
    { imgSrc: "./img/selfDestruct.jpg", name: "selfDestruct" },
    { imgSrc: "./img/stAnger.jpg", name: "stAnger" },
    { imgSrc: "./img/blackAlbum.jpg", name: "blackAlbum" },
    { imgSrc: "./img/justice.jpg", name: "justice" },
    { imgSrc: "./img/kill.jpg", name: "kill" },
    { imgSrc: "./img/lightning.jpg", name: "lightning" },
    { imgSrc: "./img/magnetic.jpg", name: "magnetic" },
    { imgSrc: "./img/puppets.jpg", name: "puppets" },
    { imgSrc: "./img/selfDestruct.jpg", name: "selfDestruct" },
    { imgSrc: "./img/stAnger.jpg", name: "stAnger" }
];

//randomizer
const randomize = () => {
    const cardData = getData();
    cardData.sort(() => Math.random() -0.5);
    return cardData;
};

//funcion para generar las cartas en el html
const cardGenerator = () => {
    const cardData = randomize();
    //generar elementos html
    cardData.forEach((item) => {
        const card = document.createElement("div");
        const face = document.createElement("img");
        const back = document.createElement("div");
        card.classList = "card";
        face.classList = "face";
        back.classList = "back";
        //unir img a cartas
        face.src = item.imgSrc;
        card.setAttribute("name", item.name);
        //unir a section
        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);

        card.addEventListener("click", (e) => {
            card.classList.toggle("toggleCard");
            checkCards(e);
        })
    });
}

//Check Cards
const checkCards = (e) => {
    console.log(e);
    const clickedCard = e.target;
    clickedCard.classList.add("flipped");
    const flippedCards = document.querySelectorAll(".flipped");
    const toggleCard = document.querySelectorAll(".toggleCard");
    console.log(flippedCards);
    //Comparar las cartas
    if(flippedCards.length === 2){
        if (flippedCards[0].getAttribute("name") === flippedCards[1].getAttribute("name")){
            console.log("match");
            flippedCards.forEach((card) => {
                card.classList.remove("flipped");
                card.style.pointerEvents = "none";
            })
        }else{
            console.log("wrong");
            flippedCards.forEach((card) => {
                card.classList.remove("flipped");
                setTimeout(() => card.classList.remove("toggleCard"), 1000);
            });
            playerLives--;
            playerLivesCount.textContent = playerLives;
            if(playerLives === 0){
                restart("Perdiste mostre");
            }
        }
    }
    //Chequear si ganaste
    if(toggleCard.length === 16){
        restart("¡Ganaste mostre!");
    }
};

//Recargar después de perder
const restart = (text) => {
    let cardData = randomize();
    let faces = document.querySelectorAll(".face");
    let cards = document.querySelectorAll(".card");
    section.style.pointerEvents = "none";
    cardData.forEach((item, index) => {
        cards[index].classList.remove("toggleCard");
        //Randomize
        setTimeout(() => {
            cards[index].style.pointerEvents = "all";
            faces[index].src = item.imgSrc;
            cards[index].setAttribute("name", item.name);
            section.style.pointerEvents = "all";
        }, 1000);
    });
    playerLives = 5;
    playerLivesCount.textContent = playerLives;
    setTimeout(() => window.alert(text), 100);
};

cardGenerator();