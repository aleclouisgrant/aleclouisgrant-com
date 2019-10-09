function highlightCard(x) {
    x.children[0].children[0].children[0].style.background = "#EB4A30";
}

function unhighlightCard(x) {
    x.children[0].children[0].children[0].style.background = "#E8E8E8";
}

function displayHeader() {
    var d_header = document.getElementById("desktop-header");
    var m_header = document.getElementById("mobile-header");

    console.log("screen width: " + screen.width);

    if (screen.width < 1000) {
        d_header.style = "display: none;";
        m_header.style = "display: block; padding-top: 50px;";

        console.log("setting mobile header");
    } else {
        d_header.style = "display: normal;";
        m_header.style = "display: none;";

        console.log("setting desktop header");
    }
}

/*
var contactAnim = anime({
    targets: '#line-r-2',
    width: [0, 100],
    duration: 500,
    autoplay: false,
});
*/
//document.querySelector("#contact_button").onclick = contactAnim.play;