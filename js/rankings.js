/*
$(document).ready(function () {
    $.getJSON("rankings_lead.json", make_table)
    $.getJSON("rankings_follow.json", make_table)

});
*/

$("#button_leads").click(function () {
    $.getJSON("data/rankings_lead.json", make_table)
});

$("#button_follows").click(function () {
    $.getJSON("data/rankings_follow.json", make_table)
});

function make_table(rankings) {
    
    var col = [];
    for (var i = 0; i < rankings.length; i++) {
        for (var key in rankings[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }

    var table = document.createElement("table");
    var tr = table.insertRow(-1);

    for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th");
        th.innerHTML = col[i];
        tr.appendChild(th);
    }

    for (var i = 0; i < rankings.length; i++) {
        tr = table.insertRow(-1);

        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = rankings[i][col[j]];
        }
    }

    var container = document.getElementById("table-container");
    container.innerHTML = "";
    container.appendChild(table);

    table.style = "margin: 0 auto; border-spacing: 10px 2px;"
}