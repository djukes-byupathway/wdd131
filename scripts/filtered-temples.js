const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");
const homeLink = document.querySelector('#homelink');
const smallLink = document.querySelector('#smalllink');
const largeLink = document.querySelector('#largelink');
const oldLink = document.querySelector('#oldlink');
const newLink = document.querySelector('#newlink');

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
        templeName: "Los Angeles California",
        location: "Los Angeles, California",
        dedicated: "1951, September 22",
        area: 190614,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/los-angeles-california-temple/los-angeles-california-temple-67183.jpg"
    },
    {
        templeName: "Toronto Ontario",
        location: "Toronto, Ontario, Canada",
        dedicated: "1987, October 10",
        area: 55558,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/toronto-ontario-temple/toronto-ontario-temple-57422.jpg"
    },
    {
        templeName: "Dallas Texas",
        location: "Dallas, Texas",
        dedicated: "1983, January 22",
        area: 44207,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/dallas-texas-temple/dallas-texas-temple-55240.jpg"
    }
];


//call a function to display cards
displayCards(temples);

//menu hamburger
hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

//home
homeLink.addEventListener("click", () => {
    displayCards(temples);
    homeLink.classList = "active";
    newLink.classList = "";
    oldLink.classList = "";
    largeLink.classList = "";
    smallLink.classList = "";
});

//old  dedicated before 1900

oldLink.addEventListener("click", () => {
    displayCards(temples.filter(
        temple => temple.dedicated < "1900, January, 1"));
    homeLink.classList = "";
    newLink.classList = "";
    oldLink.classList = "active";
    largeLink.classList = "";
    smallLink.classList = "";
});


//new dedicated after 2000

newLink.addEventListener("click", () => {
    displayCards(temples.filter(
        temple => temple.dedicated >= "2001"));
    homeLink.classList = "";
    newLink.classList = "active";
    oldLink.classList = "";
    largeLink.classList = "";
    smallLink.classList = "";
});

//large area > 90000

largeLink.addEventListener("click", () => {
    displayCards(
        temples.filter(
            temple => temple.area > 90000));
    homeLink.classList = "";
    newLink.classList = "";
    oldLink.classList = "";
    largeLink.classList = "active";
    smallLink.classList = "";
});

//small area < 10000
smallLink.addEventListener("click", () => {
    displayCards(
        temples.filter(
            temple => temple.area < 10000));
    homeLink.classList = "";
    newLink.classList = "";
    oldLink.classList = "";
    largeLink.classList = "";
    smallLink.classList = "active";
});

//function for adding cards based on passed in array
function displayCards(templeList) {
    //empty container of temple cards
    document.querySelector(".container").innerHTML = "";

    for (let i = 0; i < templeList.length; i++) {

        var newTemple = templeList[i]

        var newTempleCard = document.createElement('div');
        newTempleCard.className = 'card';
        //add heading to card
        var newTempleHeading = document.createElement('h2');
        newTempleHeading.innerHTML = newTemple.templeName;
        newTempleCard.appendChild(newTempleHeading);

        //add location 
        var newLocationLabel = document.createElement('span');
        newLocationLabel.className = "label";
        newLocationLabel.innerHTML = 'Location: ';
        newTempleCard.appendChild(newLocationLabel);
        var newLocation = document.createElement('span');
        newLocation.className = "value";
        newLocation.innerHTML = newTemple.location;
        newTempleCard.appendChild(newLocation);


        //add dedication
        var newDedicationLabel = document.createElement('span');
        newDedicationLabel.className = "label";
        newDedicationLabel.innerHTML = 'Dedicated: ';
        newTempleCard.appendChild(newDedicationLabel);
        var newDedication = document.createElement('span');
        newDedication.className = "value";
        newDedication.innerHTML = newTemple.dedicated;
        newTempleCard.appendChild(newDedication);

        //add size
        var newSizeLabel = document.createElement('span');
        newSizeLabel.className = "label";
        newSizeLabel.innerHTML = 'Size: ';
        newTempleCard.appendChild(newSizeLabel);
        var newSize = document.createElement('span');
        newSize.className = "value";
        var somenum = newTemple.area;
        newSize.innerHTML = (somenum.toString());
        newTempleCard.appendChild(newSize);

        //add img
        var newTempleImage = document.createElement('img');
        newTempleImage.src = newTemple.imageUrl;
        newTempleImage.alt = newTemple.templeName;
        newTempleImage.loading = 'lazy';
        newTempleCard.appendChild(newTempleImage);


        document.getElementById('cont').appendChild(newTempleCard);


    }



};