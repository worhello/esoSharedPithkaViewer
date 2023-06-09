
const DlcDungeonCols = ["name", "vet", "hm", "sr", "nd", "cha", "tri", "ext"];
const DlcDungeonData = [
    {NAME:"White Gold Tower",     TRINAME: "n/a",                       EXTNAME: "Out of the Frying Pan", },
    {NAME:"Imperial City Prison", TRINAME: "n/a",                       EXTNAME: "Out of Sight",          },
    {NAME:"Ruins of Mazzatun",    TRINAME: "n/a",                       EXTNAME: "Obedience Training",    },
    {NAME:"Cradle of Shadows",    TRINAME: "n/a",                       EXTNAME: "Embrace the Shadow",    },
    {NAME:"Falkreath Hold",       TRINAME: "n/a",                       EXTNAME: "Epic Undertaking",      },
    {NAME:"Bloodroot Forge",      TRINAME: "n/a",                       EXTNAME: "Wildlife Sanctuary",    },
    {NAME:"Fang Lair",            TRINAME: "Leave No Bone Unbroken",    EXTNAME: "Minimal Animosity",     },
    {NAME:"Scalecaller Peak",     TRINAME: "Mountain God",              EXTNAME: "Daedric Deflector",     },
    {NAME:"Moon Hunter Keep",     TRINAME: "Pure Lunacy",               EXTNAME: "Strangling Cowardice",  },
    {NAME:"March of Sacrifices",  TRINAME: "Apex Predator",             EXTNAME: "Mist Walker",           },
    {NAME:"Frostvault",           TRINAME: "Relentless Raider",         EXTNAME: "Cold Potato",           },
    {NAME:"Depths of Malatar",    TRINAME: "Depths Defier",             EXTNAME: "Lackluster",            },
    {NAME:"Lair of Maarselok",    TRINAME: "Nature's Wrath",            EXTNAME: "Shagrath's Shield",     },
    {NAME:"Moongrave Fane",       TRINAME: "Defanged the Devourer",     EXTNAME: "Drop the Block",        },
    {NAME:"Icereach",             TRINAME: "Storm Foe",                 EXTNAME: "Prodigous Pacification",},
    {NAME:"Unhallowed Grave",     TRINAME: "Bonecaller's Bane",         EXTNAME: "Relentless Dogcatcher", },
    {NAME:"Stone Garden",         TRINAME: "True Genius",               EXTNAME: "Old Fashioned",         },
    {NAME:"Castle Thorn",         TRINAME: "Bane of Thorns",            EXTNAME: "Guardian Preserved",    },
    {NAME:"Black Drake Villa",    TRINAME: "Ardent Bibliophile",        EXTNAME: "Salley-oop",            },
    {NAME:"The Cauldron",         TRINAME: "Subterranean Smasher",      EXTNAME: "Can't Catch Me",        },
    {NAME:"Red Petal Bastion",    TRINAME: "of the Silver Rose",        EXTNAME: "Terror Billy",          },
    {NAME:"Dread Cellar",         TRINAME: "the Dreaded",               EXTNAME: "Settling Scores",       },    
    {NAME:"Coral Aerie",          TRINAME: "Coral Caretaker",           EXTNAME: "Tentacless Triumph",    },
    {NAME:"Shipwright's Regret",  TRINAME: "Privateer",                 EXTNAME: "Sans Spirit Support",   },
    {NAME:"Earthen Root Enclave", TRINAME: "Invaders' Bane",            EXTNAME: "Scourge of Archdruid",  },
    {NAME:"Graven Deep",          TRINAME: "Fist of Tava",              EXTNAME: "Pressure in the Deep",  },
    {NAME:"Bal Sunnar",           TRINAME: "Temporal Tempest",          EXTNAME: "Infectious Beliefs",    },
    {NAME:"Scrivener's Hall",     TRINAME: "Magnastylus in the Making", EXTNAME: "Harsh Edit",            },

    {NAME: "Blackrose Prison ",   TRINAME: "Unchained", EXTNAME: "A Thrilling Trifecta"}
];

