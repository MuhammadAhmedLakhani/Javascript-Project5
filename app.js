

function action(event) {
    console.log("test", event.key)
    if (event.key === 'a') {
        lionMove("lionForward")
    } else if (event.key === "f") {
        lionMove("lionBackward")
    } else if(event.key === " "){
        lionlionPower()
    }else if(event.key === "ArrowLeft"){
        wrestlerMove("wrestlerForward")
    }else if (event.key === "ArrowRight"){
        wrestlerMove("wrestlerBackward")
    }
}

var lionForward = false;
var lionBackward = false;
var lion = document.getElementById("lion");
var left = 220;
function lionMove(type) {
    if (type === "lionForward") {
        left += 20;
        if (!lionForward) {
            lion.src = "images/lionforward.gif"
            lionForward = true
        }

        lion.style.left = left + "px"
    }else if(type === 'lionBackward'){
        if(!lionBackward){
            lion.src = "images/lionbackward.gif"
            lionBackward = true
        }
        left -= 20;
        lion.style.left = left + 'px' 
    }


}

function resetAction() {
    console.log("reset run")
    lion.src  = "images/Lion.gif"
    lionForward = false
    lionBackward = false
    lionPower = false;
    wrestler.src = "images/wrestler.gif"
    wrestlerForward = false;
    wrestlerBackward = false
}

var lionPower = false
function lionlionPower(){
    console.log("lionPowershow")
    if(!lionPower){
        lion.src = "images/lionpower.gif"
        lionPower = true
    }
}

var wrestlerForward = false;
var wrestlerBackward  = false;

var right = 200;

var wrestler = document.getElementById("wrestler")

function wrestlerMove(type) {
    if (type === "wrestlerForward") {
        if (!wrestlerBackward) {
            wrestler.src = "images/wrestlerForward.gif"
            wrestlerBackward = true
        }

        wrestler.style.width = "300px"
        wrestler.style.height = "300px"
        right += 20;

        wrestler.style.right = right + "px"
    }else if(type === 'wrestlerBackward'){
        if(!wrestlerBackward){
            wrestler.src = "images/wrestlerForward.gif"
            wrestlerBackward = true
        }

        wrestler.style.width = "600px"
        wrestler.style.height = "600px"

        right -= 20;
        console.log(right,"right value")
        wrestler.style.right = right + 'px' 
    }


}












window.addEventListener("keydown", action)
window.addEventListener("keyup", resetAction)

window.addEventListener("ArrowLeft",action)
window.addEventListener("ArrowRight",action)

