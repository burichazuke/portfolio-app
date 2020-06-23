$(document).on('turbolinks:load',function(){
  $('.image__s1').hover(function(){
    var target = $(this);
    setHover= setTimeout(function(){
      $('.active-img_1').removeClass('active-img_1');
      $(target).addClass('active-img_1');
      var parent = target.parent().parent()
      var target2 = parent.find('#card--image_1');
      var id = $('.active-img_1').data("id");
      var width = $('.image').width();
    
      $(target2).animate({"right": id * width + "px", easing:'easeInOutExpo'}); 
    },500)
  },function(){
    clearTimeout(setHover)
  });

  $('.image__s2').hover(function(){
    var target = $(this);
    setHover= setTimeout(function(){
      $('.active-img_2').removeClass('active-img_2');
      $(target).addClass('active-img_2');
      var parent = target.parent().parent()
      var target2 = parent.find('#card--image_2');
      var id = $('.active-img_2').data("id");
      var width = $('.image').width();
    
      $(target2).animate({"right": id * width + "px", easing:'easeInOutExpo'}); 
    },500)
  },function(){
    clearTimeout(setHover)
  });

  $('.image__s3').hover(function(){
    var target = $(this);
    setHover= setTimeout(function(){
      $('.active-img_3').removeClass('active-img_3');
      $(target).addClass('active-img_3');
      var parent = target.parent().parent()
      var target2 = parent.find('#card--image_3');
      var id = $('.active-img_3').data("id");
      var width = $('.image').width();
    
      $(target2).animate({"right": id * width + "px", easing:'easeInOutExpo'}); 
    },500)
  },function(){
    clearTimeout(setHover)
  });
});