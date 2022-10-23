window.addEventListener("load", function() {
  hideResults();
  document.querySelector("form").addEventListener("submit", getResults);
  document.getElementById("reset-button").addEventListener("click", tryAgain);
  document.getElementById("light").addEventListener("click", lightMode)
  document.getElementById("dark").addEventListener("click", darkMode)
  document.getElementById("next1").addEventListener("click", next1Button);
  document.getElementById("next2").addEventListener("click", next2Button);
  document.getElementById("next3").addEventListener("click", next3Button);
  document.getElementById("next4").addEventListener("click", next4Button);
  document.getElementById("next5").addEventListener("click", next5Button);
  document.getElementById("back1").addEventListener("click", back1Button);
  document.getElementById("back2").addEventListener("click", back2Button);
  document.getElementById("back3").addEventListener("click", back3Button);
  document.getElementById("back4").addEventListener("click", back4Button);
  document.getElementById("back5").addEventListener("click", back5Button);

});
function hideResults() {
  document.getElementById("language").classList.add("hidden");
  document.getElementById("user-name1a").classList.add("hidden");
  document.getElementById("js-logo").classList.add("hidden");
  document.getElementById("ruby-logo").classList.add("hidden");
  document.getElementById("python-logo").classList.add("hidden");
  document.getElementById("tree-cutter").classList.add("hidden");
}
function showResetHideBack() {
  document.getElementById("back5").setAttribute("hidden", "hidden");
  document.getElementById("reset-button").removeAttribute("hidden", "hidden");
}
function showResults() {
  const name = document.querySelector("input[name='user-name']").value;
  document.getElementById("user-name1a").innerText = name;
  document.getElementById("user-name1a").classList.remove("hidden");
  document.querySelector("p.lead").classList.remove("hidden");
}
function moveToResults() {
  window.location.replace("#results");
}
function tryAgain() {
  window.location.reload();
  location.replace("#personality-quiz");
}
function lightMode() {
  document.querySelector("body").style.background = "linear-gradient(60deg, rgba(241, 227, 227, 0.247), rgba(161, 236, 205, 0.349), rgba(228, 235, 228, 0.267)";
  document.querySelector("body").style.color = "black";
  document.getElementById("language").style.color = "rgba(151, 21, 21, 0.733)";
  document.getElementById("userName1a").style.color = "rgba(151, 21, 21, 0.733)";
  let navButton = document.querySelectorAll(".nav-link");
  for (let i = 0; i < navButton.length; i++) {
    navButton[i].style.color = "black"; 
  }

  function next1Button() {
    const name = document.querySelector("input[name='user-name']").value;
    if (name) {
      document.getElementById("hidden1").classList.add("hidden");
      document.getElementById("hidden2").classList.remove("hidden");
      document.getElementById("error-message-container").classList.add("hidden");
    } else {
      document.getElementById("error-message-container").classList.remove("hidden");
    }
  }
  function next2Button() {
    document.getElementById("hidden2").classList.add("hidden");
    document.getElementById("hidden3").classList.remove("hidden");
  }
  function next3Button() {
    document.getElementById("hidden3").classList.add("hidden");
    document.getElementById("hidden4").classList.remove("hidden");
  }
  function next4Button() {
    document.getElementById("hidden4").classList.add("hidden");
    document.getElementById("hidden5").classList.remove("hidden");
  }
  function next5Button() {
    document.getElementById("hidden5").classList.add("hidden");
    document.getElementById("hidden6").classList.remove("hidden");
  }
  //next6button is the submit button
  function back1Button() {
    document.getElementById("hidden1").classList.remove("hidden");
    document.getElementById("hidden2").classList.add("hidden");
  }
  function back2Button() {
    document.getElementById("hidden2").classList.remove("hidden");
    document.getElementById("hidden3").classList.add("hidden");
  }
  function back3Button() {
    document.getElementById("hidden3").classList.remove("hidden");
    document.getElementById("hidden4").classList.add("hidden");
  }
  function back4Button() {
    document.getElementById("hidden4").classList.remove("hidden");
    document.getElementById("hidden5").classList.add("hidden");
  }
  function back5Button() {
    document.getElementById("hidden5").classList.remove("hidden");
    document.getElementById("hidden6").classList.add("hidden");
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
function getResults(e) {
  e.preventDefault();
  moveToResults();
  showResetHideBack();
  showResults();
  

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
    document.getElementById("language").classList.remove("hidden");
    document.getElementById("language").innerText = ruby;
    document.getElementById("ruby-logo").classList.remove("hidden");
  } else if (prefer === "2" && room === "1" && terrify === "1" ) {
    document.getElementById("language").classList.remove("hidden");
    document.getElementById("language").innerText = python;
    document.getElementById("python-logo").classList.remove("hidden");
  } else if (prefer === "1" && room === "2" && terrify === "1" ) {
    document.getElementById("language").classList.remove("hidden");
    document.getElementById("language").innerText = js;
    document.getElementById("js-logo").classList.remove("hidden");
  } else if (prefer === "1" && room === "1" && terrify === "2" ) {
    document.getElementById("language").classList.remove("hidden");
    document.getElementById("language").innerText = ruby;
    document.getElementById("ruby-logo").classList.remove("hidden");
  } else if (prefer === "2" && room === "2" && terrify === "1" ) {
    document.getElementById("language").classList.remove("hidden");
    document.getElementById("language").innerText = python;
    document.getElementById("python-logo").classList.remove("hidden");
  } else if (prefer === "2" && room === "2" && terrify === "2" ) {
    document.getElementById("language").classList.remove("hidden");
    document.getElementById("language").innerText = js;
    document.getElementById("js-logo").classList.remove("hidden");
  } else {
    document.getElementById("language").classList.remove("hidden");
    document.getElementById("language").innerText = funny;
    document.getElementById("tree-cutter").classList.remove("hidden");
  }
}






