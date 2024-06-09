let button;
let clickCount = 0;

function initializeButton() {
    button = document.getElementById("button");
    button.addEventListener("click", handleClick);
}

function handleClick() {
    clickCount++; // Increment clickCount on every click

    switch (clickCount) {
        case 1:
            handleFirstClick();
            break;
        case 2:
            handleSecondClick();
            break;
        case 3:
            handleThirdClick();
            break;
            case 4:
                handleForthClick();
                break;
                case 5:
                    handleFifthClick();
                    break;
                    case 6:
                        handleSixthClick();
                        break;
                        case 7:
                            handleSeventhClick();
                            break;
                            case 8:
                handleEighthClick();
                break;
                case 9:
                    handleNinthClick();
                    break;
                    case 10:
                        handleTenthClick();
                        break;
                        case 11:
                            handleEleventhClick();
                            break;
                            case 12:
                handleTwelvethClick();
                break;
                                                                

        // Add more cases for additional click counts if needed
        default:
            break;
    }
}

function handleFirstClick() {
    console.log("First click event");
    replaceContent();
}

function handleSecondClick() {
    console.log("Second click event");
    replaceContent2();
    // Do something for the second click
}

function handleThirdClick() {
    console.log("third click event");
    replaceContent3();

}

function handleForthClick() {
    console.log("forth click event");
    replaceContent4();

}

function handleFifthClick() {
    console.log("fifth click event");
    replaceContent5();

}

function handleSixthClick() {
    console.log("Sixth click event");
    replaceContent6();

}

function handleSeventhClick() {
    console.log("Seventh click event");
    replaceContent7();

}

function handleEighthClick() {
    console.log("Eighth click event");
    replaceContent8();

}

function handleNinthClick() {
    console.log("Ninth click event");
    replaceContent9();

}

function handleTenthClick() {
    console.log("Tenth click event");
    replaceContent10();

}

function handleEleventhClick() {
    console.log("Eleventh click event");
    replaceContent11();

}

function handleTwelvethClick() {
    console.log("Twelveth click event");
    replaceContent12();
    clickCount =0;
        let c = document.querySelector(".picture");
        c.style.backgroundImage = 'url("./rightlookupwardsstanding.jpg")';

       //reseting of picture
        c.style.backgroundSize = "contain";
        c.style.backgroundPosition = "center";

}





    function replaceContent() {
        let b = document.querySelector(".picture");
            b.style.backgroundImage = 'url("./rightlookupwardstoyeobo.jpg")';

            // Optionally, you can also set other background properties like size and position
            b.style.backgroundSize = "contain";
            b.style.backgroundPosition = "center";
    }

    function replaceContent2 () {
        let b = document.querySelector(".picture");
        b.style.backgroundImage = 'url("./lookingatdonut.jpg")';

        // Optionally, you can also set other background properties like size and position
        b.style.backgroundSize = "contain";
        b.style.backgroundPosition = "center";
    }

    function replaceContent3 () {
        let b = document.querySelector(".picture");
        b.style.backgroundImage = 'url("./leftlookside.jpg")';

        // Optionally, you can also set other background properties like size and position
        b.style.backgroundSize = "contain";
        b.style.backgroundPosition = "center";
    }

        function replaceContent4 () {
        let b = document.querySelector(".picture");
        b.style.backgroundImage = 'url("./leftlooklieflat.jpg")';

        // Optionally, you can also set other background properties like size and position
        b.style.backgroundSize = "contain";
        b.style.backgroundPosition = "center";
    }

    function replaceContent5 () {
        let b = document.querySelector(".picture");
        b.style.backgroundImage = 'url("./lookingupleft.jpg")';

        // Optionally, you can also set other background properties like size and position
        b.style.backgroundSize = "contain";
        b.style.backgroundPosition = "center";
    }

    function replaceContent6 () {
        let b = document.querySelector(".picture");
        b.style.backgroundImage = 'url("./lookingattreat.jpg")';

        // Optionally, you can also set other background properties like size and position
        b.style.backgroundSize = "contain";
        b.style.backgroundPosition = "center";
    }

    function replaceContent7 () {
        let b = document.querySelector(".picture");
        b.style.backgroundImage = 'url("./lookingatorangeleft.jpg")';

        // Optionally, you can also set other background properties like size and position
        b.style.backgroundSize = "contain";
        b.style.backgroundPosition = "center";
    }

    function replaceContent8 () {
        let b = document.querySelector(".picture");
        b.style.backgroundImage = 'url("./eatingorangeleft.jpg")';

        // Optionally, you can also set other background properties like size and position
        b.style.backgroundSize = "contain";
        b.style.backgroundPosition = "center";
    }

    function replaceContent9 () {
        let b = document.querySelector(".picture");
        b.style.backgroundImage = 'url("./leftlookupwards.jpg")';

        // Optionally, you can also set other background properties like size and position
        b.style.backgroundSize = "contain";
        b.style.backgroundPosition = "center";
    }

    function replaceContent10 () {
        let b = document.querySelector(".picture");
        b.style.backgroundImage = 'url("./facemirrorwithyeobo.jpg")';

        // Optionally, you can also set other background properties like size and position
        b.style.backgroundSize = "contain";
        b.style.backgroundPosition = "center";
    }

    function replaceContent11 () {
        let b = document.querySelector(".picture");
        b.style.backgroundImage = 'url("./inabox.jpg")';

        // Optionally, you can also set other background properties like size and position
        b.style.backgroundSize = "contain";
        b.style.backgroundPosition = "center";
    }

    function replaceContent12 () {
        let b = document.querySelector(".picture");
        b.style.backgroundImage = 'url("./frontlookupwards.jpg")';

        // Optionally, you can also set other background properties like size and position
        b.style.backgroundSize = "contain";
        b.style.backgroundPosition = "center";
    }

    // Get the video element
const video = document.getElementById("myVideo");
const audio = document.getElementById("myAudio");

window.onload = function () {
// You can control the video using JavaScript, for example:
video.play(); // Play the video
audio.play();
// Call the initializeButton function to set up the initial event listener
initializeButton();
}
