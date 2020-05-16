
var slider = (function() {
  var counter = 1,
      duration = 300,
      inProcess = false; // переменная для предотвращения выполения кучи кликов

  var moveSlide = function(container, direction) {
    var items = $('.slider-low-pic', container),
        activeItem = items.filter('.slider-low-pic--active');
        direction = direction == 'down' ? 100 : -100;

    // зацикливание
    if (counter >= items.length) counter = 0;

    var reqItem = items.eq(counter);

    // движение левого слайда сверху вниз и правого слайда снизу вверх
    activeItem.animate({
      'top': direction + '%'
    }, duration);

    reqItem.animate({
      'top': '0'
    }, duration, function() {
      activeItem.removeClass('slider-low-pic--active').css('top', + -direction + '%');
      $(this).addClass('slider-low-pic--active');
      inProcess = false; // предотвращение выполения кучи кликов и накладывания картинок друг на друга
    });

  };

  return {
    init: function() {
      $('.slider-arrow-link--low').on('click', function(e) {
        e.preventDefault();
        if (!inProcess) {
          inProcess = true;
          moveSlide($('.slider-low-left'), 'down');
          moveSlide($('.slider-low-right'), 'up');
        }
        counter++
      });
    }
  }
}());

$(function () {
  slider.init();
});

// ------------------------------------------------------slider end----------------------------

// Слайдер в верхней части

var sliderUp = (function() {
  var counter = 1,
      duration = 300,
      inProcess = false; // переменная для предотвращения выполения кучи кликов

  var moveSlide = function(container) {
    var items = $('.slider-up-pic', container),
        activeItem = items.filter('.slider-up-pic--active');

    // зацикливание
    if (counter >= items.length) counter = 0;

    var reqItem = items.eq(counter);

    // движение левого слайда сверху вниз и правого слайда снизу вверх
    activeItem.animate({
      'left': '100%'
    }, duration);

    reqItem.animate({
      'left': '0'
    }, duration, function() {
      activeItem.removeClass('slider-up-pic--active').css('left', '-100%');
      $(this).addClass('slider-up-pic--active');
      inProcess = false; // предотвращение выполения кучи кликов и накладывания картинок друг на друга
    });

  };

  return {
    init: function() {
      $('.slider-arrow-link--low').on('click', function(e) {
        e.preventDefault();
        if (!inProcess) {
          inProcess = true;
          moveSlide($('.slider-up'));
        }
        counter++
      });
    }
  }
}());

$(function () {
  sliderUp.init();
});


// ---------------------------- Слайдер в верхней части end -------------------------------------------

// ----------------------------- Слайдер в левой части. Название сайта --------------------------------



var sliderLeftName = (function() {
  var counter = 1,
      duration = 300,
      inProcess = false; // переменная для предотвращения выполения кучи кликов

  var moveSlide = function(container) {
    var items = $('.block-subtitle-works', container),
        activeItem = items.filter('.block-subtitle-works--active');

    // зацикливание
    if (counter >= items.length) counter = 0;

    var reqItem = items.eq(counter);

    // движение левого слайда сверху вниз и правого слайда снизу вверх
    activeItem.animate({
      'display': 'none'
    }, duration);

    reqItem.animate({
      'display': 'block'
    }, duration, function() {
      activeItem.removeClass('block-subtitle-works--active');
      $(this).addClass('block-subtitle-works--active');
      inProcess = false; // предотвращение выполения кучи кликов и накладывания картинок друг на друга
    });

  };

  return {
    init: function() {
      $('.slider-arrow-link--low').on('click', function(e) {
        e.preventDefault();
        if (!inProcess) {
          inProcess = true;
          moveSlide($('.about__left--works'));
        }
        counter++
      });
    }
  }
}());

$(function () {
  sliderLeftName.init();
});


// ----------------------------- Слайдер в левой части. Название сайта. End --------------------------------------------

// ----------------------------- Слайдер в левой части. Описание -------------------------------------------------------


var sliderLeftDesc = (function() {
  var counter = 1,
      duration = 300,
      inProcess = false; // переменная для предотвращения выполения кучи кликов

  var moveSlide = function(container) {
    var items = $('.block-subtitle-small-work', container),
        activeItem = items.filter('.block-subtitle-small-work--active');

    // зацикливание
    if (counter >= items.length) counter = 0;

    var reqItem = items.eq(counter);

    // движение левого слайда сверху вниз и правого слайда снизу вверх
    activeItem.animate({
      'display': 'none'
    }, duration);

    reqItem.animate({
      'display': 'block'
    }, duration, function() {
      activeItem.removeClass('block-subtitle-small-work--active');
      $(this).addClass('block-subtitle-small-work--active');
      inProcess = false; // предотвращение выполения кучи кликов и накладывания картинок друг на друга
    });

  };

  return {
    init: function() {
      $('.slider-arrow-link--low').on('click', function(e) {
        e.preventDefault();
        if (!inProcess) {
          inProcess = true;
          moveSlide($('.about__left--works'));
        }
        counter++
      });
    }
  }
}());

$(function () {
  sliderLeftDesc.init();
});

// ----------------------------- Слайдер в левой части. Описание. End --------------------------------------------