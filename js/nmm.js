var moves = [
    "Sugar push",
    "Whip",
    "Underarm turn",
    "Left side pass",
    "Right side pass",
    "Open whip"
];

var roles = ["leader's", "follower's"];

var variations = [
    "fold.",
    "turn.",
    "double turn.",
    "drape.",
    "drop.",
    "head duck.",
    "lean.",
    "zouk turn."
];


function generateMove() {
    var moveText = document.getElementById("move-text");
    var roleText = document.getElementById("role-text");
    var variationText = document.getElementById("variation-text");

    moveText.innerText = moves[getRand(moves.length)];
    roleText.innerText = roles[getRand(roles.length)];
    variationText.innerText = variations[getRand(variations.length)];
}

function getRand(length) {

    var min = 0;
    var max = length;

    return Math.floor(Math.random() * (+max - +min)) + +min;
}