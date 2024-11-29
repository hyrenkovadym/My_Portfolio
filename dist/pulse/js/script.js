$(document).ready(function(){
  $('.carousel__inner').slick({
      autoplaySpeed: 2000,
      speed: 1200,
      adaptiveHeight: true,
      prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow_left.png"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow_right.png"></button>',
      responsive: [
        {
          breakpoint: 991,
          settings: {
            autoplaySpeed: 2000,
            arrows: false,
            centerMode: true,


          }
        },
          {
            breakpoint: 768,
            settings: {
              autoplaySpeed: 2000,
              arrows: false,
              centerMode: true,


            }
          },
          {
            breakpoint: 480,
            settings: {
              autoplaySpeed: 2000,
              arrows: false,
              centerMode: true,


            }
          }
        ]

        
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

   
      $('.catalog__link').each(function(i){
        $(this).on('click', function(e) {
          e.preventDefault();
          $('.catalog__item-content').eq(i).toggleClass('catalog__item-content_active');
          $('.catalog__item-list').eq(i).toggleClass('catalog__item-list_active');
        })
      })
    
      $('.catalog__back').each(function(i){
        $(this).on('click', function(e) {
          e.preventDefault();
          $('.catalog__item-content').eq(i).toggleClass('catalog__item-content_active');
          $('.catalog__item-list').eq(i).toggleClass('catalog__item-list_active');
        })
      })

      $('[data-modal=consultation]').on('click', function(){
        $('.overlay, #consultation').fadeIn()
      })

      $('.modal__close').on('click', function(){
        $('.overlay, #consultation, #order, #thanks').fadeOut()
      })

      // $('.button_catalog').on('click', function(){
      //   $('.overlay, #order').fadeIn()
      // })

      $('.button_catalog').each(function(i){
        $(this).on('click', function() {
          $('#order, .modal__descr').text($('.catalog__title').eq(i).text());
          $('.overlay, #consultation').fadeIn()
        })
      })

      function valideForms(form){
        $(form).validate({
          rules:{
            name: {
              required: true,

              
            },
            tel: {
              required: true,
              minlength: 8,

            },
  
            email: {
              required: true,
              email: true
              
            }
        },
  
        messages:{
          name: "Пожалуйста,введите свое имя",
          minlength: jQuery.validator.format("Введити {0} символа!"),
          tel: "Пожалуста введите номер",
          email:{
            required: "Пожалуйста,введите свою почту",
            email:"Неправильно введен адрес почти"
          }
        }
        })
  
      }
      
      valideForms('#consultation-form');
      valideForms('#consultation form');
      valideForms('#order form');

      $('input[name=tel]').mask("+38 (999)-99-999-99");

      $('form').submit(function(e){
        e.preventDefault();

        if(!$(this).valid()){
          return;
        }

        $.ajax({
          type:"POST",
          url: "mailer/smart.php",
          data:$(this).serialize()
        }).done(function(){
          $(this).find("input").val("");
          $('#consultation, #order').fadeOut();
          $('.overlay, #thanks').fadeIn();

          $('form').trigger('reset');
        });
        return false;
      });


      $(window).scroll(function(){
        if($(this).scrollTop()>1600){
          $('.pageup').fadeIn();
        } else{
          $('.pageup').fadeOut();
        }

      })

  });