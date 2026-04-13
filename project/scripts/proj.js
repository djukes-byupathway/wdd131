//list of projects
const projects = [
    {
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

//call to function to add cards for each project
addProjectsToPage(projects);

//function for adding project via dom manipulation
function addProjectsToPage(projects) {
    //grab the projects div from the page
    //loop through the project list and create cards
    for (let i = 0; i < projects.length; i++) {
        //read each project into a variable
        var newProject = projects[i]
        // create new card
        var newCard = document.createElement('div');

        newCard.className = "card";
        //populate card
        newCard.innerHTML = `
        <h3>${newProject.name}</h3>
        <p>Game System: ${newProject.system}</p>
        <p>Target Release: ${newProject.target_release}</p>
        <p>Status: ${newProject.status}</p>
        <p>Description</p>
        <div class="card-txt">
            <p>${newProject.description}</p>
        </div>
        `;
        
        document.getElementById("projects").appendChild(newCard);
    }
};

