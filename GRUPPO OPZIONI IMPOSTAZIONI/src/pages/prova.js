
function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}


var data;

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

readTextFile("testo.json", function(text){
    data = JSON.parse(text);
    console.log(data);
});

function stamp () {
    data.forEach(dato => {
        console.log(dato)
    });
}










/*
function cambiaLingua () {
    document.getElementById("ita").innerHTML = "Italian";
    document.getElementById("eng").innerHTML = "English";
    document.getElementById("imp").innerHTML = "Settings";
    document.getElementById("ling").innerHTML = "Lenguage";
    document.getElementById("conf").innerHTML = "Confirm";
    document.getElementById("acc").innerHTML = "Accessibility";
    document.getElementById("per").innerHTML = "Path without stairs";
    document.getElementById("sub").innerHTML = "Subtitles";
    document.getElementById("att").innerHTML = "Able/Disable";
    document.getElementById("attdis").innerHTML = "Able or disable subtitles ";
    document.getElementById("funz").innerHTML = "This function allow you to visualize only path without stairs or other architectural barriers";
}*/
