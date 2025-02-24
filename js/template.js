function PlaceTemp(uri) {
        var PlaceTemplate = document.getElementById("PlaceTemplate");
        var val = uri;
        var req = new XMLHttpRequest();
        req.open("GET", val, false);
        req.send();
        document.body.innerHTML = req.responseText;
}
document.addEventListener("DOMContentLoaded", (event) => {
    PlaceTemp(PlaceTemplate.getAttribute("template"));
});
