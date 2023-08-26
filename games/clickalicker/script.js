const mainBtn = document.getElementById("mainBtn");
mainBtn.addEventListener("click", onMainBtnClick);
let score = 0
let perclick = 1;
const perClickText = document.getElementById("perClick");
let persecond = 0;
const perSecondText = document.getElementById("perSecond");
let goal = 1000;
const goalText = document.getElementById("goal");
const body = document.getElementById("body");
const topBar = document.getElementById("topbar");
const statsBox = document.getElementById("stats");
const devModeButton = document.getElementById("devMode");
const devModeStat = document.getElementById("devModeStat");
const saveButton = document.getElementById("saveButton");
let savedYet = true;
const resetButton = document.getElementById("resetButton");

// EXTRA CURSOR
let level_ExtraCursor = 0;
let cost_ExtraCursor = 3;
let costText_ExtraCursor = document.getElementById("cost_ExtraCursor");
let levelText_ExtraCursor = document.getElementById("level_ExtraCursor");
let purchaseButton_ExtraCursor = document.getElementById("purchase_ExtraCursor");
purchaseButton_ExtraCursor.addEventListener("click", upgradeExtraCursor);
let purchaseBulkButton_ExtraCursor = document.getElementById("purchaseBulk_ExtraCursor");
purchaseBulkButton_ExtraCursor.addEventListener("click", bulkUpgradeExtraCursor);

// CHARGED CURSOR
const ChargedCursor = document.getElementById("chargedCursor");
let level_ChargedCursor = 0;
let cost_ChargedCursor = 5;
let costText_ChargedCursor = document.getElementById("cost_ChargedCursor");
let levelText_ChargedCursor = document.getElementById("level_ChargedCursor");
let purchaseButton_ChargedCursor = document.getElementById("purchase_ChargedCursor");
purchaseButton_ChargedCursor.addEventListener("click", upgradeChargedCursor);
let purchaseBulkButton_ChargedCursor = document.getElementById("purchaseBulk_ChargedCursor");
purchaseBulkButton_ChargedCursor.addEventListener("click", bulkUpgradeChargedCursor);


// DRAG CLICKER
let level_DragClick = 0;
let cost_DragClick = 15;
let costText_DragClick = document.getElementById("cost_DragClick");
let levelText_DragClick = document.getElementById("level_DragClick");
let purchaseButton_DragClick = document.getElementById("purchase_DragClick");
purchaseButton_DragClick.addEventListener("click", upgradeDragClick);
let purchaseBulkButton_DragClick = document.getElementById("purchaseBulk_DragClick");
purchaseBulkButton_DragClick.addEventListener("click", bulkUpgradeDragClick);
let dragClickers = 0;

// SELF DRAG CLICK
let SelfDrag = document.getElementById("selfDrag");
let level_SelfDrag = 0;
let cost_SelfDrag = 15;
let costText_SelfDrag = document.getElementById("cost_selfDrag");
let levelText_SelfDrag　= document.getElementById("level_selfDrag");
let purchaseButton_SelfDrag = document.getElementById("purchase_selfDrag");
purchaseButton_SelfDrag.addEventListener("click", upgradeSelfDrag);
let purchaseBulkButton_SelfDrag = document.getElementById("purchaseBulk_selfDrag");
purchaseBulkButton_SelfDrag.addEventListener("click", bulkUpgradeSelfDrag);
let selfDragClickers = 0;

// EXPERIENCED DRAG CLICKER
let ExpDrag = document.getElementById("expDrag");
let level_ExpDrag = 0;
let cost_ExpDrag = 25;
let costText_ExpDrag = document.getElementById("cost_ExpDrag");
let levelText_ExpDrag = document.getElementById("level_ExpDrag");
let purchaseButton_ExpDrag = document.getElementById("purchase_ExpDrag");
purchaseButton_ExpDrag.addEventListener("click", upgradeExpDrag);
let purchaseBulkButton_ExpDrag = document.getElementById("purchaseBulk_ExpDrag");
purchaseBulkButton_ExpDrag.addEventListener("click", bulkUpgradeExpDrag);
let expDragClickers = 0;

