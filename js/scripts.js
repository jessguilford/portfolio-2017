var findGallery = function(item) {
  var gallery = $(item).parents('.carousel').attr('id');
  return gallery;
}

$(document).ready(function() {
  $(".navbar-toggle").click(function() {
    $('.navbar-links').slideToggle();
  });

  if ($(window).width() < 992) {
    $(".navbar-links li a").click(function() {
      $('.navbar-links').slideToggle();
    });
  }

  setDivHeight();

  $(".slider-knob").click(function() {
    var thisItem = $(this);

    if ( $(thisItem).hasClass('knob-m') ) {
      var thisType = "m";
    } else if ( $(thisItem).hasClass('knob-t') ) {
      var thisType = "t";
    } else {
      var thisType = "d";
    }

    $(thisItem).addClass('selected');
    $(thisItem).siblings().removeClass('selected');
    var thisGallery = '#' + findGallery(thisItem);
    var thisSlide = $(thisGallery).children('.slide-' + thisType);
    $(thisGallery).find('.slide-' + thisType).addClass('show');
    $(thisGallery).find('.slide-' + thisType).siblings().removeClass('show');
  });

});


$(window).scroll(function() {
  if( $(this).scrollTop() > 110 && $(this).scrollTop() < 160) {
    $('.navbar').hide();
  } else if( $(this).scrollTop() > 160) {
    $('.navbar').fadeIn(1000);
    $('.navbar').addClass('collapsed');
  } else {
    $('.navbar').fadeIn(300);
    $('.navbar').removeClass('collapsed');
  }
});

$(window).resize(function() {
  setDivHeight();
});

function setDivHeight() {
  if($(window).width() > 992) {
    $('.item-description').each(function(i) {
      var h = $(this).css('height');
      $(this).siblings('.item-slider').height(h);
    });
  } else {
    $('.item-slider').height("auto");
  }
}
