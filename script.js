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
                case 13:
                    restart();
                    break;
                                                                

        // Add more cases for additional click counts if needed
        default:
            break;
    }
}

function handleFirstClick() {
    console.log("First click event");
    replaceContent();
    const audio = document.getElementById("myAudio");
    // You can control the video using JavaScript, for example:
audio.play();
    
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
}

function restart () {
    clickCount=0;
    let c = document.querySelector(".picture");
    c.style.backgroundImage = 'url("./rightlookupwardsstanding.jpg")';

   //reseting of picture
    c.style.backgroundSize = "contain";
    c.style.backgroundPosition = "center";
    let e= document.querySelector(".words");
    e.innerText ="Dear Brownie";
}





    function replaceContent() {
        let b = document.querySelector(".picture");
            b.style.backgroundImage = 'url("./rightlookupwardstoyeobo.jpg")';
            // Optionally, you can also set other background properties like size and position
            b.style.backgroundSize = "contain";
            b.style.backgroundPosition = "center";
            let d= document.querySelector(".words");
            d.innerText ="We hope you are well.";
    }

    function replaceContent2 () {
        let b = document.querySelector(".picture");
        b.style.backgroundImage = 'url("./lookingatdonut.jpg")';

        // Optionally, you can also set other background properties like size and position
        b.style.backgroundSize = "contain";
        b.style.backgroundPosition = "center";
        let d= document.querySelector(".words");
        d.innerText ="We are doing fine here.";
    }

    function replaceContent3 () {
        let b = document.querySelector(".picture");
        b.style.backgroundImage = 'url("./leftlookside.jpg")';

        // Optionally, you can also set other background properties like size and position
        b.style.backgroundSize = "contain";
        b.style.backgroundPosition = "center";
        let d= document.querySelector(".words");
        d.innerText ="We hope there are plenty of treats for you in doggo heaven.";
    }

        function replaceContent4 () {
        let b = document.querySelector(".picture");
        b.style.backgroundImage = 'url("./leftlooklieflat.jpg")';

        // Optionally, you can also set other background properties like size and position
        b.style.backgroundSize = "contain";
        b.style.backgroundPosition = "center";
        let d= document.querySelector(".words");
        d.innerText ="We hope that you have made friends there.";
    }

    function replaceContent5 () {
        let b = document.querySelector(".picture");
        b.style.backgroundImage = 'url("./lookingupleft.jpg")';

        // Optionally, you can also set other background properties like size and position
        b.style.backgroundSize = "contain";
        b.style.backgroundPosition = "center";
        let d= document.querySelector(".words");
        d.innerText ="You are the best companion we have ever had.";
    }

    function replaceContent6 () {
        let b = document.querySelector(".picture");
        b.style.backgroundImage = 'url("./lookingattreat.jpg")';

        // Optionally, you can also set other background properties like size and position
        b.style.backgroundSize = "contain";
        b.style.backgroundPosition = "center";
        let d= document.querySelector(".words");
        d.innerText ="I hope you feel the same towards us as well.";
    }

    function replaceContent7 () {
        let b = document.querySelector(".picture");
        b.style.backgroundImage = 'url("./lookingatorangeleft.jpg")';

        // Optionally, you can also set other background properties like size and position
        b.style.backgroundSize = "contain";
        b.style.backgroundPosition = "center";
        let d= document.querySelector(".words");
        d.innerText ="We love you with all our heart.";
    }

    function replaceContent8 () {
        let b = document.querySelector(".picture");
        b.style.backgroundImage = 'url("./eatingorangeleft.jpg")';

        // Optionally, you can also set other background properties like size and position
        b.style.backgroundSize = "contain";
        b.style.backgroundPosition = "center";
        let d= document.querySelector(".words");
        d.innerText ="You gave us very fond memories.";
    }

    function replaceContent9 () {
        let b = document.querySelector(".picture");
        b.style.backgroundImage = 'url("./leftlookupwards.jpg")';

        // Optionally, you can also set other background properties like size and position
        b.style.backgroundSize = "contain";
        b.style.backgroundPosition = "center";
        let d= document.querySelector(".words");
        d.innerText ="We will never forget you.";
    }

    function replaceContent10 () {
        let b = document.querySelector(".picture");
        b.style.backgroundImage = 'url("./facemirrorwithyeobo.jpg")';

        // Optionally, you can also set other background properties like size and position
        b.style.backgroundSize = "contain";
        b.style.backgroundPosition = "center";
        let d= document.querySelector(".words");
        d.innerText ="Thank you for all the fun and joy we had together.";
    }

    function replaceContent11 () {
        let b = document.querySelector(".picture");
        b.style.backgroundImage = 'url("./inabox.jpg")';

        // Optionally, you can also set other background properties like size and position
        b.style.backgroundSize = "contain";
        b.style.backgroundPosition = "center";
        let d= document.querySelector(".words");
        d.innerText ="We will never forget you.";
    }

    function replaceContent12 () {
        let b = document.querySelector(".picture");
        b.style.backgroundImage = 'url("./frontlookupwards.jpg")';

        // Optionally, you can also set other background properties like size and position
        b.style.backgroundSize = "contain";
        b.style.backgroundPosition = "center";
        let d= document.querySelector(".words");
        d.innerText ="We missed you so much. We love you.";
    }





// Call the initializeButton function to set up the initial event listener
initializeButton();