// HIRED GAMER
let HiredGamer = document.getElementById("hiredGamer");
let level_HiredGamer = 0;
let cost_HiredGamer = 20;
let costText_HiredGamer = document.getElementById("cost_HiredGamer");
let levelText_HiredGamer = document.getElementById("level_HiredGamer");
let purchaseButton_HiredGamer = document.getElementById("purchase_HiredGamer");
purchaseButton_HiredGamer.addEventListener("click", upgradeHiredGamer);
let purchaseBulkButton_HiredGamer = document.getElementById("purchaseBulk_HiredGamer");
purchaseBulkButton_HiredGamer.addEventListener("click", bulkUpgradeHiredGamer);
let gamers = 0;

// AUTOCLICKER
let Autoclicker = document.getElementById("autoclicker");
let level_Autoclicker = 0;
let cost_Autoclicker = 20;
let costText_Autoclicker = document.getElementById("cost_Autoclicker");
let levelText_Autoclicker = document.getElementById("level_Autoclicker");
let purchaseButton_Autoclicker = document.getElementById("purchase_Autoclicker");
purchaseButton_Autoclicker.addEventListener("click", upgradeAutoclicker);
let purchaseBulkButton_Autoclicker = document.getElementById("purchaseBulk_Autoclicker");
purchaseBulkButton_Autoclicker.addEventListener("click", bulkUpgradeAutoclicker);
let autoclickers = 0;

// DOUBLE CLICKER
let DoubleClicker = document.getElementById("doubleClicker");
let level_DoubleClicker = 0;
let cost_DoubleClicker = 1000;
let costText_DoubleClicker = document.getElementById("cost_DoubleClicker");
let levelText_DoubleClicker = document.getElementById("level_DoubleClicker");
let purchaseButton_DoubleClicker = document.getElementById("purchase_DoubleClicker");
purchaseButton_DoubleClicker.addEventListener("click", upgradeDoubleClicker);
let purchaseBulkButton_DoubleClicker = document.getElementById("purchaseBulk_DoubleClicker");
purchaseBulkButton_DoubleClicker.addEventListener("click", bulkUpgradeDoubleClicker);

devModeButton.addEventListener("click", () => {
    DoubleClicker.classList.remove("hidden");
    ExpDrag.classList.remove("hidden");
    ChargedCursor.classList.remove("hidden");
    SelfDrag.classList.remove("hidden");
    HiredGamer.classList.remove("hidden");
    Autoclicker.classList.remove("hidden");
    devModeStat.classList.remove("hidden");
    window.alert("Developer mode enabled!");
});


function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

function loadGoals() {
    if (score >= 1000 && goal === 1000) {
        window.alert("Goal reached! Unlocked: Double Clicker");
        DoubleClicker.classList.remove("hidden");
        goal = 2500;
        goalText.innerHTML = "Next goal: 2500";
    }
    if (score >= 2500 && goal === 2500) {
        window.alert("Goal reached! Unlocked: Experienced Drag Clicker");
        ExpDrag.classList.remove("hidden");

        goal = 5000;
    }
    if (score >= 5000 && goal === 5000) {
        window.alert("Goal reached! Unlocked: Self Drag Clicker");
        SelfDrag.classList.remove("hidden");

        goal = 7500;
    }
    if (score >= 7500 && goal === 7500) {
        window.alert("Goal reached! Unlocked: Hired Gamer");
        HiredGamer.classList.remove("hidden");

        goal = 10000;
    }
    if (score >= 10000 && goal === 10000) {
        window.alert("Goal reached! Unlocked: Charged Cursor");
        ChargedCursor.classList.remove("hidden");

        goal = 20000;
    }
    if (score >= 20000 && goal === 20000) {
        window.alert("Goal reached! Unlocked: Autoclicker");
        Autoclicker.classList.remove("hidden");

        // LAST GOAL
        goal = 0;
        goalText.innerHTML = "All goals reached!";
        body.style.backgroundColor = "#FFED8A";
        mainBtn.style.backgroundColor = "#FFDE2E";
        window.alert("All goals reached!")
        topBar.style.backgroundColor = "#FFD700";
        statsBox.style.backgroundColor = "#FFD700";
    }
}

function onMainBtnClick() {
    score+=perclick;
    mainBtn.innerHTML = score;
    mainBtn.style.fontSize = "75px";
    loadGoals();
    savedYet = false;
}

function notEnoughScoreAlert() {
    window.alert("You can't afford this!");
}

