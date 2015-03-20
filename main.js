$(document).ready( function(){
  var $main = $('#main-content');
  var $about = $('#about');
  var $work = $('#work');
  var $contact = $('#contact');
  var $aboutLink = $('#about-link');
  var empty =  function(){ 
    $main.empty();
  };

  var replace = function(link, content){
    link.on('click', function() {
    empty();
    $main.append(content);
    content.fadeIn(500);
    $('ul.navigation').children().click(function(event){ 
      $('ul.navigation li').removeClass('nav__item--selected');
      $(event.target).parent().addClass('nav__item--selected');
      });  
    });
  }

  $main.append($about);
  $about.show();

  replace($aboutLink, $about);

  replace($('#work-link'), $work);

  replace($('#contact-link'), $contact);
});