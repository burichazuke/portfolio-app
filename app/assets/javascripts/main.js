$(document).on('turbolinks:load',function(){
  $('#js-profile').on('click',function() {
    const profile = $('#profile').position().top;
  
    $('html, body').animate({
      scrollTop: profile
      }, 500);
  });

  $('#js-skill').on('click',function() {
    const skill = $('#skill').position().top;
  
    $('html, body').animate({
      scrollTop: skill
      }, 500);
  });

  $('#js-works').on('click',function() {
    const works = $('#works').position().top;
  
    $('html, body').animate({
      scrollTop: works
      }, 500);
  });
});
