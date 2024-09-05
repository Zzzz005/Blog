$(document).ready(function () {
    var offset = $('.nav').offset().top;

    $(window).scroll(function () {
        if ($(window).scrollTop() > offset) {
            $('.nav').addClass('animate');
        } else {
            $('.nav').removeClass('animate');
        }
    });
});