$(document).ready(function() {
    $(window).scroll(function () {
        var screen_h = $(window).height();
        var scroll_h = $(document).scrollTop();
        var header_h = $('.main-header').height();
        if(scroll_h < (screen_h - header_h)) {
            $('body').removeClass('body-about_white');
        }
        else if(scroll_h > (screen_h * 2 - header_h)) {
            $('body').removeClass('body-about_white');
        }
        else if(scroll_h > (screen_h - header_h)) {
            $('body').addClass('body-about_white');
        }
    }); 
});