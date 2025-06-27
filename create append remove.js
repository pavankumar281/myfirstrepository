// Create and style a paragraph
let aish = document.createElement("p");
aish.innerHTML = "Memory 1 Tera Byte";
aish.style.color = "olive";
aish.style.fontSize = "20px";
document.getElementById("vasi").appendChild(aish);

// Remove the 4th element with class "list" after 2 seconds
setTimeout(() => {
    let praja = document.getElementsByClassName("list")[3];
    if (praja) {
        praja.remove();
    }
}, 2000);

// Create and style a new heading
let newHeading = document.createElement("h2");
newHeading.innerHTML = "This is a new heading added by Javascript!";
newHeading.style.color = "purple";
newHeading.style.fontSize = "24px";
document.body.appendChild(newHeading);

// Add a new paragraph after 3 seconds
setTimeout(() => {
    let newText = document.createElement("p");
    newText.textContent = "This is added after 3 seconds!";
    newText.style.color = "green";
    document.body.appendChild(newText);
}, 3000);



//append text to tag
let tagText = document.createElement("p");
tagText.textContent = "This  text is appended to the tag";
tagText.style.color = "orange";
document.getElementById("vasi").appendChild(tagText);



let myList = document.createElement("ul");
for (let i = 1; i <= 3; i++) {
let li = document.createElement("li");
li.textContent = "Item" +i;
li.style.color = "blue";
li.style.fontSize ="18px";

myList.appendChild(li);
document.body.appendChild(myList);
}