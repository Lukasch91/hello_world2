$(document).ready(function () {
    $.ajax({
        url: "http://jsonplaceholder.typicode.com/albums",
        method: 'GET'
    }).then(function (data) {
        for (i = 0; i <= data.length; i++) {
            $("#main").append("<table><tr><td>Album Nr."+ i +" </td><td><a href = hello_world2.html?albumid=" + data[i].id + ">" + data[i].title + "</a></td></tr></table>")
        }
    });
});


