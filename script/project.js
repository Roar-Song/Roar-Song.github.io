$(document).ready(function() {
    $('.item-blinder').on('click', () => {
        carousel_next(0);
        carousel_next(1);
    });

    $('.pv-item_now').hover(() => {
        $('.item-title-top').filter(':not(:animated)').animate({left: 0}, 100);
        $('.item-title-bottom').filter(':not(:animated)').animate({left: 0}, 100);
    }, () => {
        $('.item-title-top').animate({left: "5px"}, 100);
        $('.item-title-bottom').animate({left: "-5px"}, 100);
    });
});
