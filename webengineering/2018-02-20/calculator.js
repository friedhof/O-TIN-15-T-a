function add(number) {
    var oldValue = parseInt(document.getElementById("output").value)
    var newValue = oldValue + number;
    document.getElementById("output").value = newValue;
}
