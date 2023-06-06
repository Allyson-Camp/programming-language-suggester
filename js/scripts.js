function customMessage() {
    // const customMessageDiv = document.getElementById("custom-message");
    const nameInput = document.getElementById("name-input").value;
    // customMessageDiv.setAttribute("class", "hidden");
    document.querySelector("span#person-name").innerText = nameInput;
    document.querySelector("div#custom-message").removeAttribute("class");
    //makes user name appear in custom message
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
        if (grapes || salad) {
            document.querySelector("div#html-lang").removeAttribute("class");
        } else if (fried || pomegranate) {
            document.querySelector("div#css-lang").removeAttribute("class");
        } else {
          document.querySelector("div#c-lang").removeAttribute("class");
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

// let questions = document.getElementById("questions");
// let pomegranate = document.getElementById("pomegranate");
// let grapes = document.getElementById("grapes");
// let salad = document.getElementById("salad");
// let brussels = document.getElementById("brussels");
// let potatoes = document.getElementById("potatoes");
// let crunchy = document.getElementById("crunchy");
// let chewy = document.getElementById("chewy");
// let jamacian = document.getElementById("jamacian");
// let greek = document.getElementById("greek");
// let question1 = document.getElementById("question-one");
// let question2 = document.getElementById("question-two");
// let question3 = document.getElementById("question-three")

// let suggestion = document.getElementById("suggestion");
// let html = document.getElementById("html");
// let cSharp = document.getElementById("c#");
// let css = document.getElementById("css");

// const nameInput = document.querySelector("input#name-input").value;

// html.setAttribute("class", "hidden");
// document.questions.setAttribute("class", "hidden");
// suggestion.setAttribute("class", "hidden");

//     if (question1 === grapes) {
//       // document.querySelector("div#html").removeattribute("class");
//       document.querySelector("div#html").removeAttribute("class");
//     } else if (question1 === pomegranate) {
//       document.querySelector("div#css").removeAttribute("class");
//     }
//   }

//   if (question2 === fried) {
//     document.querySelector.cSharp.removeAttribute("hidden");
//   } else if (question2 === salad) {
//     document.querySelector.html.removeAttribute("class");
//   }

//   if (question3 === brussels) {
//       document.querySelector.cSharp.removeAttribute("hidden");
//   } else if (question3 === potatoes) {
//       document.querySelector.css.removeAttribute("class");
//   }

//   if (question4 === crunchy) {
//       document.querySelector.css.removeAttribute("hidden");
//   } else if (question4 === chewy) {
//       document.querySelector.html.removeAttribute("class");
//   }

//   if (question5 === jamacian) {
//       document.querySelector.html.removeAttribute("hidden");
//   } else if (question5 === greek) {
//       document.querySelector.html.removeAttribute("class");
