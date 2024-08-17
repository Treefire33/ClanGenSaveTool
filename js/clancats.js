/*
"parent1": null,
"parent2": null,
"adoptive_parents": [],
"mentor": null,
"former_mentor": [],
"patrol_with_mentor": 0,
"mate": [],
"previous_mates": [],
"no_kits": false,
"no_retire": false,
"no_mates": false,
"skill_dict": {
    "primary": "SENSE,14,False",
    "secondary": "SWIMMER,19,False",
    "hidden": null
},
"scars": [],
"current_apprentice": [
    "134"
],
"former_apprentices": [],
"faded_offspring": [],
"prevent_fading": false,
"favourite": false
*/

function print(msg) {console.log(msg);};

let currentCats = {}; //Dictionary of Cats, {"ID": {Cat Object}}
let currentCat = null;
let currentCatPronouns = {};

const selector = document.getElementById("cats");
const namePref = document.getElementById("name_prefix");
namePref.addEventListener('input', () => updateCatJSON("name_prefix"));
const nameSuff = document.getElementById("name_suffix");
nameSuff.addEventListener('input', () => updateCatJSON("name_suffix"));
const specSuffix = document.getElementById("specsuffix_hidden");
const gender = document.getElementById("gender");
const gender_align = document.getElementById("gender_align");
const pronounSelector = document.getElementById("pronouns");
const pronounFields = [
    document.getElementById("subject"), document.getElementById("poss"), 
    document.getElementById("inposs"), document.getElementById("object"),
    document.getElementById("self")
].forEach((value, index) => {value.addEventListener('input', () => updateCatJSON('pronouns'));});
initDropdowns();

async function loadFile(file) 
{
    selector.replaceChildren();
    if(file.name == "clan_cats.json")
    {
        let text = await (new Response(file)).text();
        let loaded = JSON.parse(text);
        for(let i = 0; i < loaded.length; i++)
        {
            currentCats[loaded[i].ID] = loaded[i];
        }
        initCatEditor();
    }
    else
    {
        alert("Upload the clan_cats.json file.");
    }
}

function initDropdowns()
{
    statuses.forEach((value, index) => {
        let newOption = document.createElement("option");
        newOption.value = value;
        newOption.innerText = value;
        document.getElementById('status').appendChild(newOption);
    });
    backstories.forEach((value, index) => {
        let newOption = document.createElement("option");
        newOption.value = value;
        newOption.innerText = value;
        document.getElementById('backstory').appendChild(newOption);
    });
    traits.forEach((value, index) => {
        let newOption = document.createElement("option");
        newOption.value = value;
        newOption.innerText = value;
        document.getElementById('trait').appendChild(newOption);
    });
    accessories.forEach((value, index) => {
        let newOption = document.createElement("option");
        newOption.value = value;
        newOption.innerText = value;
        document.getElementById('accessory').appendChild(newOption);
    });
    eyeColours.forEach((value, index) => {
        if(value == null) {return;}
        let newOption = document.createElement("option");
        newOption.value = value;
        newOption.innerText = value;
        document.getElementById('eye_colour').appendChild(newOption);
    });
    eyeColours.forEach((value, index) => {
        let newOption = document.createElement("option");
        newOption.value = value;
        newOption.innerText = value == null ? "none (null)" : value;
        document.getElementById('eye_colour2').appendChild(newOption);
    });
    skinColours.forEach((value, index) => {
        let newOption = document.createElement("option");
        newOption.value = value;
        newOption.innerText = value;
        document.getElementById('skin').appendChild(newOption);
    });
    tints.forEach((value, index) => {
        let newOption = document.createElement("option");
        newOption.value = value;
        newOption.innerText = value;
        document.getElementById('tint').appendChild(newOption);
    });
    whitePatches.forEach((value, index) => {
        let newOption = document.createElement("option");
        newOption.value = value;
        newOption.innerText = value == null ? "none (null)" : value;
        document.getElementById('white_patches').appendChild(newOption);
    });
    whitePatchesTints.forEach((value, index) => {
        let newOption = document.createElement("option");
        newOption.value = value;
        newOption.innerText = value;
        document.getElementById('white_patches_tint').appendChild(newOption);
    });
    peltNames.forEach((value, index) => {
        let newOption = document.createElement("option");
        newOption.value = value;
        newOption.innerText = value == null ? "none (null)" : value;
        document.getElementById('pelt_name').appendChild(newOption);
    });
    peltColours.forEach((value, index) => {
        let newOption = document.createElement("option");
        newOption.value = value;
        newOption.innerText = value == null ? "none (null)" : value;
        if(value == null) { return; }
        document.getElementById('pelt_color').appendChild(newOption);
    });
    /*For tortie_color*/peltColours.forEach((value, index) => {
        let newOption = document.createElement("option");
        newOption.value = value;
        newOption.innerText = value == null ? "none (null)" : value;
        document.getElementById('tortie_color').appendChild(newOption);
    });
    vitiligo.forEach((value, index) => {
        let newOption = document.createElement("option");
        newOption.value = value;
        newOption.innerText = value == null ? "none (null)" : value;
        document.getElementById('vitiligo').appendChild(newOption);
    });
    pointMarkings.forEach((value, index) => {
        let newOption = document.createElement("option");
        newOption.value = value;
        newOption.innerText = value == null ? "none (null)" : value;
        document.getElementById('points').appendChild(newOption);
    });
    tortiePatterns.forEach((value, index) => {
        let newOption = document.createElement("option");
        newOption.value = value;
        newOption.innerText = value == null ? "none (null)" : value;
        document.getElementById('pattern').appendChild(newOption);
    });
    tortieBases.forEach((value, index) => {
        let newOption = document.createElement("option");
        newOption.value = value;
        newOption.innerText = value == null ? "none (null)" : value;
        document.getElementById('tortie_base').appendChild(newOption);
    });
    /*For tortie_patterns*/tortieBases.forEach((value, index) => {
        let newOption = document.createElement("option");
        newOption.value = value;
        newOption.innerText = value == null ? "none (null)" : value;
        document.getElementById('tortie_pattern').appendChild(newOption);
    });
}

