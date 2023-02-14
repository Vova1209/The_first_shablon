



const list = document.querySelectorAll('.list__item ');
function activeLink(){
  list.forEach((item)=>
   item.classList.remove('active'));
   this.classList.add('active');
}
list.forEach((item)=>
item.addEventListener('click', activeLink));


  

//Клик вне области
$(document).on('click touchstart', function(e){
  if (!$(e.target).is(".select *")){
    $('.select').removeClass('active');
  };
});

//up
$(window).scroll(function(){
  var w=$(window).width();
  if($(window).scrollTop()>50){
    $('#up').fadeIn(300);
  }else{
    $('#up').fadeOut(300);
  }
});
$('#up').click(function(event){
  $('body,html').animate({scrollTop:0},300);
});


$('body').on('click','tab_navitem',function(event){
var eq=$(this).index();
if($(this).hasClass('parent')){
  var eq=$(this).parent().index();
}
if(!$(this).hasClass('active')){
  $(this).closest('.tabs').find('.tab__navitem').removeClass('active');
  $(this).addClass('active');
  $(this).closest('.tabs').find('.tab__item').removeClass('active').eq(eq).addClass('active');
  if($(this).closest('.tabs').find('.slick-slider').lenght>0){
    $(this).closest('.tabs').find('.slick-slider').slick('setPosition');
  }
}
});
$.each($('.spoller.active'), function(index,val){
  $(this).next().show();
});
$('body').on('click','spoller', function(event){
  if ($(this).hasClass('mob') && !isMobile.any()){
    return false;
  }
  if ($(this).hasClass('closeall') && !$(this).hasClass('active')){
    $.each($(this).closest('.spollers').find('spoller'), function(index,val){
      $(this).removeClass('active');
      $(this).next().slideUp(300);
    });
  }
  $(this).toggleClass('active').next().slideToggle(300,function(index,val){
    if($(this).parent().find('slick-slider').lenght>0){
      $(this).parent().find('.slick-slider').slick('setPosition');

    }
  });
  return false;
});
function scrolloptions(){
  var scs=100;
  var mss=50;
  var bns=false;

  if(isMobile.any()){
    scs=10;
    mss=1;
    bns=true;
  }
  var opt={
    cursorcolor:"#fff",
    cursorwidth:"4px",
    background:"",
    autohidemode:true,
    cursoropacitymax: 0.4,
    bouncescroll:bns,
    cursorborderradius: "0px",
    scrollspeed:scs,
    mousescrollstep:mss,
    directionlockdeadzone:0,
    cursorborder: "0px solid #fff", 
  };
  return opt;
}
 function scroll(){
   $('.scroll-body').niceScroll('.scroll-list', scrolloptions());

 }
if(navigator.appVersion.indexOf("Mac")!=-1){
}else{
  if($('.scroll-body').length>0){scroll();}
}