function upgradeExtraCursor() {
    if (score >= cost_ExtraCursor) {
        score -= cost_ExtraCursor;
        level_ExtraCursor++;
        cost_ExtraCursor = Math.round(cost_ExtraCursor *= 2.5);

        // Upgrade action
        perclick++;

        // Update text
        perClickText.innerHTML = `${perclick}`
        costText_ExtraCursor.innerHTML = `Cost: ${cost_ExtraCursor} score`;
        levelText_ExtraCursor.innerHTML = `Level: ${level_ExtraCursor+1}`;
        mainBtn.innerHTML = score;
        savedYet = false;
    }
    else {
        notEnoughScoreAlert();
    }
}

function bulkUpgradeExtraCursor() {
    if (score >= (cost_ExtraCursor * 5)) {
        score -= (cost_ExtraCursor * 5);
        level_ExtraCursor++;
        cost_ExtraCursor = Math.round(cost_ExtraCursor *= 12.5);

        // Upgrade action
        perclick+=5;

        // Update text
        perClickText.innerHTML = `${perclick}`
        costText_ExtraCursor.innerHTML = `Cost: ${cost_ExtraCursor} score`;
        levelText_ExtraCursor.innerHTML = `Level: ${level_ExtraCursor+1}`;
        mainBtn.innerHTML = score;
        savedYet = false;
    }
    else {
        notEnoughScoreAlert();
    }
}

function upgradeSelfDrag() {
    if (score >= cost_SelfDrag && persecond >= 2) {
        score -= cost_SelfDrag;
        level_SelfDrag++;
        cost_SelfDrag = Math.round(cost_SelfDrag *= 1.5);

        // Upgrade action
        perclick+=15;
        persecond-=2;

        // Update text
        perClickText.innerHTML = `${perclick}`
        perSecondText.innerHTML = `${persecond}`
        costText_SelfDrag.innerHTML = `Cost: ${cost_SelfDrag} score`;
        levelText_SelfDrag.innerHTML = `Level: ${level_SelfDrag+1}`;
        mainBtn.innerHTML = score;
        savedYet = false;
    }
    else {
        notEnoughScoreAlert();
    }
}

function bulkUpgradeSelfDrag() {
    if (score >= (cost_SelfDrag * 5) && persecond >= 10) {
        score -= (cost_SelfDrag * 5);
        level_SelfDrag++;
        cost_SelfDrag = Math.round(cost_SelfDrag *= 7.5);;

        // Upgrade action
        perclick+=75;
        persecond-=10;

        // Update text
        perClickText.innerHTML = `${perclick}`
        perSecondText.innerHTML = `${persecond}`
        costText_SelfDrag.innerHTML = `Cost: ${cost_SelfDrag} score`;
        levelText_SelfDrag.innerHTML = `Level: ${level_SelfDrag+1}`;
        mainBtn.innerHTML = score;
        savedYet = false;
    }
    else {
        notEnoughScoreAlert();
    }
}

function upgradeChargedCursor() {
    if (score >= cost_ChargedCursor) {
        score -= cost_ChargedCursor;
        level_ChargedCursor++;
        cost_ChargedCursor *= 2;

        // Upgrade action
        perclick+=10;

        // Update text
        perClickText.innerHTML = `${perclick}`
        costText_ChargedCursor.innerHTML = `Cost: ${cost_ChargedCursor} score`;
        levelText_ChargedCursor.innerHTML = `Level: ${level_ChargedCursor+1}`;
        mainBtn.innerHTML = score;
        savedYet = false;
    }
    else {
        notEnoughScoreAlert();
    }
}

function bulkUpgradeChargedCursor() {
    if (score >= (cost_ChargedCursor * 5)) {
        score -= (cost_ChargedCursor * 5);
        level_ChargedCursor++;
        cost_ChargedCursor *= 10;

        // Upgrade action
        perclick+=50;

        // Update text
        perClickText.innerHTML = `${perclick}`
        costText_ChargedCursor.innerHTML = `Cost: ${cost_ChargedCursor} score`;
        levelText_ChargedCursor.innerHTML = `Level: ${level_ChargedCursor+1}`;
        mainBtn.innerHTML = score;
        savedYet = false;
    }
    else {
        notEnoughScoreAlert();
    }
}

