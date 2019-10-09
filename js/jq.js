/* Fade in on load */
$(document).ready(function () {
    $("#card_row").fadeIn(1000);
});

/* Contact buttons */
$("#contact_button").on("click", function () {
    $("#contact_div").fadeToggle(500);
    $("#contact_div").width('60%');
});
$("#contact_button_mobile").on("click", function () {
    $("#contact_div").fadeToggle(500);
    $("#contact_div").width('90%');
});


/* Project Toggles */
$("#pathfinder-proj-button").on("click", function () {
    $("#card_row").fadeOut(500);
    setTimeout(function () {
        $("#pathfinder-proj").fadeIn(500);
    }, 500);
});

$("#shift_report_tool-proj-button").on("click", function () {
    $("#card_row").fadeOut(500);
    setTimeout(function () {
        $("#shift_report_tool-proj").fadeIn(500);
    }, 500);
});

$("#melody-proj-button").on("click", function () {
    $("#card_row").fadeOut(500);
    setTimeout(function () {
        $("#melody-proj").fadeIn(500);
    }, 500);
});

$("#sms_bingo-proj-button").on("click", function () {
    $("#card_row").fadeOut(500);
    setTimeout(function () {
        $("#sms_bingo-proj").fadeIn(500);
    }, 500);
});


/* Back Button */
$(".back-button").on("click", function () {
    var table_parent = $(this).parentsUntil(".container-fluid").filter("table")[0];
    fadeToHome(table_parent.id);
});

function fadeToHome(name) {
    $("#" + name).fadeOut(500);
    setTimeout(function () {
        $("#card_row").fadeIn(500);
    }, 500);
}