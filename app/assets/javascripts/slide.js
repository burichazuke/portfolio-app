$(document).on('turbolinks:load',function(){
  $('.image__s').hover(function(){
    var target = $(this);
    setHover= setTimeout(function(){
      $('.active-img').removeClass('active-img');
      $(target).addClass('active-img');
      var parent = target.parent().parent()
      var target2 = parent.find('.card--image');
      var id = $('.active-img').data("id");
      var width = $('.image').width();
    
      $(target2).animate({"right": id * width + "px", easing:'easeInOutExpo'}); 
    },700)
  },function(){
    clearTimeout(setHover)
  });
});