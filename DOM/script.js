document.addEventListener("DOMContentLoaded", function(){
    let counterDisplay=document.getElementById("counterdisplay");
let incrementbtn = document.getElementById("increment-btn");
let decrementbtn = document.getElementById("decrement-btn");
let resetbtn = document.getElementById("reset-btn");

let countervalue=0;
  
function updatecounterdisplay(){
    counterDisplay.textContent=countervalue;
}
updatecounterdisplay();
incrementbtn.addEventListener("click", incrementby1);
decrementbtn.addEventListener("click",decrementby1);
resetbtn.addEventListener("click", resetvalue);

function incrementby1(){ if(countervalue<20){
    countervalue++;
    updatecounterdisplay(); }
}
function decrementby1(){ 
    if(countervalue>0){
    countervalue--;
    updatecounterdisplay();}
}
function resetvalue(){
    countervalue=0;
    updatecounterdisplay();
}
});