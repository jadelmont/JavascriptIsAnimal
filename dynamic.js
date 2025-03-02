const petsData = [
    {
        petName: "Stella",
        age: 7,
        weightInKilos: 24,
        breed: "Dalmation",
        pic: "images/stella.png"
    },
    {
        petName: "Cody",
        age: 8,
        weightInKilos: 22,
        breed: "Corgi",
        pic: "images/cody.png"
    },
    {
        petName: "Carmie",
        age: 2,
        weightInKilos: 11,
        breed: "Great Dane",
        pic: "images/carmie.png"
    },
    {
        petName: "Lucy",
        age: 4,
        weightInKilos: 35,
        breed: "Ball Python",
        pic: "images/lucy.png"
    },
    {
        petName: "Buhmie",
        age: 1,
        weightInKilos: 28,
        breed: "Bull-dog",
        pic: "images/buhmie.png"
    },
    {
        petName: "Copper",
        age: 3,
        weightInKilos: 30,
        breed: "Chuckwalla",
        pic: "images/copper.png"
    }
];


const showInfo = () => {
    // get a handle to the input field and get the value
    let petNumber = document.querySelector("#petNum").value;
    // the array is zero-based, so subtract 1
    petNumber = parseInt(petNumber) - 1;
    // get a handle to the paragraph
    let selectedPetInfo = document.querySelector(".selectedPetInfo");
    // get the correspoding petsData object
    let pet = petsData[petNumber];
    // set the information
    selectedPetInfo.textContent = `${pet.petName} is a ${pet.breed}
                                and is ${pet.age} years old.`;
    let petPic = document.querySelector(".selectedPetPic");
    // set the image
    petPic.src = pet.pic;
}


// JAVASCRIPT
// Get a handle to the petsInfo paragraph
let petsInfo = document.querySelector(".petsInfo");
// Add content by modifying the textContent property
petsInfo.textContent = `Welcome to our newest pet,
                        ${petsData[petsData.length - 1].petName} the
                        ${petsData[petsData.length - 1].breed}`;

let petsList = document.querySelector(".petsList");
let allPetsList = `<ol>`;
petsData.forEach((pet) => {
    allPetsList += `<li> ${pet.petName} the ${pet.breed}</li>`;
});
allPetsList += `</ol>`;

petsList.innerHTML = allPetsList;


