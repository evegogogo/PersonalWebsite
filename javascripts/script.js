document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById("div2").textContent="Document DOCContentLoaded event happend!";
});

window.onload = function() {
    document.getElementById("div1").textContent = "Window.onload event happened!";
}