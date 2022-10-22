function branching(e) {
  e.preventDefault();
  moveToResults();
  let results = document.getElementById("language");
  results.setAttribute("class", "hidden");

  const prefer = document.querySelector("input[name='prefer']:checked").value;
  const crying = document.querySelector("input[name='crying']:checked").value;
  const room = document.querySelector("input[name='room']:checked").value;
  const earth = document.querySelector("input[name='earth']:checked").value;
  const terrify = document.querySelector("input[name='terrify']:checked").value;

  let ruby = "Ruby on Rails."; // 1, 1, 1 or 1, 1, 2
  let python = "Python."; //2, 1, 1 or 2, 2, 1
  let js = "JavaScript." //1, 2, 1 or 2, 2, 2
  let funny = "N/A! If you selected these options, you should be a tree cutter." // else, 2, 1, 2, 1, 1, 2

  if (prefer === "1" && room === "1" && terrify === "1" ) {
    results.removeAttribute("class", "hidden");
    results.innerText = ruby;
  } else if (prefer === "2" && room === "1" && terrify === "1" ) {
    results.removeAttribute("class", "hidden");
    results.innerText = python;
  } else if (prefer === "1" && room === "2" && terrify === "1" ) {
    results.removeAttribute("class", "hidden");
    results.innerText = js;
  } else if (prefer === "1" && room === "1" && terrify === "2" ) {
    results.removeAttribute("class", "hidden");
    results.innerText = ruby;
  } else if (prefer === "2" && room === "2" && terrify === "1" ) {
    results.removeAttribute("class", "hidden");
    results.innerText = python;
  } else if (prefer === "2" && room === "2" && terrify === "2" ) {
    results.removeAttribute("class", "hidden");
    results.innerText = js;
  } else {
    results.removeAttribute("class", "hidden");
    results.innerText = funny;
  }
}

window.addEventListener("load", function() {
  let form = document.querySelector("form");
  form.addEventListener("submit", branching);

  let light = document.getElementById("light");
  let dark = document.getElementById("dark");
  light.addEventListener("click", lightMode)
  dark.addEventListener("click", darkMode)

});

function lightMode() {
  document.querySelector("body").style.background = "linear-gradient(60deg, rgba(241, 227, 227, 0.247), rgba(161, 236, 205, 0.349), rgba(228, 235, 228, 0.267)";
  document.querySelector("body").style.color = "black";
  document.getElementById("language").style.color = "rgba(151, 21, 21, 0.733)";
  document.getElementById("userName1a").style.color = "rgba(151, 21, 21, 0.733)";
  let navButton = document.querySelectorAll(".nav-link");
  for (let i = 0; i < navButton.length; i++) {
    navButton[i].style.color = "black"; 
  }

}
function darkMode() {
  document.querySelector("body").style.background = "linear-gradient(60deg, rgba(7, 7, 7, 0.562), rgba(28, 121, 82, 0.349), rgba(26, 27, 26, 0.568)";
  document.querySelector("body").style.color = "white";
  document.getElementById("language").style.color = "rgba(255, 0, 0, 0.288)";
  document.getElementById("userName1a").style.color = "rgba(255, 0, 0, 0.288)";
  //loop?
  let navButton = document.querySelectorAll(".nav-link");
  for (let i = 0; i < navButton.length; i++) {
    navButton[i].style.color = "white";
  }
}
function moveToResults() {
  window.location.href = "#results";
}

//store all question divs into variables
//store all element's class list into variable
  //add and remove hidden class to div questions to make them appear one at a time


// make the result spans and picture reset/hide
  //target element and property to null 