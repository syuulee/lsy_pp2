$(function () {
    $('.gnb>ul>li>a').on('click', function (e) {
        if ($('.header_gnb').hasClass('on')) {
            e.preventDefault();
            $('.smenu').slideUp();
            $(this).next().stop().slideToggle();
        }
    });

    $('.mopen').on('click', function () {
        $('.header_gnb').toggleClass('on');
    });

    $(window).on('resize', function () {
        $('.header_gnb').removeClass('on');
        $('.smenu').removeAttr('style');
    });

    var contentSlider01 = $('.content-slider').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        pauseOnFocus: false,
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 400,
        //centerMode: true,
        //variableWidth: true,
        //https://cubic-bezier.com/ 베지어 곡선 만들기
        //cssEase:"cubic-bezier(.69,-1.31,.74,1.17)",
        cssEase: 'cubic-bezier(0,0,.58,1)',
    });

    var contentPrev = $('.content01 i.xi-angle-left-thin');
    var contentNext = $('.content01 i.xi-angle-right-thin');

    contentPrev.on('click', function () {
        contentSlider01.slick('slickPrev');
    });
    contentNext.on('click', function () {
        contentSlider01.slick('slickNext');
    });

    var contentItem = $('.content-slider figure');
    contentItem.eq(3).addClass('on');
    contentSlider01.on('afterChange', function (event, slick, current) {
        contentItem
            .eq(current + 3)
            .addClass('on')
            .siblings()
            .removeClass('on');
    });

    $('.tab_menu>li>a').on('click', function (e) {
        e.preventDefault();
        // console.log($(this).parent().index());
        var idx = $(this).parent().index();
        $('.tab_content>li').removeClass('on');
        $('.tab_content>li').eq(idx).addClass('on');
        $('.tab_menu>li').removeClass('on');
        $(this).parent().addClass('on');
    });

    var mainSlider = $('.notice').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        pauseOnFocus: false,
        //useCSS:false,
        vertical: true,
        speed: 900,
        //easing:"easeOutBounce",
        //https://api.jqueryui.com/easings/
        //dots:true,
        //prevArrow:"<i class='xi-angle-left-thin'></i>",
        //nextArrow:"<i class='xi-angle-right-thin'></i>",
    });
});
$(window).on('resize', function () {
    $('gnb').removeClass('on');
    $('.smenu').removeAfter('style');
});
