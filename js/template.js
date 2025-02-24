document.addEventListener("DOMContentLoaded", (event) => {
   function PlaceTemp(uri) {
        var PlaceTemplate = document.getElementById("PlaceTemplate");
        var val = uri;
        var req = new XMLHttpRequest();
        req.open("GET", val, false);
        req.send();
        document.body.innerHTML = req.responseText;
   }

   PlaceTemp(PlaceTemplate.getAttribute("template"));
})
