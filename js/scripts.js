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
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();//needed or not bc its already in the load???

        const htmlLang = document.getElementById("html-lang");
        htmlLang.setAttribute("class", "hidden");
        const cssLang = document.getElementById("css-lang");
        cssLang.setAttribute("class", "hidden");
        const cLang = document.getElementById("c-lang");
        cLang.setAttribute("class", "hidden");
       
        //question one
        const fruitQuestion = document.getElementById("fruitQuestion");
        const grapes = document.getElementById("grapes");
        const pomegranate = document.querySelector("pomegranate")

        if (fruitQuestion === pomegranate) {
            document.querySelector("div#html-lang").removeAttribute("class");
        } else {
            document.querySelector("div#css-lang").removeAttribute("class");
        }

        if (typeQuestion === fried) {
            document.querySelector("div#html-lang").removeAttribute("class");
        } else {
            document.querySelector("div#c-lang").removeAttribute("class");
        }

          if (typeQuestion === fried) {
              document.querySelector("div#html-lang").removeAttribute("class");
          } else {
              document.querySelector("div#c-lang").removeAttribute("class");
          }
        
          if (typeQuestion === fried) {
              document.querySelector("div#html-lang").removeAttribute("class");
          } else {
              document.querySelector("div#c-lang").removeAttribute("class");
          }
        
          if (typeQuestion === fried) {
              document.querySelector("div#html-lang").removeAttribute("class");
          } else {
              document.querySelector("div#c-lang").removeAttribute("class");
          }
    });
}

//opnload function
window.addEventListener ("load", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        //make name appear
        customMessage();
        questionsFunction();
    });
});