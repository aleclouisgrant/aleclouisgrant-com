function highlightCard(x) {
    x.children[0].children[0].children[0].style.background = "#EB4A30";
}

function unhighlightCard(x) {
    x.children[0].children[0].children[0].style.background = "#E8E8E8";
}


function onResize() {
    console.log("screen.width: " + screen.width);
    var body = document.getElementsByTagName("body");
    

    if (screen.width > 1199) {
        //body[0].style = "overflow-y: hidden;";
    }
    else {
        //body[0].style = "overflow-y: visible;";
    }
    
}