const BaseDungeonCols = ["name", "vet", "hm", "sr", "nd"];
const BaseDungeonData = [
    {NAME: "Fungal Grotto I",     },
    {NAME: "Fungal Grotto II",    },
    {NAME: "Banished Cells I",    },
    {NAME: "Banished Cells II",   },
    {NAME: "Elden Hollow I",      },
    {NAME: "Elden Hollow II",     },
    {NAME: "City of Ash I",       },
    {NAME: "City of Ash II",      },
    {NAME: "Crypt of Hearts I",   },
    {NAME: "Crypt of Hearts II",  },
    {NAME: "Darkshade Caverns I", },
    {NAME: "Darkshade Caverns II",},
    {NAME: "Spindleclutch I",     },
    {NAME: "Spindleclutch II",    },
    {NAME: "Wayrest Sewers I",    },
    {NAME: "Wayrest Sewers II",   },
    {NAME: "Arx Corinium",        },
    {NAME: "Blackheart Haven",    },
    {NAME: "Blessed Crucible",    },
    {NAME: "Direfrost Keep",      },
    {NAME: "Selene's Web",        },
    {NAME: "Tempest Island",      },
    {NAME: "Vaults of Madness",   },
    {NAME: "Volenfell",           }
];


const TrialCols = ["name", "vet", "phm1", "phm2", "hm", "tri", "ext"];
const TrialData = [
    {NAME:"Hel Ra Citadel",         PHM1NAME:"n/a",      PHM2NAME:"n/a",     HMNAME:"Celest. Warrior", TRINAME:"n/a",                 EXTNAME:"n/a"                  },
    {NAME:"Aetherian Archive",      PHM1NAME:"n/a",      PHM2NAME:"n/a",     HMNAME:"Celest. Mage",    TRINAME:"n/a",                 EXTNAME:"n/a"                  },
    {NAME:"Sanctum Ophidia",        PHM1NAME:"n/a",      PHM2NAME:"n/a",     HMNAME:"Celest. Serpent", TRINAME:"n/a",                 EXTNAME:"n/a"                  },
    {NAME:"Maw of Lorkhaj",         PHM1NAME:"n/a",      PHM2NAME:"n/a",     HMNAME:"Rakkhat",         TRINAME:"n/a",                 EXTNAME:"Dro-m'Athra Destroyer"},
    {NAME:"Halls of Fabrication",   PHM1NAME:"n/a",      PHM2NAME:"n/a",     HMNAME:"Assembly Gen.",   TRINAME:"Tick-Tock Tormentor", EXTNAME:"The Dynamo"           },
    {NAME:"Asylum Sanctorium",      PHM1NAME:"+Llothis", PHM2NAME:"+Felms",  HMNAME:"vAS +2",          TRINAME:"Saintly Savior",      EXTNAME:"Immortal Redeemer"    },
    {NAME:"Cloudrest",              PHM1NAME:"vCR +1",   PHM2NAME:"vCR +2",  HMNAME:"vCR +3",          TRINAME:"Gryphon Heart",       EXTNAME:"Welkynar Liberator"   },
    {NAME:"Sunspire",               PHM1NAME:"Yolna",    PHM2NAME:"Lokke",   HMNAME:"Nahvi",           TRINAME:"Godslayer",           EXTNAME:"Hand of Alkosh"       },
    {NAME:"Kyne's Aegis",           PHM1NAME:"Yandir",   PHM2NAME:"Vrol",    HMNAME:"Falgravn",        TRINAME:"Kyne's Wrath",        EXTNAME:"Dawnbringer"          },
    {NAME:"Rockgrove",              PHM1NAME:"Oaxiltso", PHM2NAME:"Bahsei",  HMNAME:"Xalvakka",        TRINAME:"Planesbreaker",       EXTNAME:"Daedric Bane"         },
    {NAME:"Dreadsail Reef",         PHM1NAME:"Twins",    PHM2NAME:"Reef",    HMNAME:"Taleria",         TRINAME:"Soul of the Squall",  EXTNAME:"Swashbuckler Supreme" },
    {NAME:"Sanity's Edge",          PHM1NAME:"Yaseyla",  PHM2NAME:"Twelvane",HMNAME:"Ansuul",          TRINAME:"Dream Master",        EXTNAME:"Sane and Clearheaded" }
];

