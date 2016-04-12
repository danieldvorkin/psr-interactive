$(function(){
  $('.fun').hide();
  $('.base').show();
  $('.fun:first').show();
  $('.base:first').hide();

  $('.picture-block').on('click', function(){
    $('.picture-block').removeClass('selected');
    $('.agent-label').removeClass('selected');

    $('.picture-block .fun').hide();
    $('.picture-block .base').show();

    $(this).addClass('selected');
    $(this).children('.agent-label').addClass('selected');

    $(this).children(".fun").show();
    $(this).children(".base").hide();

    var key = $(this).attr("href").replace("#", "");
    $('.info .active').removeClass('active').addClass('hide');

    $("div[data-id='"+key+"']").removeClass('hide').addClass('active');

    // This needs to fade the content info
    // $("div[data-id='"+key+"']").removeClass('hide').fadeIn("slow", function(){
    //   $(this).addClass('active');
    // });
  });
});