function customMessage() {
    // const customMessageDiv = document.getElementById("custom-message");
    const nameInput = document.getElementById("name-input").value;
    document.querySelector("span#person-name").innerText = nameInput;
    document.querySelector("div#custom-message").removeAttribute("class");
}

function languageSuggestion() {
    const htmlLang = document.getElementById("html-lang");
    htmlLang.setAttribute("class", "hidden");
    const cssLang = document.getElementById("css-lang");
    cssLang.setAttribute("class", "hidden");
    const cLang = document.getElementById("c-lang");
    cLang.setAttribute("class", "hidden");
}

function questionsFunction() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        languageSuggestion();

        const fruitQuestion = document.querySelector(
            "input[name='fruitQuestion']"
        ); //how do you grab the element
        const grapes = document.querySelector("input[name='grapes']");

        const typeQuestion = document.querySelector(
            "input[name='typeQuestion']"
        );
        const fried = document.querySelector("input[name='fried']");

        if (fruitQuestion === grapes) {
            document.querySelector("div#c-lang").removeAttribute("class");
        } else {
            document.querySelector("div#html-lang").removeAttribute("class");
        }

        if (typeQuestion === fried) {
            document.querySelector("div#css-lang").removeAttribute("class");
        } else {
            document.querySelector("div#html-lang").removeAttribute("class");
        }
    });
}

//opnload function
window.addEventListener("load", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        //make name appear
        customMessage();
        questionsFunction();
    });
});
