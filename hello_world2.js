$(document).ready(function () {
    var albumId = getUrlParameter('albumid');
    $.ajax({
        url: "http://jsonplaceholder.typicode.com/photos?albumId=" + albumId,
        method: 'GET'
    }).then(function (data) {
        for (var i = 0; i <= 2; i++) {
            $("#photos").append("<a href = hello_world3.html?photoid=" + data[i].id + "><img src =" + data[i].thumbnailUrl + "></a>")
        }
        $("button").click(function () {
            $("#photos").html("");
            for (var x = i + 1; x <= i + 3; x++) {
                console.log(data[i].id);
                $("#photos").append("<a href = hello_world3.html?photoid=" + data[x].id + "><img src =" + data[x].thumbnailUrl + "></a>")
            }
        })
    });
});









