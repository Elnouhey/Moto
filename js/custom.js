$(document).ready(function(){
  'use strict'
  // Add Remove Active from Nav nav-link
      $('.navbar-nav .nav-item').on('click' , function (){
        $(this).addClass('active').siblings().removeClass('active');
    });
    // case study slideshow
  $('.case-ul li').on('click', function (){
    $(this).addClass('li-active').siblings().removeClass('li-active');
    if ($(this).hasClass('bm')){
      $('.case-inner .test1').addClass('case-active').siblings().removeClass('case-active');
      $('.idea-1').addClass('case-reveal').siblings().removeClass('case-reveal');
    }else if ($(this).hasClass('bom')){
      $('.case-inner .test2').addClass('case-active').siblings().removeClass('case-active');
      $('.idea-2').addClass('case-reveal').siblings().removeClass('case-reveal');
    }else{
      $('.case-inner .test3').addClass('case-active').siblings().removeClass('case-active');
      $('.idea-3').addClass('case-reveal').siblings().removeClass('case-reveal');
    }
  });

  // Shuffel my works
  $('.ul-row li').on('click' , function (){
    $(this).addClass('appear').siblings().removeClass('appear');
    console.log($(this).data('class'));
    if ($(this).data('class') === 'all') {
      $('.moto').show();
    }else {
      $('.moto').hide();
      $($(this).data('class')).show();
    }
  });
// Change color on hover over Pricing table
  $('.price-table').on({
    mouseenter: function() {
      $(this).addClass('emy').siblings().removeClass('emy');
    },
    mouseleave: function() {
      var anca = $('.anca')
      $(this).removeClass('emy');
      anca.addClass('emy');
    }
  });

});

$('.carousel').carousel({
  interval: 9000
});

// close menu item after click
$(document).on('click','.navbar-collapse',function(e) {
    if( $(e.target).is('a:not(".dropdown-toggle")') ) {
        $(this).collapse('hide');
    }
});
//change background of nav Bar on scroll
$(window).scroll(function(){
  var viewport = $('#header').innerHeight()-80;
  var nav = $('.navbar');
  if ($(window).scrollTop() >= viewport ){
    nav.addClass('nav-background');
  }else{
    nav.removeClass('nav-background');
  }

});

$(window).on('hashchange', function (e) {
    'use strict';
    history.replaceState("", document.title, e.originalEvent.oldURL);
});