class Player {
    constructor() {
        this.name = "";
        this.achievements = new Array();
    }
}

function createTableRow(num, dataRow, cols, parentElementId) {
    var row = document.createElement("tr");
    cols.forEach((c) => {
        var cell = document.createElement("td");
        cell.id = parentElementId + c + num;
        cell.dataset.toggle = "tooltip";
        if (c == "name") {
            cell.textContent = dataRow.NAME;
            cell.setAttribute("scope", "row");
            cell.classList.add("dungeonNameCol")
        }
        else {
            
            cell.classList.add("dataCell")
        }
        if (c == "tri" && dataRow.TRINAME != null) {
            cell.setAttribute("achievementText", dataRow.TRINAME);
        }
        if (c == "ext" && dataRow.EXTNAME != null) {
            cell.setAttribute("achievementText", dataRow.EXTNAME);
        }
        if (c == "phm1" && dataRow.PHM1NAME != null) {
            cell.setAttribute("achievementText", dataRow.PHM1NAME);
        }
        if (c == "phm2" && dataRow.PHM2NAME != null) {
            cell.setAttribute("achievementText", dataRow.PHM2NAME);
        }
        if (c == "hm" && dataRow.HMNAME != null) {
            cell.setAttribute("achievementText", dataRow.HMNAME);
        }
        row.appendChild(cell);
    });
    return row;
}

function createTableRows(parentElementId, data, cols) {
    for (var i = 0; i < data.length; i++) {
        $("#" + parentElementId).append(createTableRow(i, data[i], cols, parentElementId));
    }
}

function buildDlcDungeonView() {
    var data = DlcDungeonData;
    var cols = DlcDungeonCols;

    createTableRows("dlcDungeonsTableBody", data, cols);
}

function buildBaseDungeonView() {
    var data = BaseDungeonData;
    var cols = BaseDungeonCols;

    createTableRows("baseDungeonsTableBody", data, cols);
}

function buildTrialsView() {
    var data = TrialData;
    var cols = TrialCols;

    createTableRows("trialsTableBody", data, cols);
}

function buildViews() {
    buildDlcDungeonView();
    buildBaseDungeonView();
    buildTrialsView();
}

function isAllValidCharacters(data, validChars) {
    let validCharsAsArray = validChars.split('');
    return data.split('').every(c => validCharsAsArray.includes(c));
}

function isAllValidBinaryCharacters(data) {
    var binaryChars = "01";
    return isAllValidCharacters(data, binaryChars);
}

const Base64Lexicon = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+_";
function isAllValidBase64Characters(data) {
    return isAllValidCharacters(data, Base64Lexicon);
}

const ValidInputSizes = [
    DlcDungeonData.length * (DlcDungeonCols.length - 1),
    BaseDungeonData.length * (BaseDungeonCols.length - 1),
    TrialData.length * (TrialCols.length - 1)
];

function validateInputData(input) {
    if (input == "") {
        return null;
    }

    var playerInfoAsArray = parsePlayerInfoIntoArray(input);
    if (playerInfoAsArray.length > 2) {
        return null;
    }

    var rawAchievementData = parseRawAchievementDataFromInput(playerInfoAsArray);

    if (!ValidInputSizes.includes(rawAchievementData.length)) {
        return null;
    }

    isAllValidBinaryCharacters(rawAchievementData);

    currentInputLengths.push(rawAchievementData.length);

    playerInfoAsArray[playerInfoAsArray.length - 1] = rawAchievementData;

    return playerInfoAsArray.join(":");
}

var currentInputLengths = [];

function validateGatheredData() {
    var allOk = true;
    for (var i = 0; i < currentInputLengths.length; i++) {
        allOk = currentInputLengths && currentInputLengths[0] == currentInputLengths[i];
    }
    return allOk;
}

