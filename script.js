let button;
let clickCount = 0;

function initializeButton() {
    button = document.getElementById("button");
    button.addEventListener("click", handleClick);
}

function handleClick(count) {
    count = clickCount++;

    if (count === 1) {
        button.removeEventListener("click", handleClick);
        button.addEventListener("click", handleFirstClick);
    } else if (count === 2) {
        button.removeEventListener("click", handleFirstClick);
        button.addEventListener("click", handleSecondClick);
    }
    // } else if (count===3) {
    //     button.removeEventListener("click", handleSecondClick);
    //     button.addEventListener("click", handleThirdClick);
    // }// Add more conditions for additional click counts if needed
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

// Call the initializeButton function to set up the initial event listener
initializeButton();


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