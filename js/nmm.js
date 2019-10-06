var moves = [
    "Sugar push",
    "Whip",
    "Right side pass",
    "Left side pass"
];

var roles = ["leader's", "follower's"];

var variations = [
    "fold.",
    "turn.",
    "double turn.",
    "drape.",
    "drop.",
    "head duck.",
    "lean."
];


function generateMove() {
    var moveText = document.getElementById("move-text");
    var roleText = document.getElementById("role-text");
    var variationText = document.getElementById("variation-text");

    moveText.innerText = moves[getRand(moves.length - 1)];
    roleText.innerText = roles[getRand(roles.length - 1)];
    variationText.innerText = variations[getRand(variations.length - 1)];
}

function getRand(length) {

    var min = 0;
    var max = length;

    return Math.floor(Math.random() * (+max - +min)) + +min;
}