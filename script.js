//seleccion de elementos html
const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
const playerLives = 5;

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
        //unir a section
        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);
    });
}

cardGenerator();