function upgradeDoubleClicker() {
    if (score >= cost_DoubleClicker) {
        score -= cost_DoubleClicker;
        level_DoubleClicker++;
        cost_DoubleClicker = Math.round(cost_DoubleClicker *= 2.25);;

        // Upgrade action
        perclick*=2;

        // Update text
        perClickText.innerHTML = `${perclick}`
        costText_DoubleClicker.innerHTML = `Cost: ${cost_DoubleClicker} score`;
        levelText_DoubleClicker.innerHTML = `Level: ${level_DoubleClicker+1}`;
        mainBtn.innerHTML = score;
        savedYet = false;
    }
    else {
        notEnoughScoreAlert();
    }
}

function bulkUpgradeDoubleClicker() {
    if (score >= cost_DoubleClicker*5) {
        score -= cost_DoubleClicker;
        level_DoubleClicker++;
        cost_DoubleClicker = Math.round(cost_DoubleClicker *= 11.25);;

        // Upgrade action
        perclick*=10;

        // Update text
        perClickText.innerHTML = `${perclick}`
        costText_DoubleClicker.innerHTML = `Cost: ${cost_DoubleClicker} score`;
        levelText_DoubleClicker.innerHTML = `Level: ${level_DoubleClicker+1}`;
        mainBtn.innerHTML = score;
        savedYet = false;
    }
    else {
        notEnoughScoreAlert();
    }
}

function dragClick() {
    score += (10 * dragClickers);
    mainBtn.innerHTML = score;
}

function upgradeDragClick() {
    if (score >= cost_DragClick) {
        score -= cost_DragClick;
        level_DragClick++;
        cost_DragClick = Math.round(cost_DragClick *= 1.5);;
        persecond += 2;
        dragClickers++;

        // Upgrade action
        if (dragClickers === 1) {
            setInterval(dragClick, 5000);
        }

        // Update text
        perSecondText.innerHTML = `${persecond.toFixed(1)}`
        costText_DragClick.innerHTML = `Cost: ${cost_DragClick} score`;
        levelText_DragClick.innerHTML = `Level: ${level_DragClick+1}`;
        mainBtn.innerHTML = score;
        savedYet = false;
    }
    else {
        notEnoughScoreAlert();
    }
}

function bulkUpgradeDragClick() {
    if (score >= cost_DragClick) {
        score -= cost_DragClick;
        level_DragClick+=5;
        cost_DragClick = Math.round(cost_DragClick *= 7.5);;
        persecond += 10;
        dragClickers += 5;

        // Upgrade action
        if (dragClickers === 1 || dragClickers === 5) {
            setInterval(dragClick, 5000);
        }

        // Update text
        perSecondText.innerHTML = `${persecond.toFixed(1)}`
        costText_DragClick.innerHTML = `Cost: ${cost_DragClick} score`;
        levelText_DragClick.innerHTML = `Level: ${level_DragClick+1}`;
        mainBtn.innerHTML = score;
        savedYet = false;
    }
    else {
        notEnoughScoreAlert();
    }
}

function clickAuto() {
    score += (1 * autoclickers);
    mainBtn.innerHTML = score;
}

function upgradeAutoclicker() {
    if (score >= cost_Autoclicker) {
        score -= cost_Autoclicker;
        level_Autoclicker++;
        cost_Autoclicker *= 3;
        persecond += 100;
        autoclickers++;

        // Upgrade action
        if (autoclickers === 1) {
            setInterval(clickAuto, 10);
        }

        // Update text
        perSecondText.innerHTML = `${persecond.toFixed(1)}`
        costText_Autoclicker.innerHTML = `Cost: ${cost_Autoclicker} score`;
        levelText_Autoclicker.innerHTML = `Level: ${level_Autoclicker+1}`;
        mainBtn.innerHTML = score;
        savedYet = false;
    }
    else {
        notEnoughScoreAlert();
    }
}

function bulkUpgradeAutoclicker() {
    if (score >= cost_Autoclicker) {
        score -= cost_Autoclicker;
        level_Autoclicker+=5;
        cost_Autoclicker *= 15;
        persecond += 500;
        autoclickers += 5;

        // Upgrade action
        if (autoclickers === 1 || autoclickers === 5) {
            setInterval(clickAuto, 10);
        }

        // Update text
        perSecondText.innerHTML = `${persecond.toFixed(1)}`
        costText_Autoclicker.innerHTML = `Cost: ${cost_Autoclicker} score`;
        levelText_Autoclicker.innerHTML = `Level: ${level_Autoclicker+1}`;
        mainBtn.innerHTML = score;
        savedYet = false;
    }
    else {
        notEnoughScoreAlert();
    }
}

