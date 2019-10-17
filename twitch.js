
var activeButton = document.getElementsByClassName("button");
for (let i = 0; i < activeButton.length; i++) {
    activeButton[i].onclick = function () {
        var ab = activeButton[0];
        while (ab) {
            if (ab.tagName === "BUTTON") {
                ab.classList.remove("active");
            }
            ab = ab.nextSibling;
        }
        this.classList.add("active");
    };
}