function gatherInputData(inputName) {
    var data = [];
    currentInputLengths = [];

    var inputDataAll = [];
    try {
        inputDataAll = $("#dataInput_" + inputName).val()
            .split("\n")
            .join(",")
            .split("\r")
            .join(",")
            .split(",");
    } catch(err) {
        console.error("invalid input from dataInput_" + inputName + ", " + err);
    }
    inputDataAll.forEach(d => {
        var validated = validateInputData(d);
        if (validated != null) {
            data.push(validated);
        }
    });

    if (!validateGatheredData(data)) {
        return [];
    }
    
    storeInputDataToLocalStorage();

    return data;
}

function parsePlayerInfoIntoArray(unparsedString) {
    return unparsedString.split(":");
}

function parseUsername(playerInfoAsArray, playerNum) {
    if (playerInfoAsArray.length > 1) {
        return playerInfoAsArray[0];
    }
    return "Player" + (playerNum + 1);
}

function parseRawAchievementData(playerInfoAsArray) {
    if (playerInfoAsArray.length > 1) {
        return playerInfoAsArray[1];
    }
    return playerInfoAsArray[0];
}

function base64ToBinary(c) {
    var remaining = Base64Lexicon.indexOf(c);
    var result = "";
    for (var i = 5; i >= 0; i--) {
        var currPower = Math.pow(2, i);
        var currBit = "0";
        if (remaining >= currPower) {
            currBit = "1";
            remaining -= currPower;
        }
        result = result.concat(currBit);
    }
    return result;
}

function parseRawAchievementDataFromInput(playerInfoAsArray) {
    let rawAchievementData = parseRawAchievementData(playerInfoAsArray);
    if (isAllValidBinaryCharacters(rawAchievementData)) {
        return rawAchievementData;
    }

    if (!isAllValidBase64Characters(rawAchievementData)) {
        return "";
    }

    var decoded = "";
    for (var i = 0; i < rawAchievementData.length; i++) {
        let binary = base64ToBinary(rawAchievementData[i]);
        decoded = decoded.concat(binary);
    }

    for (var i = 0; i < ValidInputSizes.length; i++) {
        if (decoded.length > ValidInputSizes[i] && decoded.length - ValidInputSizes[i] < 6) {
            decoded = decoded.substring(0, decoded.length - (decoded.length - ValidInputSizes[i]));
            break;
        }
    }

    return decoded;
}

const BucketColors = [
    "#DA4453CC",
    "#ED5565CC",
    "#FC6E51CC",
    "#FFCE54CC",
    "#A0D468CC",
    "#212529"
];

function getColorBucketFromPercent(percentValue) {
    if (percentValue < 0) return BucketColors[5];
    if (percentValue == 0) return BucketColors[0];
    if (percentValue == 100) return BucketColors[4];
    if (percentValue < 34) return BucketColors[1];
    if (percentValue > 67) return BucketColors[3];
    return BucketColors[2];
}

function getTextColorFromPercent(percentValue) {
    if (percentValue < 0) return BucketColors[5];
    return "black";
}

function setCellColorBasedOnPercentComplete(cellId, percentValue) {
    $(cellId).css({background: `${getColorBucketFromPercent(percentValue)}`})
}

function setListOfPlayersWithAchieveInTooltip(cellId, playersWhoHaveAchieve) {
    var tooltipText = "";
    if ($(cellId).attr("achievementText") !== undefined) {
        tooltipText += $(cellId).attr("achievementText");

        if (playersWhoHaveAchieve.length > 0) {
            tooltipText += ": ";
        }
    }

    for (var i = 0; i < playersWhoHaveAchieve.length; i++) {
        if (i > 0) {
            tooltipText += ", ";
        }
        tooltipText += playersWhoHaveAchieve[i];
    }

    $(cellId).data("bs-toggle", "tooltip");
    $(cellId).attr("title", tooltipText);
    $(cellId).hover(function(){
        $(this).tooltip('hide');
    })
    $(cellId).tooltip({trigger: "click"});
}

