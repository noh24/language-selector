//function for gathering input and storing them into variables
function getAndHideResults(e) {
  e.preventDefault();
  console.log("3");
  //hide results section
  let results = document.getElementById("results");
  results.setAttribute("class", "hidden");
  //variables
  const prefer = document.querySelector("input[name='prefer']:checked").value;
  const crying = document.querySelector("input[name='crying']:checked").value;
  const room = document.querySelector("input[name='room']:checked").value;
  const gravity = document.querySelector("input[name='gravity']:checked").value;
  const mike = document.querySelector("input[name='mike']:checked").value;
}
//function for branching
function branching() {
  console.log("3");
  getAndHideResults();
  
  let ruby = "Ruby on Rails"; // 1, 1, 1 or 1, 1, 2
  let python = "Python"; //2, 1, 1 or 2, 2, 1
  let js = "JavaScript" //1, 2, 1 or 2, 2, 2

  if (prefer === "1" && room === "1" && mike === "1" ) {
    document.getElementById("results").removeAttribute("class", "hidden");
    document.getElementById("language").innerText = ruby;
  } else if (prefer === "2" && room === "1" && mike === "1" ) {
    document.getElementById("results").removeAttribute("class", "hidden");
    document.getElementById("language").innerText = python;
  } else if (prefer === "1" && room === "2" && mike === "1" ) {
    document.getElementById("results").removeAttribute("class", "hidden");
    document.getElementById("language").innerText = js;
  } else if (prefer === "1" && room === "1" && mike === "2" ) {
    document.getElementById("results").removeAttribute("class", "hidden");
    document.getElementById("language").innerText = ruby;
  } else if (prefer === "2" && room === "2" && mike === "1" ) {
    document.getElementById("results").removeAttribute("class", "hidden");
    document.getElementById("language").innerText = python;
  } else if (prefer === "2" && room === "2" && mike === "2" ) {
    document.getElementById("results").removeAttribute("class", "hidden");
    document.getElementById("language").innerText = js;
  }
}
//function hidding results
// function showResults() {
//   results.removeAttribute("class", "hidden");
// }

//window onload 
window.addEventListener("load", function() {
  console.log("1");
  document.querySelector("fieldset").addEventListener("submit", branching);
});