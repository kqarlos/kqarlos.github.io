
function getGihubInfo() {

    let username = "kqarlos";
    const queryURL = `https://api.github.com/users/${username}/repos?per_page=100`;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (res) {
        console.log(res);
        for (const el of res) {
            addRepo(el.name)
        }
    });
}

function addRepo(name) {

    var formattedName = name.split("-").join(" ");
    formattedName = formattedName.toUpperCase();


    var row = $("<div>");
    row.addClass("row");
    var repoCol = $("<div>");
    repoCol.addClass("col-6 py-2 font-weight-bold");
    var a1 = $("<a>");
    a1.attr("href", getRepoLink(name));
    a1.attr("target", "_blank")
    a1.text(formattedName + " Repository");

    var liveCol = $("<div>");
    liveCol.addClass("col-6 py-2 font-weight-bold");
    var a2 = $("<a>");
    a2.attr("href", getLivesiteLink(name));
    a2.attr("target", "_blank")
    a2.text(formattedName + " Live Site");

    repoCol.append(a1);
    liveCol.append(a2);
    row.append(repoCol);
    row.append(liveCol);

    $("#repos").append(row);



}

function getLivesiteLink(name) {
    return "https://kqarlos.github.io/" + name;
}

function getRepoLink(name) {
    return "https://github.com/kqarlos/" + name;
}

getGihubInfo();