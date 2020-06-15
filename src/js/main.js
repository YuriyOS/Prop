//= ../../node_modules/jquery/dist/jquery.min.js
//= ../../node_modules/slick-carousel/slick/slick.min.js
//= ../../node_modules/slick-lightbox/dist/slick-lightbox.min.js


  $(function(){
    $('.plans__slider').slick({
        //   setting-name: setting-value
        arrows: true,
        dots: true,
        dotsClass: 'plans_dots-style',
        
        });


    $('.documents__slider').slick({
        arrows: true,
        dots: false,
        settings: "unslick",
        slidesToShow: 5,
        slidesToScroll: 5,

        responsive: [
          {
            breakpoint: 1144,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              // dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }                  
        ]

        });

        $('.documents__slider').slickLightbox({
          itemSelector        : '.doc__link',
          navigateByKeyboard  : true
        });

        $('.photo__slider').slick({
          arrows: true,
          dots: false,
         dotsClass: 'plans_dots-style',

          settings: "unslick",
          slidesToShow: 5,
          slidesToScroll: 5,
  
          responsive: [
            {
              breakpoint: 1144,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                arrows: true
              }
            },
            // {
            //   breakpoint: 768,
            //   settings: {
            //     slidesToShow: 1,
            //     slidesToScroll: 1
            //   }
            // }                  
          ]
  
          
          });

        $('.photo__slider').slickLightbox({
          itemSelector        : '.photo__link_big-size',
          navigateByKeyboard  : true
        });
        
        $('.plans__slider').slickLightbox({
          itemSelector        : '.plans__link_big-size',
          navigateByKeyboard  : true
        });

        function createModal(sTitle = 'Заполните форму') {
          $('body').prepend(
            '' +
              '<div class="modal">\n' +
              '    <div class="modal__dialog">\n' +
              '        <div class="btn-close"></div>\n' +
              '        <h2 class="heading-style-1">' +
              sTitle +
              '</h2>\n' +
              '        <form class="form modal__form">        \n' +        
              '            <input class="input modal__input main-text" type="text" name="Name" placeholder="Ваше ім\'я..." required><br>\n' +
              '            <input class="input modal__input main-text" type="text" name="E-mail" placeholder="Ваше E-mail..." required><br>\n' +
              '            <input class="input modal__input main-text" type="text" name="Phone" placeholder="Ваш телефон..."><br>\n' +
              '            <button type="submit" class="form__btn style-btn reset-btn">Забронировать скидку</button>\n' +
              '        </form>\n' +
              '        <p class="main-text main-text_white">Ми НЕ передаємо Ваші дані 3-м особам.</p>\n' +
              '    </div>\n' +
              '</div>',
          );
        }

        $('.btn-form').on('click', function (e) {
          createModal($(e.target).data('formTitle'));
      
          $('.modal').fadeIn();
          $('body').addClass('body_fixed');
          $('.modal').on('click', function (e) {
            if (
              !$(e.target).closest('.modal__dialog').length &&
              !$(e.target).is('.modal__dialog')
            ) {
              $('.modal').fadeOut();
              $('.overlay').remove();
              $('.modal').remove();
              $('body').removeClass('body_fixed');
            }
          });
      
          $('.btn-close').on('click', function () {
            $('.modal').fadeOut();
            $('.overlay').remove();
            $('.modal').remove();
            $('body').removeClass('body_fixed');
          });
        });
      
        $(".modal__form").submit(function(e) { //Change
          console.log('sagdgd');
          e.preventDefault();
          var th = $(this);
          $.ajax({
            type: "POST",
            url: 'mail.php',
            // data: data,
            // dataType: 'json',
            success: function () {
                console.log('Success');
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
            }
        });
          return false;
        });
  })
