var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
       
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    
    });

}

document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {
    switch (key) {
        case "w":
            var audioW = new Audio ("sounds/crash.mp3");
            audioW.play();
            break;

        case "a":
            var audioA = new Audio ("sounds/kick-bass.mp3");
            audioA.play();
            break;

        case "s":
            var audioS = new Audio ("sounds/snare.mp3");
            audioS.play();
             break;

        case "d":
             var audioD = new Audio ("sounds/tom-1.mp3");
            audioD.play();
            break;

        case "j":
                var audioJ = new Audio ("sounds/tom-2.mp3");
                audioJ.play();
                break;

         case "k":
                 var audioK = new Audio ("sounds/tom-3.mp3");
                audioK.play();
                break;

        case "l":
                var audioL = new Audio ("sounds/tom-4.mp3");
                audioL.play();
                break;

        default: console.log(buttonInnerHTML);



    }
}


function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100)
}