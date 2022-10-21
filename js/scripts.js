//function for gathering input and storing them into variables
// function getAndHideResults() {
//   //hide results section
//   let results = document.getElementById("results");
//   results.setAttribute("class", "hidden");
// }
//function for branching
function branching(e) {
  e.preventDefault();
  let results = document.getElementById("language");
  results.setAttribute("class", "hidden");

  const prefer = document.querySelector("input[name='prefer']:checked").value;
  const crying = document.querySelector("input[name='crying']:checked").value;
  const room = document.querySelector("input[name='room']:checked").value;
  const gravity = document.querySelector("input[name='gravity']:checked").value;
  const mike = document.querySelector("input[name='mike']:checked").value;

  let ruby = "Ruby on Rails."; // 1, 1, 1 or 1, 1, 2
  let python = "Python."; //2, 1, 1 or 2, 2, 1
  let js = "JavaScript." //1, 2, 1 or 2, 2, 2
  let funny = "N/A! If you selected these options, you should be a tree cutter." // 2, 1, 2

  if (prefer === "1" && room === "1" && mike === "1" ) {
    results.removeAttribute("class", "hidden");
    document.getElementById("language").innerText = ruby;
  } else if (prefer === "2" && room === "1" && mike === "1" ) {
    results.removeAttribute("class", "hidden");
    document.getElementById("language").innerText = python;
  } else if (prefer === "1" && room === "2" && mike === "1" ) {
    results.removeAttribute("class", "hidden");
    document.getElementById("language").innerText = js;
  } else if (prefer === "1" && room === "1" && mike === "2" ) {
    results.removeAttribute("class", "hidden");
    document.getElementById("language").innerText = ruby;
  } else if (prefer === "2" && room === "2" && mike === "1" ) {
    results.removeAttribute("class", "hidden");
    document.getElementById("language").innerText = python;
  } else if (prefer === "2" && room === "2" && mike === "2" ) {
    results.removeAttribute("class", "hidden");
    document.getElementById("language").innerText = js;
  } else {
    results.removeAttribute("class", "hidden");
    document.getElementById("language").innerText = funny;
  }
}
//function hidding results
// function showResults() {
//   results.removeAttribute("class", "hidden");
// }

//window onload 
window.addEventListener("load", function() {
  let form = document.querySelector("form");
  form.addEventListener("submit", branching);
});