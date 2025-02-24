function placehf() {
    var req1 = new XMLHttpRequest();
    req1.open("GET", "https://assets.magirenko.com/blocks/header.html", false);
    req1.send();
    var header = req1.responseText;
    
    var req2 = new XMLHttpRequest();
    req2.open("GET", "https://assets.magirenko.com/blocks/footer.html", false);
    req2.send();
    var footer = req2.responseText;
        
    document.getElementById("page").innerHTML = header + document.getElementById("page").innerHTML + footer;
}

document.addEventListener("DOMContentLoaded", (event) => {
    placehf()
});
