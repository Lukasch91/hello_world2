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
    var photoId = getUrlParameter('photoid');
    console.log(photoId);
    $.ajax({
        url: "http://jsonplaceholder.typicode.com/photos/" + photoId,
        method: 'GET'
    }).then(function (data) {
        $("#photo").append("<img src =" + data.url + "> <p> Album number:" + data.albumId + "</p><p> Photo number:" +
            data.id + "</p><p> Title:" + data.title + "</p>")
    });
});

