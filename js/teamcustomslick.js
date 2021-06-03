$('.text_slide').slick({
         slidesToShow: 1,
         slidesToScroll: 1,
         arrows: false,
         fade: true,
         asNavFor: '.slide_img'
     });
     $('.slide_img').slick({
         slidesToShow: 3,
         slidesToScroll: 1,
         asNavFor: '.text_slide',
         arrows: true,
         dots: false,
         centerMode: true,
         centerPadding: '60px',
         focusOnSelect: true
     });