const buttonIT = document.getElementById("BIT");
const buttonES = document.getElementById("BES");
const buttonFR = document.getElementById("BFR")
const sectionIT = document.getElementById("IT");
const sectionES = document.getElementById("ES");
const sectionFR = document.getElementById("FR");

buttonIT.addEventListener("click", function () {
  if (sectionIT.style.display = "none") {
    sectionIT.style.display = "flex";
    sectionES.style.display = "none";
    sectionFR.style.display = "none";
  }
});

buttonES.addEventListener("click", function () {
  if (sectionES.style.display = "none") {
    sectionIT.style.display = "none";
    sectionES.style.display = "flex";
    sectionFR.style.display = "none";
  }
});

buttonFR.addEventListener("click", function () {
  if (sectionFR.style.display = "none") {
    sectionIT.style.display = "none";
    sectionES.style.display = "none";
    sectionFR.style.display = "flex";
  }
});

