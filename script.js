$(".option-img").hover(
    function (e) {
        $("." + e.target.className.split(" ")[1]).addClass('grey');
        $("." + e.target.className.split(" ")[1]).children('button').addClass('show')
    }, // over
    function (e) {
        $("." + e.target.className.split(" ")[1]).removeClass('grey');
        $("." + e.target.className.split(" ")[1]).children('button').removeClass('show')

    } // out
);

$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('._stt').addClass("stt")
    } else {
        $('._stt').removeClass("stt")
    }
});