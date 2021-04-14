$(function(){
    var navBar = $("#nav");
    var titleTop = navBar.offset().top;

    $(window).scroll(function(){
        var btop = $(window).scrollTop();
        if (btop > titleTop) {
            navBar.addClass('fix');
        } else {
            navBar.removeClass('fix');
        }
    })
})