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
}, 1000);



// SLIDER 3 (5 images - name="E")
let eIndex = 1;
setInterval(() => {
    document.getElementById('E' + eIndex).checked = true;
    eIndex++;
    if (eIndex > 5) eIndex = 1;
}, 1000);

// SLIDER 4 (3 images - name="p")
let pIndex = 1;
setInterval(() => {
    document.getElementById('p' + pIndex).checked = true;
    pIndex++;
    if (pIndex > 3) pIndex = 1;
}, 1000);


// Sign In Box


let body= document.querySelector('body')
let signInBox= document.querySelector('.sign-in-box')
let signInContainer= document.querySelector('.sign-in-container')

function hideBox(){
    signInContainer.style.display='none'
    document.body.style.overflow='auto'
    window.location.reload()
}

function showBox(){
    signInContainer.style.display='flex'
    document.body.style.overflow='hidden'
}
