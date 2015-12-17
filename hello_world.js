$(document).ready(function () {
    $("#button1").click(function () {
        $("#content1").slideToggle("slow");
        $("#content2").hide();
        $("#content3").hide();
        $("#content4").hide();
        $("#content5").hide();
    });
    $("#button2").click(function () {
        $("#content2").slideToggle("slow");
        $("#content1").hide();
        $("#content3").hide();
        $("#content4").hide();
        $("#content5").hide();
    });
    $("#button3").click(function () {
        $("#content3").slideToggle("slow");
        $("#content1").hide();
        $("#content2").hide();
        $("#content4").hide();
        $("#content5").hide();
    });
    $("#button4").click(function () {
        $("#content4").slideToggle("slow");
        $("#content1").hide();
        $("#content2").hide();
        $("#content3").hide();
        $("#content5").hide();
    });
    $("#button5").click(function () {
        $("#content5").slideToggle("slow");
        $("#content1").hide();
        $("#content2").hide();
        $("#content3").hide();
        $("#content4").hide();
    });
});