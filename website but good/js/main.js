$(document).ready( function() {
    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        var divam = 20;
        $("body").css({
            "background-position":"0px -"+scrollTop/divam+"px"     
        });
        $(".red").css({
            "margin-top":"-"+scrollTop+"px"
        });
    });
});
