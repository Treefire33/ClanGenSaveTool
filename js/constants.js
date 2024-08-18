const statuses = [
    "leader",
	"deputy",
	"medicine cat",
	"medicine apprentice",
	"warrior",
	"apprentice",
	"queen",
	"elder",
	"kitten",
	"mediator",
	"mediator apprentice",
	"newborn",
	"kittypet",
	"loner",
	"rogue",
	"exiled"
];
const backstories = [
    "clan_founder", "clanborn",
	"halfborn1", "halfborn2",
	"outsider_roots1", "outsider_roots2",
	"loner1", "loner2", "loner3", "loner4",
	"kittypet1", "kittypet2", "kittypet3", "kittypet4",
	"rogue1"," rogue2", "rogue3",
	"abandoned1", "abandoned2", "abandoned3", "abandoned4",
	"otherclan1", "otherclan2", "otherclan3", "otherclan4",
	"disgraced1", "disgraced2", "disgraced3",
	"retired_leader", "medicine_cat", "ostracized_warrior",
	"refugee1", "refugee2", "refugee3", "refugee4", "refugee5", "refugee6",
	"tragedy_survivor1", "tragedy_survivor2", "tragedy_survivor3", "tragedy_survivor4",
    "wandering_healer1", "wandering_healer2",
	"guided1", "guided2", "guided3", "guided4",
	"orphaned1", "orphaned2", "orphaned3", "orphaned4", "orphaned5", "orphaned6", 
    "outsider1", "outsider2", "outsider3"
];
const traits = [
    "troublesome", "lonesome", "fierce", "bloodthirsty",
	"cold", "childish", "playful", "charismatic",
	"bold", "daring", "nervous", "righteous",
	"insecure", "strict", "compassionate", "thoughtful",
	"ambitious", "confident", "adventurous", "calm",
	"gloomy", "faithful", "loving", "loyal", "responsible",
	"shameless", "sneaky", "strange", "vengeful",
	"wise", "arrogant", "competitive", "grumpy",
	"cunning", "oblivious", "flamboyant", "rebellious",
	"sincere", "careful"
];
const kitTraits = [
    "unruly", "shy", "impulsive", "bullying",
	"attention-seeker", "charming", "self-conscious", "noisy",
	"skittish", "daydreamer", "fearless", "sweet", "know-it-all",
	"polite", "bossy"
];
const plantAccessories = [
	"MAPLE LEAF", "HOLLY", "BLUE BERRIES", "FORGET ME NOTS", "RYE STALK", "CATTAIL", "POPPY", "ORANGE POPPY", "CYAN POPPY", "WHITE POPPY", "PINK POPPY",
    "BLUEBELLS", "LILY OF THE VALLEY", "SNAPDRAGON", "HERBS", "PETALS", "NETTLE", "HEATHER", "GORSE", "JUNIPER", "RASPBERRY", "LAVENDER",
    "OAK LEAVES", "CATMINT", "MAPLE SEED", "LAUREL", "BULB WHITE", "BULB YELLOW", "BULB ORANGE", "BULB PINK", "BULB BLUE", "CLOVER", "DAISY",
    "CLOVER", "DAISY", "LILY OF THE VALLEY", "HEATHER", "SNAPDRAGON", "GORSE", "BULB WHITE", "BULB YELLOW",
    "DRY HERBS", "DRY CATMINT", "DRY NETTLES", "DRY LAURELS"
];
const wildAccessories = [
	"RED FEATHERS", "BLUE FEATHERS", "JAY FEATHERS", "GULL FEATHERS", "SPARROW FEATHERS", "MOTH WINGS", 
	"ROSY MOTH WINGS", "MORPHO BUTTERFLY", "MONARCH BUTTERFLY", "CICADA WINGS", "BLACK CICADA"
];
const tailAccessories = [
	"RED FEATHERS", "BLUE FEATHERS", "JAY FEATHERS", "GULL FEATHERS", "SPARROW FEATHERS", "CLOVER", "DAISY"
];
const collarAccessories = [
	"CRIMSON", "BLUE", "YELLOW", "CYAN", "RED", "LIME", "GREEN", "RAINBOW",
    "BLACK", "SPIKES", "WHITE", "PINK", "PURPLE", "MULTI", "INDIGO", "CRIMSONBELL", "BLUEBELL",
    "YELLOWBELL", "CYANBELL", "REDBELL", "LIMEBELL", "GREENBELL",
    "RAINBOWBELL", "BLACKBELL", "SPIKESBELL", "WHITEBELL", "PINKBELL", "PURPLEBELL",
    "MULTIBELL", "INDIGOBELL", "CRIMSONBOW", "BLUEBOW", "YELLOWBOW", "CYANBOW", "REDBOW",
    "LIMEBOW", "GREENBOW", "RAINBOWBOW", "BLACKBOW", "SPIKESBOW", "WHITEBOW", "PINKBOW",
    "PURPLEBOW", "MULTIBOW", "INDIGOBOW", "CRIMSONNYLON", "BLUENYLON", "YELLOWNYLON", "CYANNYLON",
    "REDNYLON", "LIMENYLON", "GREENNYLON", "RAINBOWNYLON",
    "BLACKNYLON", "SPIKESNYLON", "WHITENYLON", "PINKNYLON", "PURPLENYLON", "MULTINYLON", "INDIGONYLON",
];
const accessories = {
	"No Accessory": [ null ],
	"Plants": plantAccessories,
	"Fauna": wildAccessories,
	"Tail Decor": tailAccessories,
	"Collars": collarAccessories
};
const eyeColours = [
    null,
    "YELLOW","AMBER","HAZEL","PALEGREEN",
	"GREEN","BLUE","DARKBLUE","GREY",
	"CYAN","EMERALD","HEATHERBLUE","SUNLITICE",
	"COPPER","SAGE","COBALT","PALEBLUE",
	"BRONZE","SILVER","PALEYELLOW","GOLD",
	"GREENYELLOW"
];
const skinColours = [
    "BLACK","RED","PINK","DARKBROWN",
	"BROWN","LIGHTBROWN","DARK","DARKGREY",
	"GREY","DARKSALMON","SALMON","PEACH",
	"DARKMARBLED","MARBLED","LIGHTMARBLED","DARKBLUE",
	"BLUE","LIGHTBLUE"
];
const peltNames = [
    "Tabby","Ticked","Mackerel","Classic",
	"Sokoke","Agouti","Speckled","Rosette",
    "SingleColour","TwoColour","Smoke","Singlestripe",
	"Masked","Bengal","Marbled","Tortie",
	"Calico"
];
const peltColours = [
    null,
    "WHITE","PALEGREY","SILVER","GREY",
	"DARKGREY","GHOST","BLACK","CREAM",
	"PALEGINGER","GOLDEN","GINGER","DARKGINGER",
	"SIENNA","LIGHTBROWN","LILAC","BROWN",
    "GOLDEN-BROWN","DARKBROWN","CHOCOLATE"
];
const tortieBases = [
    null,
    "tabby","ticked","mackerel","classic",
	"sokoke","agouti","speckled","rosette",
	"single","smoke","singlestripe","masked",
	"bengal","marbled"
];
const tortiePatterns = [
    null,
    'ONE', 'TWO', 'THREE', 'FOUR', 'REDTAIL', 'DELILAH', 'MINIMALONE', 'MINIMALTWO', 'MINIMALTHREE',
    'MINIMALFOUR', 'HALF',
    'OREO', 'SWOOP', 'MOTTLED', 'SIDEMASK', 'EYEDOT', 'BANDANA', 'PACMAN', 'STREAMSTRIKE', 'ORIOLE',
    /*Domain Expansion: */'CHIMERA'/*Shadow Garden?!*/, 'DAUB', 'EMBER', 'BLANKET',
    'ROBIN', 'BRINDLE', 'PAIGE', 'ROSETAIL', 'SAFI', 'SMUDGED', 'DAPPLENIGHT', 'STREAK', 'MASK',
    'CHEST', 'ARMTAIL', 'SMOKE', 'GRUMPYFACE',
    'BRIE', 'BELOVED', 'BODY', 'SHILOH', 'FRECKLED', 'HEARTBEAT'
];
const tabbyPatterns = [
    null,
    "Tabby", "Ticked", "Mackerel", 
    "Classic", "Sokoke", "Agouti"
];
const pointMarkings = [
    null,
    'COLOURPOINT', 'RAGDOLL', 'SEPIAPOINT', 
    'MINKPOINT', 'SEALPOINT'
];
const vitiligo = [
    null,
    'VITILIGO', 'VITILIGOTWO', 'MOON', 'PHANTOM', 
    'KARPATI', 'POWDER', 'BLEACHED', 'SMOKEY'
];
const whitePatches = [
    null,
    "BACKSPOT", "BELLY", "BIB", "BLAZE",
	"BLAZEMASK", "BROKENBLAZE", "BUZZARDFANG", "ESTRELLA",
	"EXTRA", "EYEBAGS", "HONEY", "LEFTEAR",
	"LIGHTTUXEDO", "LILTWO", "LITTLE", "LOCKET",
	"LUNA", "MUSTACHE", "PAWS", "RAVENPAW",
	"REVERSEEYE", "REVERSEHEART", "RIGHTEAR", "SCOURGE",
	"SPARKLE", "TAILTIP", "TEARS", "TIP",
	"TOES", "TOESTAIL", "VEE", "APRON",
	"BLACKSTAR", "BLACKSTAR", "BOOTS", "BUDDY",
	"CAPSADDLE", "CHESTSPECK", "COW", "COWTWO",
	"EYESPOT", "HEART", "HEARTTWO", "KROPKA",
	"LIGHTSONG", "LOVEBUG", "MOORISH", "ONEEAR",
	"PEBBLE", "PEBBLESHINE", "PETAL", "SHOOTINGSTAR",
	"TAIL", "TAILTWO", "VAN", "FULLWHITE",
	"BEARD", "BOWTIE", "DAMIEN", "DAPPLEPAW",
	"DIGIT", "DIVA", "DOUGIE", "FADEBELLY",
	"FADESPOTS", "FANCY", "FCONE", "FCTWO",
	"MIA", "MISS", "MITAINE", "PRINCESS",
	"ROSINA", "SAVANNAH", "SKUNK", "SQUEAKS",
	"STAR", "TOPCOVER", "TUXEDO", "UNDERS",
	"VEST", "WINGS", "WOODPECKER",
	"ANY", "ANYTWO", "APPALOOSA", "BLOSSOMSTEP",
	"BROKEN", "BUB", "BULLSEYE", "BUSTER",
	"CAKE", "CURVED", "FAROFA", "FINN",
	"FRECKLES", "FRONT", "GLASS", "GOATEE",
	"HALFFACE", "HALFWHITE", "HAWKBLAZE", "MAO",
	"MASKMANTLE", "MISTER", "OWL", "PAINTED",
	"PANTS", "PANTSTWO", "PIEBALD", "PRINCE",
	"REVERSEPANTS", "RINGTAIL", "SAMMY", "SCAR",
	"SHIBAINU", "SPARROW", "TRIXIE", null
];
const tints = [
    "none","pink","gray",
    "red","orange","warmdilute",
	"yellow","purple","dilute",
    "cooldilute", "black"
];
const whitePatchesTints = [
    "none","cream","darkcream",
	"gray","offwhite","pink"
];
const scars1 = [
	"ONE", "TWO", "THREE", "TAILSCAR", "SNOUT", "CHEEK", "SIDE", "THROAT", "TAILBASE", "BELLY",
    "LEGBITE", "NECKBITE", "FACE", "MANLEG", "BRIGHTHEART", "MANTAIL", "BRIDGE", "RIGHTBLIND", "LEFTBLIND",
    "BOTHBLIND", "BEAKCHEEK", "BEAKLOWER", "CATBITE", "RATBITE", "QUILLCHUNK", "QUILLSCRATCH", "HINDLEG",
    "BACK", "QUILLSIDE", "SCRATCHSIDE", "BEAKSIDE", "CATBITETWO", "FOUR"
];
const scars2 = [
	"LEFTEAR", "RIGHTEAR", "NOTAIL", "HALFTAIL", "NOPAW", "NOLEFTEAR", "NORIGHTEAR", "NOEAR"
];
const scars3 = [
	"SNAKE", "TOETRAP", "BURNPAWS", "BURNTAIL", "BURNBELLY", "BURNRUMP", "FROSTFACE", "FROSTTAIL",
    "FROSTMITT", "FROSTSOCK", "TOE", "SNAKETWO"
];
const skills = [
	"TEACHER", "HUNTER", "FIGHTER", "CLIMBER",
	"SWIMMER", "SPEAKER", "MEDIATOR", "CLEVER",
	"INSIGHTFUL", "SENSE", "KIT", "HEALER",
	"STORY", "LORE", "CAMP", "STAR",
	"OMEN", "DREAM", "CLAIRVOYANT", "PROPHET",
	"GHOST", "RUNNER", "DARK"
];