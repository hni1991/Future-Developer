
flag=true;

$(document).scroll(function(){
  
    var offset = $('#zarContainer').offset();
    var top = offset.top;
    var heightOfDiv = $('#zarContainer').outerHeight();
    if($(this).scrollTop()+(window.innerHeight/2)<top){
  $('.thumbnail').css('animation-name','disappear');
  flag=true;

    }
    if($(this).scrollTop()+(window.innerHeight/2)>top){
      // $('.thumbnail').css('animation-name','appear');
      if(flag){loadPage();flag=false;}
      }
      if($(this).scrollTop() > top + heightOfDiv ){
        console.log('here out of the click');
  // $('.thumbnail').css('transform','translateX(-3000px)');
  $('.thumbnail').css('animation-name','disappear');
  flag=true;
      }
});
//  animation for about us
flag1=true;

$(document).scroll(function(){
  
    var offset1 = $('#about').offset();
    var top1 = offset1.top;
    var heightOfDiv1 = $('#about').outerHeight();
    if($(this).scrollTop()+(window.innerHeight/2)<top1){
      console.log("p1");
  $('.progress-h .progress-h-right .progress-h-bar').css('animation','none');
  $('.progress-h.yellow .progress-h-left .progress-h-bar').css('animation','none');
  $('.progress-h.green .progress-h-left .progress-h-bar').css('animation','none');
  $('.progress-h.blue .progress-h-left .progress-h-bar').css('animation','none');
  $('.progress-h.violet .progress-h-left .progress-h-bar').css('animation','none');
  $('.progress-h.orange .progress-h-left .progress-h-bar').css('animation','none');

  flag1=true;

    }
    if($(this).scrollTop()>top1){
      // $('.thumbnail').css('animation-name','appear');
      console.log("p2");

      if(flag1){
  $('.progress-h .progress-h-right .progress-h-bar').css('animation','loading-1 1.8s linear forwards');
  $('.progress-h.yellow .progress-h-left .progress-h-bar').css('animation',' loading-3 1s linear forwards 1.8s');
  $('.progress-h.green .progress-h-left .progress-h-bar').css('animation',' loading-2 1s linear forwards 1.8s');
  $('.progress-h.blue .progress-h-left .progress-h-bar').css('animation',' loading-2 1s linear forwards 1.8s');
  $('.progress-h.violet .progress-h-left .progress-h-bar').css('animation',' loading-2 1s linear forwards 1.8s');
  $('.progress-h.orange .progress-h-left .progress-h-bar').css('animation',' loading-2 1s linear forwards 1.8s');
      }
      if($(this).scrollTop() > top1 + heightOfDiv1 ){
        console.log("p3");

        console.log('here out of the click');
  // $('.thumbnail').css('transform','translateX(-3000px)');
  $('.progress-h .progress-h-right .progress-h-bar').css('animation','none');
  $('.progress-h.yellow .progress-h-left .progress-h-bar').css('animation','none');
  $('.progress-h.green .progress-h-left .progress-h-bar').css('animation','none');
  $('.progress-h.blue .progress-h-left .progress-h-bar').css('animation','none');
  $('.progress-h.violet .progress-h-left .progress-h-bar').css('animation','none');
  $('.progress-h.orange .progress-h-left .progress-h-bar').css('animation','none');
  flag1=true;
      }}
    });
     
var number;
function loadPage(){
  animateOnLoad();
    $('.thumbnail').each(function(index){
     $(this).attr("data-number",index);
     $(this).css("animation-name", "anim"+index);
    });
}
$('.thumbnail').click(function(){
console.log('i am in click')
      number = $(this).attr('data-number');
    $caption = $(this).attr('data-caption');
    $pdf = $(this).attr('data-pdf');
    src = $(this).find('img').attr('src');
  console.log($caption);
    $("#MyGalleryTitle").text($caption);
     $("#mainBodyPDF").attr('data',$pdf);
     $('#bodyImg').attr('src',src);
    $('#MyGallery').modal('show');
});
	
// $('#MyGallery').on('shown.bs.modal',function (e) { 

    $('#rightArrow,#leftArrow').click(function(){
        enableArrows();
        length = $(".thumbnail").length;
        if($(this).attr('id')=='rightArrow'){
        if(number == (length-1)){disableArrow(this);return;}
        number++;

        }
        if($(this).attr('id')=='leftArrow'){
            
        if(number == 0){disableArrow(this);return;}
        number--;

        }
        uploadModal(number);
       });
//  });

function uploadModal(num){
    $elem = $('.thumbnail').eq(num);
    $caption = $elem.attr('data-caption');
    $pdf = $elem.attr('data-pdf');
    src = $elem.find('img').attr('src');
 
    $("#MyGalleryTitle").text($caption);
     $("#mainBodyPDF").attr('data',$pdf);
     $('#bodyImg').attr('src',src);
    $('#MyGallery').modal('show');
}
function disableArrow(elem){
$(elem).css('opacity','0.3');
}
function enableArrows(){
    $('#rightArrow,#leftArrow').css('opacity','1');
}

function animateOnLoad(){
  $('.thumbnail').each(function(index){
    let x = Math.random();
    x = x * 2 - 1;
$(this).css(  'animation-duration',x +'s' );
$.keyframe.define([{

      name: 'anim'+index,
      
      '0%': {
        'left': (1000*x )+'px',
        'top':(3000*x)+'px'
    
      },
     
    
      '100%': {
    
        'left': '0px',
        'top':'0px'
    
      }
    }]);
});
}
function disappearingFotos(){
  $('.thumbnail').each(function(index){
$(this).css(  'animation-duration',"1" );
$.keyframe.define([{

      name: 'disappear',
    
      '0%': {
        'left': '0px',
        'top':'0px'
         
      },
     
    
      '100%': {
    
        'left': '-3000px',
        'top':'-3000px'
    
      
    
      }
    }]);
});
}

$('img').addClass('animated');

$('img').hover(
  function(){ $(this).addClass('swing') },
  function(){ $(this).removeClass('swing') }
)