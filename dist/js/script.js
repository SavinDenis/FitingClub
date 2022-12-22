

const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu'),
        closeElem = document.querySelector('.menu__close');

        hamburger.addEventListener('click', () => {
            menu.classList.add('active');
        });

        closeElem.addEventListener('click', () =>{
            menu.classList.remove('active');
        });

const counters = document.querySelectorAll('.skills__ratings-counter'),
        lines = document.querySelectorAll('.skills__ratings-line span');

        counters.forEach( (item, i) => {
            lines[i].style.width = item.innerHTML;
        });







$(document).ready(function () {

        new WOW().init();  
        
         /* появление кнопки скрола на верх*/
    $(window).scroll(function () {
        if ($(this).scrollTop() > 800) {
            $('.pageup').fadeIn();

        }
        else {
            $('.pageup').fadeOut();
        }
    });

    /* плавный скролл на верх */

    $("a[href^='#']").click(function () {
        const _href = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
        return false;
    });

     /* модальные окна */

    /* открытие при нажатии на кнопку */

    $('[data-modal=modal__main]').on('click', function () {
        $('.overlay, #modal__main').fadeIn('slow');

    });

    /*   $('[data-modal=modal__order').on('click', function(){
          $('.overlay, #modal__order').fadeIn('slow');
      }); */

    $('[data-modal=modal__order').each(function (i) {
        $(this).on('click', function () {
            $('#modal__order .modal__subtitle').text($('.card__title').eq(i).text());
            $('.overlay, #modal__order').fadeIn('slow');
        })
    });

    /* закрытие крестиком */
    $('.modal__close').on('click', function () {
        $('.overlay, #modal__main, #modal__order, #mini').fadeOut('slow');
    });


     /* отправка писем с сайта  */
     $('form').submit(function (e) {
        e.preventDefault();
        if (!$(this).valid()) {
            return;
        }
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");



            $('form').trigger('reset');
        });
        return false;
    });

});


        