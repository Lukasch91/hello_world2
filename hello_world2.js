var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

$(document).ready(function () {
    var albumId = getUrlParameter('albumid');
    console.log(albumId);
    $.ajax({
        url: "http://jsonplaceholder.typicode.com/photos?albumId=" + albumId,
        method: 'GET'
    }).then(function (data) {
        for (var i = 0; i <= data.length; i++) {
            console.log(i);
            $("#photos").append("<a href = hello_world3.html?photoid=" + data[i].id + "><img src =" + data[i].thumbnailUrl + "></a>")
        }
    });
});



