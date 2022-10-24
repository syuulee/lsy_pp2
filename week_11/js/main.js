$(function () {

    $('.more').on('click', function () {
        $(this).toggleClass('on');
        $('.detail_infor').toggleClass('on');
    });

    $('.tab_menu>li').on('click', function (e) {
        e.preventDefault();
        // console.log($(this).parent().index());
        var idx = $(this).index();
        $('.tab_content>div').removeClass('on');
        $('.tab_content>div').eq(idx).addClass('on');
        // $(this).parent().addClass('on');
    });

    $('.icon').on('click', function () {
        $(this).toggleClass('on');
        $('.total_menu').addClass('on');
    })

});
