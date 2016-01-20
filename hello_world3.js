$(document).ready(function () {
    var photoId = getUrlParameter('photoid');
    console.log(photoId);
    $.ajax({
        url: "http://jsonplaceholder.typicode.com/photos/" + photoId,
        method: 'GET'
    }).then(function (data) {
        $("#photo").append("<img src =" + data.url + "><p>Album number:" + data.albumId + "</p><p>Photo number:" +
            data.id + "</p><p>Title:" + data.title + "</p>")
    });
});

