/*
"skill_dict": {
    "primary": "SENSE,14,False",
    "secondary": "SWIMMER,19,False",
    "hidden": null
},
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
    let traitsGroup1 = document.createElement("optgroup");
    traitsGroup1.label = "Standard Traits";
    let traitsGroup2 = document.createElement("optgroup");
    traitsGroup2.label = "Kit Traits";
    document.getElementById('trait').append(traitsGroup1, traitsGroup2);
    traits.forEach((value, index) => {
        let newOption = document.createElement("option");
        newOption.value = value;
        newOption.innerText = value;
        traitsGroup1.appendChild(newOption);
    });
    kitTraits.forEach((value, index) => {
        let newOption = document.createElement("option");
        newOption.value = value;
        newOption.innerText = value;
        traitsGroup2.appendChild(newOption);
    });
    accessories.forEach((value, index) => {
        let newOption = document.createElement("option");
        newOption.value = value;
        newOption.innerText = value == null ? "none (null)" : value;
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
        newOption.innerText = key + " - " + nameFromStatus(value);
        selector.appendChild(newOption);
    }

    currentCat = currentCats[Object.keys(currentCats)[0]];

    updateFamilialSelects();
    changeCurrentCat();
    updateScarSelect();
    updateListArrays();
}

function selectCat()
{
    if(currentCat != null)
    {
        updateCatJSON("all");
    }
    currentCat = currentCats[selector.value];
    updateFamilialSelects();
    changeCurrentCat();
    updateScarSelect();
    updateListArrays();
}

function updateFamilialSelects()
{
    ["parent1", "parent2", "mentor", "adoptiveSelect", "formerMentorSelect", "currentAppSelect", "formerAppSelect", "mateSelect", "prevMateSelect"].forEach((value) => {
        document.getElementById(value).replaceChildren();
        let newOption = document.createElement("option");
        newOption.value = null;
        newOption.innerText = "none (null)";
        document.getElementById(value).appendChild(newOption);
        for(const [k, v] of Object.entries(currentCats))
        {
            if(v.ID == currentCat.ID) { continue; }
            let newOption = document.createElement("option");
            newOption.value = v.ID;
            newOption.innerText = k + " - " + v.name_prefix + v.name_suffix;
            document.getElementById(value).appendChild(newOption);
        }
    });
}

function updateScarSelect()
{
    let scarSelect = document.getElementById("scarSelect");
    scarSelect.replaceChildren();
    let scarsGroup1 = document.createElement("optgroup");
    scarsGroup1.label = "Inflicted by Other Cats or Animals";
    let scarsGroup2 = document.createElement("optgroup");
    scarsGroup2.label = "Lost Limbs";
    let scarsGroup3 = document.createElement("optgroup");
    scarsGroup3.label = "Scars Inflicted Through Special Events";
    scarSelect.append(scarsGroup1, scarsGroup2, scarsGroup3);
    for(const [k, v] of Object.entries(scars1))
    {
        let newOption = document.createElement("option");
        newOption.value = v;
        newOption.innerText = v;
        scarsGroup1.appendChild(newOption);
    }
    for(const [k, v] of Object.entries(scars2))
    {
        let newOption = document.createElement("option");
        newOption.value = v;
        newOption.innerText = v;
        scarsGroup2.appendChild(newOption);
    }
    for(const [k, v] of Object.entries(scars3))
    {
        let newOption = document.createElement("option");
        newOption.value = v;
        newOption.innerText = v;
        scarsGroup3.appendChild(newOption);
    }
}

function updateListArrays()
{
    document.querySelectorAll(".list_array").forEach((element) => {
        element.replaceChildren();
        if(currentCat[element.id])
        {
            currentCat[element.id].forEach((v) => {
                if(v == null) { return; }
                let newText = document.createElement("p");
                newText.innerText = v;
                newText.style = "display: inline";
                let newButton = document.createElement("button");
                newButton.innerText = "Remove";
                newButton.onclick = () => {removeCatToArray(element.id, v);};
                element.append(newText, newButton, document.createElement("br"));
            });
        }
    });
}

function addCatToArray(id, id2)
{
    currentCat[id].push(document.getElementById(id2).value);
    updateListArrays();
}

function removeCatToArray(id, value)
{
    removeItem(currentCat[id], value);
    updateListArrays();
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
        if(attributeToChange == "adoptive_parents") { return; }
        if(isCheckbox) currentCat[attributeToChange] = document.getElementById(attributeToChange).checked;
        else
        {
            if(toInt) { currentCat[attributeToChange] = parseInt(document.getElementById(attributeToChange).value); return;}
            currentCat[attributeToChange] = document.getElementById(attributeToChange).value;
        }
        currentCats[currentCat.ID] = currentCat;
    }
}

function nameFromStatus(cat)
{
	let listName = "";
	switch(cat.status)
	{
		case "newborn":
		case "kitten":
			listName = cat.name_prefix + "kit";
			break;
		case "medicine cat apprentice":
		case "mediator apprentice":
		case "apprentice":
			listName = cat.name_prefix + "paw";
			break;
		case "elder":
		case "deputy":
		case "medicine cat":
		case "mediator":
		case "warrior":
		case "former Clancat":
			listName = cat.name_prefix + cat.name_suffix;
			break;
		case "leader":
			listName = cat.name_prefix + "star";
			break;
		case "kittypet":
		case "loner":
		case "rogue":
			listName = cat.name_prefix;
			break;
		default:
			listName = "Invalid Status!";
			break;
	}
	return listName;
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

function removeItem(arr, value)
{ 
    const index = arr.indexOf(value);
    if(index > -1) 
    {
      arr.splice(index, 1);
    }
    return arr;
}

function switchPage(num) {
    var i;
    var x = document.getElementsByClassName("wrapper");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById("page"+num.toString()).style.display = "block";
}
switchPage(1);