window.addEventListener('load', function() {
    var buttons = document.getElementsByTagName("button");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", deleteButtonBumm);
    }
});

function deleteButton(event) {
    var button = event.srcElement;
    var parent = button.parentNode;
    parent.removeChild(button);
}

function deleteButtonBumm(event) {
    var button = event.srcElement;
    var parent = button.parentNode;
    var bumm = document.createElement("img");
    bumm.src = "https://raw.github.com/saintedlama/bumm/master/assets/logo.png";
    bumm.title = "Bumm!";
    bumm.width = 85;
    bumm.height = 14;
    parent.replaceChild(bumm, button);
}