function clickGamer() {
    score += (10 * gamers);
    mainBtn.innerHTML = score;
}

function upgradeHiredGamer() {
    if (score >= cost_HiredGamer) {
        score -= cost_HiredGamer;
        level_HiredGamer++;
        cost_HiredGamer = Math.round(cost_HiredGamer *= 1.75);;
        persecond += 2;
        gamers++;

        // Upgrade action
        if (gamers === 1) {
            setInterval(clickGamer, 1000);
        }

        // Update text
        perSecondText.innerHTML = `${persecond.toFixed(1)}`
        costText_HiredGamer.innerHTML = `Cost: ${cost_HiredGamer} score`;
        levelText_HiredGamer.innerHTML = `Level: ${level_HiredGamer+1}`;
        mainBtn.innerHTML = score;
        savedYet = false;
    }
    else {
        notEnoughScoreAlert();
    }
}

function bulkUpgradeHiredGamer() {
    if (score >= cost_HiredGamer) {
        score -= cost_HiredGamer;
        level_HiredGamer+=5;
        cost_HiredGamer = Math.round(cost_HiredGamer *= 8.75);;
        persecond += 10;
        gamers+=5;

        // Upgrade action
        if (gamers === 1 || gamers === 5) {
            setInterval(dragClick, 5000);
        }

        // Update text
        perSecondText.innerHTML = `${persecond.toFixed(1)}`
        costText_DragClick.innerHTML = `Cost: ${cost_DragClick} score`;
        levelText_DragClick.innerHTML = `Level: ${level_DragClick+1}`;
        mainBtn.innerHTML = score;
        savedYet = false;
    }
    else {
        notEnoughScoreAlert();
    }
}

function dragClickExp() {
    score += (10 * expDragClickers);
    mainBtn.innerHTML = score;
}

function upgradeExpDrag() {
    if (score >= cost_ExpDrag) {
        score -= cost_ExpDrag;
        level_ExpDrag++;
        cost_ExpDrag *= 2;
        persecond += 2;
        expDragClickers++;

        // Upgrade action
        if (expDragClickers === 1) {
            setInterval(dragClickExp, 2500);
        }

        // Update text
        perSecondText.innerHTML = `${persecond.toFixed(1)}`
        costText_ExpDrag.innerHTML = `Cost: ${cost_ExpDrag} score`;
        levelText_ExpDrag.innerHTML = `Level: ${level_ExpDrag+1}`;
        mainBtn.innerHTML = score;
        savedYet = false;
    }
    else {
        notEnoughScoreAlert();
    }
}

function bulkUpgradeExpDrag() {
    if (score >= cost_ExpDrag) {
        score -= cost_ExpDrag;
        level_ExpDrag+=5;
        cost_ExpDrag *= 10;
        persecond += 10;
        expDragClickers+=5;

        // Upgrade action
        if (expDragClickers === 1 || expDragClickers === 5) {
            setInterval(dragClickExp, 2500);
        }

        // Update text
        perSecondText.innerHTML = `${persecond.toFixed(1)}`
        costText_ExpDrag.innerHTML = `Cost: ${cost_ExpDrag} score`;
        levelText_ExpDrag.innerHTML = `Level: ${level_ExpDrag+1}`;
        mainBtn.innerHTML = score;
        savedYet = false;
    }
    else {
        notEnoughScoreAlert();
    }
}

saveButton.addEventListener('click', () => {
    let UserData = {
        "stats": {
            scorePerClick: perclick,
            scorePerSecond: persecond,
            currentGoal: goal,
            currentScore: score
        },
        "upgrades": {
            "ExtraCursor": {
                "cost": cost_ExtraCursor,
                "level": level_ExtraCursor
            },
            "DoubleClicker": {
                "cost": cost_DoubleClicker,
                "level": level_DoubleClicker
            },
            "ChargedCursor": {
                "cost": cost_ChargedCursor,
                "level": level_ChargedCursor
            },
            "SelfDrag": {
                "cost": cost_SelfDrag,
                "level": level_SelfDrag
            },
            "DragClick": {
                "cost": cost_DragClick,
                "level": level_DragClick
            },
            "ExpDrag": {
                "cost": cost_ExpDrag,
                "level": level_ExpDrag
            },
            "HiredGamer": {
                "cost": cost_HiredGamer,
                "level": level_HiredGamer
            },
            "Autoclicker": {
                "cost": cost_Autoclicker,
                "level": level_Autoclicker
            }
        }
    };

    localStorage.setItem("data", JSON.stringify(UserData));
    savedYet = true;
});

