function highlightCard(x) {
    x.children[0].children[0].children[0].style.background = "#EB4A30";
}

function unhighlightCard(x) {
    x.children[0].children[0].children[0].style.background = "#E8E8E8";
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