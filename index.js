const display=document.getElementById("display");

function append(input){
    display.value+=input;
}
function cleardisplay(){
    display.value="";
}
function calculate(){
 try{
    display.value=eval(display.value);
 }
 catch(error){
    display.value="Error";
 }
 
}
function back(){
 display.value = display.value.slice(0,-1);
}
function pow(){
    display.value="Shutting Down";
    setTimeout(()=>window.close(),3000);
}