function parseDataForOnePlayer(unparsedString, totalNumEncounters, subArraySize, playerNum) {
    var player = new Player();
    var currPlayerDataPtr = 0;

    var playerInfoAsArray = parsePlayerInfoIntoArray(unparsedString);
    player.name = parseUsername(playerInfoAsArray, playerNum);
    var rawAchievementData = parseRawAchievementData(playerInfoAsArray);

    for (var currEncounter = 0; currEncounter < totalNumEncounters; currEncounter++) {
        player.achievements[currEncounter] = new Array();
        for (var j = 0; j < subArraySize; j++) {
            player.achievements[currEncounter].push(rawAchievementData[currPlayerDataPtr]);
            currPlayerDataPtr++;
        }
    }
    return player;
}

function splitCombinedEncounterDataForAllPlayers(fullArray, subArraySize) {
    var allPlayersData = new Array();
    for (var playerNum = 0; playerNum < fullArray.length; playerNum++) {
        var totalNumEncounters = fullArray[playerNum].length / subArraySize;
        allPlayersData[playerNum] = parseDataForOnePlayer(fullArray[playerNum], totalNumEncounters, subArraySize, playerNum);
    }
    return allPlayersData;
}

function isNonAchievementCell(cellId) {
    if ($(cellId).attr("achievementText") == "n/a") {
        return true;
    }

    const permaNonAchieveCells = [
        "#dlcDungeonsTableBodycha0",
        "#dlcDungeonsTableBodycha28"
    ];
    return permaNonAchieveCells.includes(cellId);
}

function populateTable(numCols, parentElementId, inputData, numRows, cols) {
    var numPlayers = inputData.length;
    var perEncounterArrays = splitCombinedEncounterDataForAllPlayers(inputData, numCols);

    for (var row = 0; row < numRows; row++) {
        for (var col = 1; col <= numCols; col++) {
            let cellId = "#" + parentElementId + cols[col] + row;
            if (isNonAchievementCell(cellId)) {
                setCellColorBasedOnPercentComplete(cellId, -1);
            }
            else {
                var totalCountForCell = 0;
                var playersWhoHaveAchieve = [];
                for (var p = 0; p < numPlayers; p++) {
                    let val = parseInt(perEncounterArrays[p].achievements[row][col - 1])
                    totalCountForCell += val;
                    if (val == 1) {
                        playersWhoHaveAchieve.push(perEncounterArrays[p].name);
                    }
                }
                let percent = Math.trunc((totalCountForCell / numPlayers) * 100);
                $(cellId).html(totalCountForCell + "/" + numPlayers);
                setListOfPlayersWithAchieveInTooltip(cellId, playersWhoHaveAchieve);
                setCellColorBasedOnPercentComplete(cellId, percent);
            }
        }
    }

    var allPlayerNames = "";
    for (var playerNum = 0; playerNum < numPlayers; playerNum++) {
        if (playerNum > 0) {
            allPlayerNames = allPlayerNames.concat(", ");
        }
        allPlayerNames = allPlayerNames.concat(perEncounterArrays[playerNum].name);
    }
    $("#playerNamesContainer").html(allPlayerNames);
}

function populateDlcDungeonsFromData(inputData) {
    var numCols = 7;
    var parentElementId = "dlcDungeonsTableBody";
    var numRows = DlcDungeonData.length;
    var cols = DlcDungeonCols;

    populateTable(numCols, parentElementId, inputData, numRows, cols);
}

function populateBaseDungeonsFromData(inputData) {
    var numCols = 4;
    var parentElementId = "baseDungeonsTableBody";
    var numRows = BaseDungeonData.length;
    var cols = BaseDungeonCols;

    populateTable(numCols, parentElementId, inputData, numRows, cols);
}

function populateTrialssFromData(inputData) {
    var numCols = 6;
    var parentElementId = "trialsTableBody";
    var numRows = TrialData.length;
    var cols = TrialCols;

    populateTable(numCols, parentElementId, inputData, numRows, cols);
}

const InputCategories = [
    "dlcDungeons",
    "baseDungeons",
    "trials"
]

