$(document).ready(function () {
    $(window).scroll(function (e) {
        if ($(this).scrollTop() > 6) {
            $(".progress").removeClass("hid");
            $conter = $(this).scrollTop()
            $(".progress-bar").css("width", $conter/3 + "px");

        } else {
            $(".progress").addClass("hid");

        }
    });
    //  click to show about
    $("#btnabout").click(function () {
        $("#about").css("display", "block")
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            displayscroll();
        }
    });


    $('.grt-menu').children().click(function () {
        console.log('here in click' + $(this));
        $('.grt-menu').children().removeClass('active');
        $(this).addClass('active');
    });
});

function displayscroll() {
    $("#about").css("display", "block");
}