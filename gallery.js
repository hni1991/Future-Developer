var active="a0";

$(document).ready(function () {
   $(".smallpic").click(function () {
    var src=$(this).children().eq(0).attr("data");
    $(".smallpic").removeClass("activepic");
    $(this).addClass("activepic");

    console.log($("#"+src));
    $(".carousel-indicators").children().removeClass("active");
    $(".carousel-inner").children().removeClass("active");

    $("#"+src).addClass("active");
    $("#"+src+"img").addClass("active");

});

$('#carouselExampleIndicators').on('slide.bs.carousel', function (e) {
    $co=$(".carousel-inner").children().index(e.relatedTarget);
    $(".smallDad").children().removeClass("activepic");
    $(".smallDad").children().eq($co).addClass("activepic");

  console.log($co);
    })

  $('.carousel').carousel({
    interval: 1500
  })

});
