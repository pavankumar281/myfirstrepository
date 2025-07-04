// Show/Hide dropdown menu
function showMenu(id) {
    let menuContainer = document.getElementById(id);
    menuContainer.style.visibility = "visible";
    menuContainer.style.opacity = "1";
}

function hideMenu(id) {
    let menuContainer = document.getElementById(id);
    menuContainer.style.visibility = "hidden";
    menuContainer.style.opacity = "0";
}

// SLIDER 1 (5 images - name="r")
let rIndex = 1;
setInterval(() => {
    document.getElementById('r' + rIndex).checked = true;
    rIndex++;
    if (rIndex > 5) rIndex = 1;
}, 2500);

// SLIDER 2 (2 images - name="D")
let dIndex = 1;
setInterval(() => {
    document.getElementById('D' + dIndex).checked = true;
    dIndex++;
    if (dIndex > 2) dIndex = 1;
}, 2500);

// SLIDER 3 (5 images - name="E")
let eIndex = 1;
setInterval(() => {
    document.getElementById('E' + eIndex).checked = true;
    eIndex++;
    if (eIndex > 5) eIndex = 1;
}, 2500);

// SLIDER 4 (3 images - name="p")
let pIndex = 1;
setInterval(() => {
    document.getElementById('p' + pIndex).checked = true;
    pIndex++;
    if (pIndex > 3) pIndex = 1;
}, 2500);