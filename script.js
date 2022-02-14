const sweep=document.getElementById("sweeper");
const ping=new Audio("ping.wav");
const slider=document.getElementById("status-slider");
const occYesWin=document.getElementById("occupant-yes-window");
const occNoWin=document.getElementById("occupant-no-window");
const driveNullWin=document.getElementById("driver-null-window");
const driveYesWin=document.getElementById("driver-yes-window");
const driveNoWin=document.getElementById("driver-no-window");
let requestSent;


// getStatus();

window.addEventListener('load', function() {
    console.log(window.location.pathname);
    if (this.window.location.pathname == "/deliveries/occupant.html") {
        occupant();
    }
    else if (this.window.location.pathname == "/deliveries/driver.html") {
        driver();
    }
    // console.log('All assets are loaded')
    // occVal = sessionStorage.getItem('storedSelection');
    // console.log("occVal = ", occVal);
    
    // if (occVal == "false") {
    //     driveNullWin.style.display = "none";
    //     driveYesWin.style.display = "none";
    //     driveNoWin.style.display = "block";
    // }
    // else if (occVal == "true") {
    //     driveNullWin.style.display = "none";
    //     driveNoWin.style.display = "none";
    //     driveYesWin.style.display = "block";
    // }
    // else if (occVal == "null") {
    //     driveNullWin.style.display = "block";
    //     driveNoWin.style.display = "none";
    //     driveYesWin.style.display = "none";
    // }
    
});

function request() {
    sweep.style.display = "block";
    sendPing() //send a notification to the occupant
    occVal = sessionStorage.getItem('storedSelection');
    console.log("occVal = ", occVal);
    requestSent = true;
    sessionStorage.setItem('request', requestSent);
}

// function getStatus() {
//     occVal = sessionStorage.getItem('storedSelection');
//     console.log("occVal = ", occVal);
//     slider.value = occVal;//trying to set the slider based on what is in storage(last known setting) - didn't work
//     let val=slider.checked;
//     console.log(val);
//     if (val == false) {
//         occYesWin.style.display = "none";
//         occNoWin.style.display = "block";
//         saveState(val);
//     }
//     else if (val == true) {
//         occNoWin.style.display = "none";
//         occYesWin.style.display = "block";
//         saveState(val);
//     }
//     getOccStatus();
// }

function getStatus() {
    
    occVal = sessionStorage.getItem('storedSelection');
    console.log("occVal = ", occVal);
    // slider.value = occVal;//trying to set the slider based on what is in storage(last known setting) - didn't work
    let val=slider.checked;
    console.log(val)
    // console.log(val);
    if (val == false) {
        occYesWin.style.display = "none";
        occNoWin.style.display = "block";
        saveState(val);
    }
    else if (val == true) {
        occNoWin.style.display = "none";
        occYesWin.style.display = "block";
        saveState(val);
    }
    else if (occVal == null) {
        
    }
    // getOccStatus();
}

function sendPing() {
    ping.play();
    //notify occupant a delivery has arrived
}

function saveState(val) {//save current setting to storage
    sessionStorage.setItem('storedSelection', val);
  }

function getOccStatus() {
    console.log("getOccStatus function running...");
    occVal = sessionStorage.getItem('storedSelection');
    console.log("occVal = ", occVal);
    if (occVal == "false") {
        driveNullWin.style.display = "none";
        driveYesWin.style.display = "none";
        driveNoWin.style.display = "block";
    }
    else if (occVal == "true") {
        driveNullWin.style.display = "none";
        driveNoWin.style.display = "none";
        driveYesWin.style.display = "block";
    }
    else if (occVal == null) {
        driveNullWin.style.display = "block";
        driveNoWin.style.display = "none";
        driveYesWin.style.display = "none";
    }
}

function occupant() {
     window.addEventListener('load', function() {
        console.log("Occupant function fully loaded...");
        occVal = sessionStorage.getItem('storedSelection');
        console.log("occVal = ", occVal);
        slider.checked = occVal;//trying to set the slider based on what is in storage(last known setting) - didn't work
        // let val=slider.checked;
        let val = occVal;
        console.log(val);
        if (val == false || occVal == "false") {
            console.log("occVal = ", occVal);
            slider.checked = false;
            occYesWin.style.display = "none";
            occNoWin.style.display = "block";
            saveState(val);
        }
        else if (val == true || occVal == "true") {
            console.log("occVal = ", occVal);
            slider.checked = true;
            occNoWin.style.display = "none";
            occYesWin.style.display = "block";
            saveState(val);
        }
     });
}

function driver() {
    window.addEventListener('load', function() {
        console.log("Driver function fully loaded...");

        requestSent = sessionStorage.getItem('request');
        console.log("requestSent = ", requestSent);
        if (requestSent == "true") {
            request();
            getOccStatus();
        }
        else {
            getOccStatus();
        }
    });
};
