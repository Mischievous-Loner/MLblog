var today = new Date();

var day = today.getDate();
var month = today.getMonth() + 1;
var year = today.getFullYear();

if (day < 10) {
  day = "0" + day;
}
if (month < 10) {
  month = "0" + month;
}

var out = document.getElementById("dateout");

out.innerHTML = day + "/" + month + "/" + year;

function opennav() {
  document.getElementById("nav").style.display = "block";
  window.scrollTo(0, 0);
}
function closenav() {
  document.getElementById("nav").style.display = "none";
}

var date = new Date();
var nd = date.getFullYear();
document.getElementById("footer").innerHTML =
  "&copy;" + nd + " Mischievous Loner";
