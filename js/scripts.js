function customMessage() {
    // const customMessageDiv = document.getElementById("custom-message");
    const nameInput = document.getElementById("name-input").value;
    // customMessageDiv.setAttribute("class", "hidden");
    document.querySelector("span#person-name").innerText = nameInput;
    document.querySelector("div#custom-message").removeAttribute("class");
    //if (nameInput === "") or if !nameInput?? {
    // remove attribute of error message
    // }
}

function questionsFunction() {
    const questionForm = document.querySelector("form#questions");
    //?one
    questionForm.onsubmit = function (e) {
        e.preventDefault();

        let htmlLang = document.getElementById("html-lang");
        htmlLang.setAttribute("class", "hidden");
        let cssLang = document.getElementById("css-lang");
        cssLang.setAttribute("class", "hidden");
        let cLang = document.getElementById("c-lang");
        cLang.setAttribute("class", "hidden");
        //one
        const question1 = document.getElementById("question-one-div");
        let grapes = document.getElementById("grapes");
        let pomegranate = document.getElementById("pomegranate");

        //two
        const question2 = document.getElementById("question-two");
        let fried = document.getElementById("fried");
        let salad = document.getElementById("salad");
        //three
        //four
        //five
        //branching statements
        if (grapes) {
            document.querySelector("div#html-lang").removeAttribute("class");
        } else {
            document.querySelector("div#css-lang").removeAttribute("class");
        }

      //   if (fried) {
      //       document.querySelector("div#html-lang").removeAttribute("class");
      //   } else {
      //       document.querySelector("div#c-lang").removeAttribute("class");
      //   }
      
      //  if (salad) {
      //      document.querySelector("div#css-lang").removeAttribute("class");
      //  } else {
      //      document.querySelector("div#c-lang").removeAttribute("class");
      //  }
    };
}

//opnload function
window.onload = function () {
    const form = document.querySelector("form");

    form.onsubmit = function (e) {
        e.preventDefault();
        //make name appear
        customMessage();
        questionsFunction();
    };
};