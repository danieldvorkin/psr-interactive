$(function(){
  $('.pics').find('> div:eq(0)').nextAll().hide;

  $('.one.column .div-block').on('click', function(){
    var key = $(this).attr('href').replace("#", "");

    $('.div-block').removeClass('active');
    $(this).addClass('active');

    $('.pics .active, .content .active').removeClass('active').addClass('hide');
    $("div[data-id='"+ key +"']").removeClass('hide').addClass('active');
  });
});