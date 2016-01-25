$(function(){
  $('.picture-block').on('click', function(){
    $('.picture-block').removeClass('selected');
    $(this).addClass('selected');


    var key = $(this).attr("href").replace("#", "");
    $('.info .active').removeClass('active').addClass('hide');

    $("div[data-id='"+key+"']").removeClass('hide').addClass('active');
  });
});