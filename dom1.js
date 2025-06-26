//query selector all
let depts=document.querySelectorAll(".data")
depts[0].style.color="red";
depts[1].style.color="yellow";
depts[2].style.color="blue";
depts[0].style.fontSize="20px";
depts[1].style.fontSize="30px";
depts[2].style.fontSize="40px";




function changeBackground() {
    if (document.body.style.backgroundColor==="red"){
         document.body.style.backgroundColor="yellow";
    } else{
         document.body.style.backgroundColor="red";
    }
} 

function ewq() {
        document.body.style.backgroundColor=
        document.body.style.backgroundColor ==="lightblue" ? "red" : "yellow";
        }

function changetext() {
    document.getElementById("clg").innerHTML = "CMRCET , CMREC";
   document.getElementById("clg").style.backgroundColor ="coral";
   document.getElementById("clg").style.color="black";
   document.getElementById("clg").style.fontSize="50px";
   document.getElementById("clg").style.textAlign="center";
    alert("changetext  changed to CMRCET,CMREC");

}