function placehf() {
   var req1 = new XMLHttpRequest();
   req1.open("GET", "https://assets.magirenko.com/blocks/header.html", false);
   req1.send();
   var header = req1.responseText;

   var req2 = new XMLHttpRequest();
   req2.open("GET", "https://assets.magirenko.com/blocks/footer.html", false);
   req2.send();
   var footer = req2.responseText;

   var downcheckreq = new XMLHttpRequest();
   downcheckreq.open("GET", "https://data.magirenko.com/downcheck", false);
   downcheckreq.send();
   var downcheck = downcheckreq.responseText;

   if (downcheck == "true") {
      var downreq = new XMLHttpRequest();
      downreq.open("GET", "https://assets.magirenko.com/templates/down.html", false);
      downreq.send();
      var down = downreq.responseText;

      document.body.innerHTML = down
   }

   document.getElementById("page").innerHTML = header + document.getElementById("page").innerHTML + footer;
}

document.addEventListener("DOMContentLoaded", (event) => {
    placehf();
})
