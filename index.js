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
let isOn = true;
let isCountingDown = false;

function pow() {

    // Prevent multiple clicks during countdown
    if (isCountingDown) return;

    if (isOn) {

        isCountingDown = true;

        let count = 3;

        const timer = setInterval(() => {
            display.value = `Shutting Down in ${count}`;
            count--;

            if (count < 0) {
                clearInterval(timer);

                display.value = "OFF";
                display.disabled = true;

                document.querySelectorAll("button").forEach(btn => {
                    if (btn.id !== "power") {
                        btn.disabled = true;
                        btn.classList.add("off");
                    }
                });

                isOn = false;
                isCountingDown = false;
            }

        }, 1000);

    } else {

        // Turn calculator ON
        display.disabled = false;
        display.value = "";

        document.querySelectorAll("button").forEach(btn => {
            btn.disabled = false;
            btn.classList.remove("off");
        });

        isOn = true;
    }
}