// onload function
window.onload = function () {
    let form = document.querySelector("form");

    form.onsubmit = function (e) {
        e.preventdefault();
        let questions = document.getElementById("questions");
        let suggestion = document.getElementById("suggestion");
        // const nameInput = document.querySelector("input#name-input").value;

        questions.setAttribute("class", "hidden");
        // document.questions.setAttribute("class", "hidden");
        //suggestion.setAttribute("class", "hidden");
      
      questions.removeAttribute("class");
      suggestion.removeAttribute("class");
     
    };
};