function loadData() {
    const parsedData = JSON.parse(localStorage.getItem("data"));

    // Load stats
    perclick = parsedData.stats.scorePerClick;
    persecond = parsedData.stats.scorePerSecond;
    goal = parsedData.stats.currentGoal;
    score = parsedData.stats.currentScore;

    // Load upgrades into variables
    let loaded_ec_cost = parsedData.upgrades.ExtraCursor.cost;
    let loaded_ec_level = parsedData.upgrades.ExtraCursor.level;

    let loaded_dc_cost = parsedData.upgrades.DoubleClicker.cost;
    let loaded_dc_level = parsedData.upgrades.DoubleClicker.level;

    let loaded_cc_cost = parsedData.upgrades.ChargedCursor.cost;
    let loaded_cc_level = parsedData.upgrades.ChargedCursor.level;

    let loaded_sd_cost = parsedData.upgrades.SelfDrag.cost;
    let loaded_sd_level = parsedData.upgrades.SelfDrag.level;

    let loaded_drag_cost = parsedData.upgrades.DragClick.cost;
    let loaded_drag_level = parsedData.upgrades.DragClick.level;

    let loaded_ed_cost = parsedData.upgrades.ExpDrag.cost;
    let loaded_ed_level = parsedData.upgrades.ExpDrag.level;

    let loaded_hg_cost = parsedData.upgrades.HiredGamer.cost;
    let loaded_hg_level = parsedData.upgrades.HiredGamer.level;

    let loaded_ac_cost = parsedData.upgrades.Autoclicker.cost;
    let loaded_ac_level = parsedData.upgrades.Autoclicker.level;

    // Load upgrades into text
    costText_ExtraCursor.innerHTML = `Cost: ${loaded_ec_cost} score`;
    levelText_ExtraCursor.innerHTML = `Level: ${loaded_ec_level+1}`;

    costText_DoubleClicker.innerHTML = `Cost: ${loaded_dc_cost} score`;
    levelText_DoubleClicker.innerHTML = `Level: ${loaded_dc_level+1}`;

    costText_ChargedCursor.innerHTML = `Cost: ${loaded_cc_cost} score`;
    levelText_ChargedCursor.innerHTML = `Level: ${loaded_cc_level+1}`;

    costText_SelfDrag.innerHTML = `Cost: ${loaded_sd_cost} score`;
    levelText_SelfDrag.innerHTML = `Level: ${loaded_sd_level+1}`;

    costText_DragClick.innerHTML = `Cost: ${loaded_drag_cost} score`;
    levelText_DragClick.innerHTML = `Level: ${loaded_drag_level+1}`;

    costText_ExpDrag.innerHTML = `Cost: ${loaded_ed_cost} score`;
    levelText_ExpDrag.innerHTML = `Level: ${loaded_ed_level+1}`;

    costText_HiredGamer.innerHTML = `Cost: ${loaded_hg_cost} score`;
    levelText_HiredGamer.innerHTML = `Level: ${loaded_hg_level+1}`;

    costText_Autoclicker.innerHTML = `Cost: ${loaded_ac_cost} score`;
    levelText_Autoclicker.innerHTML = `Level: ${loaded_ac_level+1}`;
}

resetButton.addEventListener("click", () => {
    localStorage.clear();
    savedYet = true;
    location.reload();
});

function postLoadTextUpdate() {
    mainBtn.innerHTML = score;
    mainBtn.style.fontSize = "75px";
    perClickText.innerHTML = perclick;
    perSecondText.innerHTML = persecond;
    goalText.innerHTML = goal;
}

window.addEventListener("beforeunload", function (e) {
    if (!savedYet) {
        var confirmationMessage = 'You haven\'t saved yet!'
                            + 'If you leave before saving, your progress will be lost.';

    (e || window.event).returnValue = confirmationMessage; //Gecko + IE
    return confirmationMessage; //Gecko + Webkit, Safari, Chrome etc.
    }
});

loadData();
postLoadTextUpdate();
loadGoals();