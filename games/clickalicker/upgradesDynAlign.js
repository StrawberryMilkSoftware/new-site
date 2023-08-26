// for aligning the items to center vertically
// in the upgrades panel when the height is 
// less than 435px
const upgrades = document.getElementById('upgrades');

function updateUpgradesAlignment() {
    let scrollHeight = upgrades.scrollHeight;
    if (scrollHeight < 435) {
        upgrades.classList.add('alignVertical');
    }
    else {
        upgrades.classList.remove('alignVertical');
        clearInterval(intervalID);
    }
}

var intervalID = setInterval(updateUpgradesAlignment, 1000);