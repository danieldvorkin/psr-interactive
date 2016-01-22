$(function(){
  $('.pics').find('> div:eq(0)').nextAll().hide;

  $('.col-lg-1 .div-block, .picture-block').on('click', function(){
    var i = $('.col-lg-1 .div-block, .picture-block').index(this);

    $('.div-block').removeClass('active');
    $(this).addClass('active');

    addHide('.pics .active, .content .active, .info .active');
    addActive('.pics > .hide:eq('+i+'), .content > .hide:eq('+i+'), .info .hide:eq('+i+')', i);
  });
});

function addHide(selectors){
  $(selectors).removeClass('active').addClass('hide');
}

function addActive(selectors, i){
  $(selectors).removeClass('hide').addClass('active');
}