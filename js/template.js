document.addEventListener("DOMContentLoaded", (event) => {
    var PlaceTemplate = document.getElementById("PlaceTemplate");
    var val = PlaceTemplate.getAttribute("template");
    var req = new XMLHttpRequest();
    req.open("GET", val, false);
    req.send();
    document.body.innerHTML = req.responseText;
})