var link = document.querySelector(".contact-btn");
var popup = document.querySelector(".modal-content");
var close = document.querySelector(".modal-content-close");

var form = popup.querySelector("form");
var login = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");


link.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("modal-content-show");

    login.focus();
});


close.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("modal-content-show");
});


window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        if (popup.classList.contains("modal-content-show")) {
            popup.classList.remove("modal-content-show");
        }
    }
});