function initCatEditor()
{
    //Selector
    for(const [key, value] of Object.entries(currentCats)) 
    {
        let newOption = document.createElement("option");
        newOption.value = value.ID;
        newOption.innerText = key + " - " + value.name_prefix + value.name_suffix;
        selector.appendChild(newOption);
    }

    currentCat = currentCats[Object.keys(currentCats)[0]];

    changeCurrentCat();
}

function selectCat()
{
    if(currentCat != null)
    {
        updateCatJSON("all");
    }
    currentCat = currentCats[selector.value];
    changeCurrentCat();
}

function changeCurrentCat()
{
    if(currentCat == undefined || currentCat == null) { return; }
    for(const [key, value] of Object.entries(currentCat)) 
    {
        if(key == "pronouns")
        {
            document.getElementById(key).replaceChildren();
            currentCatPronouns = {};
            for(const [k, v] of Object.entries(value)) 
            {
                let newOption = document.createElement("option");
                newOption.value = k;
                newOption.innerText = v.subject;
                currentCatPronouns[k] = v;
                document.getElementById(key).appendChild(newOption);
            }
            updatePronouns(0);
        }
        else if(document.getElementById(key))
        {
            if(document.getElementById(key).type == "checkbox") { document.getElementById(key).checked = value; }
            else
            {
                document.getElementById(key).value = value;
            }
        }
    }
}

function updatePronouns(key)
{
    for(const [k, v] of Object.entries(currentCatPronouns[key])) 
    {
        document.getElementById(k).value = v;
    }
}

function updateCatJSON(attributeToChange, isCheckbox, toInt)
{
    if(currentCat != null)
    {
        if(attributeToChange == "all")
        {
            currentCats[currentCat.ID] = currentCat;
            return;
        }
        if(attributeToChange == "pronouns")
        {
            for(const [k, v] of Object.entries(currentCatPronouns[parseInt(pronounSelector.value)])) 
            {
                currentCat[attributeToChange][parseInt(pronounSelector.value)][k] = document.getElementById(k).value;
            }
            return;
        }
        if(isCheckbox) currentCat[attributeToChange] = document.getElementById(attributeToChange).checked;
        else
        {
            if(toInt) { currentCat[attributeToChange] = parseInt(document.getElementById(attributeToChange).value); return;}
            currentCat[attributeToChange] = document.getElementById(attributeToChange).value;
        }
        currentCats[currentCat.ID] = currentCat;
    }
}

function exportFile()
{
    updateCatJSON("all");
    var file = 'clan_cats.json';
    let catArray = [];
    Object.entries(currentCats).map((k, v) => {
        catArray.push(k[1]);
    });
    var savedFile = new Blob([JSON.stringify(catArray, null, 5)], {
        type: 'application/json'
    }); 
    saveAs(savedFile,file);
}