const sweep=document.getElementById("sweeper");
const ping=new Audio("ping.wav");

function request() {
    sweep.style.display = "block";
    ping.play();
}