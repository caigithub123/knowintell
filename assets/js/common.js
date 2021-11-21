
$(function(){
    // get copy right time
    var copy_right_time = new Date().getFullYear();
    $('.footer .cur-time').text(copy_right_time);

    $('.header').on('click', '.menu-icon', function(){
        $('.mobile-menu, .mobile-menu-shade').addClass('show');
    });

    $('.header').on('click', '.mobile-menu .close-menu, .mobile-menu-shade', function(){
        $('.mobile-menu, .mobile-menu-shade').removeClass('show');
    });

});