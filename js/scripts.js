// onload function
window.onload = function () {
  const form = document.querySelector("form");

  form.onsubmit = function (e) {
    e.preventdefault();
    let questions = document.getElementById("questions");
    let suggestion = document.getElementById("suggestion");

    questions.setAttribute("class", "hidden");
    suggestions.setAttribute("class", "hidden");
  };
};
