$(function () {
    $('.sslide').on('init reInit afterChange', function (e, s, c) {
        $('.sldots span').css({ left: c * 10 + '%' });
        $('.balls').addClass('on');
    });

    $('.sslide').slick({
        slidesToShow: 5,
        centerMode: true,
        arrows: false,
        //dots: true,
        autoplay: true,
        pauseOnHover: false,
    });

    $('.sslide').on('beforeChange', function () {
        $('.balls').removeClass('on');
    });

    $('.bbb').on('click', function () {
        $('.balls').addClass('on');
    });

    $('.to_top').on('click', function () {
        $('html,body').animate({ scrollTop: 0 }, 200);
    });
    $(window).on('scroll', function () {
        var up = $(window).scrollTop();
        if (up > 1200) {
            $('.to_top').fadeIn(1900);
        } else {
            $('.to_top').fadeOut(100);
        }
    });
});