function loadDataFromLocalStorage() {
    InputCategories.forEach(category => {
        var stored = localStorage.getItem("dataInput_" + category);
        if (stored) {
            $("#dataInput_" + category).html(stored);
        }
    });
}

function storeInputDataToLocalStorage() {
    InputCategories.forEach(category => {
        var v = $("#dataInput_" + category).val();
        if (v) {
            localStorage.setItem("dataInput_" + category, v);
        }
    });
}

function clearInputDataFromLocalStorage() {
    InputCategories.forEach(category => {
        var v = $("#dataInput_" + category).val();
        if (v) {
            localStorage.removeItem("dataInput_" + category, v);
        }
    });
}

function clearInputs() {
    InputCategories.forEach(category => {
        $("#dataInput_" + category).html("");
    });
}

function getBaseUrl() {
    if (window.location.origin.includes("localhost") || window.location.origin.includes("127.0.0.1")) {
        return window.location.origin;
    }

    // Just hardcoding for now to get this feature working properly
    return "https://worhello.github.io/esoSharedPithkaViewer/";
}

function populateShareUrl(v) {
    var baseUrl = getBaseUrl();
    var url = new URL(baseUrl);
    url.searchParams.append("type", v);
    url.searchParams.append("data", $("#dataInput_" + v).val());

    var str = url.toString();
    $("#copyUrlModalBody").html(str);
    $("#copyUrlModalButton").click(function() {
        navigator.clipboard.writeText(str);
    });
}

function loadDataFromUrlIfPresent() {
    var url = new URL(window.location.href);
    var hasType = url.searchParams.has("type");
    var hasData = url.searchParams.has("data");
    if (!hasData || !hasType) {
        return false;
    }

    var paramType = url.searchParams.get("type");
    if (InputCategories.indexOf(paramType) == -1) {
        return false;
    }

    $("input[value$='" + paramType + "']").trigger('click');
    $("#dataInput_" + paramType).html(url.searchParams.get("data"));
    $("#val_" + paramType).trigger('click');
}

function handleOptionsButtonClicked(buttonVal) {
    $("#generateButtonsContainer").show();
    $("button.desc").hide();
    $("#val_" + buttonVal).show();
    
    $("#inputsContainer").show();
    $("#inputsContainer textarea").hide();
    $("#viewsContainer").hide();
    $("#playerNamesContainer").hide();
    $("#dataInput_" + buttonVal).show();
    $("#shareButtonContainer").hide();
}

function handleGenerateViewButtonClicked(v) {
    var inputData = gatherInputData(v);
        if (inputData.length == 0) {
            window.alert("Please input valid data for at least one user");
            return;
        }

        $("div.view").hide();
        $("#generateButtonsContainer").hide();
        $("#inputsContainer").hide();
        $("#viewsContainer").show();
        $("#playerNamesContainer").show();
        $("#shareButtonContainer").show();

        if (v == "dlcDungeons") {
            populateDlcDungeonsFromData(inputData);
        } else if (v == "baseDungeons") {
            populateBaseDungeonsFromData(inputData);
        } else if (v == "trials") {
            populateTrialssFromData(inputData);
        }

        populateShareUrl(v);

        $("#" + v + "View").show();
}

$(document).ready(function() {
    $("input[name$='options']").click(function() {
        handleOptionsButtonClicked($(this).val());
    });

    $("button[name$='generateViewButtons']").click(function() {
        handleGenerateViewButtonClicked($(this).val());
    });

    $("button[name$='resetLocalStorageButton']").click(function() {
        if (window.confirm("Do you really want to clear the local cache? This will also clear all input boxes' current values!")) {
            clearInputDataFromLocalStorage();
            clearInputs();
            handleOptionsButtonClicked("dlcDungeons");
        }
    });

    // Doing this dynamically allows for different URLs when run locally
    $("#navbarTitleLink").attr("href", getBaseUrl());

    buildViews();

    if (!loadDataFromUrlIfPresent()) {
        loadDataFromLocalStorage();
    }

    $(function () {
        $('#resetLocalStorageButton').hover(function(){
            $(this).tooltip('hide');
        })
        $('#resetLocalStorageButton').tooltip()
    })
});