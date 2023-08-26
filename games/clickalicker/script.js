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

function onMainBtnClick() {
    score+=perclick;
    mainBtn.innerHTML = score;
    mainBtn.style.fontSize = "75px";
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
        // SelfDrag.classList.remove("hidden");

        goal = 10000;
    }
    if (score >= 10000 && goal === 10000) {
        window.alert("Goal reached! Unlocked: Charged Cursor");
        ChargedCursor.classList.remove("hidden");


        // LAST GOAL
        goal = 9999999999;
        goalText.innerHTML = "All goals reached!";
        body.style.backgroundColor = "#FFED8A";
        mainBtn.style.backgroundColor = "#FFDE2E";
        window.alert("All goals reached!")
        topBar.style.backgroundColor = "#FFD700";
        statsBox.style.backgroundColor = "#FFD700";
    }
}

function notEnoughScoreAlert() {
    window.alert("You don't have enough score to buy this!");
}

function upgradeExtraCursor() {
    if (score >= cost_ExtraCursor) {
        score -= cost_ExtraCursor;
        level_ExtraCursor++;
        cost_ExtraCursor *= 3;

        // Upgrade action
        perclick++;

        // Update text
        perClickText.innerHTML = `${perclick}`
        costText_ExtraCursor.innerHTML = `Cost: ${cost_ExtraCursor} score`;
        levelText_ExtraCursor.innerHTML = `Level: ${level_ExtraCursor+1}`;
        mainBtn.innerHTML = score;
    }
    else {
        notEnoughScoreAlert();
    }
}

function bulkUpgradeExtraCursor() {
    if (score >= (cost_ExtraCursor * 5)) {
        score -= (cost_ExtraCursor * 5);
        level_ExtraCursor++;
        cost_ExtraCursor *= 15;

        // Upgrade action
        perclick+=5;

        // Update text
        perClickText.innerHTML = `${perclick}`
        costText_ExtraCursor.innerHTML = `Cost: ${cost_ExtraCursor} score`;
        levelText_ExtraCursor.innerHTML = `Level: ${level_ExtraCursor+1}`;
        mainBtn.innerHTML = score;
    }
    else {
        notEnoughScoreAlert();
    }
}

function upgradeChargedCursor() {
    if (score >= cost_ChargedCursor) {
        score -= cost_ChargedCursor;
        level_ChargedCursor++;
        cost_ChargedCursor *= 3;

        // Upgrade action
        perclick+=10;

        // Update text
        perClickText.innerHTML = `${perclick}`
        costText_ChargedCursor.innerHTML = `Cost: ${cost_ChargedCursor} score`;
        levelText_ChargedCursor.innerHTML = `Level: ${level_ChargedCursor+1}`;
        mainBtn.innerHTML = score;
    }
    else {
        notEnoughScoreAlert();
    }
}

function bulkUpgradeChargedCursor() {
    if (score >= (cost_ChargedCursor * 5)) {
        score -= (cost_ChargedCursor * 5);
        level_ChargedCursor++;
        cost_ChargedCursor *= 15;

        // Upgrade action
        perclick+=50;

        // Update text
        perClickText.innerHTML = `${perclick}`
        costText_ChargedCursor.innerHTML = `Cost: ${cost_ChargedCursor} score`;
        levelText_ChargedCursor.innerHTML = `Level: ${level_ChargedCursor+1}`;
        mainBtn.innerHTML = score;
    }
    else {
        notEnoughScoreAlert();
    }
}

function upgradeDoubleClicker() {
    if (score >= cost_DoubleClicker) {
        score -= cost_DoubleClicker;
        level_DoubleClicker++;
        cost_DoubleClicker *= 3;

        // Upgrade action
        perclick*=2;

        // Update text
        perClickText.innerHTML = `${perclick}`
        costText_DoubleClicker.innerHTML = `Cost: ${cost_DoubleClicker} score`;
        levelText_DoubleClicker.innerHTML = `Level: ${level_DoubleClicker+1}`;
        mainBtn.innerHTML = score;
    }
    else {
        notEnoughScoreAlert();
    }
}

function bulkUpgradeDoubleClicker() {
    if (score >= cost_DoubleClicker*5) {
        score -= cost_DoubleClicke;
        level_DoubleClicker++;
        cost_DoubleClicker *= 15;

        // Upgrade action
        perclick*=10;

        // Update text
        perClickText.innerHTML = `${perclick}`
        costText_DoubleClicker.innerHTML = `Cost: ${cost_DoubleClicker} score`;
        levelText_DoubleClicker.innerHTML = `Level: ${level_DoubleClicker+1}`;
        mainBtn.innerHTML = score;
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
        cost_DragClick *= 2;
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
    }
    else {
        notEnoughScoreAlert();
    }
}

function bulkUpgradeDragClick() {
    if (score >= cost_DragClick) {
        score -= cost_DragClick;
        level_DragClick+=5;
        cost_DragClick *= 10;
        persecond += 10;
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
        if (expDragClickers === 1) {
            setInterval(dragClickExp, 2500);
        }

        // Update text
        perSecondText.innerHTML = `${persecond.toFixed(1)}`
        costText_ExpDrag.innerHTML = `Cost: ${cost_ExpDrag} score`;
        levelText_ExpDrag.innerHTML = `Level: ${level_ExpDrag+1}`;
        mainBtn.innerHTML = score;
    }
    else {
        notEnoughScoreAlert();
    }
}