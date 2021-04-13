$(function () {
    $(".tabbox .tab a").mouseover(function () {
        $(this).addClass('on').siblings().removeClass('on');
        var index = $(this).index();
        number = index;
        $('.tabbox .content li').hide();
        $('.tabbox .content li:eq(' + index + ')').show();
    });

    var auto = 1;  //等于1则自动切换，其他任意数字则不自动切换
    if (auto == 1) {
        var number = 0;
        var maxNumber = $('.tabbox .tab a').length;
        function autotab() {
            number++;
            number == maxNumber ? number = 0 : number;
            $('.tabbox .tab a:eq(' + number + ')').addClass('on').siblings().removeClass('on');
            $('.tabbox .content ul li:eq(' + number + ')').show().siblings().hide();
        }
        var tabChange = setInterval(autotab, 3000);
        //鼠标悬停暂停切换
        $('.tabbox').mouseover(function () {
            clearInterval(tabChange);
        });
        $('.tabbox').mouseout(function () {
            tabChange = setInterval(autotab, 3000);
        });
    }
});