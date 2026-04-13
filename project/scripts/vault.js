//for hamburger 
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");
//found this blurp on google to identify if we are on the index page, totally using it
const path = window.location.pathname;
//for seeting footer elements
const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
// use the date object
const today = new Date();
const footer = document.querySelector('#foot');
//list of projects
const projects = [
    {
        name: "Dave Stinks at Painting Minis",
        target_release: "Winter 2026",
        system: "DnD",
        status: "In Development",
        description: "Series of short videos of Dave trying to figure out what the hell is going wrong with the paint, brush, or design of minis that stop him from wanted to finish."
    }, {
        name: "Valeigh",
        target_release: "Winter/Spring 2027",
        system: "DnD",
        status: "In Development",
        description: "Valeigh is a world of dichotomies. The hellish environment of decaying inner cities in magaically industrialize states juxtaposes with the lush green jungles and the happy folk who populate them. Will you bring these new lands to heel and spread the corruption of your home state, or will you embrace the lifestyle of the savages? "
    }, {
        name: "Dark World",
        target_release: "2028",
        system: "DnD",
        status: "Conceptual Development",
        description: "This world is vile, and an affront to true creation! An affront I say. THe Holy Council declares is so, Praise Remin, it does! We are not the childre of this world, we are the cure of the gods. The forces of evil created this vile orb, they broke the ruiles of eternity. Evil CREATED! This is the affront, my flock, this IS the affront! Praise Remin who found this abomination. Praise Dumul, praise Bengarl, praise Ebul, Praise Delriene, Praise Fossergrim, Praise Maygone. Praise all of the Holy Council of Gods for bringing us to this world to cure it. Raise your weapons, Raise your Cure!"
    }, {
        name: "Planet of the Orc",
        target_release: "2029",
        system: "DnD",
        status: "Planned",
        description: "Spoof off of the Planet of the Apes series of movies, only this time the setting is planing hopping adventurers are dropped into a world where Orc thanes lead northern European style civilizations against the Goblin Empire led by the Bugbear senators, expanded by hobgoblin centurians, supplied through citizen goblins whose industry is propped up by slave labor of the lower races, the elf, the dwarf, and the short lived, halflings and humans. Across the sea a grand civilization blossoms in the arid environment, Kobalds magically weaving together cities, pyramids, and massive monuments through their innate connection to aether."
    }, {
        name: "Seekers",
        target_release: "Spring 2030",
        system: "DnD",
        status: "Planned",
        description: "Plucked from your world by a mad wizard, given a simple ultimatum, find the Panthar of Harsed within 90 days, or die. Your party must band together, avoid deathly flora and fauna, make friends, and get your hands on that Panthar! This one can be great fun for DMs who want to poke at murder hobo parties, a little Suicide Squad action."
    },
];

// if home page, increment page views
if (path.includes('/index.html')) {
    storeValue();
};
// update footer elements
setFooterElements();
//if upcoming project page - add project cards
if (path.includes('/upcoming.html')) {
    //call to function to add cards for each project
    addProjectsToPage(projects);   
};


//event listener for hamburger
hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});


function setFooterElements() {
    //set footer elements
    currentyear.innerHTML = `©<span>${today.getFullYear()}</span>`;
    lastModified.innerHTML = `Last Modification: <span>${document.lastModified}`;
    var newPara = document.createElement('p');
    const pageCnt = JSON.parse(localStorage.getItem("viewCount"));
    // newPara.innerHTML = 'Page Views:${document.lastModified}';
    //wPara.innerHTML = localStorage.getItem("ViewCount");
    newPara.innerHTML = `Page Views: ${pageCnt}`;
    footer.appendChild(newPara);
};

function storeValue() {
    var cnt = JSON.parse(localStorage.getItem("viewCount") || 0);
    cnt++;
    localStorage.setItem("viewCount", JSON.stringify(cnt));
};

//function for adding project via dom manipulation
function addProjectsToPage(projects) {
    //grab the projects div from the page
    //loop through the project list and create cards
    for (let i = 0; i < projects.length; i++) {
        //read each project into a variable
        var newProject = projects[i]
        // create new card
        var newCard = document.createElement('div');

        newCard.className = "proj-card";
        //populate card
        newCard.innerHTML = `
        <h4>${newProject.name}</h4>
        <span class="label">Game System: </span><span class="value">${newProject.system}</span>
        <span class="label">Target Release: </span><span class="value">${newProject.target_release}</span>
        <span class="label">Status:</span><span class="value">${newProject.status}</span>
        <span class="label">Description:</span>
        <p class="desc-val">${newProject.description}</p>

        `;

        document.getElementById("projects").appendChild(newCard);
    }
};

