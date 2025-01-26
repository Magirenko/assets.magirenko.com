document.addEventListener("DOMContentLoaded", (event) => {
    var req1 = new XMLHttpRequest();
req1.open("GET", "/blocks/header.html", false);
req1.send();
var header = req1.responseText;

var req2 = new XMLHttpRequest();
req2.open("GET", "/blocks/footer.html", false);
req2.send();
var footer = req2.responseText;

document.getElementById("page").innerHTML = header + document.getElementById("page").innerHTML + footer;
})